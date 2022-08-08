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
    "revision": "0151cf355c83993601a579f5cd87be2e"
  },
  {
    "url": "assets/css/0.styles.fd508535.css",
    "revision": "af916abb9a0b176fb330e4554c7e0a62"
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
    "url": "assets/js/13.4ab2683e.js",
    "revision": "7208e8294b490b53b99964be4640a8ae"
  },
  {
    "url": "assets/js/14.96939e98.js",
    "revision": "087388776d721e414f81616e1d18a6ac"
  },
  {
    "url": "assets/js/15.740d29e0.js",
    "revision": "ed1178aae3893d0a9f56c232548be0df"
  },
  {
    "url": "assets/js/16.68e9bb4b.js",
    "revision": "67fedde0bd35a92b05060a60f710c736"
  },
  {
    "url": "assets/js/17.287fa90a.js",
    "revision": "6bfe9f510eef6ee814bac18322a20aa7"
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
    "url": "assets/js/app.50ad8854.js",
    "revision": "df68bad91bbecf0769602e6f77e64687"
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
    "revision": "148e1466accd4428efdd5257b2044390"
  },
  {
    "url": "categories/java/index.html",
    "revision": "3186eb566c95b8983eea99478e58671e"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "50e12fb6d5ea6912037230cd087b1cae"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "4188f1eb811ad4db6453433a4373c101"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "738942c896d83dec5274f8a9a33f28e9"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "17019798bbc6d2bcb2ce72c1aaac0f02"
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
    "revision": "d9ab4229b3d583217aed3dd521bc726b"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "866dc53865995fecc6cf83611f4ca4c1"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "beb17c7d46b3cf03c038cba6c93fabe5"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "9d4006c1854b5d3c2d6d7cca78e60ecc"
  },
  {
    "url": "tags/js/index.html",
    "revision": "f3284d876bdb5dca922d0fb188560411"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "cf7fec8087bf0934def807594971f5a4"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "d0933f3d456d2dd91736093281817e47"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "f31559d1c1ebade172d04fa5e79edeb8"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "1e219d6403cad50355d6f7838b20b1c9"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "31bd89aef789ac2f42a15b1380b4b5f6"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "3649b04f858f63e6ca098361e5ecccb1"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "c2a4dc7e8577c3ef725913f2a525bce3"
  },
  {
    "url": "timeline/index.html",
    "revision": "562da139c5724748398052553f268d0a"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "e6b533604d8e57a17c18bdbeb9363f48"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "3a41fcac7e6b5b3bb131ce456c928708"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "e1fe2315c5a53da5c2d8b245d8e6fb24"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "cb06249543ee5da8573528316175ad1f"
  },
  {
    "url": "生活分享/life.html",
    "revision": "5b6c5fbf53b51ee55396e9167ba7d04b"
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
