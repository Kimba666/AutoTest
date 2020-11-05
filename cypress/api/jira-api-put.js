const fetch = require("node-fetch");

fetch('https://api.adaptavist.io/tm4j/v2/testcycles/{testCycleIdOrKey}', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({

    })
})