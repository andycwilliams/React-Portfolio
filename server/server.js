const axios = require("axios");

axios
  .get(
    "/repos/andycwilliams"
    // {
    // params: {
    //   ID: 12345,
    // },
    // }
  )
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
