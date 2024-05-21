import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { LuMoreVertical } from "react-icons/lu";
import { MdOutlineSettings } from "react-icons/md";
import LogoutButton from "./LogoutButton";
import { MdOutlineDarkMode } from "react-icons/md";
import useColor from "../../hooks/useColor";
import { Link } from "react-router-dom";
import { ImSun } from "react-icons/im";
import { useAuthContext } from "../../contexts/AuthContext";
import useMode from "../../zustand/useMode";

export default function Dropdowns() {
  const { mode, setMode } = useMode();
  const { textColor, textColorHover, dropdownBgColor, dropdownBgColorHover } =
    useColor();
  const { authUser } = useAuthContext();
  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
    localStorage.setItem("CurrentTheme", mode === "light" ? "dark" : "light");
  };

  return (
    <div className="mt-auto">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            className={`${
              authUser?.profilePic ? "rounded-full p-1" : "rounded-md px-3 py-2"
            }   text-sm font-semibold ${textColor} ${textColorHover} shadow-sm ring-1 ring-inset ${
              mode === "dark" ? "ring-gray-400" : "ring-gray-700"
            }`}
          >
            {authUser.profilePic ? (
              <div className="w-10 rounded-full">
                <img src={authUser?.profilePic} alt={authUser?.profilePic} />
              </div>
            ) : (
              <LuMoreVertical
                className={`-mr-1 h-5 w-5 ${textColor}`}
                aria-hidden="true"
              />
            )}
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={`absolute top-0 left-0 ml-2 mb-14 w-56  origin-top-right rounded-md ${dropdownBgColor} shadow-lg ring-1 ring-gray-900 ring-opacity-5 focus:outline-none`}
            style={{ transform: "translateY(-100%)" }}
          >
            <div className="py-1">
              <Menu.Item>
                <Link
                  to="/profile"
                  className={`${dropdownBgColor} ${textColor} ${dropdownBgColorHover} block px-4 py-2 text-sm`}
                >
                  <div className="flex items-center cursor-pointer">
                    <MdOutlineSettings
                      className={`h-6 w-6 ${textColor} ${textColorHover}  `}
                    />
                    <span className="ml-2"> Your Profile </span>
                  </div>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <div
                  className={`${dropdownBgColor} ${textColor}  ${dropdownBgColorHover} block px-4 py-2 text-sm`}
                  onClick={() => toggleMode()}
                >
                  <div className="flex items-center cursor-pointer">
                    {mode === "dark" ? (
                      <ImSun className={`h-6 w-6 ${textColor}  `} />
                    ) : (
                      <MdOutlineDarkMode className={`h-6 w-6 ${textColor}  `} />
                    )}
                    <span className="ml-2">
                      {mode === "dark" ? "Light" : "Dark"} Mode
                    </span>
                  </div>
                </div>
              </Menu.Item>

              <Menu.Item>
                <div
                  className={`${dropdownBgColor} ${textColor} ${dropdownBgColorHover} block px-4 py-2 text-sm`}
                >
                  <LogoutButton />
                </div>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
