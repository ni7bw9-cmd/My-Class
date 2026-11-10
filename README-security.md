# ملفات إضافية للموقع

ضعها بجانب index.html (نفس المجلد). لم تُختبر على Firebase الفعلي، فجرّبها أولًا.

1. firestore.rules: انسخه في Firebase Console ← Firestore ← Rules ← Publish (أو firebase deploy --only firestore:rules).
   يسمح للجميع بالقراءة فقط من tasks وschoolExams وadhkar، والكتابة لأي مستخدم مسجّل دخوله، ويمنع غير ذلك.
2. firebase.json: لو الاستضافة على Firebase Hosting (يضيف رؤوس الحماية وCSP).
3. _headers: لو الاستضافة على Netlify أو Cloudflare Pages (بدل firebase.json).
4. robots.txt.

مهم في Firebase Console:
- Authentication ← Settings: عطّل تسجيل المستخدمين الجدد؛ أنشئ حسابات المعلمين يدويًا فقط.
  (القواعد تعتبر أي مستخدم مسجّل معلمًا.)
- Authentication: فعّل التحقق بخطوتين إن توفر لخطتك.
- Google Cloud ← APIs & Services ← Credentials: قيّد مفتاح API بنطاق موقعك فقط.
- App Check: فعّله لـ Firestore (reCAPTCHA v3) بعد تسجيل الموقع.
- Billing ← Budgets: أنشئ تنبيه ميزانية.
- Firestore ← Backups: فعّل النسخ الاحتياطي المجدول.
