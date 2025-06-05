# ForgeScheduler Native Functions

## Body

### $bodyHas (v1.1.0)
Checks if the request body contains a key.

**Arguments:**

- `Key` (String, required) - The key to check in the body.

**Returns:** `Boolean`  
**Brackets:** `true`  
**Unwrap:** `true`

### $getBodyProp (v1.1.0)
Gets a property from the request body.

**Arguments:**

- `Key` (String, required) - The body property to retrieve.

**Returns:** `String`  
**Brackets:** `true`  
**Unwrap:** `true`

### $getRawBody (v1.1.0)
Gets the raw request body as a string.

**Returns:** `String`  
**Brackets:** `false`  
**Unwrap:** `false`

### $loadBodyTo (v1.1.0)
Loads the parsed request body into an environment variable.

**Arguments:**

- `Name` (String, required) - The environment variable name to assign the request body to.

**Returns:** `None`  
**Brackets:** `true`  
**Unwrap:** `true`

## Cookies

### $clearCookie (v1.1.0)
Clears a cookie from the response.

**Arguments:**

- `Key` (String, required) - The name of the cookie to clear.

**Returns:** `Boolean`  
**Brackets:** `true`  
**Unwrap:** `true`

### $getCookie (v1.1.0)
Gets a cookie from the request.

**Arguments:**

- `Key` (String, required) - The cookie name.

**Returns:** `String`  
**Brackets:** `true`  
**Unwrap:** `true`

### $setCookie (v1.1.0)
Sets a cookie in the response.

**Arguments:**

- `Key` (String, required) - The cookie name.
- `Value` (String, required) - The cookie value.

**Returns:** `Boolean`  
**Brackets:** `true`  
**Unwrap:** `true`

## Headers

### $getAllHeaders (v1.1.0)
Returns all request headers as a JSON object.

**Returns:** `Json`  
**Brackets:** `false`  
**Unwrap:** `false`

### $getHeader (v1.1.0)
Retrieves a header from the request. Returns an empty string if not found.

**Arguments:**

- `Name` (String, required) - The header name.

**Returns:** `String`  
**Brackets:** `true`  
**Unwrap:** `true`

### $setHeader (v1.1.0)
Sets a custom response header.

**Arguments:**

- `Key` (String, required) - Header key.
- `Value` (String, required) - Header value.

**Returns:** `Boolean`  
**Brackets:** `true`  
**Unwrap:** `true`

## Query

### $getQuery (v1.1.0)
Retrieves a query parameter from the request. Returns an empty string if not found.

**Arguments:**

- `Name` (String, required) - The query parameter name.

**Returns:** `String`  
**Brackets:** `true`  
**Unwrap:** `true`

## Request

### $accepts (v1.1.0)
Returns accepted content types as a comma-separated string.

**Returns:** `String`  
**Brackets:** `false`  
**Unwrap:** `false`

### $baseURL (v1.1.0)
Retrieves the base URL of the request. Returns empty string if unavailable.

**Returns:** `String`  
**Brackets:** `false`  
**Unwrap:** `false`

### $hasHeader (v1.1.0)
Checks if a specific header exists in the request.

**Arguments:**

- `Name` (String, required) - The name of the header.

**Returns:** `Boolean`  
**Brackets:** `true`  
**Unwrap:** `true`

### $hostname (v1.1.0)
Retrieves the hostname from the request. Returns an empty string if unavailable.

**Returns:** `String`  
**Brackets:** `false`  
**Unwrap:** `false`

### $ip (v1.1.0)
Retrieves the IP address of the incoming request. Returns an empty string if unavailable.

**Returns:** `String`  
**Brackets:** `false`  
**Unwrap:** `false`

### $isRequestSecure (v1.1.0)
Checks if the incoming request was made over HTTPS.

**Returns:** `Boolean`  
**Brackets:** `false`  
**Unwrap:** `false`

### $originalURL (v1.1.0)
Retrieves the full original URL of the incoming request.

**Returns:** `String`  
**Brackets:** `false`  
**Unwrap:** `false`

### $referrer (v1.1.0)
Returns the Referer header value from the request.

**Returns:** `String`  
**Brackets:** `false`  
**Unwrap:** `false`

### $userAgent (v1.1.0)
Returns the user-agent string of the request.

**Returns:** `String`  
**Brackets:** `false`  
**Unwrap:** `false`

## Response

### $end (v1.1.0)
Ends the response without sending any content.

**Returns:** `Boolean`  
**Brackets:** `false`  
**Unwrap:** `false`

### $redirect (v1.1.0)
Redirects the response to the given URL.

**Arguments:**

- `URL` (String, required) - The URL to redirect to.
- `Status Code` (Number, optional) - Optional status code (default 302).

**Returns:** `None`  
**Brackets:** `true`  
**Unwrap:** `true`

### $sendJson (v1.1.0)
Sends a JSON response with the given data.

**Arguments:**

- `Data` (Json, required) - The JSON content to send.
- `Status Code` (Number, optional) - Optional status code.

**Returns:** `None`  
**Brackets:** `true`  
**Unwrap:** `true`

### $sendText (v1.1.0)
Sends plain text in a response, with an optional status code.

**Arguments:**

- `Content` (String, required) - The text content to send.
- `Status Code` (Number, optional) - The status code to send with the response.

**Returns:** `Boolean`  
**Brackets:** `true`  
**Unwrap:** `true`

### $setStatus (v1.1.0)
Sets the HTTP status code for the response.

**Arguments:**

- `Code` (Number, required) - The status code to set.

**Returns:** `Boolean`  
**Brackets:** `true`  
**Unwrap:** `true`