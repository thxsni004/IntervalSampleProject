import React from "react";
import { Box, Typography, Card, CardContent, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import Stack from "@mui/material/Stack";
import { blue, red } from "@mui/material/colors";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import { Avatar } from "@mui/material";
import { yellow, green } from "@mui/material/colors";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

export default function SummarySection() {
  return (
    <Box sx={{ width: "100%", maxWidth: 250, p: 2 }}>
      <Typography
        sx={{
          fontWeight: "bold",
          fontFamily: "timesnewroman",
          fontSize: "30px",
        }}
      >
        Summary
      </Typography>
      <Card sx={{ p: 2, mb: 2, position: "relative", boxShadow: 0 }}>
        <Typography variant="subtitle2">Your Balance</Typography>
        <Typography variant="h5" fontWeight="bold">
          $10,632.00
        </Typography>

        <Stack direction="row" justifyContent="flex-end" spacing={3}>
          <AddCircleIcon
            sx={{ color: red[500], position: "absolute", top: 19, right: 8 }}
          />
        </Stack>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
          <Typography color="green" variant="caption">
            <TrendingUpIcon fontSize="small" /> $3,250.07
          </Typography>
          <Typography color="red" variant="caption">
            <TrendingDownIcon fontSize="small" /> $1,062.90
          </Typography>
        </Box>
      </Card>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
        <Typography
          variant="subtitle2"
          sx={{ fontWeight: "bold", fontSize: "1.3rem" }}
        >
          Activity
        </Typography>
        <Typography
          variant="body2"
          color="primary"
          sx={{ cursor: "pointer", mr: 2, mt: 1 }}
        >
          See All
        </Typography>
      </Box>
<Box sx={{ p: 2, mb: 2 }}>
  {/* Withdraw Earning */}
  <Box mt={1} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
    <Avatar sx={{ bgcolor: blue[100] }}>
      <PriceChangeIcon sx={{ color: blue[700] }} />
    </Avatar>
    <Box>
      <Typography variant="body2">Withdraw Earning</Typography>
      <Typography variant="caption" color="text.secondary">
        12:40 am
      </Typography>
    </Box>
    <Typography variant="body2" sx={{ marginLeft: "auto", fontWeight: "bold" }}>
      $4,120
    </Typography>
  </Box>

  <Divider sx={{ my: 1 }} />

  {/* Paying Website tax */}
  <Box sx={{ display: "flex", alignItems: "center", gap: 2 ,mt:1}}>
    <Avatar sx={{ bgcolor: red[100] }}>
      <PriceChangeIcon sx={{ color: red[700] }} />
    </Avatar>
    <Box>
      <Typography variant="body2">Paying Website tax</Typography>
      <Typography variant="caption" color="text.secondary">
        10:20 am
      </Typography>
    </Box>
    <Typography variant="body2" sx={{ marginLeft: "auto", fontWeight: "bold" }}>
      -$230
    </Typography>
  </Box>
</Box>


      <Box sx={{ p: 2, mt: -6 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold", mt:3}}>
          Top Categories
        </Typography>
        <Typography sx={{ fontSize: "13px", color: "gray" }}>
          Explore your top categories and keep shopping with cashback
        </Typography>
        <Box sx={{ mt: 3, display: "flex", gap: 7 }}>
          <Stack direction="row" spacing={2}>
            <Card
              sx={{
                width: 100,
                p: 1,
                borderRadius: 3,
                backgroundColor: "#fffde7",
                
              }}
            >
              <Stack direction="column" spacing={1} alignItems="center">
                <Avatar sx={{ bgcolor: yellow[200] }}>
                  <StoreMallDirectoryIcon />
                </Avatar>
                <Typography fontWeight="bold">Footwear</Typography>
              </Stack>
              <Typography variant="body2" sx={{ mt: 1, ml: 4 }}>
                18,941 units
              </Typography>
            </Card>

            {/* Accessories Card */}
            <Card
              sx={{
                width: 100,
                p: 2,
                borderRadius: 3,
                backgroundColor: "#e8f5e9",
                
              }}
            >
              <Stack direction="column" spacing={1} alignItems="center">
                <Avatar sx={{ bgcolor: green[300] }}>
                  <ShoppingBagIcon />
                </Avatar>
                <Typography fontWeight="bold">Accessories</Typography>
              </Stack>
              <Typography variant="body2" sx={{ mt: 1, ml: 4 }}>
                26,061 units
              </Typography>
            </Card>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
