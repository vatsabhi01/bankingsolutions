export default function DailyMission() {
  const missions = [
    {
      title: "Reasoning",
      task: "Solve 1 Puzzle",
    },
    {
      title: "Quant",
      task: "1 DI + 5 Number Series",
    },
    {
      title: "English",
      task: "10 Error Detection",
    },
    {
      title: "Current Affairs",
      task: "10 MCQs",
    },
    {
      title: "Mini Mock",
      task: "20 Questions",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-5xl font-bold text-slate-900">
            📅 Today's Mission
          </h2>

          <p className="mt-4 text-gray-600 text-xl">
            Complete today's study plan and stay consistent.
          </p>

        </div>

        <div className="mt-12 rounded-3xl border border-gray-200 shadow-lg p-10">

          <div className="mb-10">

            <div className="flex justify-between mb-2">
              <span className="font-semibold">Daily Progress</span>
              <span>0%</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-4">
              <div className="bg-[#800020] h-4 rounded-full w-0"></div>
            </div>

          </div>

          <div className="space-y-6">

            {missions.map((mission) => (
              <div
                key={mission.title}
                className="flex items-center justify-between border rounded-xl p-5 hover:bg-slate-50 transition"
              >
                <div>
                  <h3 className="font-bold text-xl">
                    {mission.title}
                  </h3>

                  <p className="text-gray-600">
                    {mission.task}
                  </p>
                </div>

                <button className="bg-[#800020] text-white px-5 py-2 rounded-lg">
                  Start
                </button>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}