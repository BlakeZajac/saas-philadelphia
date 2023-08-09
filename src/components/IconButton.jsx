import logoIcon from "../img/icon-white.svg";

const IconButton = () => {
  return (
    <a href="#" className="block rounded-2xl w-full md:w-fit">
      <button
        type="button"
        className="flex items-center justify-center gap-x-4 rounded-2xl w-full md:w-fit bg-gray-900 hover:bg-gray-800 transition px-4 py-2 focus:outline-black"
      >
        <img src={logoIcon} alt="Logo" className="h-[32px]" />

        <div className="flex flex-col items-start">
          <p className="mb-[-2px] text-sm opacity-75">Start using it now</p>
          <p className="text-lg font-semibold">Philadelphia</p>
        </div>
      </button>
    </a>
  );
};

export default IconButton;
