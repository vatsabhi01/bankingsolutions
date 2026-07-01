"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function SignupPage() {

  const [email,setEmail]=useState("");

  const [password,setPassword]=useState("");

  async function signup(){

    const {error}=await supabase.auth.signUp({

      email,

      password,

    });

    if(error){

      alert(error.message);

      return;

    }

    alert("Account Created!");

  }

  return(

    <div className="min-h-screen flex justify-center items-center bg-slate-100">

      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md">

        <h1 className="text-4xl font-bold mb-8">

          Create Account

        </h1>

        <input

          className="w-full border rounded-xl p-4 mb-4"

          placeholder="Email"

          onChange={(e)=>setEmail(e.target.value)}

        />

        <input

          type="password"

          className="w-full border rounded-xl p-4 mb-6"

          placeholder="Password"

          onChange={(e)=>setPassword(e.target.value)}

        />

        <button

          onClick={signup}

          className="w-full bg-[#800020] text-white p-4 rounded-xl"

        >

          Sign Up

        </button>

      </div>

    </div>

  );

}