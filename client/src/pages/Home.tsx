// src/pages/Home.tsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full bg-linear-to-br from-blue-50 to-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            منصة <span className="text-blue-600">إشارة</span> لتعلم لغة الإشارة
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            سجِّل إشاراتك، تدرب عليها، وترجمها بسهولة باستخدام أحدث تقنيات
            الذكاء الاصطناعي.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/record"
              className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition shadow-md hover:shadow-lg"
            >
              ابدأ التسجيل الآن
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 bg-white text-blue-600 border border-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition"
            >
              تعرف علينا
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            ميزات المنصة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                تسجيل الإشارات
              </h3>
              <p className="text-gray-600 mt-2">
                سجّل إشاراتك عبر الكاميرا واحفظها بقاعدة بياناتنا لاستخدامها
                لاحقاً.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                التدرب والمقارنة
              </h3>
              <p className="text-gray-600 mt-2">
                قارن إشاراتك بإشارات مرجعية واحصل على تغذية راجعة فورية.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                الترجمة الفورية
              </h3>
              <p className="text-gray-600 mt-2">
                ترجم الإشارات إلى نصوص وعربية في لحظتها بفضل تقنيات الذكاء
                الاصطناعي.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-blue-600 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">انضم إلينا الآن</h2>
          <p className="text-blue-100 text-lg mb-6">
            ساهم في إثراء محتوى لغة الإشارة وساعد الآخرين على تعلمها.
          </p>
          <Link
            to="/record"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            سجل إشارتك الأولى
          </Link>
        </div>
      </section>
    </div>
  );
}
