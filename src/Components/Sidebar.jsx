import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

const listData = ["Home", "All Transactions", "Other Menus"];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest(".sidebar-container")) {
      setIsOpen(false);
    }
  };

  // Add event listener when the component mounts
  if (isOpen) {
    document.addEventListener("mousedown", handleOutsideClick);
  } else {
    document.removeEventListener("mousedown", handleOutsideClick);
  }

  return (
    <div className="sidebar-container relative">
      <div className="h-screen w-72 bg-[#7e57c2] lg:block hidden">
        <ul>
          {listData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="block absolute  z-10 lg:hidden" onClick={toggleSidebar}>
        <Bars3Icon className="h-8 w-8 text-[#9BC257] " />
      </div>

      {isOpen && (
        <div
          className="absolute top-0 left-0 w-56 h-screen backdrop-blur-sm bg-[#7e57c2]/30 z-30"
          onClick={toggleSidebar}
        >
          <button className="absolute top-4 right-4" onClick={closeSidebar}>
            x
          </button>
          <ul>
            {listData.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
