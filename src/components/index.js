var components = {
    Events: require('./Events.jsx')
};

require('mozaik/browser')
    .add('sensu.events', components.Events)
;

module.exports = components;