/**
 * GeolocationAPI.js
 * Manages interactions with the Google Geolocation API.
 * This service retrieves the user's current geographical location and provides it to other services.
 * It ensures accurate and efficient location tracking for weather data retrieval.
 */

// This class defines the structure and behavior of the GeolocationAPI
class GeolocationAPI {
    // Constructor of the class, initializes the API key
    constructor() {
        // Storing the Google Geolocation API key. 
        // This key should be replaced by the actual key at build time or fetched securely.
        this.apiKey = process.env.GOOGLE_GEOLOCATION_API_KEY;
    }

    // Function to get the current location of the user
    getCurrentLocation() {
        // Returns a Promise object, representing an asynchronous operation
        return new Promise((resolve, reject) => {
            // Using the browser's geolocation API to get the user's current position
            navigator.geolocation.getCurrentPosition(position => {
                // This callback is executed when the position is successfully retrieved

                // Extracting latitude and longitude from the position object
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                // Resolving the promise with an object containing latitude and longitude
                resolve({ latitude, longitude });
            }, error => {
                // This callback is executed if there's an error in retrieving the position

                // Rejecting the promise with the encountered error
                reject(error);
            });
        });
    }

    // Function to fetch location details using Google Geolocation API
    getLocationDetails(latitude, longitude) {
        // Constructing the URL for the API request with latitude, longitude, and API key
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${this.apiKey}`;

        // Making a network request to the URL
        return fetch(url)
            .then(response => response.json()) // Parsing the response as JSON
            .then(data => {
                // Processing and returning the data as needed
                return data;
            })
            .catch(error => {
                // Handling any errors from the fetch operation
                console.error('Error fetching location details:', error);
            });
    }

    // Additional helper methods or error handling functions can be added here - TODO: Nice to have the option for the user to opt to toggle a switch to then be able to enter their desired location (like if they want to plan for a trip)
}

// Exporting the GeolocationAPI class for use in other parts of your application
export default GeolocationAPI;

/*

Key Points to Understand:
Promises: The getCurrentLocation function returns a Promise, which is an object representing the eventual completion (or failure) of an asynchronous operation. It's a key concept in JavaScript for handling asynchronous operations like API calls or I/O operations.

Geolocation API: The navigator.geolocation.getCurrentPosition method is part of the Web Geolocation API, which is used to get the device's current location.

Error Handling: The error handling in both getCurrentLocation and getLocationDetails ensures that any issues (like network errors or permission issues) are appropriately managed.

API Requests: The fetch function is used to make network requests. It is a modern, promise-based way to make HTTP requests in JavaScript.

This code is a good starting point for integrating location-based services 

--------

1. Setting Up for Testing
Environment Setup: Ensure your development environment has access to a web browser with support for the Geolocation API.
Include the Script: Make sure GeolocationAPI.js is correctly imported into the part of your application where you'll be conducting the tests.
API Key: Confirm that your Google Geolocation API key is correctly set up and accessible in the environment where the tests will run.

2. Testing getCurrentLocation Method
Basic Functionality: Test if the method correctly retrieves the latitude and longitude.
Call getCurrentLocation and log the output.
Verify if it returns an object with latitude and longitude.
Permission Handling: Test how the method handles location permissions.
Deny location access when prompted and see if the method correctly rejects the promise.
Grant location access and check for successful retrieval of coordinates.
Accuracy Check: Verify the accuracy of the location data.
Compare the coordinates received with a known location or use an online map service to validate.

3. Testing getLocationDetails Method
Response Validation: Test the method with known latitude and longitude values.
Use coordinates for which you know the expected address or location details.
Check if the response from the API matches the expected location data.
Error Handling: Test the method's behavior with invalid coordinates.
Pass invalid coordinates (like extremely high values) and observe the error handling.
Ensure the error is logged as expected.

4. Integration Testing
End-to-End Flow: Test the complete flow from retrieving the current location to fetching the location details.
This simulates the real-world use case of the functions in your application.
User Interface Interaction (if applicable): If your application has a user interface, test the integration with UI elements.
E.g., triggering location retrieval on a button click and displaying the results.

5. Testing Across Different Devices/Browsers
Browser Compatibility: Test on different browsers to ensure compatibility.
Mobile Testing: If your application is intended for mobile devices, test on various mobile browsers as well.

6. Documenting Test Cases and Results
Keep a record of your test cases, including the conditions and the expected outcomes.
Document the actual results and any discrepancies or issues encountered.

7. Security and Privacy Testing
Ensure that user permissions are handled respectfully and in compliance with privacy standards.

8. Review and Iteration
Analyze the test results and identify any areas needing improvement.
Iteratively improve and retest as necessary.

*/