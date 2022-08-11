import { Avatar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { setOpen } from "../../features/menuSlice";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import style from "./Header.module.scss";
import logo from "../../assets/img/Coffee-or-bartender.png";
import { auth } from "../../firebase";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ open, theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Header() {
  const open = useSelector((state) => state.togleMenu.open);
  const user = useSelector((state) => state.user);
  const avatar = auth?.currentUser?.photoURL;
  
  const dispatch = useDispatch();



  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={open}>
        <Toolbar className={style.root}>
          {user.user && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => dispatch(setOpen())}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <div className={style.logoWrapper}>
            <img alt="logo"src={logo} />
          </div>
          <Typography
            className={style.avatarrr}
            variant="h6"
            noWrap
            component="div"
          >
            Academia Bartenders
          </Typography>

          <div className={style.headerOption}>
            <Avatar src={avatar} sx={{ width:'56px', height:'56px', bgcolor: "#c96777" }}>
              {user?.user?.email[0]}
            </Avatar>
            {user.user ? (
              <span>{user?.user?.displayName}</span>
            ) : (
              <span>name</span>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
