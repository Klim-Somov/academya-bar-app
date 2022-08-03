import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { setClose } from "../../features/menuSlice";
import sideBg from "../../assets/img/bar-bg.jpg";
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from "../../features/userSlice";
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import style from './SideBar.module.scss';
import {Link, useNavigate} from "react-router-dom"
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
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleDrawerClose = () => {
    dispatch(setClose());
  };
  const handleLogout = () => {
    dispatch(logout())
    dispatch(setClose());
    navigate("/login", { replace: true })
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
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
          </IconButton><div className={style.sidebarLogo}>
            <img src='https://s3.m2data.net/public/73461/bez-imeni.png' />
          </div>
        </DrawerHeader>
        
       
        <List>
          <ListItem disablePadding>
            <Link to='/technos'>
              <ListItemButton>
                <ListItemIcon>
                  <ArtTrackIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText primary="Технологички" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ContactPhoneIcon />
              </ListItemIcon>
              <ListItemText primary="Контакты поставщиков" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <NewspaperIcon />
              </ListItemIcon>
              <ListItemText primary="Новости" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout}>
              <ListItemIcon>
              <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Выйти из профиля" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
