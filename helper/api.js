const axios = require("axios")
axios({
  url: 'https://api.sibiti.co.id/graphql',
  method: 'post',
  data: {
    query: `
      query query {
        getEventById(id:"5c027a215b19282da64c1cb5"){
            registration{
                name
                type      
            }
        }
      }
      `
  }
}).then((result) => {
   const ambil = result.data.data.getEventById.registration;
    console.log(ambil);
});