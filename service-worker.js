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
    "revision": "71589fa77d6c926c8869f6e293a24d88"
  },
  {
    "url": "about.html",
    "revision": "e24f188c2d9f7f9f2e0b1c291bba8058"
  },
  {
    "url": "about/index.html",
    "revision": "80558bb13a96a65bc888c851ecb01299"
  },
  {
    "url": "about1.html",
    "revision": "e501b8a75e476008599aaac5d9214fbb"
  },
  {
    "url": "about1/index.html",
    "revision": "fd226d484fc0de2cf534dd7f59003506"
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
    "url": "assets/js/10.8bb4dee5.js",
    "revision": "905afcf38602d6967044fb2f768475dd"
  },
  {
    "url": "assets/js/11.eb637b96.js",
    "revision": "d7bb6e0f9dc055e0adbb2131ba6a04b1"
  },
  {
    "url": "assets/js/12.77c2623e.js",
    "revision": "06b41ac7a8c5304d89acdb1830216069"
  },
  {
    "url": "assets/js/13.dfd2c768.js",
    "revision": "77fa4cd3dae7c5d3785a8c3bd79a5d3d"
  },
  {
    "url": "assets/js/14.09030c20.js",
    "revision": "98ead425df45beb74767159d70b76a4c"
  },
  {
    "url": "assets/js/15.861b19ab.js",
    "revision": "a153d7d00d32c3ec9ca96abf0763a742"
  },
  {
    "url": "assets/js/16.ac98b416.js",
    "revision": "1e84ab77245c7f95e54e2e848becf2d2"
  },
  {
    "url": "assets/js/17.1a9a87cd.js",
    "revision": "bea6110788f1096310e0fa7765cce197"
  },
  {
    "url": "assets/js/18.9f43fd19.js",
    "revision": "11e8b1835958e748275f1052bafc1935"
  },
  {
    "url": "assets/js/19.f7468ac7.js",
    "revision": "3134b7c45100169dd7ee36d63a4332c8"
  },
  {
    "url": "assets/js/2.1ac90781.js",
    "revision": "9c6238f8125f9d64226e31d3b50d973e"
  },
  {
    "url": "assets/js/3.2cf73e3f.js",
    "revision": "a0eba483ac590928a2423e6cafe22239"
  },
  {
    "url": "assets/js/4.fb39aa92.js",
    "revision": "6085fc9a529729bf507c09c892c000d3"
  },
  {
    "url": "assets/js/5.621c451c.js",
    "revision": "4d3724043c58be60113e4c80311f6f75"
  },
  {
    "url": "assets/js/6.e16e892c.js",
    "revision": "79d80e3a7e7713024d0ce7ef662d9d26"
  },
  {
    "url": "assets/js/7.9104268a.js",
    "revision": "69569f8377d2b396bb4c151640e8a36a"
  },
  {
    "url": "assets/js/8.08b22612.js",
    "revision": "7027a1ecb09522dc3e74cab087b41fdc"
  },
  {
    "url": "assets/js/9.a7be00e1.js",
    "revision": "5cf58cde38f7907762327391ec2c97e9"
  },
  {
    "url": "assets/js/app.cf4e7569.js",
    "revision": "d9c6389bcdcdb0d0acab6b7ae654532f"
  },
  {
    "url": "css/c1.html",
    "revision": "958a7bb826a85ce6900018ec0fdd19c3"
  },
  {
    "url": "css/c2.html",
    "revision": "c2497493bb3ed0d72ee49036de671fda"
  },
  {
    "url": "css/c3.html",
    "revision": "cbf5abcc0a120013d8374d82e4217fb0"
  },
  {
    "url": "css1/c11.html",
    "revision": "9cc9045054984fb6aa8b00c50db30890"
  },
  {
    "url": "css1/c12.html",
    "revision": "4de370da79319ab2af042f381100b858"
  },
  {
    "url": "css1/c13.html",
    "revision": "7f2eb451784b4cb42b63666259c1cd84"
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
    "revision": "0ba44963a4ed61b49826a35483ca5c73"
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
