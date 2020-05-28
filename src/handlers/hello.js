'use strict';

const axios = require('axios');

module.exports.sayHello = async function(context, req) {
  const ras_pi = 'http://123.123.123.123:4000'
  axios({
    url: ras_pi + '/remote/on_swing',
    method: 'get'
  }).then(function(res) {
    context.res = {
      // status: 200, /* Defaults to 200 */
      body: 'Response ' + res.body,
    };
  });
};
