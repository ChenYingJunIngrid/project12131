'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f2decd1a4d528485d39b91b999538e56",
"assets/AssetManifest.bin.json": "e01c1fb4103ed8a31a2fff71cad91325",
"assets/AssetManifest.json": "77ef014f264fc83f97ded63951665e66",
"assets/assets/abandon.mp3": "9c33a04c04163144baf18dc96be1eec9",
"assets/assets/abandon.png": "994cf5dafa711205a34caf9c423af651",
"assets/assets/abandonment.mp3": "f95693327f6e5f03e56e14066d06a6b5",
"assets/assets/abash.mp3": "1f484763afd057df89c599fba734a0d3",
"assets/assets/abbreviation.mp3": "1b8996705c4d81866c79934123e5047d",
"assets/assets/abbreviation.png": "bd3c4ff14061d0e9a5ba476f3de9a81d",
"assets/assets/abduction.mp3": "ce9a3188f81b76e43a106eab146cd016",
"assets/assets/abide.mp3": "6d96c649b18356d5a26cc19117781555",
"assets/assets/abide.png": "66ee33da24c81287fbbd5f07e43b88a1",
"assets/assets/ability.mp3": "5c1a09f2201dcf67882f0a254b0e3932",
"assets/assets/ability.png": "d8c12fe9bcb10a77c6c37c92feb34717",
"assets/assets/able.mp3": "280f77cf7e1c759ac70d2610f2aaa2e7",
"assets/assets/able.png": "5638e7c59a966d51db6c0806bd6730af",
"assets/assets/abnormal.mp3": "5b93c741a1629085d371fb83e968e792",
"assets/assets/abnormal.png": "f3ee91615197719356f3df56de11e53e",
"assets/assets/aboard.mp3": "f54c9919329a6ebacded89fd2f42a8b6",
"assets/assets/aboard.png": "4c5e86565969a148be4db32f877fd11f",
"assets/assets/abolish.mp3": "c8a73e25a0e8944fef328d2987c65403",
"assets/assets/abolishment.mp3": "0686b7f4586f0dc86952a551c40dfbed",
"assets/assets/abolition.mp3": "bbb366f7fd72d630bbef2453f5436624",
"assets/assets/aboriginal.mp3": "15d473c67c595cee00b771df3ef00ce5",
"assets/assets/abort.mp3": "5480351a3a38124def1ed25ce1f44ddd",
"assets/assets/abortion.mp3": "19906c446951f07f470c13e7daad2a45",
"assets/assets/abounding.mp3": "6dd8c7d692b1a79a99b7c40af01c10a9",
"assets/assets/abounding.png": "f5c7d1f88d816d1a6900e34ca6fd9908",
"assets/assets/about.mp3": "c777ed9fe653cae1b93a2df084fe14bd",
"assets/assets/about.png": "5902542e0c2de8da598ff6f50a57a51a",
"assets/assets/above-average.mp3": "bf090f0968fed44a683e86e6ea4675fb",
"assets/assets/above.mp3": "a41f37d67bc3d9a37e59af3edbd328d9",
"assets/assets/above.png": "a54773b5e578ae4eafd0b737a87a4903",
"assets/assets/abrasion.mp3": "c2e6bb44f6607476ae4695a801b0fd6e",
"assets/assets/abroad.mp3": "74a1e1f1ebd65fee9c5d49ba01f4d5a6",
"assets/assets/abroad.png": "e0c0a46a407fcb6f14e16f6899930071",
"assets/assets/absent.mp3": "90b37c11b343f7fb46af646b9b029407",
"assets/assets/absent.png": "86f3a54c83d9814b1837224f63aaecd9",
"assets/assets/absorb.mp3": "ea822877c0efa62884d71cdd816edf0d",
"assets/assets/absorb.png": "51cbf7a54230b0e7180d5c042a35b352",
"assets/assets/accent.mp3": "c9f41bd776145a3f34e7079e4139328a",
"assets/assets/accent.png": "1ddea06b57573dff722a5e272e2bdb9d",
"assets/assets/accept.mp3": "ba9a578b0dd968a47eda60adb323d6e0",
"assets/assets/accept.png": "dd1ca0057b17bf08d7f9c372133aff7e",
"assets/assets/acceptant.mp3": "d72999c8fd2086beefe7e715370632a5",
"assets/assets/acceptant.png": "dff6959d0c41554e09061052b4b3e6b6",
"assets/assets/accident.mp3": "84bed3e66904b5fc1e824b3d6b491af6",
"assets/assets/accident.png": "e924d4269c41df8335dbffc22bbd18e6",
"assets/assets/accord.mp3": "6b6a16dfb0949e4a0169368dac7c6367",
"assets/assets/accord.png": "45187eae076f0f03d7d4cd44af133d0c",
"assets/assets/account.mp3": "b8a857b117e99341b6c34ef7ff1a59cc",
"assets/assets/account.png": "e526a7dd511f461094a8ea60ea4a2561",
"assets/assets/accountant.mp3": "4cb760fa2f650c27b24439b04e131b8e",
"assets/assets/accountant.png": "a69da4c93a5c939c8efaa2df116e8762",
"assets/assets/accurate.png": "9592a4f236ab2d2b3885f611c0c3b421",
"assets/assets/accuse.png": "f463a3b1bfb3e4833abadda9ee28cd95",
"assets/assets/ache.png": "b2e061a895d92ce73d6309120cb9dc04",
"assets/assets/achieve.png": "45d3a0e9c4ced470834a29beb1eb1cb4",
"assets/assets/achievement.png": "e81f1dbcc37e4e4d7e2e9a1fd5cdd124",
"assets/assets/across.png": "c15a466bae22e1e2e1159c00adde9f42",
"assets/assets/act.png": "f3b315f2db7a3f78fb74abcf0eb976a7",
"assets/assets/action.png": "01ac4cad4ed69fbdea16715819063e7f",
"assets/assets/active.png": "2824177bba540382c2b035a023c4b551",
"assets/assets/activity.png": "2407e822a21f24136e4a933953c30250",
"assets/assets/actor.png": "462611d97520b9f29de48d5fd8f4f315",
"assets/assets/actress.png": "42cdaff5f2187519fc5aca47d248c223",
"assets/assets/actual.png": "02663bdddab4347e0bd776e6ce0681a3",
"assets/assets/actually.png": "a9a8978bd9f4fa5bf22841598f414dca",
"assets/assets/adapt.png": "676fe2125ac7355829b56d7c7b9efecc",
"assets/assets/add.png": "614c7777765a25aa22a9cbc02136a623",
"assets/assets/address.png": "b4716d4604338865e5310c4e7d64a016",
"assets/assets/admire.png": "d303316467a82e824dcb3470acd43a51",
"assets/assets/admit.png": "c87bfd2143a40857ae16c674068d3a93",
"assets/assets/adopt.png": "ce51703bb482ca357c047aebadc4db43",
"assets/assets/advance.png": "57acb30b28adfb3f855409d32442007d",
"assets/assets/advantage.png": "75bec7ee0311c56514c0012beb814ca4",
"assets/assets/advertise.png": "112252543535fa872408d8af6b3b3701",
"assets/assets/advertisement.png": "2d41d819237d39e4e673e23b4a1ffec6",
"assets/assets/advice.png": "0dff2cfb9d9ecfb000e683a15ba6554c",
"assets/assets/advise.png": "e99274607b575b0ce381f67fb6aa78a1",
"assets/assets/affair.png": "1a3baee6e4bc04082eb0b15c09d6c631",
"assets/assets/affect.png": "2447777889ff20fc06cad04340177426",
"assets/assets/after.png": "b6335850b20e314e8acf314f6eefd38c",
"assets/assets/again.png": "c19d30bfa8b548d1f6e88231d09907ae",
"assets/assets/against.png": "051be2c869078544f32805153d0fe916",
"assets/assets/age.png": "c0f6e36761958434406c01cbf4c52043",
"assets/assets/ago.mp3": "55ba13d087b4b98a2312f65c61412c91",
"assets/assets/ago.png": "5f465ca98688b9286381639ba25fafa0",
"assets/assets/home.png": "66629f0e3d2f9f652062e0594afb2985",
"assets/assets/IMG_5126.png": "1c744750540970c52baaabea9e6d8d50",
"assets/assets/settings.png": "bad76d3c5edb83b91a02398161ed0b0d",
"assets/assets/stats.png": "e8fa67c6d4d0a12ab642de37b0bdaf12",
"assets/assets/store.png": "920545eac384091d249f0d28a6e6f587",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4bb04b31071b1dfb96f3097b78a6a3d3",
"assets/NOTICES": "bad19122df55bff08509e29d90d55176",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "e398ee3f5228d4e5bfe3d080c3816e71",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bc6d48089dd96aa72b43ed6e777f5371",
"/": "bc6d48089dd96aa72b43ed6e777f5371",
"main.dart.js": "6f4accd0ecfdd56e81418ae4df2364fc",
"manifest.json": "cbe87f798f81e2b9a4f32bd1df2f138d",
"version.json": "c0571f192d49f2042b65ab6faf69625e"};
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
