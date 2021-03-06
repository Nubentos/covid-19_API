# api_n_co_v2019

ApiNCoV2019 - JavaScript client for api_n_co_v2019
nCoV 2019 API provides information related with the case of pneumonia associated with the COVID-19 coronavirus.  The data we provide is collected from World Health Organization (WHO), the US Centers for Disease Control and Prevention (CDC), the Chinese Centre for Disease Control and Prevention (ECDC), China’s National Health Commission, and Chinese website DXY which provides regional case estimates faster than the national level reporting organizations.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install api_n_co_v2019 --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your api_n_co_v2019 from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('api_n_co_v2019')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ApiNCoV2019 = require('api_n_co_v2019');

var api = new ApiNCoV2019.DefaultApi()

var opts = { 
  'country': ["country_example"] // {[String]} 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.activeGet(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://gateway.nubentos.com/nubentos.com/ncovapi/2.0.0*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ApiNCoV2019.DefaultApi* | [**activeGet**](docs/DefaultApi.md#activeGet) | **GET** /active | Active cases
*ApiNCoV2019.DefaultApi* | [**casesGet**](docs/DefaultApi.md#casesGet) | **GET** /cases | Total of active cases.
*ApiNCoV2019.DefaultApi* | [**casesPerOneMillionGet**](docs/DefaultApi.md#casesPerOneMillionGet) | **GET** /casesPerOneMillion | Cases per Million
*ApiNCoV2019.DefaultApi* | [**criticalGet**](docs/DefaultApi.md#criticalGet) | **GET** /critical | Critical cases
*ApiNCoV2019.DefaultApi* | [**deathsGet**](docs/DefaultApi.md#deathsGet) | **GET** /deaths | Total of persons death.
*ApiNCoV2019.DefaultApi* | [**deathsPerOneMillionGet**](docs/DefaultApi.md#deathsPerOneMillionGet) | **GET** /deathsPerOneMillion | Deaths per Million
*ApiNCoV2019.DefaultApi* | [**recoveredGet**](docs/DefaultApi.md#recoveredGet) | **GET** /recovered | Recovered cases
*ApiNCoV2019.DefaultApi* | [**testsPerOneMillionGet**](docs/DefaultApi.md#testsPerOneMillionGet) | **GET** /testsPerOneMillion | Test Per Million
*ApiNCoV2019.DefaultApi* | [**todayCasesGet**](docs/DefaultApi.md#todayCasesGet) | **GET** /todayCases | Today cases.
*ApiNCoV2019.DefaultApi* | [**todayDeathsGet**](docs/DefaultApi.md#todayDeathsGet) | **GET** /todayDeaths | Today deaths.
*ApiNCoV2019.DefaultApi* | [**totalTestsGet**](docs/DefaultApi.md#totalTestsGet) | **GET** /totalTests | Test Totals


## Documentation for Models

 - [ApiNCoV2019.ResultCases](docs/ResultCases.md)
 - [ApiNCoV2019.ResultCasesCountry](docs/ResultCasesCountry.md)


## Documentation for Authorization

 All endpoints do not require authorization.

