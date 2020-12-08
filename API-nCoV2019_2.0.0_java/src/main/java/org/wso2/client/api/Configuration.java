/*
 * API-nCoV2019
 * nCoV 2019 API provides information related with the case of pneumonia associated with the COVID-19 coronavirus.  The data we provide is collected from World Health Organization (WHO), the US Centers for Disease Control and Prevention (CDC), the Chinese Centre for Disease Control and Prevention (ECDC), China’s National Health Commission, and Chinese website DXY which provides regional case estimates faster than the national level reporting organizations.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package org.wso2.client.api;

@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-12-07T17:21:25.626Z")
public class Configuration {
    private static ApiClient defaultApiClient = new ApiClient();

    /**
     * Get the default API client, which would be used when creating API
     * instances without providing an API client.
     *
     * @return Default API client
     */
    public static ApiClient getDefaultApiClient() {
        return defaultApiClient;
    }

    /**
     * Set the default API client, which would be used when creating API
     * instances without providing an API client.
     *
     * @param apiClient API client
     */
    public static void setDefaultApiClient(ApiClient apiClient) {
        defaultApiClient = apiClient;
    }
}
