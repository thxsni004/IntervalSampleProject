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
    <Box sx={{ p: 1, backgroundColor: "#e7ddee" , display:'flexbox',borderRadius:5 ,mr:33, gap: 1, ml: { xs: 0, md: 1 }}}>
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
                 width: { xs: 250, md: 240 ,gap:3  },
                // width: 240, // width: 240px
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
                    // ml: 1, // margin-left: 10px
                     ml: { xs: 0, md: 3 },
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
                     ml: { xs: 0, md: 3 }, // margin-left: 10px
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
          <Grid item xs={12} md={8} sx={{ order: { xs: 2, md: 1 } }}>
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
          <Grid item xs={12} md={4} sx={{ order: { xs: 1, md: 2 } }}>
            <Card
              sx={{
                width: "100%",
                minHeight: 200,
                borderRadius: 9,
                boxShadow: 3,
                backgroundColor: "#fff",
                color: "#333",
                p: 2,
              }}
            >
              <CardContent >
                <Typography variant="subtitle1" sx={{  textAlign: 'center', p: 2  }}>
                  UPGRADE TO PRO
                </Typography>
  <Box sx={{ display: "flex", justifyContent: "center", mb: 3 ,mt:2}}>
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

// import React from "react";
// import {
//   AppBar,
//   Box,
//   Toolbar,
//   IconButton,
//   Typography,
//   Card,
//   CardContent,
//   CardMedia,
//   Grid,
//   useMediaQuery,
//   useTheme,
//   Stack,
//   Avatar,
//   Divider
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import TrendingUpIcon from "@mui/icons-material/TrendingUp";
// import TrendingDownIcon from "@mui/icons-material/TrendingDown";
// import PriceChangeIcon from "@mui/icons-material/PriceChange";
// import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
// import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

// function BusinessDash() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
//   const rows = [
//     { id: '#1235465', product: 'DJI Mavic Pro 2', date: 'Sep 16, 2021', price: '$42.00', status: 'Delivered' },
//     { id: '#1235468', product: 'iPad Pro 2017 Model', date: 'Sep 15, 2021', price: '$932.00', status: 'Canceled' },
//   ];

//   const CardData = [
//     {
//       title: "CUSTOMERS",
//       description: "54,235.",
//     },
//     {
//       title: "INCOME",
//       description: "$980.632",
//     },
//     {
//       title: "PRODUCTS SOLD",
//       description: "5,490",
//     },
//   ];

//   return (
//     <Box sx={{ 
//       display: 'flex',
//       flexDirection: isMobile ? 'column' : 'row',
//       backgroundColor: "#e7ddee",
//       borderRadius: 5,
//       p: 1,
//       gap: 2
//     }}>
//       {/* Main Content */}
//       <Box sx={{ 
//         flex: 1,
//         display: 'flex',
//         flexDirection: 'column',
//         gap: 2
//       }}>
//         {/* AppBar Section */}
//         <AppBar
//           position="static"
//           sx={{
//             backgroundColor: "#e7ddee",
//             boxShadow: "none",
//             borderRadius: 2,
//             mb: 2,
//           }}
//         >
//           <Toolbar sx={{ 
//             justifyContent: "space-between",
//             flexDirection: isMobile ? 'column' : 'row',
//             alignItems: isMobile ? 'flex-start' : 'center',
//             gap: isMobile ? 1 : 0
//           }}>
//             <Typography
//               variant="h6"
//               noWrap
//               component="div"
//               sx={{
//                 color: "black",
//                 fontFamily: "Times New Roman",
//                 fontSize: "30px",
//                 fontWeight: "600",
//               }}
//             >
//               Business Dashboard
//             </Typography>

//             <Box sx={{ display: "flex", gap: 1 }}>
//               <IconButton size="large" color="default" aria-label="search">
//                 <SearchIcon />
//               </IconButton>
//               <IconButton size="large" color="default" aria-label="notifications">
//                 <NotificationsIcon />
//               </IconButton>
//             </Box>
//           </Toolbar>
//         </AppBar>

