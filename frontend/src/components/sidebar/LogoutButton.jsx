import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import useColor from "../../hooks/useColor";
const LogoutButton = () => {
  const { loading, logout } = useLogout();
  const { textColor } = useColor();
  return (
    // <div className="mt-8">
    <div className="mt-auto">
      {!loading ? (
        <div className="flex items-center cursor-pointer">
          <BiLogOut className={`h-6 w-6  ${textColor} `} onClick={logout} />
          <span className={`ml-2 ${textColor}`}> Sign out</span>
        </div>
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutButton;
