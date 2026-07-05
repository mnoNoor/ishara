export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">
        عن الموقع
      </h1>

      <div className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
            <span className="text-blue-500">🎯</span> رؤيتنا
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mt-2">
            بناء جسر تواصل بين مجتمع الصم والبكم والمجتمع السمعي باستخدام أحدث
            تقنيات التعلم الآلي، مع الحفاظ على الهوية الثقافية العربية من خلال
            دعم اللهجات المختلفة.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
            <span className="text-blue-500">⚙️</span> كيف يعمل الموقع؟
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-2 mt-2 pr-4">
            <li>يستخدم الكاميرا لالتقاط حركات اليد في الوقت الفعلي.</li>
            <li>يعالج الإطارات بواسطة نموذج Hand Landmarker من MediaPipe.</li>
            <li>
              يحول الإشارات إلى نقاط مرجعية (landmarks) ويخزنها في قاعدة
              البيانات.
            </li>
            <li>
              يتيح للمستخدمين تسجيل إشارات جديدة أو التدرب على إشارات موجودة.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
            <span className="text-blue-500">👥</span> من نحن؟
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mt-2">
            نحن فريق من المطورين والمترجمين والمهتمين بتقنيات المساعدة، نعمل على
            تطوير منصة مفتوحة المصدر تسهل تعلم لغة الإشارة وتعزز الشمولية
            الرقمية في العالم العربي.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
            <span className="text-blue-500">📌</span> ميزاتنا
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <span className="font-bold text-blue-600">✓</span> تسجيل إشارات
              متعددة اللهجات
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <span className="font-bold text-blue-600">✓</span> تغذية راجعة
              فورية أثناء التدرب
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <span className="font-bold text-blue-600">✓</span> واجهة سهلة
              ومتوافقة مع الأجهزة
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <span className="font-bold text-blue-600">✓</span> بيانات مفتوحة
              للمساهمة المجتمعية
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
