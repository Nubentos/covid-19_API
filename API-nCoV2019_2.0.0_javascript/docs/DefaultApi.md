# ApiNCoV2019.DefaultApi

All URIs are relative to *https://apigw.nubentos.com/t/nubentos.com/ncovapi/2.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activeGet**](DefaultApi.md#activeGet) | **GET** /active | Active cases
[**casesGet**](DefaultApi.md#casesGet) | **GET** /cases | Total of active cases.
[**casesPerOneMillionGet**](DefaultApi.md#casesPerOneMillionGet) | **GET** /casesPerOneMillion | Cases per Million
[**criticalGet**](DefaultApi.md#criticalGet) | **GET** /critical | Critical cases
[**deathsGet**](DefaultApi.md#deathsGet) | **GET** /deaths | Total of persons death.
[**deathsPerOneMillionGet**](DefaultApi.md#deathsPerOneMillionGet) | **GET** /deathsPerOneMillion | Deaths per Million
[**recoveredGet**](DefaultApi.md#recoveredGet) | **GET** /recovered | Recovered cases
[**testsPerOneMillionGet**](DefaultApi.md#testsPerOneMillionGet) | **GET** /testsPerOneMillion | Test Per Million
[**todayCasesGet**](DefaultApi.md#todayCasesGet) | **GET** /todayCases | Today cases.
[**todayDeathsGet**](DefaultApi.md#todayDeathsGet) | **GET** /todayDeaths | Today deaths.
[**totalTestsGet**](DefaultApi.md#totalTestsGet) | **GET** /totalTests | Test Totals


<a name="activeGet"></a>
# **activeGet**
> ResultCases activeGet(opts)

Active cases

Active cases

### Example
```javascript
var ApiNCoV2019 = require('api_n_co_v2019');

var apiInstance = new ApiNCoV2019.DefaultApi();

var opts = { 
  'country': ["country_example"] // [String] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.activeGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | [**[String]**](String.md)|  | [optional] 

### Return type

[**ResultCases**](ResultCases.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="casesGet"></a>
# **casesGet**
> ResultCases casesGet(opts)

Total of active cases.

Summary of suspected and confirmed

### Example
```javascript
var ApiNCoV2019 = require('api_n_co_v2019');

var apiInstance = new ApiNCoV2019.DefaultApi();

var opts = { 
  'country': ["country_example"] // [String] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.casesGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | [**[String]**](String.md)|  | [optional] 

### Return type

[**ResultCases**](ResultCases.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="casesPerOneMillionGet"></a>
# **casesPerOneMillionGet**
> ResultCases casesPerOneMillionGet(opts)

Cases per Million

Cases per Million

### Example
```javascript
var ApiNCoV2019 = require('api_n_co_v2019');

var apiInstance = new ApiNCoV2019.DefaultApi();

var opts = { 
  'country': ["country_example"] // [String] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.casesPerOneMillionGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | [**[String]**](String.md)|  | [optional] 

### Return type

[**ResultCases**](ResultCases.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="criticalGet"></a>
# **criticalGet**
> ResultCases criticalGet(opts)

Critical cases

Critical cases

### Example
```javascript
var ApiNCoV2019 = require('api_n_co_v2019');

var apiInstance = new ApiNCoV2019.DefaultApi();

var opts = { 
  'country': ["country_example"] // [String] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.criticalGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | [**[String]**](String.md)|  | [optional] 

### Return type

[**ResultCases**](ResultCases.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deathsGet"></a>
# **deathsGet**
> ResultCases deathsGet(opts)

Total of persons death.

Total of person death because a direct relation ship with 2019 - NCoV

### Example
```javascript
var ApiNCoV2019 = require('api_n_co_v2019');

var apiInstance = new ApiNCoV2019.DefaultApi();

var opts = { 
  'country': ["country_example"] // [String] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deathsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | [**[String]**](String.md)|  | [optional] 

### Return type

[**ResultCases**](ResultCases.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deathsPerOneMillionGet"></a>
# **deathsPerOneMillionGet**
> ResultCases deathsPerOneMillionGet(opts)

Deaths per Million

Deaths per Million

### Example
```javascript
var ApiNCoV2019 = require('api_n_co_v2019');

var apiInstance = new ApiNCoV2019.DefaultApi();

var opts = { 
  'country': ["country_example"] // [String] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deathsPerOneMillionGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | [**[String]**](String.md)|  | [optional] 

### Return type

[**ResultCases**](ResultCases.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="recoveredGet"></a>
# **recoveredGet**
> ResultCases recoveredGet(opts)

Recovered cases

Recovered cases

### Example
```javascript
var ApiNCoV2019 = require('api_n_co_v2019');

var apiInstance = new ApiNCoV2019.DefaultApi();

var opts = { 
  'country': ["country_example"] // [String] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.recoveredGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | [**[String]**](String.md)|  | [optional] 

### Return type

[**ResultCases**](ResultCases.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="testsPerOneMillionGet"></a>
# **testsPerOneMillionGet**
> ResultCases testsPerOneMillionGet(opts)

Test Per Million

Test Per Million

### Example
```javascript
var ApiNCoV2019 = require('api_n_co_v2019');

var apiInstance = new ApiNCoV2019.DefaultApi();

var opts = { 
  'country': ["country_example"] // [String] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.testsPerOneMillionGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | [**[String]**](String.md)|  | [optional] 

### Return type

[**ResultCases**](ResultCases.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="todayCasesGet"></a>
# **todayCasesGet**
> ResultCasesCountry todayCasesGet(opts)

Today cases.

Number of registered cases today

### Example
```javascript
var ApiNCoV2019 = require('api_n_co_v2019');

var apiInstance = new ApiNCoV2019.DefaultApi();

var opts = { 
  'country': ["country_example"] // [String] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.todayCasesGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | [**[String]**](String.md)|  | [optional] 

### Return type

[**ResultCasesCountry**](ResultCasesCountry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="todayDeathsGet"></a>
# **todayDeathsGet**
> ResultCases todayDeathsGet(opts)

Today deaths.

Number of deaths today

### Example
```javascript
var ApiNCoV2019 = require('api_n_co_v2019');

var apiInstance = new ApiNCoV2019.DefaultApi();

var opts = { 
  'country': ["country_example"] // [String] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.todayDeathsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | [**[String]**](String.md)|  | [optional] 

### Return type

[**ResultCases**](ResultCases.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="totalTestsGet"></a>
# **totalTestsGet**
> ResultCases totalTestsGet(opts)

Test Totals

Tests total

### Example
```javascript
var ApiNCoV2019 = require('api_n_co_v2019');

var apiInstance = new ApiNCoV2019.DefaultApi();

var opts = { 
  'country': ["country_example"] // [String] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.totalTestsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | [**[String]**](String.md)|  | [optional] 

### Return type

[**ResultCases**](ResultCases.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

