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

var precacheConfig = [["E:/Code/Personal website/JarvisCao.github.io/blog/public/2020/08/30/hello-world/index.html","c238d6ae66a54080d005ce3748cc5127"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/404.html","0d8018f586a7543a2199f441bf139899"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/about/index.html","da74f622b4e6ef55d718cfed8b4b1c09"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/archives/2020/08/index.html","72e82646ccfac6da96d69b0026618ea4"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/archives/2020/index.html","4602d6a1226cef62266884ab427f99c6"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/archives/index.html","d488acb0d369e2051b728a86aceec1f7"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/categories/index.html","23cf16cbc6c76743e6b3d88bee1be1a2"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/css/VolantisTags.css","12843f821bd9b3cef9766894247cfec4"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/css/cur.css","c4b0e1268cf12f1729b27a1e9ed72981"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/css/iconfont.css","a0a72c4490f747df6aacc7f10393241d"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/css/index.css","961a9c91c1f8bdffba76da6f3ebd6c4a"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/css/volantis.css","f3aca4b4401e9195be5aead62e658065"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/img/alipay.png","9637cf4bc5a6c19a5157cf4d29793126"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/img/wechat.png","60b8cd6ae99beb601cf76b3322df0003"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/index.html","2bab252fae497f85dbb979f88c341e57"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/js/VolantisTags.js","77f42ba5dd88fe2c41f0def95a89a0b4"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/js/botui.js","8b886514e19ac87e635dcada4f5fec2e"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/js/third-party/calendar.js","dcc917fb2a7e1671ef630845456985df"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/js/third-party/fish.js","295e17b52f5c795ad5dd579d811cdb4b"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/js/third-party/languages.js","1cad45b801777e910a5ca1120238a377"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/js/third-party/snow.js","9229efbff74f8f45db54913b9b7f852b"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/js/third-party/star.js","2f52aac57b49e51f30cb5e52c708e1f5"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/js/third-party/weather-config.js","989a06e4e393a664606564224afc45fe"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/js/third-party/weather-plugin.js","e8fa2b39bc2fa4db22088f41cbf2d6a4"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/js/tw_cn.js","0176913a28754a766910352489a24a69"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/link/index.html","501d407ce26f26a8300da7ebfa68107e"],["E:/Code/Personal website/JarvisCao.github.io/blog/public/tags/index.html","dae6cb749b67bef37c71517cc47dbfd9"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

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
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
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

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
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







