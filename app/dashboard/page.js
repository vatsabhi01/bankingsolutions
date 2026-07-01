"use client";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function Dashboard() {

  const router = useRouter();

  const [user, setUser] = useState(null);

  useEffect(() => {

    async function getUser() {

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      setUser(user);
    }

    getUser();

  }, []);

  async function logout() {

    await supabase.auth.signOut();

    router.push("/login");

  }

  return (
    <main className="min-h-screen bg-slate-100 p-10">
      
       <DashboardHeader
      email={user?.email}
      onLogout={logout}
  />
      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-5xl font-bold">
            Good Morning 👋
          </h1>

          <p className="mt-3 text-xl text-gray-600">
            {user?.email}
          </p>

        </div>

        <button
          onClick={logout}
          className="bg-[#800020] text-white px-6 py-3 rounded-xl"
        >
          Logout
        </button>

      </div>

      <div className="mt-10 bg-white rounded-3xl shadow-lg p-8">

        <h2 className="text-3xl font-bold">
          🔥 Today's Mission
        </h2>

        <ul className="mt-6 space-y-4 text-xl">

          <li>☐ Solve 1 Puzzle</li>

          <li>☐ 5 Number Series</li>

          <li>☐ 10 Error Detection</li>

          <li>☐ 10 Current Affairs MCQs</li>

          <li>☐ Mini Mock Test</li>

        </ul>

      </div>
    
    </main>
  );

} 