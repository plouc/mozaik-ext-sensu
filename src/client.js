var request = require('superagent');
var chalk   = require('chalk');
var config  = require('./config');
require('superagent-bluebird-promise');

/**
 * @param {Mozaik} mozaik
 */
var client = function (mozaik) {
    mozaik.loadApiConfig(config);

    function buildEndpointCall(endPoint) {
        return function () {
            var url = config.get('sensu.baseUrl') + '/api/' + endPoint;

            mozaik.logger.info(chalk.yellow(`[sensu] fetching ${ url }`));

            return request.get(url)
                .auth(
                    config.get('sensu.basicAuthUser'),
                    config.get('sensu.basicAuthPassword')
                )
                .promise()
                .then(function (res) {
                    return res.body;
                })
                .catch(function (e) {
                    mozaik.logger.error(chalk.red(`[sensu] ${ e.message }`));
                })
            ;
        };
    }

    return {
        clients: buildEndpointCall('clients'),
        checks:  buildEndpointCall('checks'),
        events:  buildEndpointCall('events')
    };
};

module.exports = client;