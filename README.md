# Lightspeed API Testing

There is a very limited amount of help for a node.js dev
to implement the
[OAuth2 Authentication Code](https://auth0.com/docs/get-started/authentication-and-authorization-flow/call-your-api-using-the-authorization-code-flow)
flow.

I have used many APIs in the past, but this one has been the most
challenging for me. I am learning more about OAuth2 and have been
making progress.

## The Old Problem

I was approaching this api from the wrong angle. I was expecting an
easier setup that possibly used nifty packages. The result would allow
the data to be easily accessible to the public. I realize now that the
only way to receive the data is to authorize a valid Lightspeed account
before any reads/writes can occur.

That being said, I still can't decide if this API is node.js developer
friendly. I'm constantly locked out due to cors errors.

### The Progress

I am able to use the uri redirect set on the
[Lightspeed Retail API Client Update](https://cloud.lightspeedapp.com/oauth/update.php)
page to receive and parse the `code` and `state` parameters to ultimately
send my first ever valid axios powered POST request. I can received a 304
response now after authorizing with Lighspeed!

## The New Problem(s)

### Requesting an Access Token

I'm not sure how to store or when to use the various tokens I receive
during the whole auth process. I currently have it setup like this:

1. Reach landing page and make user click a link to start the Lightspeed
   auth process. They login with their LS credentials and agree to authorize
   this app to do their bidding.
2. Redirect back to `http.../oauth-redirect?code={code}&state={state}`.
3. Found a way to store the `code` url param so I could use it in a POST
   request for an access_token. I can't seem to get an access_token using the
   param in a POST
4. Click a button to trigger an api call. I'm trying to test the Account endpoint
   `https://api.lightspeedapp.com/API/V3/Account.json`. These are the errors I receive:

- `Access to XMLHttpRequest at 'https://cloud.lightspeedapp.com/oauth/access_token.php' from origin 'http://localhost:8000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.`
- Axios Error: `ERR_NETWORK: Network Error`
- `POST https://cloud.lightspeedapp.com/oauth/access_token.php net::ERR_FAILED 400`

The Network tab shows a `400 Bad Request` error.

I'm aware that I'm requesting a resource to an unsecure http:// origin.
This occurs on a Netlify hosted https:// site as well though.

## General Problems | Possible Solutions

I'm not sure if I should save the access_token in the same way as the `code` url param.
I can't figure out the right way to use the `code` param to have an access_token returned to me.
I believe my api calls are invalid because I'm sending the `code` url param by mistake
when using a `Authorization: Bearer {access_token}` request header, probably because I have no
other token available to me.
