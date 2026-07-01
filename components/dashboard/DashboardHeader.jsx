"use client";

import Button from "@/components/ui/Button";

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

        <Button onClick={onLogout}>
          Logout
        </Button>

      </div>

    </header>
  );
}