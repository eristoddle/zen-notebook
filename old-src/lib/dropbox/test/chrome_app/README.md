# dropbox.js Test Chrome Extension

The code in this directory is used to run the `dropbox.js` unit tests in the
context of a Chrome extension. Do NOT load this Chrome extension in your
regular browser.


## Security Concerns

The private key for the Chrome extension is stored in the
[test/keys](test/keys directory). This is necessary to get a consistent
extension ID, which shows up in the OAuth2 redirect URI. On the downside,
anyone can use the private key to package any code under the test extension's
ID.

To mitigate against this risk (and to provide a consistent test environment),
the `dropbox.js` test suite always loads the test extension in a throwaway
Chrome profile. The easiest way to stay safe is to always use `cake chrometest`
and `cake chrometest2` to load the test extensions.
