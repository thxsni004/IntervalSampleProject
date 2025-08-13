import React, { useState } from "react";
import {
  Box,
  Checkbox,
  Dialog,
  FormControlLabel,
  FormGroup,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
// import { CheckBox } from '@mui/icons-material';

const GlobalDialog = ({ open, setOpen, data }) => {


  const handleClose = () => {
    setOpen(false);  //close from parent
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
              <Stack direction={"row"} gap={1} key={index}>
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

      {/* Body */}
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
    </Dialog>
  );
};

export default GlobalDialog;
