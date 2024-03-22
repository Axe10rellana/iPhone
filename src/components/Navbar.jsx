//utils
import { appleImg, bagImg, searchImg } from "../utils";

//constants
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full py-5 px-5 flex items-center justify-between sm:px-10">
      <nav className="flex w-full screen-max-width">
        <img
          className="pointer-events-none select-none"
          src={appleImg}
          alt="Apple"
          width={14}
          height={18}
        />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              className="px-5 text-sm cursor-pointer text-gray transition-all hover:text-white"
              key={nav}
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img
            className="pointer-events-none select-none"
            src={searchImg}
            alt="Search"
            width={18}
            height={18}
          />
          <img
            className="pointer-events-none select-none"
            src={bagImg}
            alt="Bag"
            width={18}
            height={18}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
