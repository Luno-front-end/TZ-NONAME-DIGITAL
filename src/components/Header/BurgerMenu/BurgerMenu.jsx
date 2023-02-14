import style from "../header.module.scss";
import MenuIcon from "@mui/icons-material/Menu";

export const BurgerMenu = ({ setIsActiveMenu, isActiveMenu }) => {
  return (
    <button
      className={style.burg_contain}
      type="button"
      onClick={() => {
        setIsActiveMenu(!isActiveMenu);
      }}
    >
      <MenuIcon className={style.icon} sx={{ color: "white" }} />
    </button>
  );
};
