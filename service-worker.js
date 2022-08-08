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
    "revision": "1330120a40bf09c1fa97f677dad33fac"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.96468cc5.js",
    "revision": "63ee03f03d39c47d65ac67485a27a829"
  },
  {
    "url": "assets/js/10.0f1a6214.js",
    "revision": "aed2ce279cb8069139b9ce0b4c0d8761"
  },
  {
    "url": "assets/js/11.1dcef5e3.js",
    "revision": "b44c80b1e90dd1fea3953864833ff464"
  },
  {
    "url": "assets/js/12.221cd6c4.js",
    "revision": "57f4e66b245d6d20ff699d7bb95674f4"
  },
  {
    "url": "assets/js/13.ff8869d1.js",
    "revision": "b8934ecdfbc3eb16d6388595c0372104"
  },
  {
    "url": "assets/js/14.179eaf8f.js",
    "revision": "7fdc669ad85130ad137a228209249b3d"
  },
  {
    "url": "assets/js/15.740d29e0.js",
    "revision": "ed1178aae3893d0a9f56c232548be0df"
  },
  {
    "url": "assets/js/16.312b5bea.js",
    "revision": "bc467476030fc056cc659098f66714de"
  },
  {
    "url": "assets/js/17.dd519a46.js",
    "revision": "ae2039acff2a28a34427d168746b4c61"
  },
  {
    "url": "assets/js/18.5ac236ed.js",
    "revision": "6ebf26e8a597d729a1f560a4bfc03fc9"
  },
  {
    "url": "assets/js/4.06004390.js",
    "revision": "e10459d3809dba98c1bba49ef9ec64c3"
  },
  {
    "url": "assets/js/5.33ec2c4d.js",
    "revision": "7347dfdedba2d017c568c7b51150269e"
  },
  {
    "url": "assets/js/6.957fa2a2.js",
    "revision": "6663f4417c923daea0fe08aad64d7c09"
  },
  {
    "url": "assets/js/7.6503cb7d.js",
    "revision": "fe02ddd8bfbd811354a0d6b7f3f2a35d"
  },
  {
    "url": "assets/js/8.fc5b7506.js",
    "revision": "868cb4ce0a0a9291b4a5dade91da3cf6"
  },
  {
    "url": "assets/js/9.d898caf8.js",
    "revision": "c6abf0f2268fd16ebac5d1a16ddc286e"
  },
  {
    "url": "assets/js/app.97fb6e79.js",
    "revision": "a756f3777c6a39d1b4722f2ecf9e42df"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.fe7c321e.js",
    "revision": "a64ebb2f4c1ee386f2eed5d866fffdab"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "4585fb2c71236cb07e5b24bd14d06600"
  },
  {
    "url": "categories/java/index.html",
    "revision": "7e5fa393696fda16507176c27e191a9b"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "39b6053378718484705a555e7ff9470b"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "5fb8a855a1f712b4b7c8e684ca208d0e"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "36281e2d25a929694ed40e648741bce7"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "f250f093f32be0fcfe81c16a583848a6"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "096d55638f0d4b532e14843e7edc9b26"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "23ae48e9e33d49c2a8e81db5709149c9"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "0a8f1123636bf28d826ba9e99c1600f7"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "49eb440e0ffc3f256ad7b43a1e2c467f"
  },
  {
    "url": "tags/js/index.html",
    "revision": "29b363a755aee2d787189411aad30e96"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "6c42d1844bd546d8f865c438bb4db537"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "2e00a9eb2db8b5dee9e549e5e9c90627"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "0a305f0c6e8732bf8ab7fbc7cbf2b426"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "a5d5774cfecdf5d8e98a52703f7faf29"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "53b2bd04eaee162d85be98ddcda903da"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "2b7b8f3999a0a8b2c9fde49eedd387ba"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "94390c6e6a3b06b3602a6a9d9ffaf440"
  },
  {
    "url": "timeline/index.html",
    "revision": "8f5f6f3f9e53634168bb0ffd2ef9a6c9"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "491137adcbe5fb40bc1fcc3fe5681c09"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "f95b213fc2dcd6e31855ef9e28274e71"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "8a25a58acd40a85a330627c189f05414"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "93c93926ab31fbb94d401728f597717b"
  },
  {
    "url": "生活分享/life.html",
    "revision": "f1a856199b572ad273c0f11fdbb4ff85"
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
