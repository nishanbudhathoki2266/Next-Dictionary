function Button({ children, type, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`border-0 mb-2 py-1 flex justify-center items-center px-4 focus:outline-none rounded lowercase text-[20px] font-[500] ${
        type === "primary" ? "bg-black text-white" : "bg-[#DEDEDE] text-black"
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
