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
    "url": "404.html",
    "revision": "dc62f3143c5008e8fcf6bf1083d8e09f"
  },
  {
    "url": "about.html",
    "revision": "a2b3ee2d3be7d3055e05fffb3a66dc57"
  },
  {
    "url": "about/index.html",
    "revision": "9d2e5dfcbaf2296dd8b01f79e9d0cdba"
  },
  {
    "url": "about1.html",
    "revision": "24ecdf66815888a6bb0049a346600c1a"
  },
  {
    "url": "about1/index.html",
    "revision": "ff7ce1e76f3fa27a68bd1613ec67de01"
  },
  {
    "url": "assets/css/0.styles.7f98414a.css",
    "revision": "963943070e938eb7c895cd4618adebe8"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "d6273b6d5e76aff01cf7730fde063c64"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ddd7d419.js",
    "revision": "9a679c87f3c93597995b783461a7b9d6"
  },
  {
    "url": "assets/js/11.788c1f90.js",
    "revision": "02c09245191d5735680f1dc71569d46d"
  },
  {
    "url": "assets/js/12.7393b796.js",
    "revision": "b42efdb149f288f41522da5bc72457a6"
  },
  {
    "url": "assets/js/13.9d8a4f61.js",
    "revision": "59219216acff3cfeb084c05bedd669b5"
  },
  {
    "url": "assets/js/14.700c2867.js",
    "revision": "64ff8a08fa4d08da5545008fa8e85c17"
  },
  {
    "url": "assets/js/15.4e3334e9.js",
    "revision": "9d011669560ae387b662d9051ccd8db1"
  },
  {
    "url": "assets/js/16.61162a02.js",
    "revision": "db21afa7ff902783136b0fb5be190349"
  },
  {
    "url": "assets/js/17.a6df05a3.js",
    "revision": "a57a78b6e42ca5a363f8e5a15af70897"
  },
  {
    "url": "assets/js/18.5de2d377.js",
    "revision": "ec4fc5d403b57bddd5c22d8ad02f8a37"
  },
  {
    "url": "assets/js/19.d964a453.js",
    "revision": "b52d3e2a2537e91eac7ca61d99408d81"
  },
  {
    "url": "assets/js/2.e69180dd.js",
    "revision": "0621bbb87261ec7788c8097fa4530257"
  },
  {
    "url": "assets/js/20.3d165e7e.js",
    "revision": "f1e57917d058911bfa4b88b44e5adb95"
  },
  {
    "url": "assets/js/21.05e0c9a9.js",
    "revision": "c7fc5cfa1a94a389021180d00cba615b"
  },
  {
    "url": "assets/js/22.38c10638.js",
    "revision": "6e913e70bab7d72c17ca76f125e5c7b7"
  },
  {
    "url": "assets/js/3.6c760538.js",
    "revision": "04d25a85e541772db31c2f9edf22c56a"
  },
  {
    "url": "assets/js/4.2e464432.js",
    "revision": "0557a028934c8d1f370b4258f01dec3a"
  },
  {
    "url": "assets/js/5.16a65527.js",
    "revision": "5de8f7fd981611a3e58834882e27528c"
  },
  {
    "url": "assets/js/6.3f105464.js",
    "revision": "ee6cf75a29bad5b5cba210626cea2556"
  },
  {
    "url": "assets/js/7.2ab594c4.js",
    "revision": "4620e14b1195a6918b6c5f6c3f8fbb25"
  },
  {
    "url": "assets/js/8.b03be5bd.js",
    "revision": "01c657b57dd2a7aa4308198a560e7195"
  },
  {
    "url": "assets/js/9.76eb0083.js",
    "revision": "86e0944978f5d6e722dc9db2afd7cb60"
  },
  {
    "url": "assets/js/app.cb3d13d5.js",
    "revision": "0fde26359e2389ee0673a1ec9c944bf1"
  },
  {
    "url": "countup.html",
    "revision": "e3dffc89f31c9a3011328906e1897ad5"
  },
  {
    "url": "css/c1.html",
    "revision": "26e73c66cf82c7eebfae6083a3626368"
  },
  {
    "url": "css/c2.html",
    "revision": "6678956af5af43c5aaafb2958aa6a71e"
  },
  {
    "url": "css/c3.html",
    "revision": "60ea8b9643cd2e0c87cc5cca89b0c3a8"
  },
  {
    "url": "css1/c11.html",
    "revision": "b8596103981693dbf93281a99462bb01"
  },
  {
    "url": "css1/c12.html",
    "revision": "342910573b1c4cd0ec4fb4e8ea05a505"
  },
  {
    "url": "css1/c13.html",
    "revision": "561598897d3b92c51569e8f8d702fa7a"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "85f18792127873ecbd6f54a93b373ca7"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "85f18792127873ecbd6f54a93b373ca7"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "85f18792127873ecbd6f54a93b373ca7"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "85f18792127873ecbd6f54a93b373ca7"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "85f18792127873ecbd6f54a93b373ca7"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "85f18792127873ecbd6f54a93b373ca7"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "85f18792127873ecbd6f54a93b373ca7"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "85f18792127873ecbd6f54a93b373ca7"
  },
  {
    "url": "index.html",
    "revision": "56b936c959f342e7e1275798b8f59ed3"
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
