import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0">
            <Link to="/" className="text-4xl font-bold text-blue-600">
              إشارة
            </Link>
          </div>

          <div className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <NavLink to="/" className="nav-link">
                  الرئيسية
                </NavLink>
              </li>
              <li>
                <NavLink to="/record" className="nav-link">
                  تسجيل إشارة
                </NavLink>
              </li>
              <li>
                <NavLink to="/translate" className="nav-link">
                  ترجمة إشارة
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="nav-link">
                  عن الموقع
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="nav-link">
                  اتصل بنا
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
