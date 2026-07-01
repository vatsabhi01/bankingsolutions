export default function Stats() {
  const stats = [
    {
      number: "11K+",
      label: "Students",
    },
    {
      number: "500+",
      label: "Practice Sets",
    },
    {
      number: "100K+",
      label: "Questions Solved",
    },
    {
      number: "24x7",
      label: "Learning",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-gray-200 p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <h2 className="text-5xl font-extrabold text-[#800020]">
                {item.number}
              </h2>

              <p className="mt-4 text-gray-600 font-medium">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}