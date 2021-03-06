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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'org.wso2.client.model.API-nCoV2019/ResultCases', 'org.wso2.client.model.API-nCoV2019/ResultCasesCountry', 'org.wso2.client.api.API-nCoV2019/DefaultApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./org.wso2.client.model.API-nCoV2019/ResultCases'), require('./org.wso2.client.model.API-nCoV2019/ResultCasesCountry'), require('./org.wso2.client.api.API-nCoV2019/DefaultApi'));
  }
}(function(ApiClient, ResultCases, ResultCasesCountry, DefaultApi) {
  'use strict';

  /**
   * nCoV_2019_API_provides_information_related_with_the_case_of_pneumonia_associated_with_the_COVID_19_coronavirus___The_data_we_provide_is_collected_from_World_Health_Organization__WHO_the_US_Centers_for_Disease_Control_and_Prevention__CDC_the_Chinese_Centre_for_Disease_Control_and_Prevention__ECDC_Chinas_National_Health_Commission_and_Chinese_website_DXY_which_provides_regional_case_estimates_faster_than_the_national_level_reporting_organizations_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var ApiNCoV2019 = require('index'); // See note below*.
   * var xxxSvc = new ApiNCoV2019.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new ApiNCoV2019.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new ApiNCoV2019.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new ApiNCoV2019.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The ResultCases model constructor.
     * @property {module:org.wso2.client.model.API-nCoV2019/ResultCases}
     */
    ResultCases: ResultCases,
    /**
     * The ResultCasesCountry model constructor.
     * @property {module:org.wso2.client.model.API-nCoV2019/ResultCasesCountry}
     */
    ResultCasesCountry: ResultCasesCountry,
    /**
     * The DefaultApi service constructor.
     * @property {module:org.wso2.client.api.API-nCoV2019/DefaultApi}
     */
    DefaultApi: DefaultApi
  };

  return exports;
}));
