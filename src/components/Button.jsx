const Button = ({ text, theme }) => {
  return (
    <button
      className={`${
        theme === "dark"
          ? "bg-[transparent] text-neutral-gray-very-light hover:bg-neutral-gray-very-light hover:text-primary-violet-dark"
          : "bg-neutral-gray-very-light text-primary-violet-dark hover:text-neutral-gray-very-light hover:bg-neutral-violet-very-dark"
      } font-bold uppercase px-6 py-4 border-2 transition-colors ease-in-out delay-75 `}
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