//         {/* 3 Cards Section */}
//         <Grid container spacing={3}>
//           {CardData.map((card, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Card
//                 sx={{
//                   width: "100%",
//                   mx: "auto",
//                   borderRadius: 6,
//                   boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//                   display: "flex",
//                   flexDirection: "column",
//                   overflow: "hidden",
//                   transition: "transform 0.3s, box-shadow 0.3s",
//                   color: "aliceblue",
//                   backgroundColor: "rgb(140, 127, 255)",
//                   "&:hover": {
//                     transform: "scale(1.03)",
//                     boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
//                   },
//                 }}
//               >
//                 <CardMedia
//                   height="150"
//                   alt={card.title}
//                   sx={{
//                     objectFit: "cover",
//                     width: "100%",
//                   }}
//                 />
//                 <CardContent sx={{ flexGrow: 1 }}>
//                   <Typography
//                     gutterBottom
//                     variant="h5"
//                     component="div"
//                     sx={{
//                       fontWeight: "bold",
//                       fontSize: "1.25rem",
//                       ml: { xs: 0, md: 3 },
//                     }}
//                   >
//                     {card.title}
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     color="text.secondary"
//                     sx={{
//                       color: "#f1eeee",
//                       fontSize: "0.9rem",
//                       ml: { xs: 0, md: 3 },
//                     }}
//                   >
//                     {card.description}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>

//         <Typography
//           sx={{
//             color: "black",
//             p: 2,
//             fontFamily: "Times New Roman",
//             fontSize: "20px",
//             fontWeight: "600",
//             ml: 1,
//           }}
//         >
//           Market Place
//         </Typography>

//         <Box sx={{ p: 2 }}>
//           <Grid container spacing={2}>
//             {/* Left Side: Two Cards Stacked Vertically */}
//             <Grid item xs={12} md={8} sx={{ order: { xs: 2, md: 1 } }}>
//               <Grid container direction="column" spacing={2}>
//                 <Grid item>
//                   <Card
//                     sx={{
//                       p: 2,
//                       display: "flex",
//                       flexDirection: isMobile ? 'column' : 'row',
//                       justifyContent: "space-between",
//                       alignItems: "center",
//                       borderRadius: 9,
//                     }}
//                   >
//                     <Box>
//                       <Typography
//                         variant="h6"
//                         sx={{ fontWeight: "bold", fontFamily: "Roboto", p: 1 }}
//                       >
//                         Data Analytics <br /> Overview
//                       </Typography>
//                       <Typography
//                         variant="body2"
//                         color="text.secondary"
//                         sx={{ p: 2 }}
//                       >
//                         See how your account grows and <br /> how you can boost
//                         it.
//                       </Typography>
//                     </Box>

//                     <Box
//                       sx={{
//                         width: 150,
//                         height: 150,
//                         borderRadius: "50%",
//                         background:
//                           "conic-gradient(white 60deg 130deg, rgba(108, 99, 255, 0.6) 180deg 360deg)",
//                         position: "relative",
//                         ml: isMobile ? 0 : 2,
//                         mt: isMobile ? 2 : 0,
//                       }}
//                     >
//                       <Box
//                         sx={{
//                           width: "80%",
//                           height: "80%",
//                           borderRadius: "50%",
//                           backgroundColor: "#fff",
//                           position: "absolute",
//                           top: "50%",
//                           left: "50%",
//                           transform: "translate(-50%, -50%)",
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                           fontWeight: "bold",
//                           color: "#6C63FF",
//                           fontSize: "0.75rem",
//                         }}
//                       >
//                         START
//                       </Box>
//                     </Box>
//                   </Card>
//                 </Grid>

//                 <Grid item>
//                   <Card
//                     sx={{
//                       p: 2,
//                       display: "flex",
//                       flexDirection: isMobile ? 'column' : 'row',
//                       justifyContent: "space-between",
//                       alignItems: "center",
//                       borderRadius: 9,
//                     }}
//                   >
//                     <Box>
//                       <Typography
//                         variant="h6"
//                         sx={{ fontWeight: "bold", fontFamily: "Roboto", p: 1 }}
//                       >
//                         Finance Flow
//                       </Typography>

//                       <Typography sx={{ fontWeight: "bold", p: 1 }}>
//                         $2,530
//                       </Typography>
//                       <Typography
//                         variant="body2"
//                         color="text.secondary"
//                         sx={{ p: 1 }}
//                       >
//                         september 2021
//                       </Typography>
//                     </Box>

