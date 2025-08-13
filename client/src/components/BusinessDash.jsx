import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  useMediaQuery,
  useTheme,
  Stack,
  Avatar,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SummarySection from "./SummarySection";
import Header from "./Header";
import ProductList from "./productList/ProductList";

function BusinessDash() {
  const theme = useTheme();

  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const rows = [
    {
      id: "#1235465",
      product: "DJI Mavic Pro 2",
      date: "Sep 16, 2021",
      price: "$42.00",
      status: "Delivered",
    },
    {
      id: "#1235468",
      product: "iPad Pro 2017 Model",
      date: "Sep 15, 2021",
      price: "$932.00",
      status: "Canceled",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isSmallMobile ? "column" : "row",
        backgroundColor: "#e7ddee",
        p: isSmallMobile ? 1 : 2,
        gap: 2,
        minHeight: "100vh",
        
      }}
    >
      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {/* AppBar Section */}
        {/* <AppBar
          position="static"
          sx={{
            backgroundColor: "#e7ddee",
            boxShadow: "none",
            borderRadius: 2,
            mb: 2,
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
              Business Dashboard
            </Typography>

            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton size="large" color="default" aria-label="search">
                <SearchIcon />
              </IconButton>
              <IconButton
                size="large"
                color="default"
                aria-label="notifications"
              >
                <NotificationsIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar> */}
        <Header title= "Business Dashboard"/>

        {/* Stats Cards Section */}
        <Grid
          container
          spacing={2}
          sx={{
            flexDirection: isSmallMobile ? "column" : "row",
            width: isSmallMobile ? "1rem" : "100%",
            p: 1,
            gap: isSmallMobile ? "100" : "2rem",
          }}
        >
          {[
            { title: "CUSTOMERS", value: "94,935" },
            { title: "INCOME", value: "$980,632" },
            { title: "PRODUCTS SOLD", value: "5,400" },
          ].map((stat, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card
                sx={{
                  borderRadius: 3,
                  p: 3,
                  mx: "auto",
                  backgroundColor: "rgb(140, 127, 255)",
                  minHeight: "100px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: "bold",
                    fontSize: isSmallMobile ? "1rem" : "1.25rem",
                    color: "#f1eeee",
                  }}
                >
                  {stat.title}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: "#f1eeee",
                    fontSize: isSmallMobile ? "0.8rem" : "0.9rem",
                    textAlign: "left",
                    ml: { xs: 0, md: 3 },
                  }}
                >
                  {stat.value}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* <ProductList/> */}

        <Typography
          noWrap
          component="div"
          sx={{
            mt: 2,
            color: "black",
            fontFamily: "Times New Roman",
            fontSize: isSmallMobile ? "25px" : "30px",
            fontWeight: "600",
            ml: isSmallMobile ? 2 : 3,
          }}
        >
          Market Place
        </Typography>

        <Box sx={{ p: isSmallMobile ? 0 : 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Card sx={{ borderRadius: 3, p: isSmallMobile ? 1 : 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: isSmallMobile ? "column" : "row",
                    textAlign: isSmallMobile ? "center" : "left",
                  }}
                >
                  <Box sx={{ mb: isSmallMobile ? 2 : 0 }}>
                    <Typography variant="h6" fontWeight="bold">
                      Data Analytics <br /> Overview
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      See how your account grows and <br /> how you can boost
                      it.
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      width: 100,
                      height: 100,
                      borderRadius: "50%",
                      background:
                        "conic-gradient(white 60deg 130deg, rgba(108, 99, 255, 0.6) 180deg 360deg)",
                      position: "relative",
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: "80%",
                        height: "80%",
                        borderRadius: "50%",
                        backgroundColor: "#fff", // Inner circle background
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                        color: "#6C63FF",
                        fontSize: "0.75rem",
                      }}
                    >
                      START
                    </Box>
                  </Box>
                </Box>
              </Card>

              <Card sx={{ borderRadius: 3, p: isSmallMobile ? 2 : 4, mt: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 2,
                    flexDirection: isSmallMobile ? "column" : "row",
                    textAlign: isSmallMobile ? "center" : "left",
                  }}
                >
                  <Box sx={{ mb: isSmallMobile ? 4 : 0 }}>
                    <Typography variant="h6" fontWeight="bold ">
                      Finance Flow
                    </Typography>
                    <Typography variant="h6" fontWeight="bold">
                      $2,530
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      september 2021
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      height: 60,
                      gap: 0.5,
                      ml: isSmallMobile ? 0 : 23,

                      width: isSmallMobile ? "100%" : "auto",
                    }}
                  >
                    {[
                      80, 26, 50, 32, 50, 20, 30, 40, 50, 30, 60, 45, 70, 55,
                      80, 90, 58, 50, 36,
                    ].map((height, index) => (
                      <Box
                        key={index}
                        sx={{
                          width: "6px",
                          height: `${height}px`,
                          backgroundColor: index === 8 ? "#6C63FF" : "#e0e0e0", // Purple for one bar
                          borderRadius: 1,
                          flexShrink: 0,
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Card>
            </Grid>

            {/* UPGRADE TO PRO Card - Fixed as requested */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  width: "100%",
                  minHeight: 200,
                  borderRadius: 3,
                  boxShadow: 3,
                  backgroundColor: "#fff",
                  color: "#333",
                   p: isSmallMobile ? 2 : 4, mt:  isSmallMobile ? 2 :0,
                  textAlign: "center",
                }}
              >
                                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: isSmallMobile? 200:'auto',
                  }}
                >
                <CardContent>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    UPGRADE TO PRO
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mb: 3,
                      mt: 2,
                    }}
                  >
                    <img
                      src="/card.jpg"
                      alt="Upgrade"
                      style={{
                        width: isSmallMobile ? "80px" : "120px",
                        height: "auto",
                      }}
                    />
                  </Box>
                  <Typography variant="h5" fontWeight="bold">
                    $29 p/m
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    100% Insurance For Your Goods
                  </Typography>
                </CardContent>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Recent Orders */}

        <Box
          sx={{
            borderRadius: 3,
            p: isSmallMobile ? 1 : 2,
            backgroundColor: "#e7ddee ",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Recent Orders
            </Typography>
            <Typography variant="subtitle2" sx={{mr: isSmallMobile? 0:9}} >See All</Typography>
          </Box>
          <Box sx={{ overflowX: "auto",
            
           }}>
{isSmallMobile ? (
  // Mobile View: Card style rows
  <Stack spacing={2}>
    {rows.map((row) => (
      <Box
        key={row.id}
        sx={{
          border: "1px solid #ccc",
          borderRadius: 2,
          p: 2,
          backgroundColor: "#fff",
        }}
      >
        <Typography variant="subtitle2" fontWeight="bold">
          {row.id}
        </Typography>
        <Typography variant="body2">Product: {row.product}</Typography>
        <Typography variant="body2">Date: {row.date}</Typography>
        <Typography variant="body2">Price: {row.price}</Typography>
        <Typography
          variant="body2"
          sx={{
            color: row.status === "Delivered" ? "green" : "red",
            fontWeight: 500,
          }}
        >
          Status: {row.status}
        </Typography>
      </Box>
    ))}
  </Stack>
) : (
  // Desktop View: Normal table
  <Table sx={{ width: "100%" }}>
    <TableBody>
      {rows.map((row) => (
        <TableRow key={row.id}>
          <TableCell>{row.id}</TableCell>
          <TableCell>{row.product}</TableCell>
          <TableCell>{row.date}</TableCell>
          <TableCell>{row.price}</TableCell>
          <TableCell
            sx={{
              color: row.status === "Delivered" ? "green" : "red",
              fontWeight: 500,
            }}
          >
            {row.status}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
)}

          </Box>
        </Box>
      </Box>
      {/* Summary Section */}
      
      <SummarySection />
    </Box>
  );
}

export default BusinessDash;
