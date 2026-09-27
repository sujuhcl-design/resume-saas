"use client";

import { useState } from "react";
import Link from "next/link";

export default function Builder() {
  const [name, setName] = useState("Jane Doe");
  const [role, setRole] = useState("Software Engineer");
  const [experience, setExperience] = useState("Built scalable SaaS applications...");

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Top Bar */}
      <header className="h-16 bg-white border-b flex items-center justify-between px-6 shrink-0">
        <Link href="/" className="font-bold text-xl text-blue-600">ResumePro.</Link>
        <div className="flex space-x-3">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200">Save Draft</button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded shadow hover:bg-green-700 flex items-center">
            <span>Pay & Download PDF</span>
            <span className="ml-2 bg-green-800 text-xs px-2 py-0.5 rounded-full">$4.99</span>
          </button>
        </div>
      </header>

      {/* Main Workspace */}
      <main className="flex-1 flex overflow-hidden">
        
        {/* LEFT PANEL: Editor */}
        <section className="w-1/3 bg-white border-r overflow-y-auto p-6 shadow-inner z-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Resume</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Professional Role</label>
              <input 
                type="text" 
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-black"
              />
            </div>

            <div>
              <div className="flex justify-between items-end mb-1">
                 <label className="block text-sm font-medium text-gray-700">Experience / Summary</label>
                 <button className="text-xs text-blue-600 hover:underline font-semibold flex items-center">✨ AI Rewrite</button>
              </div>
              <textarea 
                rows={6}
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-black"
              ></textarea>
            </div>
          </div>
        </section>

        {/* RIGHT PANEL: Live Preview Canvas */}
        <section className="flex-1 bg-gray-200 overflow-y-auto p-8 flex justify-center items-start">
          {/* A4 Paper Mockup */}
          <div className="w-[800px] min-h-[1131px] bg-white shadow-2xl p-12 transition-all duration-300 text-gray-900">
            <header className="border-b-4 border-blue-600 pb-6 mb-6">
              <h1 className="text-5xl font-black uppercase tracking-tight text-gray-900">{name || "Your Name"}</h1>
              <p className="text-2xl text-blue-600 font-medium mt-2">{role || "Your Role"}</p>
            </header>

            <main>
              <h3 className="text-xl font-bold uppercase tracking-widest text-gray-800 mb-3 border-b pb-1">Professional Summary</h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {experience || "Write a brief summary of your professional background..."}
              </p>
              
              <h3 className="text-xl font-bold uppercase tracking-widest text-gray-800 mb-3 border-b pb-1 mt-8">Experience</h3>
              <div className="mb-4">
                 <div className="flex justify-between items-center mb-1">
                    <h4 className="font-bold text-lg">Senior Position</h4>
                    <span className="text-gray-500 font-medium">2023 - Present</span>
                 </div>
                 <p className="text-gray-600 mb-2">Major Tech Company</p>
                 <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Led cross-functional teams to deliver critical infrastructure.</li>
                    <li>Improved application performance by 40%.</li>
                 </ul>
              </div>
            </main>
          </div>
        </section>

      </main>
    </div>
  );
}
