import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-600 selection:text-white font-sans text-slate-900">
      {/* Decorative Background Glow */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-blue-100/50 to-transparent pointer-events-none -z-10" />

      {/* Navbar */}
      <nav className="w-full fixed top-0 px-6 py-4 flex justify-between items-center bg-slate-50/80 backdrop-blur-xl z-50 border-b border-slate-200/50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl leading-none">R</span>
          </div>
          <h1 className="font-semibold text-xl tracking-tight text-slate-900">ResumePro</h1>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="#features" className="hover:text-slate-900 transition-colors">Features</Link>
          <Link href="#templates" className="hover:text-slate-900 transition-colors">Templates</Link>
          <Link href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors hidden sm:block">Sign in</Link>
          <Link href="/builder" className="bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all shadow-sm shadow-slate-900/10">
            Create Resume
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-8">
            <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
            ATS-Optimized Templates
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 lg:leading-[1.1]">
            Build a resume that <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              demands attention.
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Stop struggling with formatting. Our professional builder uses AI-assisted writing and recruiter-approved designs to help you land your next senior role.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/builder" className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2">
              Start building for free
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <p className="text-sm text-slate-500 sm:hidden">No credit card required.</p>
          </div>

          {/* Social Proof */}
          <div className="mt-20 pt-10 border-t border-slate-200/60">
            <p className="text-sm font-medium text-slate-400 mb-6 uppercase tracking-widest">Built for professionals hired at</p>
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-xl font-bold font-serif">J.P. Morgan</span>
              <span className="text-xl font-black tracking-tighter">Goldman Sachs</span>
              <span className="text-xl font-bold tracking-tight text-blue-800">Microsoft</span>
              <span className="text-xl font-semibold italic">Amazon</span>
            </div>
          </div>
        </div>

        {/* Dashboard / Builder Preview Image */}
        <div className="max-w-6xl mx-auto mt-24">
          <div className="rounded-2xl border border-slate-200/60 bg-white/50 backdrop-blur-sm p-2 sm:p-4 shadow-2xl shadow-slate-200/50">
            <div className="rounded-xl overflow-hidden border border-slate-100 bg-slate-50 aspect-[16/9] flex flex-col relative">
              {/* Fake App Header */}
              <div className="h-12 border-b border-slate-200 bg-white flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="mx-auto w-64 h-6 bg-slate-100 rounded-md border border-slate-200"></div>
              </div>
              {/* Fake App Content */}
              <div className="flex-1 flex p-6 gap-6 bg-slate-50/50">
                <div className="w-1/3 flex flex-col gap-4">
                  <div className="h-8 w-1/2 bg-slate-200 rounded animate-pulse"></div>
                  <div className="h-10 bg-white border border-slate-200 rounded shadow-sm"></div>
                  <div className="h-10 bg-white border border-slate-200 rounded shadow-sm"></div>
                  <div className="h-24 bg-white border border-slate-200 rounded shadow-sm"></div>
                </div>
                <div className="flex-1 bg-white shadow-xl shadow-slate-200/50 border border-slate-100 rounded flex flex-col p-8 gap-4">
                  <div className="h-12 w-3/4 bg-slate-800 rounded"></div>
                  <div className="h-6 w-1/3 bg-blue-600 rounded mb-4"></div>
                  <div className="h-4 w-full bg-slate-100 rounded"></div>
                  <div className="h-4 w-5/6 bg-slate-100 rounded"></div>
                  <div className="h-4 w-4/6 bg-slate-100 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="max-w-5xl mx-auto px-6 text-center text-slate-500 text-sm">
          <p>&copy; 2026 ResumePro SaaS. Designed for modern professionals.</p>
        </div>
      </footer>
    </div>
  );
}
