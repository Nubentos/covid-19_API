'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.activeGET = function activeGET (req, res, next) {
  Default.activeGET(req.swagger.params, res, next);
};

module.exports.casesGET = function casesGET (req, res, next) {
  Default.casesGET(req.swagger.params, res, next);
};

module.exports.casesPerOneMillionGET = function casesPerOneMillionGET (req, res, next) {
  Default.casesPerOneMillionGET(req.swagger.params, res, next);
};

module.exports.criticalGET = function criticalGET (req, res, next) {
  Default.criticalGET(req.swagger.params, res, next);
};

module.exports.deathsGET = function deathsGET (req, res, next) {
  Default.deathsGET(req.swagger.params, res, next);
};

module.exports.deathsPerOneMillionGET = function deathsPerOneMillionGET (req, res, next) {
  Default.deathsPerOneMillionGET(req.swagger.params, res, next);
};

module.exports.recoveredGET = function recoveredGET (req, res, next) {
  Default.recoveredGET(req.swagger.params, res, next);
};

module.exports.testsPerOneMillionGET = function testsPerOneMillionGET (req, res, next) {
  Default.testsPerOneMillionGET(req.swagger.params, res, next);
};

module.exports.todayCasesGET = function todayCasesGET (req, res, next) {
  Default.todayCasesGET(req.swagger.params, res, next);
};

module.exports.todayDeathsGET = function todayDeathsGET (req, res, next) {
  Default.todayDeathsGET(req.swagger.params, res, next);
};

module.exports.totalTestsGET = function totalTestsGET (req, res, next) {
  Default.totalTestsGET(req.swagger.params, res, next);
};
