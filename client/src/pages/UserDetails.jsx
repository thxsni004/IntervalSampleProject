import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { Typography, useMediaQuery } from "@mui/material";
import Sidebar from "../components/Sidebar";

import { useSelector, useDispatch } from "react-redux";
import { addUser, updateUser, deleteUser } from "../redux/features/userSlice"; // adjust path if needed
import { toggleSidebar } from "../redux/features/sidebarSlice";

function UserDetails() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const sidebarOpen = useSelector((state) => state.sidebar.open);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const rows = useSelector((state) => state.users.users);

  const [open, setOpen] = useState(false); //dialog box
  const [selectedRow, setSelectedRow] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filterDept, setFilterDept] = useState("");
  const [isEditMode, setIsEditMode] = useState(true);

  const handleClickOpen = (row = null) => {
    if (row) {
      setSelectedRow({ ...row }); //datas from selected row
      setIsEditMode(true);
    } else {
      const newId = rows.length ? Math.max(...rows.map((r) => r.id)) + 1 : 1;
      setSelectedRow({
        id: newId,
        Name: "",
        Designation: "",
        PhoneNumber: "",
        Department: "",
      });
      setIsEditMode(false);
    }
    setOpen(true); //open Dialog
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRow(null);
  };

  const handleSave = () => {
    // Validation
    const { Name, Designation, PhoneNumber, Department } = selectedRow;

    if (!Name || !Designation || !PhoneNumber || !Department) {
      alert("All fields are required!");
      return;
    }

    if (isEditMode) {
      dispatch(updateUser(selectedRow));
    } else {
      dispatch(addUser(selectedRow));
    }

    handleClose();
  };

  const handleChange = (field, value) => {
    setSelectedRow((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleDelete = (id) => {
    const confirm = window.confirm("are you sure you want to delete this user");
    if (confirm) {
      dispatch(deleteUser(id));
    }
  };

  const columns = [
    { field: "id", headerName: "SNO", width: 10 },
    { field: "Name", headerName: "Name", width: 150, flex: isMobile ? 1 : 0 },
    {
      field: "Designation",
      headerName: "Designation",
      width: 200,
      flex: isMobile ? 1 : 0,
    },
    {
      field: "Department",
      headerName: "Department",
      width: 150,
      flex: isMobile ? 1 : 0,
    },
    {
      field: "PhoneNumber",
      headerName: "Phone Number",
      width: 150,
      flex: isMobile ? 1 : 0,
    },
    {
      field: "action",
      headerName: "Action",
      width: isMobile ? 150 : 180,
      renderCell: (params) => (
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="contained"
            size="small"
            sx={{
              bgcolor: "purple",
              minWidth: isSmallMobile ? "50px" : "80px",
              fontSize: isSmallMobile ? "0.7rem" : "0.8rem",
              mt: 1,
            }}
            onClick={() => handleClickOpen(params.row)}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="error"
            onClick={() => handleDelete(params.row.id)}
            sx={{
              minWidth: isSmallMobile ? "50px" : "80px",
              fontSize: isSmallMobile ? "0.7rem" : "0.8rem",
              mt: 1,
            }}
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ];

  //  Search + Filter Logic
  const filteredRows = rows.filter((row) => {
    const matchesSearch =
      row.Name.toLowerCase().includes(searchText.toLowerCase()) ||
      row.Designation.toLowerCase().includes(searchText.toLowerCase());
    const matchesFilter = filterDept === "" || row.Department === filterDept;
    return matchesSearch && matchesFilter;
  });

  //  Extract unique departments for filter dropdown
  const departments = [...new Set(rows.map((r) => r.Department))];

  return (


        <Box
          sx={{
            bgcolor: "background.paper",
            borderRadius: 3,
            p: isSmallMobile ? 2 : 3,
            boxShadow: 2,
            mt: isMobile ? 6 : 0,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              mb: 3,
              textAlign: "center",
              color: "#700d97ff",
              textTransform: "uppercase",
              letterSpacing: 1,

              fontSize: isSmallMobile ? "1.5rem" : "1.75rem",
            }}
          >
            User Management
          </Typography>
          {/* 🔍 Search and Filter */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              mb: 3,

              flexDirection: isSmallMobile ? "column" : "row",

              alignItems: isSmallMobile ? "stretch" : "center",
            }}
          >
            <TextField
              label="Search by Name or Designation"
              variant="outlined"
              size="small"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              fullWidth
              InputProps={{
                startAdornment: <SearchIcon color="action" sx={{ mr: 1 }} />,
              }}
              sx={{
                flex: 1,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                },
              }}
            />
            <FormControl
              size="small"
              sx={{
                minWidth: isSmallMobile ? "100%" : 200,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                },
              }}
            >
              <Select
                value={filterDept}
                label="Department"
                onChange={(e) => setFilterDept(e.target.value)}
                displayEmpty
              >
                <MenuItem value="">All </MenuItem>
                {departments.map((dept, idx) => (
                  <MenuItem key={idx} value={dept}>
                    {dept}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Button
              variant="contained"
              sx={{
                whiteSpace: "nowrap",
                borderRadius: 2,
                px: 3,
                py: 1,
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: 0.5,
                boxShadow: "none",
                backgroundColor: "purple",
                "&:hover": {
                  boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                },
              }}
              onClick={() => handleClickOpen(null)}
            >
              Add New User
            </Button>
          </Box>
          <Box
            sx={{
              height: 500,
              width: "100%",
              "& .MuiDataGrid-root": {
                border: "none",
                borderRadius: 2,
              },
              "& .MuiDataGrid-cell": {
                borderBottom: `1px solid ${theme.palette.divider}`,
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: theme.palette.grey[100],
                borderRadius: "8px 8px 0 0",
              },
            }}
          >
            {/* 🗃️ Data Table */}
            <DataGrid
              rows={filteredRows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { pageSize: 5 },
                },
              }}
              pageSizeOptions={[5]}
              disableRowSelectionOnClick
              autoHeight
              sx={{
                "& .MuiDataGrid-cell:focus": {
                  outline: "none",
                },
              }}
            />
      

        {/* ✏️ Edit Dialog */}
        <Dialog
          open={open}
          onClose={handleClose}
          fullScreen={isSmallMobile}
          maxWidth="sm"
          fullWidth
          sx={{
            "& .MuiDialog-paper": {
              borderRadius: isSmallMobile ? 0 : 3,
            },
          }}
        >
          <DialogTitle
            sx={{
              color: "black",

              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">
              {isEditMode ? "Edit User" : "Create New User"}
            </Typography>
            <IconButton onClick={handleClose} sx={{ color: "white" }}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>

          <DialogContent dividers sx={{ pt: 3 }}>
            {selectedRow && (
              <Box
                component="form"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                }}
              >
                <TextField
                  label="SNO"
                  value={selectedRow.id}
                  disabled
                  size="small"
                />
                <TextField
                  label="Full Name"
                  value={selectedRow.Name}
                  onChange={(e) => handleChange("Name", e.target.value)}
                  size="small"
                  fullWidth
                />
                <TextField
                  label="Designation"
                  value={selectedRow.Designation}
                  onChange={(e) => handleChange("Designation", e.target.value)}
                  size="small"
                  fullWidth
                />
                <TextField
                  label="Department"
                  value={selectedRow.Department}
                  onChange={(e) => handleChange("Department", e.target.value)}
                  size="small"
                  fullWidth
                />
                <TextField
                  label="Phone Number"
                  type="tel"
                  value={selectedRow.PhoneNumber}
                  onChange={(e) => handleChange("PhoneNumber", e.target.value)}
                  size="small"
                  fullWidth
                />
              </Box>
            )}
          </DialogContent>
          <DialogActions sx={{ p: 2, bgcolor: theme.palette.grey[100] }}>
            <Button
              onClick={handleClose}
              variant="outlined"
              sx={{
                borderRadius: 2,
                px: 3,
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleSave}
              sx={{
                borderRadius: 2,
                px: 3,
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              {isEditMode ? "Save" : "Create"}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
}

export default UserDetails;
