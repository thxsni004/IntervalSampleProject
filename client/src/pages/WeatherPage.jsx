import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../redux/features/watherSlice";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Box,
  Container,
} from "@mui/material";

// sidebar

import Sidebar from "../components/Sidebar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { toggleSidebar } from "../redux/features/sidebarSlice";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";


const WeatherPage = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.weather);

  const handleSearch = () => {
    if (city) {
      dispatch(fetchWeather(city));
    }
  };
  console.log(data);
  

  const sidebarOpen = useSelector((state) => state.sidebar.open);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
   

        <Container maxWidth="sm" sx={{ mt: 5 }}>
          <Box sx={{ justifyContent: "center", alignItems: "center" }}>
            <Typography
              sx={{
                color: "purple",
                fontSize: "30px",
                fontWeight: "bold",
                textAlign: "center",
                mb: 3,
                fontFamily: "times new roman",
              }}
            >
              Temperature
            </Typography>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <TextField
                label="Enter City"
                variant="outlined"
                fullWidth
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <Button
                variant="outlined"
                sx={{
                  bgcolor: "purple",
                  color: "white",
                  width: 200,
                  height: 55,
                }}
                onClick={handleSearch}
              >
                Search
              </Button>
            </Box>

            <Box sx={{ mt: 4, borderRadius: 5 }}>
              {loading && <CircularProgress />}
              {error && <Typography sx={{ color: "red" }}>{error}</Typography>}
              {data && (
                <Box mt={2}>
                  <CardContent variant="h5">City : {data.name}</CardContent>
                  <CardContent variant="body1">
                    Temperature : {(data.main.temp - 273).toFixed(2)}°C
                  </CardContent>

                  {/* <CardContent variant='body1'> Weather:{data.weather[0].description}</CardContent>
                 <CardContent>Humidity:  {data.main.humidity}</CardContent>
                 <CardContent>Wind Speed: {data.wind.speed}</CardContent> */}
                </Box>
              )}
            </Box>
          </Box>
        </Container>
 
    
  );
};

export default WeatherPage;
