import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import logo from "../assets/logo.svg";
import Button from "./Button";
import { useState } from "react";
const Header = () => {
  const [showSearchInput, setSearchInput] = useState(false);
  return (
    <header className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div
        className={`flex gap-4 items-center flex-shrink-0 ${
          showSearchInput ? "hidden" : "flex"
        }`}
      >
        <Button variant={"ghost"} size={"icon"}>
          <Menu />
        </Button>
        <a href="/">
          <img src={logo} alt="logo" className="h-8" />
        </a>
      </div>
      <form
        className={`gap-4 flex-grow justify-center ${
          showSearchInput ? "flex" : "hidden md:flex"
        }`}
      >
        <Button
          onClick={() => setSearchInput(false)}
          type="button"
          size="icon"
          variant="ghost"
          className={`flex-shrink-0 ${showSearchInput ? "block" : "hidden"}`}
        >
          <ArrowLeft />
        </Button>
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="border rounded-l-full border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-amber-400 outline-none"
          />
          <Button className="py-2 px-4 rounded-r-full border-secondary-border border border-1-0 flex-shrink-0">
            <Search />
          </Button>
        </div>
        <Button type="button" size="icon" className="flex-shrink-0">
          <Mic />
        </Button>
      </form>
      <div
        className={`flex-shrink-0 md:gap-2 ${
          showSearchInput ? "hidden" : "flex"
        }`}
      >
        <Button
          onClick={() => setSearchInput(true)}
          size="icon"
          variant="ghost"
          className="md:hidden"
        >
          <Search />
        </Button>
        <Button size="icon" variant="ghost">
          <Upload />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
      </div>
    </header>
  );
};

export default Header;
