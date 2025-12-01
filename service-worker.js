const CACHE_NAME = 'studymode-v1';
const urlsToCache = [
  './',
  './index.html',
  './questions.js',
  './manifest.json',
  './icon.png',
  './fonts/zhuyin.ttf'
];

// 安裝 Service Worker
self.addEventListener('install', function(event) {
  self.skipWaiting(); // 跳過等待，直接啟用
});

// 攔截網路請求 (Network First 策略：優先抓網路最新版，沒網路才用舊的)
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});
