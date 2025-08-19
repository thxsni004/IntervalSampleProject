import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  FormControlLabel,
  FormGroup,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
import BlurText from "./Animations/BlurText";


const GlobalDialog = ({ open, setOpen, data ,type="checkbox",onConfirm,onCancel,animated=false,
  confirmBtnText="yes",
  cancelBtnText="No",
}) => {


  const handleClose = () => {
    setOpen(false);  //close from parent
  };

  const handleAnimationComplete=()=>{
    console.log("Animation completed")
  };

  return (
    <Dialog
      open={open}
      sx={{
        px: { xs: 5, md: 10 },
      }}
      slotProps={{
        paper: {
          sx: {
            borderRadius: 4,
            minWidth: { xs: "100%", lg: 900 },
          },
        },
      }}
    >
           {/* Header */}
        {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 5,
          bgcolor: "#f4f6f8",
          p: 2,
          borderBottom: "0.2px solid #e5e8eb",
        }}
      >
        <Box>
          {data?.title &&
            Object.entries(data.title).map(([key, value], index) => (
              <Stack direction={"row"} gap={2} key={index}>
                <Typography>{`${key} :`}</Typography>
                <Typography>{value}</Typography>
              </Stack>
            ))}
        </Box>
        {data?.close && (
          <IconButton onClick={handleClose}>
            <Icon icon="carbon:close-filled" width="22" height="22" />
          </IconButton>
        )}
      </Box>

      {/* Body for lunch */}
      {type==="checkbox" && (
      <Box sx={{ p: 2 }}>
        <FormGroup>
          {data?.body?.map((e, index) => (
            <FormControlLabel
              key={index}
              control={<Checkbox disabled={e.checkBox} />}
              label={e.bodyTitle}
            />
          ))}
        </FormGroup>
      </Box>
      )}

       {/* Body for confirm type */}
       {type === "confirm" && (
        <Box sx={{p:3,textAlign:"center"}}>
          {animated?(
            <BlurText
            text={data?.message}
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-2xl mb-8"
            />
          ):(
          <Typography sx={{mb:3,display:"flex",justifyContent:"center",m:2}}> {data?.message}</Typography> 

          )}

            <Box sx={{display:"flex",justifyContent:"center",gap:2,mb:2}} >
              <Button
              variant="outlined"
                sx={{ color: "purple",borderColor:"purple"}}
              onClick={()=>{
                onConfirm?.();
                handleClose()
              }}>{cancelBtnText}</Button>
              <Button
   sx={{ bgcolor: "purple", color: "white" }}
         autoFocus
              onClick={()=>{
                onCancel?.();
                handleClose()
              }}>{confirmBtnText}</Button>
            </Box>
         
        </Box>
       )}
    </Dialog>
  );
};

export default GlobalDialog;
