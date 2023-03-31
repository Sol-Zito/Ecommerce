import { Button, Stack, SvgIcon } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import style from "./Home.module.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import ThemeContext from "../../../Context/Themes";
import { CartContexReducer } from "../../../Context/CartContextReducer";
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const NavBar = () => {
  const { theme, handleChangeTheme } = useContext(ThemeContext);

  const { state, dispatch } = useContext(CartContexReducer);

  useEffect(() => {
    dispatch({ type: "GET_TOTAL_QUANTITY" });
  }, [state.cart]);

  return (
    <div className={style.btnContenedor}>
      <Stack direction="row" spacing={2}>
        <NavLink to="/home">
          <Button variant="contained">
            <HomeIcon />
          </Button>
        </NavLink>

        <NavLink to="/shop">
          <Button variant="contained">
            <AddBusinessIcon />
          </Button>
        </NavLink>

        <NavLink to="/cart">
          <Button variant="contained">
            {" "}
            <AddShoppingCartIcon />{" "}
          </Button>
        </NavLink>

        <Button
          variant="contained"
          onClick={handleChangeTheme}
          style={{ background: theme.background, color: theme.font }}
        >
          <Brightness6Icon />
        </Button>
      </Stack>
      <h3>Carrito: {state.totalQuantity} </h3>
    </div>
  );
};

export default NavBar;
