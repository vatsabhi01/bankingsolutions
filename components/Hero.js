export default function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">

        <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold">
          🚀 Trusted by 11,000+ Banking Aspirants
        </span>

        <h1 className="mt-8 text-6xl font-extrabold text-slate-900 leading-tight">
          Prepare Smarter.
          <br />
          Crack Banking Exams.
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Daily BSPS, Mock Tests, Current Affairs, Video Courses and
          personalized study plans — all in one place.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <button className="bg-[#800020] text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
            Start Free
          </button>

          <button className="border-2 border-[#800020] text-[#800020] px-8 py-4 rounded-xl font-semibold hover:bg-[#800020] hover:text-white transition">
            Watch YouTube
          </button>

        </div>

      </div>
    </section>
  );
}