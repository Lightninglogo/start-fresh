module.exports = {
    "env":{
        "browser":true,
        "ess":true
    },
    "extends":"eslint:recommended",
    "globals": {
        "Atomic":"readonly"
    },
    "parserOption":{
        "ecmaVersion":2018,
        "sourceType":"module"
    },
    "rules":{
        'no-unused-vars':'warn',
    },
};