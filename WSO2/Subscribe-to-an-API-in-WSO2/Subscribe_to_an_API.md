# HOW TO SUBSCRIBE TO AN API AND INVOKE IT

In order to consume APIs in your applications, you have to **create an application** in WSO2 API-M and **subscribe all APIs to it**. The subscription process fulfills the authentication process and provides you with access tokens that you can use to invoke an API.

An WSO2 application is a logical representation of a physical application such as a mobile app, webapp, device, etc. A single application can have multiple API subscriptions. Each application has a **consumer key and consumer secret pair**. The requests to the subscribed APIs are authenticated via the tokens. 

Application allow you to:
- Generate and use a single key for multiple APIs
- Subscribe multiple times to a single API with different Service Level Agreements (SLAs)/business plans which operate on per access token basis

## Subscribe to an API and test it
You can subscribe to an application using 2 methods available in the overview of the API:
1. Key generation wizard - it prompts you to create the new application.
1. Subscribe to an application - it allows you to subscribe to an existing application.

![alt text](images/APICredentials.png)

## Create new application using Key Generation Wizard
- Click on KEY GENERATION WIZARD
- Enter the application details by filling in:
    - Application name - use the name that is meaningful for you
    - Per token quota (choose from the list)
    - Token Type - OAUTH
    - Application description - describe application
- Click on NEXT button

![alt text](images/NewApplication.png)

- Select the preferred throttling policy and click on NEXT

![alt text](images/Throttling.png)

- Generate application keys and secret by clicking on NEXT

![alt text](images/KeyGeneration.png)

- Select the access token validity period then click NEXT (you can leave it as it is)

![alt text](images/AccessTokenValidity.png)

- Copy the access token
- Click FINISH to complete the wizard

![alt text](images/CopyAccessToken.png)

## Subscribe API to an existing application
- Go to Overview tab of an API

![alt text](images/Overview.png)

- Click on SUBSCRIBE TO AN APPLICATION
- Choose existing application from the list of Applications
- Choose throttling policy from the list of available policies
- Click on SUBSCRIBE

![alt text](images/SubscribeToAnExistingApp.png)

- The application name will be listed under "View Credentials" section on the bottom of the screen.

![alt text](images/SubscribedApplications.png)

## Test the invoked API
- Click on Credentials tab of an API

![alt text](images/Credentials.png)

- Go to "View Credentials" section on the bottom of the screen and click on PROD KEYS
- Click on GENERATE ACCESS TOKEN

![alt text](images/GenerateAccessToken.png)

- Update Access token validity period if necessary and click on GENERATE

![alt text](images/GenerateAccessToken_validityPeriod.png)
- This will generate the new access token that can be used for testing
- Click on CLOSE
- Click on "Try Out" tab of an API

![alt text](images/TryOut.png)

- This will open the swagger UI to test the chosen API
- Choose GET method from the list below and click on it
- Click on TRY IT OUT

![alt text](images/GetMethod_TryItOut.png)

- Fill in the required parameters
- Click on EXECUTE

![alt text](images/GetMethod_Execute.png)

- Check that the response is successful after executing. The response code should be 200 and the response body should display data from the response.