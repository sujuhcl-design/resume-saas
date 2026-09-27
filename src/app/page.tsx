import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      {/* Navbar */}
      <nav className="w-full fixed top-0 p-6 flex justify-between items-center bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <h1 className="font-bold text-2xl text-blue-600 tracking-tight">ResumePro.</h1>
        <div className="space-x-4">
          <Link href="/login" className="text-gray-600 hover:text-black font-medium">Log In</Link>
          <Link href="/builder" className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition">Build Resume</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 mt-20">
        <div className="max-w-3xl space-y-8">
          <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight">
            The resume builder that <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">gets you hired.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Build a professional, modern resume in minutes. Live preview, AI-assisted writing, and premium templates.
          </p>
          <div className="pt-8">
            <Link href="/builder" className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Start Building for Free
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-4">No credit card required to start.</p>
        </div>
        
        {/* Mockup Image Area */}
        <div className="mt-16 w-full max-w-5xl h-96 bg-gray-200 rounded-xl shadow-2xl border border-gray-300 overflow-hidden relative flex items-center justify-center">
             <p className="text-gray-400 font-medium text-lg">App Preview Image Goes Here</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 text-center text-gray-500 mt-auto">
        &copy; 2026 ResumePro SaaS. All rights reserved.
      </footer>
    </div>
  );
}
