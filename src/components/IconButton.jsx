import logoIcon from "../img/icon-white.svg";

const IconButton = () => {
  return (
    <a href="#" className="block rounded-2xl">
      <button
        type="button"
        className="flex items-center justify-center gap-x-4 rounded-2xl bg-gray-900 hover:bg-gray-800 transition px-5 py-2.5 focus:outline-black"
      >
        <img src={logoIcon} alt="Logo" className="h-[28px]" />

        <div className="flex flex-col items-start">
          <p className="mb-[-2px] text-sm opacity-75">Start using it now</p>
          <p className="md:text-lg font-semibold">Philadelphia</p>
        </div>
      </button>
    </a>
  );
};

export default IconButton;
