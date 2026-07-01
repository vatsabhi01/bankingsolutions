export default function Input({
  label,
  type = "text",
  ...props
}) {
  return (
    <div className="mb-5">

      <label className="block mb-2 font-medium text-gray-700">
        {label}
      </label>

      <input
        type={type}
        className="
          w-full
          border
          border-gray-300
          rounded-xl
          p-4
          focus:outline-none
          focus:ring-2
          focus:ring-[#800020]
          transition
        "
        {...props}
      />

    </div>
  );
}