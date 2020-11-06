const fetch = require("node-fetch");
const cypressTestResult = require('../results/json/mochawesome.json')
const passOrFail = () => cypressTestResult.results[0].suites[0].tests[0].pass ? 'Pass' : 'Fail';

    // Display Test name and result verdict
console.log(cypressTestResult.results[0].suites[0].title);
console.log(passOrFail())


    // Hit Jira TM4J API endpoint to update test execution
fetch('https://api.adaptavist.io/tm4j/v2/testexecutions', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwY2E0Njk0OS04NGFjLTMyMzktYjVjOC05ZTE1NzNiMTVkNGUiLCJjb250ZXh0Ijp7ImJhc2VVcmwiOiJodHRwczpcL1wvdGVhbWdsb2JhbHJpc2suYXRsYXNzaWFuLm5ldCIsInVzZXIiOnsiYWNjb3VudElkIjoiNWQzYjRkNzkwZjQ3OGIwYzFiOGU2YjYxIn19LCJpc3MiOiJjb20ua2Fub2FoLnRlc3QtbWFuYWdlciIsImV4cCI6MTYzNjA2MTQ5NywiaWF0IjoxNjA0NTI1NDk3fQ.m0RPKzCRd28_t3QokE_IWC4Wh3mxQthYUE3sOyplTAY`
    },
    body: JSON.stringify({
        projectKey: 'TEST',
        testCaseKey: cypressTestResult.results[0].suites[0].title,
        testCycleKey: cypressTestResult.results[0].suites[0].tests[0].title,
        statusName: passOrFail()
    })

    // Log data or error post run
}).then(res => res.json()).then(data => console.log(data)).catch(error => console.log(error))