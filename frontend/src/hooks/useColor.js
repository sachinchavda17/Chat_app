import useMode from "../zustand/useMode";

const useColor = () => {

  const { mode } = useMode()

  const textColor = mode === "dark" ? "text-gray-200" : "text-gray-900";
  const textColorHover =
    mode === "dark" ? "hover:text-gray-950" : "hover:text-gray-800";
  const bgColor = mode === "dark" ? "bg-gray-950" : "bg-gray-50";
  const bgColorHover =
    mode === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-300";
  const bgSlateColorForHeader = mode === "dark" ? "bg-slate-500" : "bg-slate-200"
  const fixedColorForHeader = mode === "dark" ? "text-gray-900" : "text-gray-900"
  const sendBtnBgColor = mode === "dark" ? "bg-gray-700" : "bg-gray-200"
  const mainBgColor = "bg-blue-500"
  const mainTextColor = "text-blue-500"
  const mainBgColorHover = "hover:bg-blue-600"
  const mainTextColorHover = "hover:text-blue-600"
  const borderColor = mode === "dark" ? "border-slate-500" : "border-slate-900"
  const dividerColor = mode === "dark" ? "divider-neutral" : "divider "
  const dropdownBgColor = mode === "dark" ? "bg-gray-800" : "bg-gray-100";
  const dropdownBgColorHover = mode === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200";
  return { textColor, textColorHover, bgColor, bgColorHover, bgSlateColorForHeader, fixedColorForHeader, borderColor, sendBtnBgColor, mainBgColor, mainTextColor, mainBgColorHover, mainTextColorHover, dividerColor, dropdownBgColor, dropdownBgColorHover }
}

export default useColor;