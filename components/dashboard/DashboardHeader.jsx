"use client";

export default function DashboardHeader({ email, onLogout }) {
  return (
    <header className="bg-white rounded-3xl shadow-md p-6 mb-8">
      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold text-slate-900">
            Good Morning 👋
          </h1>

          <p className="text-gray-600 mt-2">
            {email}
          </p>
        </div>

        <button
          onClick={onLogout}
          className="bg-[#800020] text-white px-6 py-3 rounded-xl hover:bg-[#660018]"
        >
          Logout
        </button>

      </div>
    </header>
  );
}