import React, { useState } from "react";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useTheme, useMediaQuery } from "@mui/material";
import Sidebar from "../components/Sidebar";
import BusinessDash from "../components/BusinessDash";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

import { toggleSidebar } from "../redux/features/sidebarSlice";

function Dashboard() {
  const dispatch = useDispatch();
  const sidebarOpen = useSelector((state) => state.sidebar.open);
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:750px)");

  const handleDrawerToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar
        mobileOpen={sidebarOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          ml: { sm: 0 },
        }}
      >
        {isMobile && (
          <IconButton onClick={handleDrawerToggle} sx={{ mb: 2 }}>
            <MenuIcon />
          </IconButton>
        )}
        <BusinessDash />
        {/* <SummarySection /> */}
      </Box>
    </Box>
  );
}

export default Dashboard;
