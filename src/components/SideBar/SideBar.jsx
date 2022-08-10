import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { setClose } from "../../features/menuSlice";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "../../features/userSlice";
// import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import style from "./SideBar.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { setAvatar } from "../../features/avatarImgSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ChromeReaderModeOutlinedIcon from "@mui/icons-material/ChromeReaderModeOutlined";
import bg from "../../assets/img/cup.jpg";
const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function SideBar() {
  const theme = useTheme();
  const open = useSelector((state) => state.togleMenu.open);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDrawerClose = () => {
    dispatch(setClose());
  };
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout());
        dispatch(setClose());
        dispatch(setAvatar(null));
        navigate("/login", { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const menuRef = React.useRef();

  React.useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!e.target !== menuRef) dispatch(setClose());
    });
  }, []);

  return (
    <Box ref={menuRef} sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundImage: `url(${bg})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "250px",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
          <div className={style.sidebarLogo}>
            {/* <img src='https://s3.m2data.net/public/73461/bez-imeni.png' /> */}
          </div>
        </DrawerHeader>

        <List>
          <ListItem disablePadding>
            <Link to="/technos">
              <ListItemButton>
                <ListItemIcon>
                  <ChromeReaderModeOutlinedIcon sx={{ color: "black" }} />
                </ListItemIcon>
                <ListItemText primary="Технологички" />
              </ListItemButton>
            </Link>
          </ListItem>
          {/* <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ContactPhoneIcon  sx={{ color:"black" }} />
              </ListItemIcon>
              <ListItemText primary="Контакты поставщиков" />
            </ListItemButton>
          </ListItem> */}

          <ListItem disablePadding>
            <Link to="/chat">
              <ListItemButton>
                <ListItemIcon>
                  <ChatBubbleOutlineIcon sx={{ color: "black" }} />
                </ListItemIcon>
                <ListItemText primary="Общение и коментарии" />
              </ListItemButton>
            </Link>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="Выйти из профиля" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
