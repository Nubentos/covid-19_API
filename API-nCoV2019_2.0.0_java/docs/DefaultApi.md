# DefaultApi

All URIs are relative to *https://gateway.nubentos.com/nubentos.com/ncovapi/2.0.0*

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
> ResultCases activeGet(country)

Active cases

Active cases

### Example
```java
// Import classes:
//import org.wso2.client.api.ApiException;
//import org.wso2.client.api.API_nCoV2019.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
List<String> country = Arrays.asList("country_example"); // List<String> | 
try {
    ResultCases result = apiInstance.activeGet(country);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#activeGet");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | [**List&lt;String&gt;**](String.md)|  | [optional] [enum: World, USA, Spain, Italy, UK, France, Germany, Turkey, Russia, Iran, Brazil, Canada, Belgium, Netherlands, Peru, India, Switzerland, Portugal, Ecuador, Saudi Arabia, Sweden, Ireland, Mexico, Pakistan, Singapore, Chile, Israel, Austria, Belarus, Japan, Qatar, Poland, UAE, Romania, S. Korea, Ukraine, Indonesia, Denmark, Serbia, Philippines, Norway, Czechia, Bangladesh, Dominican Republic, Australia, Colombia, Panama, Malaysia, South Africa, Egypt, Finland, Morocco, Argentina, Kuwait, Algeria, Moldova, Luxembourg, Kazakhstan, Bahrain, Thailand, Hungary, Greece, Oman, Afghanistan, Iraq, Croatia, Ghana, Armenia, Uzbekistan, Nigeria, Cameroon, Azerbaijan, Iceland, Bosnia and Herzegovina, Estonia, Bulgaria, Cuba, Guinea, New Zealand, North Macedonia, Slovenia, Slovakia, Lithuania, Ivory Coast, Bolivia, Djibouti, Hong Kong, Tunisia, Senegal, Latvia, Cyprus, Albania, Honduras, Kyrgyzstan, Andorra, Lebanon, Costa Rica, Niger, Diamond Princess, Sri Lanka, Burkina Faso, Uruguay, Somalia, Guatemala, San Marino, Georgia, Mayotte, Channel Islands, DRC, Mali, Tanzania, Maldives, Malta, Jordan, Sudan, Taiwan, Réunion, Kenya, Jamaica, El Salvador, Palestine, Mauritius, Venezuela, Montenegro, Isle of Man, Equatorial Guinea, Gabon, Vietnam, Paraguay, Rwanda, Congo, Guinea-Bissau, Faeroe Islands, Martinique, Guadeloupe, Myanmar, Gibraltar, Liberia, Brunei, Ethiopia, Madagascar, French Guiana, Sierra Leone, Cambodia, Cabo Verde, Togo, Trinidad and Tobago, Bermuda, Zambia, Aruba, Eswatini, Monaco, Uganda, Guyana, Liechtenstein, Barbados, Bahamas, Haiti, Mozambique, Sint Maarten, Chad, Cayman Islands, Benin, Libya, French Polynesia, Nepal, CAR, Macao, Syria, Zimbabwe, Eritrea, Saint Martin, Mongolia, Malawi, South Sudan, Angola, Antigua and Barbuda, Timor-Leste, Botswana, Grenada, Laos, Belize, Fiji, New Caledonia, Saint Lucia, Curaçao, Dominica, Namibia, St. Vincent Grenadines, Saint Kitts and Nevis, Tajikistan, Nicaragua, Sao Tome and Principe, Falkland Islands, Turks and Caicos, Burundi, Gambia, Montserrat, Greenland, Vatican City, Seychelles, Suriname, MS Zaandam, Mauritania, Papua New Guinea, Bhutan, Yemen, British Virgin Islands, St. Barth, Western Sahara, Caribbean Netherlands, Anguilla, Comoros, Saint Pierre Miquelon, China]

### Return type

[**ResultCases**](ResultCases.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="casesGet"></a>
# **casesGet**
> ResultCases casesGet(country)

Total of active cases.

Summary of suspected and confirmed

### Example
```java
// Import classes:
//import org.wso2.client.api.ApiException;
//import org.wso2.client.api.API_nCoV2019.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
List<String> country = Arrays.asList("country_example"); // List<String> | 
try {
    ResultCases result = apiInstance.casesGet(country);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#casesGet");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | [**List&lt;String&gt;**](String.md)|  | [optional] [enum: World, USA, Spain, Italy, UK, France, Germany, Turkey, Russia, Iran, Brazil, Canada, Belgium, Netherlands, Peru, India, Switzerland, Portugal, Ecuador, Saudi Arabia, Sweden, Ireland, Mexico, Pakistan, Singapore, Chile, Israel, Austria, Belarus, Japan, Qatar, Poland, UAE, Romania, S. Korea, Ukraine, Indonesia, Denmark, Serbia, Philippines, Norway, Czechia, Bangladesh, Dominican Republic, Australia, Colombia, Panama, Malaysia, South Africa, Egypt, Finland, Morocco, Argentina, Kuwait, Algeria, Moldova, Luxembourg, Kazakhstan, Bahrain, Thailand, Hungary, Greece, Oman, Afghanistan, Iraq, Croatia, Ghana, Armenia, Uzbekistan, Nigeria, Cameroon, Azerbaijan, Iceland, Bosnia and Herzegovina, Estonia, Bulgaria, Cuba, Guinea, New Zealand, North Macedonia, Slovenia, Slovakia, Lithuania, Ivory Coast, Bolivia, Djibouti, Hong Kong, Tunisia, Senegal, Latvia, Cyprus, Albania, Honduras, Kyrgyzstan, Andorra, Lebanon, Costa Rica, Niger, Diamond Princess, Sri Lanka, Burkina Faso, Uruguay, Somalia, Guatemala, San Marino, Georgia, Mayotte, Channel Islands, DRC, Mali, Tanzania, Maldives, Malta, Jordan, Sudan, Taiwan, Réunion, Kenya, Jamaica, El Salvador, Palestine, Mauritius, Venezuela, Montenegro, Isle of Man, Equatorial Guinea, Gabon, Vietnam, Paraguay, Rwanda, Congo, Guinea-Bissau, Faeroe Islands, Martinique, Guadeloupe, Myanmar, Gibraltar, Liberia, Brunei, Ethiopia, Madagascar, French Guiana, Sierra Leone, Cambodia, Cabo Verde, Togo, Trinidad and Tobago, Bermuda, Zambia, Aruba, Eswatini, Monaco, Uganda, Guyana, Liechtenstein, Barbados, Bahamas, Haiti, Mozambique, Sint Maarten, Chad, Cayman Islands, Benin, Libya, French Polynesia, Nepal, CAR, Macao, Syria, Zimbabwe, Eritrea, Saint Martin, Mongolia, Malawi, South Sudan, Angola, Antigua and Barbuda, Timor-Leste, Botswana, Grenada, Laos, Belize, Fiji, New Caledonia, Saint Lucia, Curaçao, Dominica, Namibia, St. Vincent Grenadines, Saint Kitts and Nevis, Tajikistan, Nicaragua, Sao Tome and Principe, Falkland Islands, Turks and Caicos, Burundi, Gambia, Montserrat, Greenland, Vatican City, Seychelles, Suriname, MS Zaandam, Mauritania, Papua New Guinea, Bhutan, Yemen, British Virgin Islands, St. Barth, Western Sahara, Caribbean Netherlands, Anguilla, Comoros, Saint Pierre Miquelon, China]

### Return type

[**ResultCases**](ResultCases.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="casesPerOneMillionGet"></a>
# **casesPerOneMillionGet**
> ResultCases casesPerOneMillionGet(country)

Cases per Million

Cases per Million

### Example
```java
// Import classes:
//import org.wso2.client.api.ApiException;
//import org.wso2.client.api.API_nCoV2019.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
List<String> country = Arrays.asList("country_example"); // List<String> | 
try {
    ResultCases result = apiInstance.casesPerOneMillionGet(country);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#casesPerOneMillionGet");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | [**List&lt;String&gt;**](String.md)|  | [optional] [enum: World, USA, Spain, Italy, UK, France, Germany, Turkey, Russia, Iran, Brazil, Canada, Belgium, Netherlands, Peru, India, Switzerland, Portugal, Ecuador, Saudi Arabia, Sweden, Ireland, Mexico, Pakistan, Singapore, Chile, Israel, Austria, Belarus, Japan, Qatar, Poland, UAE, Romania, S. Korea, Ukraine, Indonesia, Denmark, Serbia, Philippines, Norway, Czechia, Bangladesh, Dominican Republic, Australia, Colombia, Panama, Malaysia, South Africa, Egypt, Finland, Morocco, Argentina, Kuwait, Algeria, Moldova, Luxembourg, Kazakhstan, Bahrain, Thailand, Hungary, Greece, Oman, Afghanistan, Iraq, Croatia, Ghana, Armenia, Uzbekistan, Nigeria, Cameroon, Azerbaijan, Iceland, Bosnia and Herzegovina, Estonia, Bulgaria, Cuba, Guinea, New Zealand, North Macedonia, Slovenia, Slovakia, Lithuania, Ivory Coast, Bolivia, Djibouti, Hong Kong, Tunisia, Senegal, Latvia, Cyprus, Albania, Honduras, Kyrgyzstan, Andorra, Lebanon, Costa Rica, Niger, Diamond Princess, Sri Lanka, Burkina Faso, Uruguay, Somalia, Guatemala, San Marino, Georgia, Mayotte, Channel Islands, DRC, Mali, Tanzania, Maldives, Malta, Jordan, Sudan, Taiwan, Réunion, Kenya, Jamaica, El Salvador, Palestine, Mauritius, Venezuela, Montenegro, Isle of Man, Equatorial Guinea, Gabon, Vietnam, Paraguay, Rwanda, Congo, Guinea-Bissau, Faeroe Islands, Martinique, Guadeloupe, Myanmar, Gibraltar, Liberia, Brunei, Ethiopia, Madagascar, French Guiana, Sierra Leone, Cambodia, Cabo Verde, Togo, Trinidad and Tobago, Bermuda, Zambia, Aruba, Eswatini, Monaco, Uganda, Guyana, Liechtenstein, Barbados, Bahamas, Haiti, Mozambique, Sint Maarten, Chad, Cayman Islands, Benin, Libya, French Polynesia, Nepal, CAR, Macao, Syria, Zimbabwe, Eritrea, Saint Martin, Mongolia, Malawi, South Sudan, Angola, Antigua and Barbuda, Timor-Leste, Botswana, Grenada, Laos, Belize, Fiji, New Caledonia, Saint Lucia, Curaçao, Dominica, Namibia, St. Vincent Grenadines, Saint Kitts and Nevis, Tajikistan, Nicaragua, Sao Tome and Principe, Falkland Islands, Turks and Caicos, Burundi, Gambia, Montserrat, Greenland, Vatican City, Seychelles, Suriname, MS Zaandam, Mauritania, Papua New Guinea, Bhutan, Yemen, British Virgin Islands, St. Barth, Western Sahara, Caribbean Netherlands, Anguilla, Comoros, Saint Pierre Miquelon, China]

### Return type

[**ResultCases**](ResultCases.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="criticalGet"></a>
# **criticalGet**
> ResultCases criticalGet(country)

Critical cases

Critical cases

### Example
```java
// Import classes:
//import org.wso2.client.api.ApiException;
//import org.wso2.client.api.API_nCoV2019.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
List<String> country = Arrays.asList("country_example"); // List<String> | 
try {
    ResultCases result = apiInstance.criticalGet(country);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#criticalGet");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | [**List&lt;String&gt;**](String.md)|  | [optional] [enum: World, USA, Spain, Italy, UK, France, Germany, Turkey, Russia, Iran, Brazil, Canada, Belgium, Netherlands, Peru, India, Switzerland, Portugal, Ecuador, Saudi Arabia, Sweden, Ireland, Mexico, Pakistan, Singapore, Chile, Israel, Austria, Belarus, Japan, Qatar, Poland, UAE, Romania, S. Korea, Ukraine, Indonesia, Denmark, Serbia, Philippines, Norway, Czechia, Bangladesh, Dominican Republic, Australia, Colombia, Panama, Malaysia, South Africa, Egypt, Finland, Morocco, Argentina, Kuwait, Algeria, Moldova, Luxembourg, Kazakhstan, Bahrain, Thailand, Hungary, Greece, Oman, Afghanistan, Iraq, Croatia, Ghana, Armenia, Uzbekistan, Nigeria, Cameroon, Azerbaijan, Iceland, Bosnia and Herzegovina, Estonia, Bulgaria, Cuba, Guinea, New Zealand, North Macedonia, Slovenia, Slovakia, Lithuania, Ivory Coast, Bolivia, Djibouti, Hong Kong, Tunisia, Senegal, Latvia, Cyprus, Albania, Honduras, Kyrgyzstan, Andorra, Lebanon, Costa Rica, Niger, Diamond Princess, Sri Lanka, Burkina Faso, Uruguay, Somalia, Guatemala, San Marino, Georgia, Mayotte, Channel Islands, DRC, Mali, Tanzania, Maldives, Malta, Jordan, Sudan, Taiwan, Réunion, Kenya, Jamaica, El Salvador, Palestine, Mauritius, Venezuela, Montenegro, Isle of Man, Equatorial Guinea, Gabon, Vietnam, Paraguay, Rwanda, Congo, Guinea-Bissau, Faeroe Islands, Martinique, Guadeloupe, Myanmar, Gibraltar, Liberia, Brunei, Ethiopia, Madagascar, French Guiana, Sierra Leone, Cambodia, Cabo Verde, Togo, Trinidad and Tobago, Bermuda, Zambia, Aruba, Eswatini, Monaco, Uganda, Guyana, Liechtenstein, Barbados, Bahamas, Haiti, Mozambique, Sint Maarten, Chad, Cayman Islands, Benin, Libya, French Polynesia, Nepal, CAR, Macao, Syria, Zimbabwe, Eritrea, Saint Martin, Mongolia, Malawi, South Sudan, Angola, Antigua and Barbuda, Timor-Leste, Botswana, Grenada, Laos, Belize, Fiji, New Caledonia, Saint Lucia, Curaçao, Dominica, Namibia, St. Vincent Grenadines, Saint Kitts and Nevis, Tajikistan, Nicaragua, Sao Tome and Principe, Falkland Islands, Turks and Caicos, Burundi, Gambia, Montserrat, Greenland, Vatican City, Seychelles, Suriname, MS Zaandam, Mauritania, Papua New Guinea, Bhutan, Yemen, British Virgin Islands, St. Barth, Western Sahara, Caribbean Netherlands, Anguilla, Comoros, Saint Pierre Miquelon, China]

### Return type

[**ResultCases**](ResultCases.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deathsGet"></a>
# **deathsGet**
> ResultCases deathsGet(country)

Total of persons death.

Total of person death because a direct relation ship with 2019 - NCoV

### Example
```java
// Import classes:
//import org.wso2.client.api.ApiException;
//import org.wso2.client.api.API_nCoV2019.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
List<String> country = Arrays.asList("country_example"); // List<String> | 
try {
    ResultCases result = apiInstance.deathsGet(country);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#deathsGet");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | [**List&lt;String&gt;**](String.md)|  | [optional] [enum: World, USA, Spain, Italy, UK, France, Germany, Turkey, Russia, Iran, Brazil, Canada, Belgium, Netherlands, Peru, India, Switzerland, Portugal, Ecuador, Saudi Arabia, Sweden, Ireland, Mexico, Pakistan, Singapore, Chile, Israel, Austria, Belarus, Japan, Qatar, Poland, UAE, Romania, S. Korea, Ukraine, Indonesia, Denmark, Serbia, Philippines, Norway, Czechia, Bangladesh, Dominican Republic, Australia, Colombia, Panama, Malaysia, South Africa, Egypt, Finland, Morocco, Argentina, Kuwait, Algeria, Moldova, Luxembourg, Kazakhstan, Bahrain, Thailand, Hungary, Greece, Oman, Afghanistan, Iraq, Croatia, Ghana, Armenia, Uzbekistan, Nigeria, Cameroon, Azerbaijan, Iceland, Bosnia and Herzegovina, Estonia, Bulgaria, Cuba, Guinea, New Zealand, North Macedonia, Slovenia, Slovakia, Lithuania, Ivory Coast, Bolivia, Djibouti, Hong Kong, Tunisia, Senegal, Latvia, Cyprus, Albania, Honduras, Kyrgyzstan, Andorra, Lebanon, Costa Rica, Niger, Diamond Princess, Sri Lanka, Burkina Faso, Uruguay, Somalia, Guatemala, San Marino, Georgia, Mayotte, Channel Islands, DRC, Mali, Tanzania, Maldives, Malta, Jordan, Sudan, Taiwan, Réunion, Kenya, Jamaica, El Salvador, Palestine, Mauritius, Venezuela, Montenegro, Isle of Man, Equatorial Guinea, Gabon, Vietnam, Paraguay, Rwanda, Congo, Guinea-Bissau, Faeroe Islands, Martinique, Guadeloupe, Myanmar, Gibraltar, Liberia, Brunei, Ethiopia, Madagascar, French Guiana, Sierra Leone, Cambodia, Cabo Verde, Togo, Trinidad and Tobago, Bermuda, Zambia, Aruba, Eswatini, Monaco, Uganda, Guyana, Liechtenstein, Barbados, Bahamas, Haiti, Mozambique, Sint Maarten, Chad, Cayman Islands, Benin, Libya, French Polynesia, Nepal, CAR, Macao, Syria, Zimbabwe, Eritrea, Saint Martin, Mongolia, Malawi, South Sudan, Angola, Antigua and Barbuda, Timor-Leste, Botswana, Grenada, Laos, Belize, Fiji, New Caledonia, Saint Lucia, Curaçao, Dominica, Namibia, St. Vincent Grenadines, Saint Kitts and Nevis, Tajikistan, Nicaragua, Sao Tome and Principe, Falkland Islands, Turks and Caicos, Burundi, Gambia, Montserrat, Greenland, Vatican City, Seychelles, Suriname, MS Zaandam, Mauritania, Papua New Guinea, Bhutan, Yemen, British Virgin Islands, St. Barth, Western Sahara, Caribbean Netherlands, Anguilla, Comoros, Saint Pierre Miquelon, China]

### Return type

[**ResultCases**](ResultCases.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deathsPerOneMillionGet"></a>
# **deathsPerOneMillionGet**
> ResultCases deathsPerOneMillionGet(country)

Deaths per Million

Deaths per Million

### Example
```java
// Import classes:
//import org.wso2.client.api.ApiException;
//import org.wso2.client.api.API_nCoV2019.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
List<String> country = Arrays.asList("country_example"); // List<String> | 
try {
    ResultCases result = apiInstance.deathsPerOneMillionGet(country);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#deathsPerOneMillionGet");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | [**List&lt;String&gt;**](String.md)|  | [optional] [enum: World, USA, Spain, Italy, UK, France, Germany, Turkey, Russia, Iran, Brazil, Canada, Belgium, Netherlands, Peru, India, Switzerland, Portugal, Ecuador, Saudi Arabia, Sweden, Ireland, Mexico, Pakistan, Singapore, Chile, Israel, Austria, Belarus, Japan, Qatar, Poland, UAE, Romania, S. Korea, Ukraine, Indonesia, Denmark, Serbia, Philippines, Norway, Czechia, Bangladesh, Dominican Republic, Australia, Colombia, Panama, Malaysia, South Africa, Egypt, Finland, Morocco, Argentina, Kuwait, Algeria, Moldova, Luxembourg, Kazakhstan, Bahrain, Thailand, Hungary, Greece, Oman, Afghanistan, Iraq, Croatia, Ghana, Armenia, Uzbekistan, Nigeria, Cameroon, Azerbaijan, Iceland, Bosnia and Herzegovina, Estonia, Bulgaria, Cuba, Guinea, New Zealand, North Macedonia, Slovenia, Slovakia, Lithuania, Ivory Coast, Bolivia, Djibouti, Hong Kong, Tunisia, Senegal, Latvia, Cyprus, Albania, Honduras, Kyrgyzstan, Andorra, Lebanon, Costa Rica, Niger, Diamond Princess, Sri Lanka, Burkina Faso, Uruguay, Somalia, Guatemala, San Marino, Georgia, Mayotte, Channel Islands, DRC, Mali, Tanzania, Maldives, Malta, Jordan, Sudan, Taiwan, Réunion, Kenya, Jamaica, El Salvador, Palestine, Mauritius, Venezuela, Montenegro, Isle of Man, Equatorial Guinea, Gabon, Vietnam, Paraguay, Rwanda, Congo, Guinea-Bissau, Faeroe Islands, Martinique, Guadeloupe, Myanmar, Gibraltar, Liberia, Brunei, Ethiopia, Madagascar, French Guiana, Sierra Leone, Cambodia, Cabo Verde, Togo, Trinidad and Tobago, Bermuda, Zambia, Aruba, Eswatini, Monaco, Uganda, Guyana, Liechtenstein, Barbados, Bahamas, Haiti, Mozambique, Sint Maarten, Chad, Cayman Islands, Benin, Libya, French Polynesia, Nepal, CAR, Macao, Syria, Zimbabwe, Eritrea, Saint Martin, Mongolia, Malawi, South Sudan, Angola, Antigua and Barbuda, Timor-Leste, Botswana, Grenada, Laos, Belize, Fiji, New Caledonia, Saint Lucia, Curaçao, Dominica, Namibia, St. Vincent Grenadines, Saint Kitts and Nevis, Tajikistan, Nicaragua, Sao Tome and Principe, Falkland Islands, Turks and Caicos, Burundi, Gambia, Montserrat, Greenland, Vatican City, Seychelles, Suriname, MS Zaandam, Mauritania, Papua New Guinea, Bhutan, Yemen, British Virgin Islands, St. Barth, Western Sahara, Caribbean Netherlands, Anguilla, Comoros, Saint Pierre Miquelon, China]

### Return type

[**ResultCases**](ResultCases.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="recoveredGet"></a>
# **recoveredGet**
> ResultCases recoveredGet(country)

Recovered cases

Recovered cases

### Example
```java
// Import classes:
//import org.wso2.client.api.ApiException;
//import org.wso2.client.api.API_nCoV2019.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
List<String> country = Arrays.asList("country_example"); // List<String> | 
try {
    ResultCases result = apiInstance.recoveredGet(country);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#recoveredGet");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | [**List&lt;String&gt;**](String.md)|  | [optional] [enum: World, USA, Spain, Italy, UK, France, Germany, Turkey, Russia, Iran, Brazil, Canada, Belgium, Netherlands, Peru, India, Switzerland, Portugal, Ecuador, Saudi Arabia, Sweden, Ireland, Mexico, Pakistan, Singapore, Chile, Israel, Austria, Belarus, Japan, Qatar, Poland, UAE, Romania, S. Korea, Ukraine, Indonesia, Denmark, Serbia, Philippines, Norway, Czechia, Bangladesh, Dominican Republic, Australia, Colombia, Panama, Malaysia, South Africa, Egypt, Finland, Morocco, Argentina, Kuwait, Algeria, Moldova, Luxembourg, Kazakhstan, Bahrain, Thailand, Hungary, Greece, Oman, Afghanistan, Iraq, Croatia, Ghana, Armenia, Uzbekistan, Nigeria, Cameroon, Azerbaijan, Iceland, Bosnia and Herzegovina, Estonia, Bulgaria, Cuba, Guinea, New Zealand, North Macedonia, Slovenia, Slovakia, Lithuania, Ivory Coast, Bolivia, Djibouti, Hong Kong, Tunisia, Senegal, Latvia, Cyprus, Albania, Honduras, Kyrgyzstan, Andorra, Lebanon, Costa Rica, Niger, Diamond Princess, Sri Lanka, Burkina Faso, Uruguay, Somalia, Guatemala, San Marino, Georgia, Mayotte, Channel Islands, DRC, Mali, Tanzania, Maldives, Malta, Jordan, Sudan, Taiwan, Réunion, Kenya, Jamaica, El Salvador, Palestine, Mauritius, Venezuela, Montenegro, Isle of Man, Equatorial Guinea, Gabon, Vietnam, Paraguay, Rwanda, Congo, Guinea-Bissau, Faeroe Islands, Martinique, Guadeloupe, Myanmar, Gibraltar, Liberia, Brunei, Ethiopia, Madagascar, French Guiana, Sierra Leone, Cambodia, Cabo Verde, Togo, Trinidad and Tobago, Bermuda, Zambia, Aruba, Eswatini, Monaco, Uganda, Guyana, Liechtenstein, Barbados, Bahamas, Haiti, Mozambique, Sint Maarten, Chad, Cayman Islands, Benin, Libya, French Polynesia, Nepal, CAR, Macao, Syria, Zimbabwe, Eritrea, Saint Martin, Mongolia, Malawi, South Sudan, Angola, Antigua and Barbuda, Timor-Leste, Botswana, Grenada, Laos, Belize, Fiji, New Caledonia, Saint Lucia, Curaçao, Dominica, Namibia, St. Vincent Grenadines, Saint Kitts and Nevis, Tajikistan, Nicaragua, Sao Tome and Principe, Falkland Islands, Turks and Caicos, Burundi, Gambia, Montserrat, Greenland, Vatican City, Seychelles, Suriname, MS Zaandam, Mauritania, Papua New Guinea, Bhutan, Yemen, British Virgin Islands, St. Barth, Western Sahara, Caribbean Netherlands, Anguilla, Comoros, Saint Pierre Miquelon, China]

### Return type

[**ResultCases**](ResultCases.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="testsPerOneMillionGet"></a>
# **testsPerOneMillionGet**
> ResultCases testsPerOneMillionGet(country)

Test Per Million

Test Per Million

### Example
```java
// Import classes:
//import org.wso2.client.api.ApiException;
//import org.wso2.client.api.API_nCoV2019.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
List<String> country = Arrays.asList("country_example"); // List<String> | 
try {
    ResultCases result = apiInstance.testsPerOneMillionGet(country);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#testsPerOneMillionGet");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | [**List&lt;String&gt;**](String.md)|  | [optional] [enum: World, USA, Spain, Italy, UK, France, Germany, Turkey, Russia, Iran, Brazil, Canada, Belgium, Netherlands, Peru, India, Switzerland, Portugal, Ecuador, Saudi Arabia, Sweden, Ireland, Mexico, Pakistan, Singapore, Chile, Israel, Austria, Belarus, Japan, Qatar, Poland, UAE, Romania, S. Korea, Ukraine, Indonesia, Denmark, Serbia, Philippines, Norway, Czechia, Bangladesh, Dominican Republic, Australia, Colombia, Panama, Malaysia, South Africa, Egypt, Finland, Morocco, Argentina, Kuwait, Algeria, Moldova, Luxembourg, Kazakhstan, Bahrain, Thailand, Hungary, Greece, Oman, Afghanistan, Iraq, Croatia, Ghana, Armenia, Uzbekistan, Nigeria, Cameroon, Azerbaijan, Iceland, Bosnia and Herzegovina, Estonia, Bulgaria, Cuba, Guinea, New Zealand, North Macedonia, Slovenia, Slovakia, Lithuania, Ivory Coast, Bolivia, Djibouti, Hong Kong, Tunisia, Senegal, Latvia, Cyprus, Albania, Honduras, Kyrgyzstan, Andorra, Lebanon, Costa Rica, Niger, Diamond Princess, Sri Lanka, Burkina Faso, Uruguay, Somalia, Guatemala, San Marino, Georgia, Mayotte, Channel Islands, DRC, Mali, Tanzania, Maldives, Malta, Jordan, Sudan, Taiwan, Réunion, Kenya, Jamaica, El Salvador, Palestine, Mauritius, Venezuela, Montenegro, Isle of Man, Equatorial Guinea, Gabon, Vietnam, Paraguay, Rwanda, Congo, Guinea-Bissau, Faeroe Islands, Martinique, Guadeloupe, Myanmar, Gibraltar, Liberia, Brunei, Ethiopia, Madagascar, French Guiana, Sierra Leone, Cambodia, Cabo Verde, Togo, Trinidad and Tobago, Bermuda, Zambia, Aruba, Eswatini, Monaco, Uganda, Guyana, Liechtenstein, Barbados, Bahamas, Haiti, Mozambique, Sint Maarten, Chad, Cayman Islands, Benin, Libya, French Polynesia, Nepal, CAR, Macao, Syria, Zimbabwe, Eritrea, Saint Martin, Mongolia, Malawi, South Sudan, Angola, Antigua and Barbuda, Timor-Leste, Botswana, Grenada, Laos, Belize, Fiji, New Caledonia, Saint Lucia, Curaçao, Dominica, Namibia, St. Vincent Grenadines, Saint Kitts and Nevis, Tajikistan, Nicaragua, Sao Tome and Principe, Falkland Islands, Turks and Caicos, Burundi, Gambia, Montserrat, Greenland, Vatican City, Seychelles, Suriname, MS Zaandam, Mauritania, Papua New Guinea, Bhutan, Yemen, British Virgin Islands, St. Barth, Western Sahara, Caribbean Netherlands, Anguilla, Comoros, Saint Pierre Miquelon, China]

### Return type

[**ResultCases**](ResultCases.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="todayCasesGet"></a>
# **todayCasesGet**
> ResultCasesCountry todayCasesGet(country)

Today cases.

Number of registered cases today

### Example
```java
// Import classes:
//import org.wso2.client.api.ApiException;
//import org.wso2.client.api.API_nCoV2019.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
List<String> country = Arrays.asList("country_example"); // List<String> | 
try {
    ResultCasesCountry result = apiInstance.todayCasesGet(country);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#todayCasesGet");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | [**List&lt;String&gt;**](String.md)|  | [optional] [enum: World, USA, Spain, Italy, UK, France, Germany, Turkey, Russia, Iran, Brazil, Canada, Belgium, Netherlands, Peru, India, Switzerland, Portugal, Ecuador, Saudi Arabia, Sweden, Ireland, Mexico, Pakistan, Singapore, Chile, Israel, Austria, Belarus, Japan, Qatar, Poland, UAE, Romania, S. Korea, Ukraine, Indonesia, Denmark, Serbia, Philippines, Norway, Czechia, Bangladesh, Dominican Republic, Australia, Colombia, Panama, Malaysia, South Africa, Egypt, Finland, Morocco, Argentina, Kuwait, Algeria, Moldova, Luxembourg, Kazakhstan, Bahrain, Thailand, Hungary, Greece, Oman, Afghanistan, Iraq, Croatia, Ghana, Armenia, Uzbekistan, Nigeria, Cameroon, Azerbaijan, Iceland, Bosnia and Herzegovina, Estonia, Bulgaria, Cuba, Guinea, New Zealand, North Macedonia, Slovenia, Slovakia, Lithuania, Ivory Coast, Bolivia, Djibouti, Hong Kong, Tunisia, Senegal, Latvia, Cyprus, Albania, Honduras, Kyrgyzstan, Andorra, Lebanon, Costa Rica, Niger, Diamond Princess, Sri Lanka, Burkina Faso, Uruguay, Somalia, Guatemala, San Marino, Georgia, Mayotte, Channel Islands, DRC, Mali, Tanzania, Maldives, Malta, Jordan, Sudan, Taiwan, Réunion, Kenya, Jamaica, El Salvador, Palestine, Mauritius, Venezuela, Montenegro, Isle of Man, Equatorial Guinea, Gabon, Vietnam, Paraguay, Rwanda, Congo, Guinea-Bissau, Faeroe Islands, Martinique, Guadeloupe, Myanmar, Gibraltar, Liberia, Brunei, Ethiopia, Madagascar, French Guiana, Sierra Leone, Cambodia, Cabo Verde, Togo, Trinidad and Tobago, Bermuda, Zambia, Aruba, Eswatini, Monaco, Uganda, Guyana, Liechtenstein, Barbados, Bahamas, Haiti, Mozambique, Sint Maarten, Chad, Cayman Islands, Benin, Libya, French Polynesia, Nepal, CAR, Macao, Syria, Zimbabwe, Eritrea, Saint Martin, Mongolia, Malawi, South Sudan, Angola, Antigua and Barbuda, Timor-Leste, Botswana, Grenada, Laos, Belize, Fiji, New Caledonia, Saint Lucia, Curaçao, Dominica, Namibia, St. Vincent Grenadines, Saint Kitts and Nevis, Tajikistan, Nicaragua, Sao Tome and Principe, Falkland Islands, Turks and Caicos, Burundi, Gambia, Montserrat, Greenland, Vatican City, Seychelles, Suriname, MS Zaandam, Mauritania, Papua New Guinea, Bhutan, Yemen, British Virgin Islands, St. Barth, Western Sahara, Caribbean Netherlands, Anguilla, Comoros, Saint Pierre Miquelon, China]

### Return type

[**ResultCasesCountry**](ResultCasesCountry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="todayDeathsGet"></a>
# **todayDeathsGet**
> ResultCases todayDeathsGet(country)

Today deaths.

Number of deaths today

### Example
```java
// Import classes:
//import org.wso2.client.api.ApiException;
//import org.wso2.client.api.API_nCoV2019.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
List<String> country = Arrays.asList("country_example"); // List<String> | 
try {
    ResultCases result = apiInstance.todayDeathsGet(country);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#todayDeathsGet");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | [**List&lt;String&gt;**](String.md)|  | [optional] [enum: World, USA, Spain, Italy, UK, France, Germany, Turkey, Russia, Iran, Brazil, Canada, Belgium, Netherlands, Peru, India, Switzerland, Portugal, Ecuador, Saudi Arabia, Sweden, Ireland, Mexico, Pakistan, Singapore, Chile, Israel, Austria, Belarus, Japan, Qatar, Poland, UAE, Romania, S. Korea, Ukraine, Indonesia, Denmark, Serbia, Philippines, Norway, Czechia, Bangladesh, Dominican Republic, Australia, Colombia, Panama, Malaysia, South Africa, Egypt, Finland, Morocco, Argentina, Kuwait, Algeria, Moldova, Luxembourg, Kazakhstan, Bahrain, Thailand, Hungary, Greece, Oman, Afghanistan, Iraq, Croatia, Ghana, Armenia, Uzbekistan, Nigeria, Cameroon, Azerbaijan, Iceland, Bosnia and Herzegovina, Estonia, Bulgaria, Cuba, Guinea, New Zealand, North Macedonia, Slovenia, Slovakia, Lithuania, Ivory Coast, Bolivia, Djibouti, Hong Kong, Tunisia, Senegal, Latvia, Cyprus, Albania, Honduras, Kyrgyzstan, Andorra, Lebanon, Costa Rica, Niger, Diamond Princess, Sri Lanka, Burkina Faso, Uruguay, Somalia, Guatemala, San Marino, Georgia, Mayotte, Channel Islands, DRC, Mali, Tanzania, Maldives, Malta, Jordan, Sudan, Taiwan, Réunion, Kenya, Jamaica, El Salvador, Palestine, Mauritius, Venezuela, Montenegro, Isle of Man, Equatorial Guinea, Gabon, Vietnam, Paraguay, Rwanda, Congo, Guinea-Bissau, Faeroe Islands, Martinique, Guadeloupe, Myanmar, Gibraltar, Liberia, Brunei, Ethiopia, Madagascar, French Guiana, Sierra Leone, Cambodia, Cabo Verde, Togo, Trinidad and Tobago, Bermuda, Zambia, Aruba, Eswatini, Monaco, Uganda, Guyana, Liechtenstein, Barbados, Bahamas, Haiti, Mozambique, Sint Maarten, Chad, Cayman Islands, Benin, Libya, French Polynesia, Nepal, CAR, Macao, Syria, Zimbabwe, Eritrea, Saint Martin, Mongolia, Malawi, South Sudan, Angola, Antigua and Barbuda, Timor-Leste, Botswana, Grenada, Laos, Belize, Fiji, New Caledonia, Saint Lucia, Curaçao, Dominica, Namibia, St. Vincent Grenadines, Saint Kitts and Nevis, Tajikistan, Nicaragua, Sao Tome and Principe, Falkland Islands, Turks and Caicos, Burundi, Gambia, Montserrat, Greenland, Vatican City, Seychelles, Suriname, MS Zaandam, Mauritania, Papua New Guinea, Bhutan, Yemen, British Virgin Islands, St. Barth, Western Sahara, Caribbean Netherlands, Anguilla, Comoros, Saint Pierre Miquelon, China]

### Return type

[**ResultCases**](ResultCases.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="totalTestsGet"></a>
# **totalTestsGet**
> ResultCases totalTestsGet(country)

Test Totals

Tests total

### Example
```java
// Import classes:
//import org.wso2.client.api.ApiException;
//import org.wso2.client.api.API_nCoV2019.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
List<String> country = Arrays.asList("country_example"); // List<String> | 
try {
    ResultCases result = apiInstance.totalTestsGet(country);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#totalTestsGet");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | [**List&lt;String&gt;**](String.md)|  | [optional] [enum: World, USA, Spain, Italy, UK, France, Germany, Turkey, Russia, Iran, Brazil, Canada, Belgium, Netherlands, Peru, India, Switzerland, Portugal, Ecuador, Saudi Arabia, Sweden, Ireland, Mexico, Pakistan, Singapore, Chile, Israel, Austria, Belarus, Japan, Qatar, Poland, UAE, Romania, S. Korea, Ukraine, Indonesia, Denmark, Serbia, Philippines, Norway, Czechia, Bangladesh, Dominican Republic, Australia, Colombia, Panama, Malaysia, South Africa, Egypt, Finland, Morocco, Argentina, Kuwait, Algeria, Moldova, Luxembourg, Kazakhstan, Bahrain, Thailand, Hungary, Greece, Oman, Afghanistan, Iraq, Croatia, Ghana, Armenia, Uzbekistan, Nigeria, Cameroon, Azerbaijan, Iceland, Bosnia and Herzegovina, Estonia, Bulgaria, Cuba, Guinea, New Zealand, North Macedonia, Slovenia, Slovakia, Lithuania, Ivory Coast, Bolivia, Djibouti, Hong Kong, Tunisia, Senegal, Latvia, Cyprus, Albania, Honduras, Kyrgyzstan, Andorra, Lebanon, Costa Rica, Niger, Diamond Princess, Sri Lanka, Burkina Faso, Uruguay, Somalia, Guatemala, San Marino, Georgia, Mayotte, Channel Islands, DRC, Mali, Tanzania, Maldives, Malta, Jordan, Sudan, Taiwan, Réunion, Kenya, Jamaica, El Salvador, Palestine, Mauritius, Venezuela, Montenegro, Isle of Man, Equatorial Guinea, Gabon, Vietnam, Paraguay, Rwanda, Congo, Guinea-Bissau, Faeroe Islands, Martinique, Guadeloupe, Myanmar, Gibraltar, Liberia, Brunei, Ethiopia, Madagascar, French Guiana, Sierra Leone, Cambodia, Cabo Verde, Togo, Trinidad and Tobago, Bermuda, Zambia, Aruba, Eswatini, Monaco, Uganda, Guyana, Liechtenstein, Barbados, Bahamas, Haiti, Mozambique, Sint Maarten, Chad, Cayman Islands, Benin, Libya, French Polynesia, Nepal, CAR, Macao, Syria, Zimbabwe, Eritrea, Saint Martin, Mongolia, Malawi, South Sudan, Angola, Antigua and Barbuda, Timor-Leste, Botswana, Grenada, Laos, Belize, Fiji, New Caledonia, Saint Lucia, Curaçao, Dominica, Namibia, St. Vincent Grenadines, Saint Kitts and Nevis, Tajikistan, Nicaragua, Sao Tome and Principe, Falkland Islands, Turks and Caicos, Burundi, Gambia, Montserrat, Greenland, Vatican City, Seychelles, Suriname, MS Zaandam, Mauritania, Papua New Guinea, Bhutan, Yemen, British Virgin Islands, St. Barth, Western Sahara, Caribbean Netherlands, Anguilla, Comoros, Saint Pierre Miquelon, China]

### Return type

[**ResultCases**](ResultCases.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

