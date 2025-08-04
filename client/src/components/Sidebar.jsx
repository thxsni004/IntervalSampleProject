import { useNavigate } from "react-router-dom";
import React from "react";
import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Drawer,
  useMediaQuery,
  useTheme,
  Avatar,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  ReceiptLong as ReceiptLongIcon,
  BarChart as BarChartIcon,
  Inventory as InventoryIcon,
  Category as CategoryIcon,
  AccountCircle as AccountCircleIcon,
  Logout as LogoutIcon,
  Close as CloseIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/features/AuthSlice";
import { toggleSidebar } from "../redux/features/sidebarSlice";

const drawerWidth = 240;
const collapsedWidth = 80;

function Sidebar({ mobileOpen, handleDrawerToggle }) {
  const theme = useTheme(); //to acess breakpoint and colors
  const navigate = useNavigate();
  const dispatch = useDispatch(); //dispatch redux actions
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); //true if screen <md
  const sidebarOpen = useSelector((state) => state.sidebar.open); //from redux
  const user = useSelector((state) => state.auth.user);

  const handleItemClick = (item) => {
    if (item.text === "Logout") {
      const confirmLogout = window.confirm("Are you sure you want to logout?");
      if (confirmLogout) {
        dispatch(logout());
        navigate("/login");
      }
    } else if (item.path) {
      navigate(item.path);
      if (isMobile) handleDrawerToggle();
    }
  };

  const menuItems = [
    { icon: <DashboardIcon />, text: "Dashboard", path: "/dashboard" },
    { icon: <ReceiptLongIcon />, text: "Forms", path: "/form" },
    { icon: <BarChartIcon />, text: "Temprature", path: "/weather" },
    // { icon: <AccountCircleIcon />, text: 'Profile', path: '/profile' },
    {
      icon: <AccountCircleIcon />,
      text: "User Details",
      path: "/user-details",
    },
  ];

  const SidebarContent = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        background: "linear-gradient(180deg, #ffffffff 0%, #6d2185ff 100%)",
        color: "black",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          p: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: sidebarOpen ? "space-between" : "center",
          borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
        }}
      >
        {sidebarOpen ? (
          <>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
              <Avatar
                src="/logo.jpg"
                alt="Logo"
                sx={{ width: 40, height: 40, border: "2px solid white" }}
              />
              <Typography variant="subtitle" fontWeight="bold">
                O2O <br /> Brand <br />
                Protector
              </Typography>
            </Box>
            <IconButton
              onClick={() => dispatch(toggleSidebar())}
              sx={{ color: "white" }}
            >
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </>
        ) : (
          <Tooltip title="Expand sidebar" placement="right">
            <Avatar
              src="/logo.jpg"
              alt="Logo"
              sx={{
                width: 40,
                height: 40,
                border: "2px solid white",
                cursor: "pointer",
              }}
              onClick={() => dispatch(toggleSidebar())}
            />
          </Tooltip>
        )}
      </Box>

      {/* User Profile */}
      {sidebarOpen && (
        <Box
          sx={{
            p: 3,
            display: "flex",
            alignItems: "center",
            gap: 2,
            borderBottom: "2px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          <Avatar
            sx={{
              width: 40,
              height: 40,
              bgcolor: theme.palette.secondary.main,
              fontSize: "1.5rem",
            }}
          >
            {user?.username?.charAt(0).toUpperCase()}
          </Avatar>
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              {user?.username || "User"}
            </Typography>
            <Typography variant="caption">Admin</Typography>
          </Box>
        </Box>
      )}

      {/* Menu Items */}
      <List sx={{ flexGrow: 1, p: 1 }}>
        {menuItems.map((item, index) => (
          <ListItemButton
            key={index}
            onClick={() => handleItemClick(item)}
            sx={{
              borderRadius: 2,
              mb: 0.5,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
              "&.Mui-selected": {
                backgroundColor: theme.palette.secondary.main,
                "&:hover": {
                  backgroundColor: theme.palette.secondary.dark,
                },
              },
              justifyContent: sidebarOpen ? "initial" : "center",
              px: sidebarOpen ? 3 : 2.5,
              minHeight: 48,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: sidebarOpen ? 3 : "auto",
                color: "inherit",
              }}
            >
              {item.icon}
            </ListItemIcon>
            {sidebarOpen && (
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{ fontWeight: 500 }}
              />
            )}
          </ListItemButton>
        ))}
      </List>

      {/* Footer/Logout */}
      <Box sx={{ p: 2, borderTop: "1px solid rgba(255, 255, 255, 0.12)" }}>
        <ListItemButton
          onClick={() => handleItemClick({ text: "Logout" })}
          sx={{
            borderRadius: 2,
            color: "rgba(255, 255, 255, 0.7)",
            "&:hover": {
              color: "white",
              backgroundColor: "rgba(255, 99, 71, 0.1)",
            },
            justifyContent: sidebarOpen ? "initial" : "center",
            px: sidebarOpen ? 3 : 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: sidebarOpen ? 3 : "auto",
              color: "inherit",
            }}
          >
            <LogoutIcon />
          </ListItemIcon>
          {sidebarOpen && <ListItemText primary="Logout" />}
        </ListItemButton>
      </Box>
    </Box>
  );

  return isMobile ? (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{ keepMounted: true }}
      sx={{
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: "white" }}>
          <CloseIcon />
        </IconButton>
      </Box>
      {SidebarContent}
    </Drawer>
  ) : (
    <Drawer
      variant="permanent"
      sx={{
        width: sidebarOpen ? drawerWidth : collapsedWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        "& .MuiDrawer-paper": {
          overflowX: "hidden",
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          width: sidebarOpen ? drawerWidth : collapsedWidth,
          boxSizing: "border-box",
        },
      }}
      open={sidebarOpen}
    >
      {SidebarContent}
    </Drawer>
  );
}

export default Sidebar;
