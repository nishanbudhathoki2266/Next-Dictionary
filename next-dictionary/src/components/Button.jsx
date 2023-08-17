function Button({ children, type }) {
  return (
    <button
      className={`border-0 mb-2 py-1 px-4 focus:outline-none rounded block lowercase text-sm ${
        type === "primary" ? "bg-black text-white" : "bg-[#DEDEDE] text-black"
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
