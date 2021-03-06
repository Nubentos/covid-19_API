/**
 * API-nCoV2019
 * nCoV 2019 API provides information related with the case of pneumonia associated with the COVID-19 coronavirus.  The data we provide is collected from World Health Organization (WHO), the US Centers for Disease Control and Prevention (CDC), the Chinese Centre for Disease Control and Prevention (ECDC), China’s National Health Commission, and Chinese website DXY which provides regional case estimates faster than the national level reporting organizations.
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ApiNCoV2019);
  }
}(this, function(expect, ApiNCoV2019) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ApiNCoV2019.ResultCasesCountry();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ResultCasesCountry', function() {
    it('should create an instance of ResultCasesCountry', function() {
      // uncomment below and update the code to test ResultCasesCountry
      //var instane = new ApiNCoV2019.ResultCasesCountry();
      //expect(instance).to.be.a(ApiNCoV2019.ResultCasesCountry);
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instane = new ApiNCoV2019.ResultCasesCountry();
      //expect(instance).to.be();
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instane = new ApiNCoV2019.ResultCasesCountry();
      //expect(instance).to.be();
    });

  });

}));
