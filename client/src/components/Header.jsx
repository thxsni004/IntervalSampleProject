import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
  Tooltip,
  Badge
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = ({title}) => {
  const theme = useTheme();
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));

    // Get cart from Redux
const {cartList} = useSelector((state)=>state.cart);
const totalCartCount=cartList.reduce((total,item)=>total+item.count,0)
 

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isSmallMobile ? "column" : "row",
        backgroundColor: "#e7ddee",
        p: isSmallMobile ? 1 : 2,
        gap: 2,
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#e7ddee",
          boxShadow: "none",
          borderRadius: 2,
          
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            flexDirection: isSmallMobile ? "column" : "row",
            alignItems: isSmallMobile ? "flex-start" : "center",
            gap: isSmallMobile ? 1 : 0,
            p: isSmallMobile ? 1 : 2,
          }}
        >
          {/* Title */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              color: "black",
              fontFamily: "Times New Roman",
              fontSize: isSmallMobile ? "25px" : "30px",
              fontWeight: "600",
            }}
          >
            {title}
          </Typography>

          {/* Icons Section */}
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            {/* Search */}
            <IconButton size="large" color="default" aria-label="search">
              <SearchIcon />
            </IconButton>

            {/* Notifications */}
            <IconButton size="large" color="default" aria-label="notifications">
              <NotificationsIcon />
            </IconButton>

            {/* Cart */}
            <Tooltip title="View Cart">
              <IconButton size="large" color="default" aria-label="cart" component={Link} to='/cartpage'>
                <Badge
                  badgeContent={totalCartCount}
                  color="error"
                  
                >
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
