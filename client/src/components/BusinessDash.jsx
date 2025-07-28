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
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";



function BusinessDash() {
  const rows = [
    { id: '#1235465', product: 'DJI Mavic Pro 2', date: 'Sep 16, 2021', price: '$42.00', status: 'Delivered' },
    { id: '#1235468', product: 'iPad Pro 2017 Model', date: 'Sep 15, 2021', price: '$932.00', status: 'Canceled' },
  ];

  const CardData = [
    {
      title: "CUSTOMERS",
      description: "54,235.",
    },
    {
      title: "INCOME",
      description: "$980.632",
    },
    {
      title: "PRODUCTS SOLD",
      description: "5,490",
    },
  ];

  const data = [
    { name: "Week 1", value: 300 },
    { name: "Week 2", value: 500 },
    { name: "Week 3", value: 250 },
    { name: "Week 4", value: 600 },
  ];

  return (
    <Box sx={{ p: 2, backgroundColor: "#e7ddee" }}>
      {/* AppBar Section */}

      <AppBar
        position="static"
        sx={{
          backgroundColor: "#e7ddee",
          boxShadow: "none",
          borderRadius: 2,
          maxWidth: "800px",
          mb: 4, // spacing below the appbar
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Left: Title */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              color: "black",
              mr: 2,
              fontFamily: "Times New Roman",
              fontSize: "30px",
              fontWeight: "600",
            }}
          >
            Business Dashboard
          </Typography>

          {/* Right: Icons */}
          <Box sx={{ display: "flex", gap: 1, ml: 45 }}>
            <IconButton size="large" color="default" aria-label="search">
              <SearchIcon />
            </IconButton>
            <IconButton size="large" color="default" aria-label="notifications">
              <NotificationsIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* 3 Cards Section */}
      <Grid container spacing={3}>
        {CardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                width: 240, // width: 240px
                mx: "auto", // margin: 0 auto
                borderRadius: 6, // border-radius: 16px
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // box-shadow
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                transition: "transform 0.3s, box-shadow 0.3s",
                color: "aliceblue",
                backgroundColor: "rgb(140, 127, 255)",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              <CardMedia
                height="150"
                alt={card.title}
                sx={{
                  objectFit: "cover",
                  width: "100%",
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.25rem",
                    ml: 1, // margin-left: 10px
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    color: "#f1eeee",
                    fontSize: "0.9rem",
                    ml: 1, // margin-left: 10px
                  }}
                >
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography
        sx={{
          color: "black",
          mr: 2,
          p: 2,
          fontFamily: "Times New Roman",
          fontSize: "20px",
          fontWeight: "600",
          ml: 3,
        }}
      >
        Market Place
      </Typography>

      <Box sx={{ p: 2 }}>
        <Grid container spacing={2}>
          {/* Left Side: Two Cards Stacked Vertically */}
          <Grid item xs={12} md={8}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Card
                  sx={{
                    p: 2,
                     
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderRadius: 9,
                  }}
                >
                  {/* Left Content */}
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", fontFamily: "Roboto", p: 1 }}
                    >
                      Data Analytics <br /> Overview
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ p: 2 }}
                    >
                      See how your account grows and <br /> how you can boost
                      it.
                    </Typography>
                  </Box>

                  {/* Right Circular START */}
                  <Box
                    sx={{
                      width: 150,
                      height: 150,
                      borderRadius: "50%",
                      background:
                        "conic-gradient(white 60deg 130deg, rgba(108, 99, 255, 0.6) 180deg 360deg)",
                      position: "relative",
                      ml: 2,
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
                </Card>
              </Grid>

              {/* 🔽 New Card Below: Business Insights */}
              <Grid item>
                <Card
                  sx={{
                    p: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderRadius: 9,
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", fontFamily: "Roboto", p: 1 }}
                    >
                      Finance Flow
                    </Typography>

                    <Typography sx={{ fontWeight: "bold", p: 1 }}>
                      $2,530
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ p: 1 }}
                    >
                      september 2021
                    </Typography>
                  </Box>

                  {/* Custom vertical lines */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "end",
                      height: 80,
                      gap: 0.8,
                      px: 1,
                      ml: 29,
                    }}
                  >
                    {[80,26,50,32,50,20,30,40, 50, 30, 60, 45, 70, 55,80,90,58,50,36].map((height, index) => (
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
                </Card>
              </Grid>
            </Grid>
          </Grid>

          {/* Right Side: Summary Card */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                width: "90%",
                minHeight: 200,
                borderRadius: 9,
                boxShadow: 3,
                backgroundColor: "#fff",
                color: "#333",
                p: 2,
              }}
            >
              <CardContent >
                <Typography variant="h7" sx={{  alignItems:'center',p:4 }}>
                  UPGRADE TO PRO
                </Typography>
  <Box sx={{ display: "flex", justifyContent: "center", mb: 9 ,mt:2}}>
    <img
      src="/card.jpg" // 👈 Make sure the image is in your `public` folder if using Vite
      alt="Upgrade"
      style={{ width: "120px", height: "auto" }}
    />
  </Box>

                <Typography
                  variant="h5"
                  sx={{  fontSize: "27px", textAlign: "center" }}
                >
                  $29 p/m
                </Typography>

                <Box sx={{ mt: 3 }}>
                  <Typography variant="body2"  textAlign="center">
                    100% Insurance For Your Goods
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Tables */}

    <Box sx={{ px: 3, py: 4 }}>
      {/* Title and See All */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h6" fontWeight={600}>Recent Orders</Typography>
        <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' ,mr:9}}>See All</Typography>
      </Box>

      {/* Table */}
      <Box sx={{ backgroundColor: '#e7ddee',  }}>
        <table style={{ width: '100%'}}>
          
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px 16px' }}>{row.id}</td>
                <td style={{ padding: '12px 16px' }}>{row.product}</td>
                <td style={{ padding: '12px 16px' }}>{row.date}</td>
                <td style={{ padding: '12px 16px' }}>{row.price}</td>
                <td style={{
                  padding: '12px 16px',
                  color: row.status === 'Delivered' ? 'green' : 'red',
                  fontWeight: 500
                }}>{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Box>

    </Box>
  );
}

export default BusinessDash;
