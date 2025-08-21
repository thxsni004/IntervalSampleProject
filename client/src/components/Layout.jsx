// src/components/Layout.jsx
import React from "react";
import { Box, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../redux/features/sidebarSlice";
import Sidebar from "./Sidebar";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme, useMediaQuery } from "@mui/material";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const sidebarOpen = useSelector((state) => state.sidebar.open);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box display="flex">
      {/* Constant Sidebar */}
      <Sidebar
        mobileOpen={sidebarOpen}
        handleDrawerToggle={() => dispatch(toggleSidebar())}
      />

      {/* Page Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: "100%",
        }}
      >
        {/* Mobile Toggle Button */}
        {isMobile && (
          <IconButton
            onClick={() => dispatch(toggleSidebar())}
            sx={{
              position: "fixed",
              top: 10,
              left: 10,
              zIndex: theme.zIndex.drawer + 1,
              color: "black",
            }}
          >
            <MenuIcon />
          </IconButton>
        )}

        {children}
      </Box>
    </Box>
  );
};

export default Layout;