//                     <Box
//                       sx={{
//                         display: "flex",
//                         alignItems: "end",
//                         height: 80,
//                         gap: 0.8,
//                         px: 1,
//                         ml: isMobile ? 0 : 29,
//                         mt: isMobile ? 2 : 0,
//                         overflowX: 'auto',
//                         width: isMobile ? '100%' : 'auto'
//                       }}
//                     >
//                       {[80,26,50,32,50,20,30,40,50,30,60,45,70,55,80,90,58,50,36].map((height, index) => (
//                         <Box
//                           key={index}
//                           sx={{
//                             width: "6px",
//                             height: `${height}px`,
//                             backgroundColor: index === 8 ? "#6C63FF" : "#e0e0e0",
//                             borderRadius: 1,
//                           }}
//                         />
//                       ))}
//                     </Box>
//                   </Card>
//                 </Grid>
//               </Grid>
//             </Grid>

//             {/* Right Side: Summary Card */}
//             <Grid item xs={12} md={4} sx={{ order: { xs: 1, md: 2 } }}>
//               <Card
//                 sx={{
//                   width: "100%",
//                   minHeight: 200,
//                   borderRadius: 9,
//                   boxShadow: 3,
//                   backgroundColor: "#fff",
//                   color: "#333",
//                   p: 2,
//                 }}
//               >
//                 <CardContent>
//                   <Typography variant="subtitle1" sx={{ textAlign: 'center', p: 2 }}>
//                     UPGRADE TO PRO
//                   </Typography>
//                   <Box sx={{ display: "flex", justifyContent: "center", mb: 3, mt: 2 }}>
//                     <img
//                       src="/card.jpg"
//                       alt="Upgrade"
//                       style={{ width: "120px", height: "auto" }}
//                     />
//                   </Box>

//                   <Typography
//                     variant="h5"
//                     sx={{ fontSize: "27px", textAlign: "center" }}
//                   >
//                     $29 p/m
//                   </Typography>

//                   <Box sx={{ mt: 3 }}>
//                     <Typography variant="body2" textAlign="center">
//                       100% Insurance For Your Goods
//                     </Typography>
//                   </Box>
//                 </CardContent>
//               </Card>
//             </Grid>
//           </Grid>
//         </Box>

//         {/* Tables */}
//         <Box sx={{ px: 3, py: 4 }}>
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
//             <Typography variant="h6" fontWeight={600}>Recent Orders</Typography>
//             <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>See All</Typography>
//           </Box>

//           <Box sx={{ backgroundColor: '#e7ddee', overflowX: 'auto' }}>
//             <table style={{ width: '100%' }}>
//               <tbody>
//                 {rows.map((row) => (
//                   <tr key={row.id} style={{ borderBottom: '1px solid #eee' }}>
//                     <td style={{ padding: '12px 16px' }}>{row.id}</td>
//                     <td style={{ padding: '12px 16px' }}>{row.product}</td>
//                     <td style={{ padding: '12px 16px' }}>{row.date}</td>
//                     <td style={{ padding: '12px 16px' }}>{row.price}</td>
//                     <td style={{
//                       padding: '12px 16px',
//                       color: row.status === 'Delivered' ? 'green' : 'red',
//                       fontWeight: 500
//                     }}>{row.status}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </Box>
//         </Box>
//       </Box>

//       {/* Summary Section */}
//       <Box sx={{ 
//         width: isMobile ? '100%' : 300,
//         p: 2,
//         backgroundColor: '#f8f9fd',
//         borderRadius: 5
//       }}>
//         <Typography
//           sx={{
//             fontWeight: "bold",
//             fontFamily: "timesnewroman",
//             fontSize: "30px",
//           }}
//         >
//           Summary
//         </Typography>
//         <Card sx={{ p: 2, mb: 2, position: "relative", boxShadow: 0, width: '100%' }}>
//           <Typography variant="subtitle2">Your Balance</Typography>
//           <Typography variant="h5" fontWeight="bold">
//             $10,632.00
//           </Typography>

//           <Stack direction="row" justifyContent="flex-end" spacing={3}>
//             <AddCircleIcon
//               sx={{ color: "red", position: "absolute", top: 19, right: 8 }}
//             />
//           </Stack>

