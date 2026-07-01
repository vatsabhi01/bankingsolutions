import {
  BookOpenIcon,
  AcademicCapIcon,
  NewspaperIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: BookOpenIcon,
    title: "Daily Practice",
    description:
      "Solve fresh Reasoning, Quant and English questions every day.",
  },
  {
    icon: AcademicCapIcon,
    title: "Mock Tests",
    description:
      "Attempt exam-level mock tests with detailed performance analysis.",
  },
  {
    icon: NewspaperIcon,
    title: "Current Affairs",
    description:
      "Daily banking current affairs specially curated for IBPS, SBI and RRB.",
  },
  {
    icon: ChartBarIcon,
    title: "Progress Tracking",
    description:
      "Track your daily progress and stay consistent with your preparation.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-slate-900">
            Why BankingSolutions?
          </h2>

          <p className="text-xl text-gray-600 mt-4">
            Everything you need to crack Banking Exams.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"
            >
              <feature.icon className="h-12 w-12 text-[#800020]" />

              <h3 className="mt-6 text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}