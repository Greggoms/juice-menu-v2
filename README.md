# Lightspeed API Testing

Quick Links

- [Lightspeed Docs - Auth Overview](https://developers.lightspeedhq.com/retail/authentication/authentication-overview/)
- [Lightspeed Docs - Access Token](https://developers.lightspeedhq.com/retail/authentication/access-token/)
- [OAuth2 Authentication Code with node.js snippets](https://auth0.com/docs/get-started/authentication-and-authorization-flow/call-your-api-using-the-authorization-code-flow)

## Overview

There is a very limited amount of help for a node.js dev
to implement the
[OAuth2 Authentication Code](https://auth0.com/docs/get-started/authentication-and-authorization-flow/call-your-api-using-the-authorization-code-flow)
flow.

I have used many APIs in the past, but this one has been the most
challenging for me. I am learning more about OAuth2 and have been
making progress.

## The Old Problem

I was approaching this api from the wrong angle. I was expecting an
easier setup that possibly used a nifty package. The result would allow
the data to be easily accessible to the public. I realize now that the
only way to receive the data is to authorize a valid Lightspeed account
before any reads/writes can occur.

That being said, I still can't decide if this API is node.js developer
friendly. I'm constantly locked out due to cors errors.

### The Progress

I am able to use the uri redirect set on the
[Lightspeed Retail API Client Update](https://cloud.lightspeedapp.com/oauth/update.php)
page to receive and parse the `code` and `state` parameters to ultimately
send a valid axios powered POST request.

## The New Problem(s)

### Requesting an Access Token

I'm not sure how to store or when to use the various tokens I receive
during the whole auth process. I currently have it setup like this:

1. Reach landing page and make user click a link to start the Lightspeed
   auth process. They login with their LS credentials and agree to authorize
   this app to do their bidding.
2. Redirect back to `http.../oauth-redirect?code={code}&state={state}`.
3. Immediately attempt a POST request with the returned `code` url param in
   exchange for an access_token. I recieve a status code of 200, but the request fails.
4. Click a button to trigger an api call. I'm trying to test the Account endpoint
   `https://api.lightspeedapp.com/API/V3/Account.json`. These are the errors I receive:

#### POSTing to receive the access_token

`"error": "invalid_request"`
`"error_description":"The request method must be POST when requesting an access token"`
`"error_uri":"http:\/\/tools.ietf.org\/html\/rfc6749#section-3.2"}`

The error description doesn't make sense because the request _is_ a POST request..

#### API Request Errors

- `Access to XMLHttpRequest at 'https://cloud.lightspeedapp.com/oauth/access_token.php' from origin 'http://localhost:8000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.`
- Axios Error: `ERR_NETWORK: Network Error`
- `POST https://cloud.lightspeedapp.com/oauth/access_token.php net::ERR_FAILED 400`

The Network tab shows a `400 Bad Request` error.

I'm aware that I'm requesting a resource to an unsecure http:// origin.
This occurs on a Netlify hosted https:// site as well though.

My api calls are invalid because I'm unable to send an access token when using
a `Authorization: Bearer {access_token}` request header. I am unable to
receive the access_token during the POST to get one.