//           <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
//             <Typography color="green" variant="caption">
//               <TrendingUpIcon fontSize="small" /> $3,250.07
//             </Typography>
//             <Typography color="red" variant="caption">
//               <TrendingDownIcon fontSize="small" /> $1,062.90
//             </Typography>
//           </Box>
//         </Card>
//         <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
//           <Typography
//             variant="subtitle2"
//             sx={{ fontWeight: "bold", fontSize: "1.3rem" }}
//           >
//             Activity
//           </Typography>
//           <Typography
//             variant="body2"
//             color="primary"
//             sx={{ cursor: "pointer", mt: 1 }}
//           >
//             See All
//           </Typography>
//         </Box>
//         <Box sx={{ p: 2, mb: 2 }}>
//           <Box mt={1} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//             <Avatar sx={{ bgcolor: "rgba(0, 0, 255, 0.1)" }}>
//               <PriceChangeIcon sx={{ color: "blue" }} />
//             </Avatar>
//             <Box>
//               <Typography variant="body2">Withdraw Earning</Typography>
//               <Typography variant="caption" color="text.secondary">
//                 12:40 am
//               </Typography>
//             </Box>
//             <Typography variant="body2" sx={{ marginLeft: "auto", fontWeight: "bold" }}>
//               $4,120
//             </Typography>
//           </Box>

//           <Divider sx={{ my: 1 }} />

//           <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt:1 }}>
//             <Avatar sx={{ bgcolor: "rgba(255, 0, 0, 0.1)" }}>
//               <PriceChangeIcon sx={{ color: "red" }} />
//             </Avatar>
//             <Box>
//               <Typography variant="body2">Paying Website tax</Typography>
//               <Typography variant="caption" color="text.secondary">
//                 10:20 am
//               </Typography>
//             </Box>
//             <Typography variant="body2" sx={{ marginLeft: "auto", fontWeight: "bold" }}>
//               -$230
//             </Typography>
//           </Box>
//         </Box>

//         <Box sx={{ p: 2, mt: -6 }}>
//           <Typography variant="subtitle2" sx={{ fontWeight: "bold", mt:3}}>
//             Top Categories
//           </Typography>
//           <Typography sx={{ fontSize: "13px", color: "gray" }}>
//             Explore your top categories and keep shopping with cashback
//           </Typography>
//           <Box sx={{ mt: 3, display: "flex", gap: isMobile ? 2 : 7, overflowX: isMobile ? 'auto' : 'visible' }}>
//             <Card
//               sx={{
//                 width: 100,
//                 p: 1,
//                 borderRadius: 3,
//                 backgroundColor: "#fffde7",
//                 flexShrink: 0
//               }}
//             >
//               <Stack direction="column" spacing={1} alignItems="center">
//                 <Avatar sx={{ bgcolor: "rgba(255, 255, 0, 0.2)" }}>
//                   <StoreMallDirectoryIcon />
//                 </Avatar>
//                 <Typography fontWeight="bold">Footwear</Typography>
//               </Stack>
//               <Typography variant="body2" sx={{ mt: 1, ml: 4 }}>
//                 18,941 units
//               </Typography>
//             </Card>

//             <Card
//               sx={{
//                 width: 100,
//                 p: 2,
//                 borderRadius: 3,
//                 backgroundColor: "#e8f5e9",
//                 flexShrink: 0
//               }}
//             >
//               <Stack direction="column" spacing={1} alignItems="center">
//                 <Avatar sx={{ bgcolor: "rgba(0, 255, 0, 0.3)" }}>
//                   <ShoppingBagIcon />
//                 </Avatar>
//                 <Typography fontWeight="bold">Accessories</Typography>
//               </Stack>
//               <Typography variant="body2" sx={{ mt: 1, ml: 4 }}>
//                 26,061 units
//               </Typography>
//             </Card>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// export default BusinessDash;

// import React from "react";
// import {
//   AppBar,
//   Box,
//   Toolbar,
//   IconButton,
//   Typography,
//   Card,
//   CardContent,
//   CardMedia,
//   Grid,
//   useMediaQuery,
//   useTheme,
//   Stack,
//   Avatar,
//   Divider,
//   Table,
//   TableBody,
//   TableCell,
//   TableRow
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import TrendingUpIcon from "@mui/icons-material/TrendingUp";
// import TrendingDownIcon from "@mui/icons-material/TrendingDown";
// import PriceChangeIcon from "@mui/icons-material/PriceChange";
// import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
// import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

