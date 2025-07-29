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

function BusinessDash() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
        flexDirection: isMobile ? "column" : "row",
        backgroundColor: "#e7ddee",
        p: 2,
        gap: 2,
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
        <AppBar
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
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "flex-start" : "center",
              gap: isMobile ? 1 : 0,
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                color: "black",
                fontFamily: "Times New Roman",
                fontSize: "30px",
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
        </AppBar>

        {/* Stats Cards Section */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                borderRadius: 3,
                p: 2,
                mx: "auto",
                backgroundColor: "rgb(140, 127, 255)",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
                  overflow: "hidden",
                },
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.25rem",
                  color: "#f1eeee",
                }}
              >
                CUSTOMERS
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: "#f1eeee",
                  fontSize: "0.9rem",
                  ml: { xs: 0, md: 3 }, // margin-left: 10px
                }}
              >
                94,935
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                borderRadius: 3,
                p: 2,
                mx: "auto",
                backgroundColor: "rgb(140, 127, 255)",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
                  overflow: "hidden",
                },
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.25rem",
                  color: "#f1eeee",
                }}
              >
                INCOME
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: "#f1eeee",
                  fontSize: "0.9rem",
                  ml: { xs: 0, md: 3 }, // margin-left: 10px
                }}
              >
                $980,632
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                borderRadius: 3,
                p: 2,
                mx: "auto",
                backgroundColor: "rgb(140, 127, 255)",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
                  overflow: "hidden",
                },
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.25rem",
                  color: "#f1eeee",
                }}
              >
                PRODUCTS SOLD
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: "#f1eeee",
                  fontSize: "0.9rem",
                  ml: { xs: 0, md: 3 }, // margin-left: 10px
                }}
              >
                5,400
              </Typography>
            </Card>
          </Grid>
        </Grid>

        <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>
          Market Place
        </Typography>

        <Box sx={{ p: 1  }}>
          <Grid container spacing={2} >
            <Grid item xs={12} md={8} >
              <Card sx={{ borderRadius: 3, p: 3 }}>
                <Box  sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                <Typography variant="h6" fontWeight="bold">
                  Data Analytics  <br /> Overview
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  See how your account grows and  <br /> how you can boost it.
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

              <Card sx={{ borderRadius: 3, p: 4, mt: 2  }}>
                <Box  sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',mt:2 }} >
                  <Box>


                <Typography variant="h6" fontWeight="bold " >
                  Finance Flow
                </Typography>
                <Typography variant="h6" fontWeight="bold" >
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
                    ml:23,
                    
                  }}
                >
                  {[
                    80, 26, 50, 32, 50, 20, 30, 40, 50, 30, 60, 45, 70, 55, 80,
                    90, 58, 50, 36,
                  ].map((height, index) => (
                    <Box
                      key={index}
                      sx={{
                        
                        width: "6px",
                        height: `${height}px`,
                        backgroundColor: index === 8 ? "#6C63FF" : "#e0e0e0", // Purple for one bar
                        borderRadius: 1,
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
                  p: 2,
                  textAlign: "center",
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
                      style={{ width: "120px", height: "auto" }}
                    />
                  </Box>
                  <Typography variant="h5" fontWeight="bold">
                    $29 p/m
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    100% Insurance For Your Goods
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Recent Orders */}

        <Box sx={{ borderRadius: 3, p: 2,backgroundColor:"#e7ddee ",
                     
        }}>
                  <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>
          Recent Orders
        </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Typography variant="subtitle2" sx={{ml:89}}>See All</Typography>
          </Box>
          <Table>
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
        </Box>
      </Box>

      {/* Summary Section */}
<SummarySection/>
    </Box>
  );
}

export default BusinessDash;
