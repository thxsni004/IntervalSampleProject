import React from "react";
import { Box, Typography, Card, CardContent, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import Stack from "@mui/material/Stack";
import { blue, red } from "@mui/material/colors";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import { Avatar ,  useTheme,  useMediaQuery,Grid} from "@mui/material";
import { yellow, green } from "@mui/material/colors";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

export default function SummarySection() {
    const theme = useTheme();
    const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
  return (

      <Box
        sx={{
          width: isSmallMobile ? "100%" : 300,
          p: 2,
          backgroundColor: "#ffffff",
          borderRadius: 3,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Summary
        </Typography>

        <Card sx={{ p: 2, my: 2 }}>
          <Typography variant="subtitle2">Your Balance</Typography>
          <Typography variant="h4" fontWeight="bold">
            $10,632.00
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
            <Typography color="green" variant="body2">
              <TrendingUpIcon fontSize="small" /> $3,250.07
            </Typography>
            <Typography color="red" variant="body2">
              <TrendingDownIcon fontSize="small" /> $1,062.90
            </Typography>
          </Box>
        </Card>

        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          Activity
        </Typography>

        <Box sx={{ my: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <Avatar sx={{ bgcolor: "rgba(0, 0, 255, 0.1)" }}>
              <PriceChangeIcon sx={{ color: "blue" }} />
            </Avatar>
            <Box>
              <Typography variant="body2">Withdraw Earning</Typography>
              <Typography variant="caption" color="text.secondary">
                12:40 am
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ ml: "auto", fontWeight: "bold" }}>
              $4,120
            </Typography>
          </Box>

          <Divider />

          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
            <Avatar sx={{ bgcolor: "rgba(255, 0, 0, 0.1)" }}>
              <PriceChangeIcon sx={{ color: "red" }} />
            </Avatar>
            <Box>
              <Typography variant="body2">Paying Website tax</Typography>
              <Typography variant="caption" color="text.secondary">
                10:20 am
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ ml: "auto", fontWeight: "bold" }}>
              -$230
            </Typography>
          </Box>
        </Box>

        <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 3 }}>
          Top Categories
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Explore your top categories and keep shopping with cashback
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <a href="/drag" style={{textDecoration:"none"}}>
            <Card sx={{ p: 2, borderRadius: 3 ,backgroundColor:'lightyellow'}}>
              <Stack direction="column" alignItems="center">
                <Avatar sx={{ bgcolor: "rgba(255, 255, 0, 0.2)" }}>
                  <StoreMallDirectoryIcon />
                </Avatar>
                <Typography fontWeight="bold" sx={{ mt: 1 }}>
                  DropDrag
                </Typography>
                <Typography variant="caption">18,941 units</Typography>
              </Stack>
            </Card>
            </a>
          </Grid>
          <Grid item xs={6}>
             <a href="/product" style={{textDecoration:"none"}}>
            <Card sx={{ p: 2, borderRadius: 3 ,backgroundColor:'#d7f5d3'}}>
              <Stack direction="column" alignItems="center">
                <Avatar sx={{ bgcolor: "rgba(0, 255, 0, 0.2)" }}>
                  <ShoppingBagIcon />
                </Avatar>
                <Typography fontWeight="bold" sx={{ mt: 1 }}>
                  Accessories
                </Typography>
                <Typography variant="caption">26,061 units</Typography>
              </Stack>
            </Card>
            </a>
          </Grid>
        </Grid>
        </Box>
      
  );
}
