/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "092101.html",
    "revision": "15c2615587082b5879ddde4a1fcf4144"
  },
  {
    "url": "404.html",
    "revision": "beac0ae55f5c818b38ef5d4b67fa6207"
  },
  {
    "url": "4am.jpg",
    "revision": "fe35b046bc28119109f0240e65eb2b09"
  },
  {
    "url": "about.html",
    "revision": "df47c811a985471e540eb08336cf76df"
  },
  {
    "url": "about/index.html",
    "revision": "f1bf78eabc3952282fa6d7053bd071a3"
  },
  {
    "url": "about1.html",
    "revision": "f98de027be4c39180636ddffa95ffc6f"
  },
  {
    "url": "about1/index.html",
    "revision": "2892175bec72bc661407d15b805367cb"
  },
  {
    "url": "assets/css/0.styles.7dffb78e.css",
    "revision": "29f6e8bc94b0d64e488178524673eed3"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "748c11d697f81813a5415cacb9983c13"
  },
  {
    "url": "assets/js/1.b59008fa.js",
    "revision": "9532aeed4fe3635a540e7397d86d40d8"
  },
  {
    "url": "assets/js/10.1b769671.js",
    "revision": "7a6705e7c0d38ac8a0cbabb06c596493"
  },
  {
    "url": "assets/js/11.86440d73.js",
    "revision": "ed181592d5904526571599c352590859"
  },
  {
    "url": "assets/js/12.2c5b9d20.js",
    "revision": "0628d4b23b1dee8d238820eeafe64ca8"
  },
  {
    "url": "assets/js/13.87767ad8.js",
    "revision": "819f7dbcd3452cb2341bab7a66facc3c"
  },
  {
    "url": "assets/js/14.08cd540e.js",
    "revision": "9f8104660c15efcf216f3014f44977ce"
  },
  {
    "url": "assets/js/15.cc7c533d.js",
    "revision": "be4e895d0b692ae5caf7d695891808e2"
  },
  {
    "url": "assets/js/16.11773fbf.js",
    "revision": "26fefa83a9c8aa8c4180c522d9794545"
  },
  {
    "url": "assets/js/17.691eb1ec.js",
    "revision": "a5dcc20df9a156b0f21df7eb25502098"
  },
  {
    "url": "assets/js/18.b6d4c18e.js",
    "revision": "254591dd8eb002b1d84013faaddc8325"
  },
  {
    "url": "assets/js/19.9d8582d5.js",
    "revision": "6ecd83f9c72957811d8dfc2a5d94d7b3"
  },
  {
    "url": "assets/js/20.928ba3d9.js",
    "revision": "c1acc91d57d05586442978b212e794f0"
  },
  {
    "url": "assets/js/21.4bb96f98.js",
    "revision": "85dd64db4cb43a6cf5b24aa47ebaed55"
  },
  {
    "url": "assets/js/22.2fef9d3f.js",
    "revision": "cb77254f2c0a1b603eee0889895b212e"
  },
  {
    "url": "assets/js/23.5fbbedcc.js",
    "revision": "872901351aa06c82fbb5606d87e23843"
  },
  {
    "url": "assets/js/24.2b09ca1b.js",
    "revision": "817b4fccf2c031b161c8440b87a7da4d"
  },
  {
    "url": "assets/js/25.2fcd360a.js",
    "revision": "249b09d3d5cc834925ab435036459ad3"
  },
  {
    "url": "assets/js/26.68edcb86.js",
    "revision": "541f356234d4ec7e064b3fa680ccbe98"
  },
  {
    "url": "assets/js/27.ce4eac67.js",
    "revision": "987639a8d8447249f42dd6cce46bdc66"
  },
  {
    "url": "assets/js/28.a37e0c1d.js",
    "revision": "3515993ea935dd8c4546b29cb36dcf48"
  },
  {
    "url": "assets/js/29.54e144e7.js",
    "revision": "ec18a051b8e46fc87c39abb981691c61"
  },
  {
    "url": "assets/js/3.3560d2e1.js",
    "revision": "1cba7345332263a1c356c0db6df6a040"
  },
  {
    "url": "assets/js/4.9dcaee7c.js",
    "revision": "00daf29e5f5918aae57096de4104c4b2"
  },
  {
    "url": "assets/js/5.38d4ca8a.js",
    "revision": "cae943d956590ca0d4d6d4469c0fadcc"
  },
  {
    "url": "assets/js/6.ba440355.js",
    "revision": "8ce4308fcddce8dcf2f01aea45490b85"
  },
  {
    "url": "assets/js/7.b800e9b7.js",
    "revision": "43698e86eacfa3bb236422bb2c361f9a"
  },
  {
    "url": "assets/js/8.f792bb50.js",
    "revision": "922d41c533de81e049ee9b3e2a652dc5"
  },
  {
    "url": "assets/js/9.41a03ff0.js",
    "revision": "8cbf234b208a3d62ddc140c6a1f94a37"
  },
  {
    "url": "assets/js/app.d36b2f6b.js",
    "revision": "a627fbcb673b671b3be8c191c5769be6"
  },
  {
    "url": "avatar.png",
    "revision": "748c11d697f81813a5415cacb9983c13"
  },
  {
    "url": "categories/index.html",
    "revision": "89e37c1e7ab99764f17f2d63f65527a9"
  },
  {
    "url": "categories/网络/index.html",
    "revision": "43e2ce1a9c54a63889a3fda1380ed94f"
  },
  {
    "url": "countup.html",
    "revision": "9ec68d8e1333eefc9f258f0cebceff1e"
  },
  {
    "url": "css/c1.html",
    "revision": "942a78ad77b9244c8b7a88def0ccc64b"
  },
  {
    "url": "css/c2.html",
    "revision": "588acc1d32192286c48f9eef7f2c127f"
  },
  {
    "url": "css/c3.html",
    "revision": "b01cef8406f177e3bfc703cdc577eff1"
  },
  {
    "url": "css/index.html",
    "revision": "351123327a12ebe0c3ba0256ed9564ff"
  },
  {
    "url": "css1/c11.html",
    "revision": "4f79c8c5598d89106198c806694d3844"
  },
  {
    "url": "css1/c12.html",
    "revision": "93aec3705f9a5cfa41f81e9d5fe9ecd7"
  },
  {
    "url": "css1/c13.html",
    "revision": "67dcdbb3453ce6933ce05fc3214e0c3f"
  },
  {
    "url": "hero.png",
    "revision": "e0c4bb3a423e79801e182d64dc69a147"
  },
  {
    "url": "home-bg.jpg",
    "revision": "6c0eec62335d3fcb6796d895e3b72bbc"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "ea7a6609e987505dcb78b4e16bc728d5"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "bd4bf2f793ef688ed776cf5517ee6f45"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "08f849b2108836f3dabad790b9958729"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "06491810f8144cd52e051af4e78ed869"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "33eb178a36e055cc2077ac345f1d99e2"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "db376cb020cbd3f3057628e94624300e"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "3af05607becadd37711bc1e4e9f9202e"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "0f31c6994eb2e33c66659c151ebafd0c"
  },
  {
    "url": "index.html",
    "revision": "38fb2930425f72f88cc4d700d00c547c"
  },
  {
    "url": "landscape-4961094_1920.jpg",
    "revision": "d83569188f2f599bf4d622f9abeadd97"
  },
  {
    "url": "landscape-5009868_1920.jpg",
    "revision": "c4f54c8f8ddec0fbc5491fa4101ecf40"
  },
  {
    "url": "mountain-1209650_1920.jpg",
    "revision": "96733240112d3e0c464eee41b684a777"
  },
  {
    "url": "mountain-1245916_1920.jpg",
    "revision": "24e5622f4374a7ad6ed47460504b5e55"
  },
  {
    "url": "mountain-656216_1920.jpg",
    "revision": "f3f067a693ff1f140f895db53f6e80c5"
  },
  {
    "url": "snow-mountain-5012482_1920.jpg",
    "revision": "761936ff294395e2e1109a32546559ea"
  },
  {
    "url": "tag/index.html",
    "revision": "7edd70d806b7f409ca92d5f5b2bb910d"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "1986da0db89dde8a80829dbeea6e4829"
  },
  {
    "url": "timeline/index.html",
    "revision": "3ef6ac3f46453e61dd7ca684a49da27a"
  },
  {
    "url": "timeLine/index.html",
    "revision": "3add4992e5ad0868486df8311bd252d5"
  },
  {
    "url": "timg.jpg",
    "revision": "c8bfaeb8c3353cfc29fbad9eedfabb7d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
