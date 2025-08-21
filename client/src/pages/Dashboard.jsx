import React, { useState } from "react";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useTheme, useMediaQuery } from "@mui/material";
import Sidebar from "../components/Sidebar";
import BusinessDash from "../components/BusinessDash";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
// import { Button } from "@mui/material";
// import ShiftDialog from "../components/ShiftDialog";

import { toggleSidebar } from "../redux/features/sidebarSlice";

function Dashboard() {
  const dispatch = useDispatch();
  const sidebarOpen = useSelector((state) => state.sidebar.open);
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:750px)");

  const handleDrawerToggle = () => {
    dispatch(toggleSidebar());
  };

  const [open, setOpen] = useState(false);
  return (

        <BusinessDash />
      

  );
}

export default Dashboard;
