/**
 * Logical processing function
 * */ 

module.exports = {
    /**
     * @function convert array to object
     * */ 
    arrayToObject: function (arr) {
        var rv = {};
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] !== undefined) {
                rv[i] = arr[i];
            }
        }
        return rv;
    },
    /**
     * @function convert object to array
     * */ 
    objectToArray: function (obj) {
        const objArray = Object.entries(obj);
        objArray.forEach(([key, value]) => {
            return {key , value};
        });
    }, 
    /**
     * @function convert array to json
     * */ 
    arrayToJson: function (arr) { 
        return JSON.stringify(arr);
    },
    /**
     * @function capitalize first letter
     * */ 
    stringUpperCase: function(string) {
        return string.ToUpperCase();
    }
}