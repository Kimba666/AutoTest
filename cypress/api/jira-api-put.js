const glob = require("glob");
const fetch = require("node-fetch");
const cypressTestResults = glob.sync('/home/runner/work/AutoTest/AutoTest/cypress/results/json/*.json');
console.log(cypressTestResults)
cypressTestResults.forEach((file) => {
    const cypressTestResult = require(file)
        const passOrFail = () => cypressTestResult.results[0].suites[0].tests[0].pass ? 'Pass' : 'Fail';
        const testKey = () => cypressTestResult.results[0].suites[0].title;
    console.log(cypressTestResult.results[0].suites[0].title);
    console.log(passOrFail())

    // Post to Jira TM4J endpoint with results
    fetch('https://api.adaptavist.io/tm4j/v2/testexecutions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwY2E0Njk0OS04NGFjLTMyMzktYjVjOC05ZTE1NzNiMTVkNGUiLCJjb250ZXh0Ijp7ImJhc2VVcmwiOiJodHRwczpcL1wvdGVhbWdsb2JhbHJpc2suYXRsYXNzaWFuLm5ldCIsInVzZXIiOnsiYWNjb3VudElkIjoiNWQzYjRkNzkwZjQ3OGIwYzFiOGU2YjYxIn19LCJpc3MiOiJjb20ua2Fub2FoLnRlc3QtbWFuYWdlciIsImV4cCI6MTYzNjA2MTQ5NywiaWF0IjoxNjA0NTI1NDk3fQ.m0RPKzCRd28_t3QokE_IWC4Wh3mxQthYUE3sOyplTAY'
        },
        body: JSON.stringify({
            projectKey: 'D1',
            testCaseKey: cypressTestResult.results[0].suites[0].title,
            testCycleKey: cypressTestResult.results[0].suites[0].tests[0].title,
            statusName: passOrFail(),
            executionTime: cypressTestResult.results[0].suites[0].title[0].duration,
            executedById: '5d3b4d790f478b0c1b8e6b61',
            comment: `${testKey()}: ${passOrFail()}`
        })

        // Log data or error post run
    }).then(res => res.json()).then(data => console.log(data)).catch(error => console.log(error))
    }
)