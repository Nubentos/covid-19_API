'use strict';

exports.activeGET = function(args, res, next) {
  /**
   * Active cases
   * Active cases
   *
   * country List  (optional)
   * returns resultCases
   **/
  var examples = {};
  examples['application/json'] = {
  "date" : "2020-04-10T17:01:40.000Z",
  "data" : 2425
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.casesGET = function(args, res, next) {
  /**
   * Total of active cases.
   * Summary of suspected and confirmed
   *
   * country List  (optional)
   * returns resultCases
   **/
  var examples = {};
  examples['application/json'] = {
  "date" : "2020-04-10T17:01:40.000Z",
  "data" : 2425
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.casesPerOneMillionGET = function(args, res, next) {
  /**
   * Cases per Million
   * Cases per Million
   *
   * country List  (optional)
   * returns resultCases
   **/
  var examples = {};
  examples['application/json'] = {
  "date" : "2020-04-10T17:01:40.000Z",
  "data" : 2425
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.criticalGET = function(args, res, next) {
  /**
   * Critical cases
   * Critical cases
   *
   * country List  (optional)
   * returns resultCases
   **/
  var examples = {};
  examples['application/json'] = {
  "date" : "2020-04-10T17:01:40.000Z",
  "data" : 2425
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.deathsGET = function(args, res, next) {
  /**
   * Total of persons death.
   * Total of person death because a direct relation ship with 2019 - NCoV
   *
   * country List  (optional)
   * returns resultCases
   **/
  var examples = {};
  examples['application/json'] = {
  "date" : "2020-04-10T17:01:40.000Z",
  "data" : 2425
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.deathsPerOneMillionGET = function(args, res, next) {
  /**
   * Deaths per Million
   * Deaths per Million
   *
   * country List  (optional)
   * returns resultCases
   **/
  var examples = {};
  examples['application/json'] = {
  "date" : "2020-04-10T17:01:40.000Z",
  "data" : 2425
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.recoveredGET = function(args, res, next) {
  /**
   * Recovered cases
   * Recovered cases
   *
   * country List  (optional)
   * returns resultCases
   **/
  var examples = {};
  examples['application/json'] = {
  "date" : "2020-04-10T17:01:40.000Z",
  "data" : 2425
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.testsPerOneMillionGET = function(args, res, next) {
  /**
   * Test Per Million
   * Test Per Million
   *
   * country List  (optional)
   * returns resultCases
   **/
  var examples = {};
  examples['application/json'] = {
  "date" : "2020-04-10T17:01:40.000Z",
  "data" : 2425
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.todayCasesGET = function(args, res, next) {
  /**
   * Today cases.
   * Number of registered cases today
   *
   * country List  (optional)
   * returns resultCasesCountry
   **/
  var examples = {};
  examples['application/json'] = {
  "date" : "2020-04-10T17:01:40.000Z",
  "data" : 157053,
  "country" : "Spain"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.todayDeathsGET = function(args, res, next) {
  /**
   * Today deaths.
   * Number of deaths today
   *
   * country List  (optional)
   * returns resultCases
   **/
  var examples = {};
  examples['application/json'] = {
  "date" : "2020-04-10T17:01:40.000Z",
  "data" : 2425
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.totalTestsGET = function(args, res, next) {
  /**
   * Test Totals
   * Tests total
   *
   * country List  (optional)
   * returns resultCases
   **/
  var examples = {};
  examples['application/json'] = {
  "date" : "2020-04-10T17:01:40.000Z",
  "data" : 2425
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

