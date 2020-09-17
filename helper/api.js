const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const query = `
    query {
        getEventById(id:"5c027a215b19282da64c1cb5"){
            registration{
                name
                type
            }
        }
  }`;

fetch('https://api.sibiti.co.id/graphql', {
    method: 'POST',
    body: JSON.stringify({query}),
}).then(res => res.text())
  .then(body => console.log(body)) // {"data":{"repository":{"issues":{"totalCount":247}}}}
  .catch(error => console.error(error));