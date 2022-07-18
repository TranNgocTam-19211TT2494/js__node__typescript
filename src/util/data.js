module.exports = {
    mutipleApiToObject: function (api) { //arrays
        return api.map(api => api.toObject());
    },
    ApiToObject: function (api) {
        return api ? api.toObject() : api;
    }
}