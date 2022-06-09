import "./header.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actLogout } from "../../stores/Auth/action";
import HeaderMainMenu from "./HeaderMainMenu";

const HeaderMenu = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.Auth.currentUser);
  // console.log("check current user ", currentUser);

  const handleLogout = (event) => {
    event.preventDefault();
    const confirm = window.confirm("Bạn chắc chắn muốn đăng xuất");
    if (confirm) {
      dispatch(actLogout());
    }
    return;
  };

  return (
    <>
      <div className="tcl-col-6">
        {/* Nav */}
        <div className="header-nav">
          <HeaderMainMenu />
          <ul className="header-nav__lists">
            {currentUser ? (
              <li className="user">
                <Link to="/dashboard">
                  <i className="icons ion-person" />
                  {currentUser.nickname}
                </Link>
                <ul>
                  <li>
                    <a onClick={handleLogout} href="/">
                      Đăng Xuất
                    </a>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="user">
                <Link to="/login">
                  <i className="icons ion-person" /> Tài khoản
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeaderMenu;
