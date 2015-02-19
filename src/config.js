var convict = require('convict');

var config = convict({
    sensu: {
        baseUrl: {
            doc:     'The sensu API base url.',
            default: null,
            format:  String,
            env:    'SENSU_API_BASE_URL'
        },
        basicAuthUser: {
            doc:     'The sensu API basic http auth user.',
            default: null,
            format:  String,
            env:    'SENSU_API_BASIC_AUTH_USER'
        },
        basicAuthPassword: {
            doc:     'The sensu API basic http auth password.',
            default: null,
            format:  String,
            env:    'SENSU_API_BASIC_AUTH_PASSWORD'
        }
    }
});

module.exports = config;