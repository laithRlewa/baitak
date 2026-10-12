'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"404.html": "e5f990bc873a8169c5c69149a440e405",
"assets/AssetManifest.bin": "648626f2b990c02eeb8d755fc6a3c216",
"assets/AssetManifest.bin.json": "59c4bb73ca74b5bd02227797bdae246b",
"assets/assets/fonts/ArefRuqaa-Bold.ttf": "906605b71ac2755f3ab3a43a58e34372",
"assets/assets/fonts/ArefRuqaaInk-Bold.ttf": "3a0e80c1928f56ed1be9d269a2e6a195",
"assets/assets/fonts/Cairo-Bold.ttf": "3c3c991bced72ef76a0d75f5185bc8d6",
"assets/assets/fonts/Cairo-Regular.ttf": "23fb87e740b50a81869174f3bcecd720",
"assets/assets/fonts/SpaceMono-Regular.ttf": "49a79d66bdea2debf1832bf4d7aca127",
"assets/assets/images/2.0x/baitak-logo.png": "8dc87a335286ed381faef4cee355260e",
"assets/assets/images/2.0x/baitak-mark.png": "1e65e132c14a07f8edb928efa604e28f",
"assets/assets/images/3.0x/baitak-logo.png": "0ca70632e79d860abc0f97a1529910ec",
"assets/assets/images/3.0x/baitak-mark.png": "4edb7d5762498d5e63cac69acaa696fd",
"assets/assets/images/android-icon-background.png": "e53fa7eccce978a629193e0ff079951e",
"assets/assets/images/android-icon-foreground.png": "34b2f202503702c2628e78b84cfd5572",
"assets/assets/images/android-icon-monochrome.png": "1e097dab989759fc0b69440092ca22cd",
"assets/assets/images/baitak-awalan-logo-sky.png": "f2ff55532f6e25f9f84340c3c079c0f3",
"assets/assets/images/baitak-awalan-logo.png": "8d28bd4771efff83e57184edc3653432",
"assets/assets/images/baitak-logo-sky.png": "c6746350b74be0dc7a1da703d58b7e15",
"assets/assets/images/baitak-logo.png": "6c00a47c937b2ce49cb0c7a5dbe24420",
"assets/assets/images/baitak-mark.png": "b0e56ccfe85f170d27bcb2ae0ecd1c80",
"assets/assets/images/banners/delivery.png": "50e67bbf663eee9289c165bb11411010",
"assets/assets/images/banners/new.png": "3b3bc2a12b209e5d80c7c8d266d86ff7",
"assets/assets/images/banners/offers.png": "2d4240ab24cc8b944d3294e245317a9c",
"assets/assets/images/banners/quality.png": "79610b01a0606142668f4cb83850c9a8",
"assets/assets/images/favicon.png": "d9f444efbdfbe7931aa93beada07318a",
"assets/assets/images/icon-512.png": "a3d166ff145eb4e9b90720d8cecaa687",
"assets/assets/images/icon.png": "160ef31de71dcbac96deb31693126052",
"assets/assets/images/khan-furniture-logo-v1.png": "1b321678b8cdc912eb9b3bfba230b50e",
"assets/assets/images/khan-furniture-logo.png": "1b321678b8cdc912eb9b3bfba230b50e",
"assets/assets/images/print-header.png": "af612894fca76e94faff5b37e4d29ad3",
"assets/assets/images/products/bed.png": "d4c98dfaf98e219ac36284616a0a53cf",
"assets/assets/images/products/bedding.png": "b13a7ce205fe1294e1cd597734743849",
"assets/assets/images/products/cabinet.png": "a18ae4e07392026a6cda0dd1387693cf",
"assets/assets/images/products/carpet.png": "29ed3f3a2bcc2db605406f0c6ab71680",
"assets/assets/images/products/chair.png": "a8ea04c407e704566e2e1c80cdf31cfd",
"assets/assets/images/products/curtains.png": "3639efba4ce7c2b45d9a34e6d781d966",
"assets/assets/images/products/generic.png": "200a553cf35da3a8bbd2387b0eb60074",
"assets/assets/images/products/lamp.png": "09742b50b20d4b2779097ab6e1da1572",
"assets/assets/images/products/pillows.png": "8d65992120403229b0cd0f3cb5c2eb38",
"assets/assets/images/products/sofa.png": "8b4fbc38454ada89dbbb5dbf82ec505c",
"assets/assets/images/products/table.png": "539e8c2c7252991a0c2a90c443ba6440",
"assets/assets/images/products/tablecloth.png": "baa17d810ae5c04f168af5986b51bd57",
"assets/assets/images/sayed-wasit-sheet.jpg": "0df2990b3ef97bc35a09278b3fba3b14",
"assets/assets/images/splash-icon.png": "1a6bca14d65837fcc431ed3a283709ae",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "52a71592d13c86723db076cc2832f79b",
"assets/NOTICES": "10b2c285f1401ee96317615d3b47c287",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_local_notifications_web/web/notifications_service_worker.js": "087634de8a8c1c49d00bcd212bf7feb4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"drop.html": "fe437a4f3de482cd42d3b016dbe1ae8e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "48461b137276cdac175933d591a3d0b4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "a3d166ff145eb4e9b90720d8cecaa687",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c4d0111c3ddcd6bd76ead499cbaa4632",
"/": "c4d0111c3ddcd6bd76ead499cbaa4632",
"main.dart.js": "b6e409dc2ede7a4d50b59c7e5000b718",
"manifest.json": "16e314118407f534131f176d3bda5b91",
"privacy.html": "7c0b144ab5c8b0faabd05de47c11f011",
"version.json": "549298e135dc50a995bdf20951eb84f3",
"_redirects": "ea9de1ac4d883e9178daa6dd1c68de53"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
