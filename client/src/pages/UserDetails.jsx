import React, { useState } from "react";
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
import { Typography } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { addUser, updateUser, deleteUser } from "../features/userSlice"; // adjust path if needed



function UserDetails() {
  const rows = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
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
    { field: "id", headerName: "SNO", width: 90 },
    { field: "Name", headerName: "Name", width: 150 },
    { field: "Designation", headerName: "Designation", width: 200 },
    { field: "Department", headerName: "Department", width: 150 },
    { field: "PhoneNumber", headerName: "Phone Number", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 180,
      renderCell: (params) => (
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="contained"
            size="small"
            sx={{ bgcolor: "purple" }}
            onClick={() => handleClickOpen(params.row)}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="error"
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ];

  // 🔍 Search + Filter Logic
  const filteredRows = rows.filter((row) => {
    const matchesSearch =
      row.Name.toLowerCase().includes(searchText.toLowerCase()) ||
      row.Designation.toLowerCase().includes(searchText.toLowerCase());
    const matchesFilter = filterDept === "" || row.Department === filterDept;
    return matchesSearch && matchesFilter;
  });

  // 🔁 Extract unique departments for filter dropdown
  const departments = [...new Set(rows.map((r) => r.Department))];

  return (
    <>
      <Box sx={{ p: 2, mt: 12, bgcolor: "#e7ddee", borderRadius: 2 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            mb: 2,
            mt: -3,
            textAlign: "center",
            color: "#4a148c",
            textTransform: "uppercase",
            letterSpacing: 1,
          }}
        >
          User Details
        </Typography>
        {/* 🔍 Search and Filter */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mb: 2,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextField
            label="Search by Name or Designation"
            variant="outlined"
            size="small"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            fullWidth
          />
          <FormControl size="small" sx={{ minWidth: 200 }}>
            <InputLabel>Department</InputLabel>
            <Select
              value={filterDept}
              label="Department"
              onChange={(e) => setFilterDept(e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              {departments.map((dept, idx) => (
                <MenuItem key={idx} value={dept}>
                  {dept}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            variant="contained"
            sx={{ whiteSpace: "nowrap" }}
            onClick={() => handleClickOpen(null)}
          >
            Create
          </Button>
        </Box>

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
          sx={{ backgroundColor: "#e7ddee" }}
        />
      </Box>

      {/* ✏️ Edit Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {isEditMode ? "Edit User Details" : "Create New User"}
        </DialogTitle>

        <DialogContent dividers>
          {selectedRow && (
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                mt: 1,
                width: "300px",
              }}
            >
              <TextField label="ID" value={selectedRow.id} disabled />
              <TextField
                label="Name"
                value={selectedRow.Name}
                onChange={(e) => handleChange("Name", e.target.value)}
              />
              <TextField
                label="Designation"
                value={selectedRow.Designation}
                onChange={(e) => handleChange("Designation", e.target.value)}
              />
              <TextField
                label="Department"
                value={selectedRow.Department}
                onChange={(e) => handleChange("Department", e.target.value)}
              />
              <TextField
                label="Phone Number"
                type="number"
                value={selectedRow.PhoneNumber}
                onChange={(e) => handleChange("PhoneNumber", e.target.value)}
              />
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>
            {isEditMode ? "Save" : "Create"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default UserDetails;
