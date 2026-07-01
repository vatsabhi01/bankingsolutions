export default function Badge({
  children,
  color = "primary",
}) {

  const colors = {
    primary: "bg-[#800020] text-white",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    info: "bg-blue-100 text-blue-700",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        px-3
        py-1
        rounded-full
        text-sm
        font-semibold
        ${colors[color]}
      `}
    >
      {children}
    </span>
  );
}