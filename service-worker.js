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
    "revision": "b504c14c8ad5574ff1985ff2b5cb42bd"
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
    "url": "assets/js/app.eb891967.js",
    "revision": "4ef23b8424fc833833d133986c451d62"
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
    "revision": "ec38e281f676787d224a1cd8613f37ec"
  },
  {
    "url": "categories/java/index.html",
    "revision": "e6fe504910c4ee160c3dcc2d19917839"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "ee1a9d0a3bc475f6a825e2064547adec"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6516141b21938b394482c37cf629fe98"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "c5900888aad36b6f60f697fbf688461b"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "71007d4a0c6ba0c6514d8ed6fbf0fcf3"
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
    "revision": "dc88960866540775ddbec18ecce1bd1f"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "d171101572a7c8cb38bc4ad73ef48d43"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "986052159cbded8d3f7f5da4cd108e0c"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "a9aa65ab4f25bdbf0c84f0324ce6d552"
  },
  {
    "url": "tags/js/index.html",
    "revision": "6cc65e3492b1f2227ce695c7107369b2"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "5ee27bc7b1d2235cbdb7e617a7d306c0"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "abc65f64cf9637f8081f73c61b3d9c9c"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "9cd57b74d7ef6c59bb71f0bf670ac63d"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "cea8bb4ff2dfb09eb6b851269cabf6be"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "252ff716e49513c56806f4c1c0d4ba42"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "dfefcc998028dd0f2592d269a3e623fe"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "e8678293f561e99a8ba2c485404f1daa"
  },
  {
    "url": "timeline/index.html",
    "revision": "33b2624d72f45ea9c1643302b1e8c2d6"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "c606ac757ae41251c45c923f8b2cdb02"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "7e2e0d9d33e0b5c110fe3660a1a6de71"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "1cd1b907d6470024931ad069281a924a"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "1b99c6554180d66a6952e1a566ed4f56"
  },
  {
    "url": "生活分享/life.html",
    "revision": "7c71797b44fd1566ef809623731276de"
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