// function BusinessDash() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
//   const rows = [
//     { id: '#1235465', product: 'DJI Mavic Pro 2', date: 'Sep 16, 2021', price: '$42.00', status: 'Delivered' },
//     { id: '#1235468', product: 'iPad Pro 2017 Model', date: 'Sep 15, 2021', price: '$932.00', status: 'Canceled' },
//   ];

//   return (
//     <Box sx={{ 
//       display: 'flex',
//       flexDirection: isMobile ? 'column' : 'row',
//       backgroundColor: "#f5f5f5",
//       p: 2,
//       gap: 2
//     }}>
//       {/* Main Content */}
//       <Box sx={{ 
//         flex: 1,
//         display: 'flex',
//         flexDirection: 'column',
//         gap: 2
//       }}>
//         {/* AppBar Section */}
//         <AppBar
//           position="static"
//           sx={{
//             backgroundColor: "#ffffff",
//             boxShadow: "none",
//             borderRadius: 2,
//             mb: 2,
//           }}
//         >
//           <Toolbar sx={{ 
//             justifyContent: "space-between",
//             flexDirection: isMobile ? 'column' : 'row',
//             alignItems: isMobile ? 'flex-start' : 'center',
//             gap: isMobile ? 1 : 0
//           }}>
//             <Typography
//               variant="h6"
//               noWrap
//               component="div"
//               sx={{
//                 color: "black",
//                 fontFamily: "Times New Roman",
//                 fontSize: "30px",
//                 fontWeight: "600",
//               }}
//             >
//               Business Dashboard
//             </Typography>

//             <Box sx={{ display: "flex", gap: 1 }}>
//               <IconButton size="large" color="default" aria-label="search">
//                 <SearchIcon />
//               </IconButton>
//               <IconButton size="large" color="default" aria-label="notifications">
//                 <NotificationsIcon />
//               </IconButton>
//             </Box>
//           </Toolbar>
//         </AppBar>

//         {/* Stats Cards Section */}
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={4}>
//             <Card sx={{ borderRadius: 3, p: 2 }}>
//               <Typography variant="subtitle2">CUSTOMERS</Typography>
//               <Typography variant="h4" fontWeight="bold">94,935</Typography>
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <Card sx={{ borderRadius: 3, p: 2 }}>
//               <Typography variant="subtitle2">INCOME</Typography>
//               <Typography variant="h4" fontWeight="bold">$980,632</Typography>
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <Card sx={{ borderRadius: 3, p: 2 }}>
//               <Typography variant="subtitle2">PRODUCTS SOLD</Typography>
//               <Typography variant="h4" fontWeight="bold">5,400</Typography>
//             </Card>
//           </Grid>
//         </Grid>

//         <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>
//           Market Place
//         </Typography>

//         <Box sx={{ p: 1 }}>
//           <Grid container spacing={2}>
//             <Grid item xs={12} md={8}>
//               <Card sx={{ borderRadius: 3, p: 3 }}>
//                 <Typography variant="h6" fontWeight="bold">
//                   Data Analytics Overview
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   See how your account grows and how you can boost it.
//                 </Typography>
//               </Card>
              
//               <Card sx={{ borderRadius: 3, p: 3, mt: 2 }}>
//                 <Typography variant="h6" fontWeight="bold">
//                   Finance Flow
//                 </Typography>
//                 <Typography variant="h4" fontWeight="bold">$2,530</Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   september 2021
//                 </Typography>
//               </Card>
//             </Grid>

//             {/* UPGRADE TO PRO Card - Fixed as requested */}
//             <Grid item xs={12} md={4}>
//               <Card
//                 sx={{
//                   width: "100%",
//                   minHeight: 200,
//                   borderRadius: 3,
//                   boxShadow: 3,
//                   backgroundColor: "#fff",
//                   color: "#333",
//                   p: 2,
//                   textAlign: 'center'
//                 }}
//               >
//                 <CardContent>
//                   <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
//                     UPGRADE TO PRO
//                   </Typography>
//                   <Box sx={{ display: "flex", justifyContent: "center", mb: 3, mt: 2 }}>
//                     <img
//                       src="/card.jpg"
//                       alt="Upgrade"
//                       style={{ width: "120px", height: "auto" }}
//                     />
//                   </Box>
//                   <Typography variant="h5" fontWeight="bold">
//                     $29 p/m
//                   </Typography>
//                   <Typography variant="body2" sx={{ mt: 2 }}>
//                     100% Insurance For Your Goods
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           </Grid>
//         </Box>

