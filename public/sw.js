const BASE_CACHE = "basecache_v1";

// This is currently not used, because lucascranach.org must provide headers for us to see their requests. But the provide good caching headers, so we don't even need to think about caching.
const IMAGE_CACHE = "imagecache_v1";

// dynamically created js files are not in here
const BASE_FILES = [
  "/",
  "/css/template.css",
  "/fonts/roboto/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
  "/fonts/roboto/KFOmCnqEu92Fr1Mu4WxKKTU1Kvnz.woff2",
  "/fonts/roboto/KFOmCnqEu92Fr1Mu5mxKKTU1Kvnz.woff2",
  "/fonts/roboto/KFOmCnqEu92Fr1Mu7GxKKTU1Kvnz.woff2",
  "/fonts/roboto/KFOmCnqEu92Fr1Mu7mxKKTU1Kvnz.woff2",
  "/fonts/roboto/KFOmCnqEu92Fr1Mu7WxKKTU1Kvnz.woff2",
  "/fonts/roboto/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2",
  "/fonts/MaterialIcons/MaterialIcons-Regular.eot",
  "/fonts/MaterialIcons/MaterialIcons-Regular.ttf",
  "/fonts/MaterialIcons/MaterialIcons-Regular.woff",
  "/fonts/MaterialIcons/MaterialIcons-Regular.woff2",
  "/favicon.ico",
  "/images.json"
];

this.addEventListener("install", event => {
  event.waitUntil(
    caches.open(BASE_CACHE).then(cache => cache.addAll(BASE_FILES))
  );
});

this.addEventListener("fetch", event => {
  // update cached request - for this we start the originial request to be able to clone it later on.
  // catch to empty as failed request aren't interesting
  const updateResp = fetch(event.request).catch(() => {});

  // serve a cache hit or the update response. Fail if neither is available
  event.respondWith(
    caches.match(event.request).then(response => response || updateResp)
  );

  // wait for cache update
  event.waitUntil(
    caches
      .open(cacheNameFromURL(event.request.url))
      .then(cache => cache.add(event.request, updateResp))
      .catch(() => {})
  );
});

/**
 * This returns the cachename for a given URL.
 * By default it uses the BASE_CACHE and for responses from
 * lucascranach.org it uses the IMAGE_CACHE
 * @param {String} url Url to decide the Cache for
 */
function cacheNameFromURL(url) {
  // start includes at :// to allow switching to https
  if ((url.url || "").includes("://lucascranach.org/")) {
    return IMAGE_CACHE;
  } else {
    return BASE_CACHE;
  }
}
