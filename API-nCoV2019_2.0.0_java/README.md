# org.wso2.client.API-nCoV2019

## Requirements

Building the API client library requires [Maven](https://maven.apache.org/) to be installed.

## Installation

To install the API client library to your local Maven repository, simply execute:

```shell
mvn install
```

To deploy it to a remote Maven repository instead, configure the settings of the repository and execute:

```shell
mvn deploy
```

Refer to the [official documentation](https://maven.apache.org/plugins/maven-deploy-plugin/usage.html) for more information.

### Maven users

Add this dependency to your project's POM:

```xml
<dependency>
    <groupId>org.wso2</groupId>
    <artifactId>org.wso2.client.API-nCoV2019</artifactId>
    <version>1.0.0</version>
    <scope>compile</scope>
</dependency>
```

### Gradle users

Add this dependency to your project's build file:

```groovy
compile "org.wso2:org.wso2.client.API-nCoV2019:1.0.0"
```

### Others

At first generate the JAR by executing:

    mvn package

Then manually install the following JARs:

* target/org.wso2.client.API-nCoV2019-1.0.0.jar
* target/lib/*.jar

## Getting Started

Please follow the [installation](#installation) instruction and execute the following Java code:

```java

import org.wso2.client.api.*;
import org.wso2.client.api.auth.*;
import org.wso2.client.api.model.*;
import org.wso2.client.api.API_nCoV2019.DefaultApi;

import java.io.File;
import java.util.*;

public class DefaultApiExample {

    public static void main(String[] args) {
        
        DefaultApi apiInstance = new DefaultApi();
        List<String> country = Arrays.asList("country_example"); // List<String> | 
        try {
            ResultCases result = apiInstance.activeGet(country);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DefaultApi#activeGet");
            e.printStackTrace();
        }
    }
}

```

## Documentation for API Endpoints

All URIs are relative to *https://apigw.nubentos.com/t/nubentos.com/ncovapi/2.0.0*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DefaultApi* | [**activeGet**](docs/DefaultApi.md#activeGet) | **GET** /active | Active cases
*DefaultApi* | [**casesGet**](docs/DefaultApi.md#casesGet) | **GET** /cases | Total of active cases.
*DefaultApi* | [**casesPerOneMillionGet**](docs/DefaultApi.md#casesPerOneMillionGet) | **GET** /casesPerOneMillion | Cases per Million
*DefaultApi* | [**criticalGet**](docs/DefaultApi.md#criticalGet) | **GET** /critical | Critical cases
*DefaultApi* | [**deathsGet**](docs/DefaultApi.md#deathsGet) | **GET** /deaths | Total of persons death.
*DefaultApi* | [**deathsPerOneMillionGet**](docs/DefaultApi.md#deathsPerOneMillionGet) | **GET** /deathsPerOneMillion | Deaths per Million
*DefaultApi* | [**recoveredGet**](docs/DefaultApi.md#recoveredGet) | **GET** /recovered | Recovered cases
*DefaultApi* | [**testsPerOneMillionGet**](docs/DefaultApi.md#testsPerOneMillionGet) | **GET** /testsPerOneMillion | Test Per Million
*DefaultApi* | [**todayCasesGet**](docs/DefaultApi.md#todayCasesGet) | **GET** /todayCases | Today cases.
*DefaultApi* | [**todayDeathsGet**](docs/DefaultApi.md#todayDeathsGet) | **GET** /todayDeaths | Today deaths.
*DefaultApi* | [**totalTestsGet**](docs/DefaultApi.md#totalTestsGet) | **GET** /totalTests | Test Totals


## Documentation for Models

 - [ResultCases](docs/ResultCases.md)
 - [ResultCasesCountry](docs/ResultCasesCountry.md)


## Documentation for Authorization

All endpoints do not require authorization.
Authentication schemes defined for the API:

## Recommendation

It's recommended to create an instance of `ApiClient` per thread in a multithreaded environment to avoid any potential issue.

## Author



