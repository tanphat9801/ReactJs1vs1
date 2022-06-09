import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HeaderMainMenu = () => {
  const data = useSelector((state) => state.Menu.mainMenu);

  const handleMappingMainMenu = (menuItem) => {
    return (
      <li key={menuItem.id}>
        {menuItem.url.startsWith("http") ? (
          <a target="_blank" rel="noreferrer" href={menuItem.url}>
            {menuItem.title}
          </a>
        ) : (
          <Link to={menuItem.url}>{menuItem.title}</Link>
        )}
        {menuItem.childItems.length > 0 && (
          <ul>{menuItem.childItems.map(handleMappingMainMenu)}</ul>
        )}
      </li>
    );
  }; // tiep tuc su dung kien thuc de quy goi lai chinh ham ben tren

  return (
    <>
      <ul className="header-nav__lists">
        {data.map(handleMappingMainMenu)}

        {/* <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Our Team</a>
          <ul>
            <li>
              <a href="/">Our Team 1</a>
            </li>
            <li>
              <a href="/">Our Team 2</a>
            </li>
            <li>
              <a href="/">Our Team 3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/">Contact</a>
          <ul>
            <li>
              <a href="/">Contact 1</a>
            </li>
            <li>
              <a href="/">Contact 2</a>
            </li>
            <li>
              <a href="/">Contact 3</a>
              <ul>
                <li>
                  <a href="/">Contact 11</a>
                </li>
                <li>
                  <a href="/">Contact 12</a>
                </li>
                <li>
                  <a href="/">Contact 13</a>
                </li>
              </ul>
            </li>
          </ul>
        </li> */}
      </ul>
    </>
  );
};

export default HeaderMainMenu;
