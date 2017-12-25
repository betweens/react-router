/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/0.bundle-194487ba312aa92f9e13.js","cc8d4542170e795259e5b6ee5cb5891c"],["/1.bundle-f6a3b2d82079ff9636ee.js","5b6ac812b245433b9ab45f5b673ed530"],["/10.bundle-a383c1e7a998db4a97f0.js","7e05d1e2701243d164b274d0862b072a"],["/11.bundle-217a2c9d2d6ca8563c29.js","4cc1cf0acdbf4c8de381a71d6f5055d6"],["/12.bundle-6655aa9f73f9d45d286b.js","d7663da97146cf4b583c1d8503ac797b"],["/13.bundle-306a660b1c03d3a6c85b.js","1abcabf0d0551874175724ceb1a0f38f"],["/14.bundle-df8f3aa8dfbc0bc1861d.js","6ba6331d906fc6493fb4ee6c276ee01f"],["/15.bundle-b3e509e344bbbe425c3d.js","e8d1645d75561baf941325e2bafc12c9"],["/16.bundle-8c612071b628194d5150.js","ed1c1136b1886adcf4a91ca1fc6b70b9"],["/17.bundle-72d21a65906de6c070ff.js","cc95a84f1b6270f04efbb84e55d172c8"],["/18.bundle-3a54f644e015c3def6ae.js","8ddd7f1e74f6146dea14c717b98351ca"],["/19.bundle-029efe3289069ec6d14b.js","bc1d47f7b162866c7543ddbf6f1cf0ad"],["/2.bundle-3f60e771122d85a1dde8.js","14ad09be93ffa2f2d89132628b740107"],["/20.bundle-0b74940aab78ec880551.js","cc2f899218a5797a0c3fab6bb3400028"],["/21.bundle-60be1f3b813dd2d377ce.js","d795a18d130cfde5bb3861e1b3fc882a"],["/22.bundle-a37926312c41a6faaaaf.js","ad61dfb35b1a44fcd00bd2298bcb95b3"],["/23.bundle-d714a6dc84cee0432f09.js","4b99046aacacc433d432bda9450ce0e9"],["/24.bundle-1a24d670c0deaa0981b8.js","d18027f10c5347e1adc518ca346be257"],["/25.bundle-c31b6f01898636b51688.js","6489fc717f5f88c93f89a418667de147"],["/26.bundle-c949041fecb9ba3a42a9.js","fc9b3e63b2f465768348d356410fdccf"],["/27.bundle-985ed3b4f82b862cbd25.js","0c78a1a4edc74ac21d9049ffb9d7c2df"],["/28.bundle-ab308205b238f40a793b.js","1f30f49e3bb6d0dbfb6a4b54225d7ac4"],["/29.bundle-2b561f2249c41fbe2248.js","10462ccd096446731ccf29bf2db9b84f"],["/30.bundle-ef136fa15ee92041f8b6.js","ef466c3e0570e422c6b4c5c6ec3ff0d9"],["/31.bundle-9f955049d628c73fb9f9.js","9c2a208d5db971314575952fa38bfce6"],["/32.bundle-89a715629c6a5184d9db.js","7484e5a7fb0947280f98a1d46ba9df9d"],["/33.bundle-681fc0eb1334c7a84989.js","81b5ee5cf6a898dd660c2a428e07e562"],["/34.bundle-0528cbe4315392b8d7c9.js","ddf57ec5a52facbb88d2f83abb17c97b"],["/35.bundle-f64f29332847ed103a27.js","1832d34913e4ef701e3027529eb966f8"],["/36.bundle-628dbf99e5c975ac7b00.js","9dd8d65fdbd513017a8acafe30eb596d"],["/37.bundle-7472b12f7a49d70ed191.js","ad8d3509be0be6603541afe88b1908cb"],["/38.bundle-a76307329d478efc0f58.js","ebb6adab4847fa8006af05b66735717a"],["/39.bundle-2f2473d31ff5ed434768.js","923c2aa167a5e967e652e6a0b4bf6037"],["/40.bundle-19ec98b3016e4763416e.js","a6f10d2c4350fa6537342cac8d9559ad"],["/5.bundle-0744f426720da746255e.js","98d079e8208868a2eab2453c9c3f8f94"],["/6.bundle-a8a857a7328c80cecc37.js","da2a0b35ae535d522f43789c77866c20"],["/7.bundle-871a5525eb43033b6f35.js","3c5101182ab68738c99b4de74070746f"],["/8.bundle-a29cd3b097cd85473bd6.js","4b0933182198a00922a648186459f7ec"],["/9.bundle-c463becbeeccd03fef35.js","550ae8c2c6bee6ad032a150153f27bbc"],["/android-chrome-144x144.png","0aa71a5783edc358767e6cb00795b329"],["/apple-touch-icon.png","59ce700521fe0556c5830fe58bf96c17"],["/browserconfig.xml","5a8f27e7dd0c369028679223d0465728"],["/bundle-6a22de8657604a766c25.js","d8c020c435eb4e52ef4b31404d780ac2"],["/favicon-16x16.png","b94fcb5f7364b3e26ae6ede16b719ea3"],["/favicon-32x32.png","cfa43c1bad9c17b98614e7ff9aa596a9"],["/favicon.ico","f4706ad25b9e9ca9720932652ec342ca"],["/index.html","6edb90835e6f266c85cb1b5612e46b40"],["/manifest.json","63caf6242da7528888db67541292f0b5"],["/mstile-150x150.png","886bf4a2c7300bd9836059809a3089bf"],["/react-square.png","3342b3152ae96e4e16ca780cffc8d1bd"],["/safari-pinned-tab.svg","1146ba4a2a492be098bd76ecf45f9575"],["/vendor-decb6e4010dbe0d680e1.js","6d4c899ae94ece728f6710b541a6136d"]];
var cacheName = 'sw-precache-v2-react-router-website-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {
                credentials: 'same-origin',
                redirect: 'follow'
              }));
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







