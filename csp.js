/* سياسة أمان المحتوى (CSP) لمدرستي الذكية
   يجب أن يُحمَّل هذا الملف أول شيء في <head> (قبل أي سكربت آخر) ليسري على كل ما بعده.
   لتعطيل السياسة: احذف السطر <script src="csp.js"></script> من index.html. لا شيء آخر يتغير.
   تنبيه: إن لم يُحمَّل الملف لأي سبب فالتطبيق يعمل بلا سياسة (لا يتعطل). */
(function () {
  var policy = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' https://www.gstatic.com",          /* مكتبات Firebase */
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",      /* خطوط Google */
    "font-src 'self' data: https://fonts.gstatic.com",
    "img-src 'self' data: blob:",                                          /* صور الواجبات تُحفظ data: */
    "connect-src 'self' https://*.googleapis.com https://www.gstatic.com https://*.firebaseio.com wss://*.firebaseio.com https://*.firebaseapp.com", /* Firestore + Auth + Gemini */
    "frame-src https://*.firebaseapp.com",
    "worker-src 'self'",
    "manifest-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'"
  ].join('; ');
  var m = document.createElement('meta');
  m.httpEquiv = 'Content-Security-Policy';
  m.content = policy;
  document.head.appendChild(m);
})();
