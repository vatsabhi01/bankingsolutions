export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-[#800020] text-white hover:bg-[#6b001a]",

    secondary:
      "bg-white text-[#800020] border border-[#800020] hover:bg-gray-100",

    success:
      "bg-green-600 text-white hover:bg-green-700",
  };

  return (
    <button
      className={`
        px-6
        py-3
        rounded-xl
        font-semibold
        transition-all
        duration-200
        shadow-sm
        hover:shadow-md
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}