//         {/* Recent Orders */}
//         <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>
//           Recent Orders
//         </Typography>
//         <Card sx={{ borderRadius: 3, p: 2 }}>
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
//             <Typography variant="subtitle2">See All</Typography>
//           </Box>
//           <Table>
//             <TableBody>
//               {rows.map((row) => (
//                 <TableRow key={row.id}>
//                   <TableCell>{row.id}</TableCell>
//                   <TableCell>{row.product}</TableCell>
//                   <TableCell>{row.date}</TableCell>
//                   <TableCell>{row.price}</TableCell>
//                   <TableCell sx={{ 
//                     color: row.status === 'Delivered' ? 'green' : 'red',
//                     fontWeight: 500
//                   }}>
//                     {row.status}
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </Card>
//       </Box>

//       {/* Summary Section */}
//       <Box sx={{ 
//         width: isMobile ? '100%' : 300,
//         p: 2,
//         backgroundColor: '#ffffff',
//         borderRadius: 3
//       }}>
//         <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//           Summary
//         </Typography>
        
//         <Card sx={{ p: 2, my: 2 }}>
//           <Typography variant="subtitle2">Your Balance</Typography>
//           <Typography variant="h4" fontWeight="bold">$10,632.00</Typography>
//           <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
//             <Typography color="green" variant="body2">
//               <TrendingUpIcon fontSize="small" /> $3,250.07
//             </Typography>
//             <Typography color="red" variant="body2">
//               <TrendingDownIcon fontSize="small" /> $1,062.90
//             </Typography>
//           </Box>
//         </Card>

//         <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
//           Activity
//         </Typography>
        
//         <Box sx={{ my: 2 }}>
//           <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
//             <Avatar sx={{ bgcolor: "rgba(0, 0, 255, 0.1)" }}>
//               <PriceChangeIcon sx={{ color: "blue" }} />
//             </Avatar>
//             <Box>
//               <Typography variant="body2">Withdraw Earning</Typography>
//               <Typography variant="caption" color="text.secondary">
//                 12:40 am
//               </Typography>
//             </Box>
//             <Typography variant="body2" sx={{ ml: 'auto', fontWeight: "bold" }}>
//               $4,120
//             </Typography>
//           </Box>

//           <Divider />

//           <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
//             <Avatar sx={{ bgcolor: "rgba(255, 0, 0, 0.1)" }}>
//               <PriceChangeIcon sx={{ color: "red" }} />
//             </Avatar>
//             <Box>
//               <Typography variant="body2">Paying Website tax</Typography>
//               <Typography variant="caption" color="text.secondary">
//                 10:20 am
//               </Typography>
//             </Box>
//             <Typography variant="body2" sx={{ ml: 'auto', fontWeight: "bold" }}>
//               -$230
//             </Typography>
//           </Box>
//         </Box>

//         <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 3 }}>
//           Top Categories
//         </Typography>
//         <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
//           Explore your top categories and keep shopping with cashback
//         </Typography>
        
//         <Grid container spacing={2}>
//           <Grid item xs={6}>
//             <Card sx={{ p: 2, borderRadius: 3 }}>
//               <Stack direction="column" alignItems="center">
//                 <Avatar sx={{ bgcolor: "rgba(255, 255, 0, 0.2)" }}>
//                   <StoreMallDirectoryIcon />
//                 </Avatar>
//                 <Typography fontWeight="bold" sx={{ mt: 1 }}>Footwear</Typography>
//                 <Typography variant="caption">18,941 units</Typography>
//               </Stack>
//             </Card>
//           </Grid>
//           <Grid item xs={6}>
//             <Card sx={{ p: 2, borderRadius: 3 }}>
//               <Stack direction="column" alignItems="center">
//                 <Avatar sx={{ bgcolor: "rgba(0, 255, 0, 0.2)" }}>
//                   <ShoppingBagIcon />
//                 </Avatar>
//                 <Typography fontWeight="bold" sx={{ mt: 1 }}>Accessories</Typography>
//                 <Typography variant="caption">26,061 units</Typography>
//               </Stack>
//             </Card>
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   );
// }

// export default BusinessDash;
