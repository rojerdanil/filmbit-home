// Constants for storage keys
const ACCESS_TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken';
const USER_KEY = 'userKey'
// Get base path (e.g., /filmbit/)
function getBasePath() {
    const path = window.location.pathname;
    const firstSegment = path.split('/')[1];
    return firstSegment ? `/${firstSegment}/` : '/';
}

// Get stored tokens from sessionStorage
function getAccessToken() {
    return sessionStorage.getItem(ACCESS_TOKEN_KEY);
}

function getRefreshToken() {
    return sessionStorage.getItem(REFRESH_TOKEN_KEY);
}

// Save tokens to sessionStorage
function saveTokens(access, refresh) {
    sessionStorage.setItem(ACCESS_TOKEN_KEY, access);
    sessionStorage.setItem(REFRESH_TOKEN_KEY, refresh);
}
function saveUserKey(userKey)
{
	    sessionStorage.setItem(USER_KEY, userKey);
}	

function getUserKey() {
    return sessionStorage.getItem(USER_KEY);
}

// Clear tokens and redirect to login
function logoutAndRedirect() {
    sessionStorage.removeItem(ACCESS_TOKEN_KEY);
    sessionStorage.removeItem(REFRESH_TOKEN_KEY);
    window.location.href = getBasePath() + 'index.html';
}

// Try refreshing access token
async function tryRefreshToken() {
	console.log("called refresh token");
    const refreshToken = getRefreshToken();
    if (!refreshToken) return false;
	console.log("called refresh token");
    const deviceIdValue =  generateDeviceId();

    const response = await fetch(validateRefreshTokenUrl, {
        method: 'GET',
        headers:  {
                'Authorization': 'Bearer ' + refreshToken,
                'X-Device-ID': deviceIdValue,
                'Content-Type': 'application/json'
            }
    });

    if (response.ok) {
        const data = await response.json();
		console.log(data);
		if(data != null)
		{
			console.log("refresh token is not null");
				if(data.result != null)
				 {
				       console.log("refresh token is not null");
	
					//saveTokens(data.result.accessToken,data.result.refreshToken);
       
				 
				 }

		}
        return true;
    } else {
        logoutAndRedirect();
        return false;
    }
}

// Verify access token
async function verifyAccessTokenOrRedirect() {
    const token = getAccessToken();
    console.log("token " + token);
   
verifyAccessTokenOrRedirectServiceCall();
   
}


function generateDeviceId() {
        const userAgent = navigator.userAgent;
        const screenRes = screen.availWidth + 'x' + screen.availHeight; // stable resolution
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const lang = navigator.language;
        const platform = navigator.platform;

        // Combine for fingerprinting
        const raw = `${userAgent}-${screenRes}-${timezone}-${lang}-${platform}`;
        const hash = hashString(raw);

        // Store once and reuse
        if (!sessionStorage.getItem("deviceId")) {
            sessionStorage.setItem("deviceId", hash);
        }

        return sessionStorage.getItem("deviceId");
    }

    // Basic hash function (stable)
    function hashString(str) {
        let hash = 0;
        if (str.length === 0) return hash.toString();
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash |= 0; // Convert to 32bit integer
        }
        return Math.abs(hash).toString(); // make positive
    }
	
	
	async function verifyAccessTokenOrRedirectServiceCall() {
    const response = await verifyAccessTokenWithDevice();
    if (response && response.ok) {
		console.log("yes i m ok");
        return true;
    } else if (response && response.status === 401) {
		console.log("calling refresh token from  verifyAccess");
        const refreshed = await tryRefreshToken();
        if (!refreshed) {			
            logoutAndRedirect();
        }
    } else {
        logoutAndRedirect();
    }
}

	
	// Sends token and device ID to backend for verification
async function verifyAccessTokenWithDevice() {
    const token = getAccessToken(); // your existing method to fetch access token
    const deviceId = generateDeviceId(); // your existing stable device ID generator

    if (!token || !deviceId) {
        console.warn("Missing token or device ID");
        return null;
    }

    try {
        const response = await fetch(validateTokenUrl, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'X-Device-ID': deviceId,
                'Content-Type': 'application/json'
            }
        });

        return response;
    } catch (error) {
        console.error("Token verification failed:", error);
        return null;
    }
}

const originalAjax = $.ajax;  // Save the original $.ajax method
let isRefreshing = false;
$.ajax = function(options) {
    // Skip adding Authorization header for preflight requests
    if (options.type === 'OPTIONS') {
        console.log("Preflight request detected. Skipping Authorization header.");
        return originalAjax(options);  // Proceed with the original OPTIONS request
    } else {
        const token = getAccessToken();
        
        // If there's no Authorization header, add it
        if (token && !options.headers?.Authorization) {
            console.log("Entering in empty Authorization header for URL: " + options.url);
            options.headers = options.headers || {};
            options.headers['Authorization'] = 'Bearer ' + token;
        }
		console.log("isRefreshing : " +isRefreshing);
      
        // Send the original request
        const originalRequest = originalAjax(options);

        // Handle success response
        originalRequest.done(function(data, textStatus, jqXHR) {
          //  console.log('Request successful:', data);
            // Perform UI updates or any other logic based on successful request
            if (options.done) {
                options.done(data, textStatus, jqXHR);
            }
        });

        // Handle error response (especially 401 Unauthorized)
        originalRequest.fail(function(jqXHR, textStatus, errorThrown) {
            if (jqXHR.status === 401) {  // If Unauthorized
                console.log("Token expired or invalid. Trying to refresh token...");

                // Try refreshing the token
                tryRefreshToken().then((refreshed) => {
                    if (refreshed) {
                        console.log("Token refreshed. Retrying the original request...");
                        isRefreshing  = true;
                        const newToken = getRefreshToken();
                        saveTokens(newToken, getRefreshToken());
                        // Set the new token in the request headers and retry the request
                        options.headers['Authorization'] = 'Bearer ' + newToken;

                        // Retry the original request with new token
                        const retryRequest = originalAjax(options);

                        // Ensure the retry request's success and failure responses go to the original handlers
                        retryRequest.done(function(data, textStatus, jqXHR) {
                            // Ensure the UI gets updated after retrying
                            console.log('Retried request successful:', data);
                            if (options.done) {
                                options.done(data, textStatus, jqXHR);
                            }
                        });

                        retryRequest.fail(function(jqXHR, textStatus, errorThrown) {
                            console.error("Retried request failed:", jqXHR.status);
                            if (options.fail) {
                                options.fail(jqXHR, textStatus, errorThrown);
                            }
                        });

                    } else {
                        console.log("Failed to refresh token. Redirecting to login...");
                        logoutAndRedirect();  // Log the user out if token refresh fails
                    }
                });
            } else {
                console.error("Request failed with status:", jqXHR.status);
                if (options.fail) {
                    options.fail(jqXHR, textStatus, errorThrown);
                }
            }
        });

        // Return the original request object to maintain AJAX behavior
        return originalRequest;
    }
};




