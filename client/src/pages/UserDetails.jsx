import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const initialRows = [
  { id: 1, Name: 'Snow', Designation: 'Chief Executive Officer ', PhoneNumber: 9876543210, Department: 'Management' },
  { id: 2, Name: 'Lannister', Designation: 'Chief Technology Officer (CTO)', PhoneNumber: 9876543211, Department: 'tech' },
  { id: 3, Name: 'Lannister', Designation: 'Project Manager', PhoneNumber: 9876543212, Department: 'tech' },
  { id: 4, Name: 'Stark', Designation: 'Software Developer', PhoneNumber: 9876543213, Department: 'Development' },
  { id: 5, Name: 'Targaryen', Designation: 'UI/UX Designer', PhoneNumber: 9876543215, Department: 'Design' },
  { id: 6, Name: 'Melisandre', Designation: "HR Manager", PhoneNumber: 9871343216, Department: 'Human Resources' },
  { id: 7, Name: 'Clifford', Designation: 'Business Analyst', PhoneNumber: 9876543456, Department: 'Analysis' },
  { id: 8, Name: 'Frances', Designation: 'Customer Support Executive', PhoneNumber: 9876543216, Department: 'Support' },
  { id: 9, Name: 'Roxie', Designation: 'Relationship Manager', PhoneNumber: 9876543217, Department: 'Client Relations' },
];

function UserDetails() {
  const [rows, setRows] = useState(initialRows);
  const [open, setOpen] = useState(false);  //dialog box
  const [selectedRow, setSelectedRow] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [filterDept, setFilterDept] = useState('');

  const handleClickOpen = (row) => {
    setSelectedRow({ ...row }); //datas from selected row
    setOpen(true);  //open Dialog
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRow(null);
  };

  const handleSave = () => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === selectedRow.id ? selectedRow : row)) //update row when id is match
    );
    handleClose();
  };

  const handleChange = (field, value) => {
    setSelectedRow((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const columns = [
    { field: 'id', headerName: 'SNO', width: 90 },
    { field: 'Name', headerName: 'Name', width: 150 },
    { field: 'Designation', headerName: 'Designation', width: 200 },
    { field: 'Department', headerName: 'Department', width: 150 },
    { field: 'PhoneNumber', headerName: 'Phone Number', width: 150 },
    {
      field: 'action',
      headerName: 'Action',
      renderCell: (params) => (
        <Button variant="contained" size="small" sx={{bgcolor:'purple'}} onClick={() => handleClickOpen(params.row)}>
          Edit
        </Button>
      ),
    },
  ];

  // 🔍 Search + Filter Logic
  const filteredRows = rows.filter((row) => {
    const matchesSearch = row.Name.toLowerCase().includes(searchText.toLowerCase()) || 
                          row.Designation.toLowerCase().includes(searchText.toLowerCase());
    const matchesFilter = filterDept === '' || row.Department === filterDept;
    return matchesSearch && matchesFilter;
  });

  // 🔁 Extract unique departments for filter dropdown
  const departments = [...new Set(rows.map((r) => r.Department))];

  return (
    <>
      <Box sx={{ p: 2, mt: 12 }}>
        {/* 🔍 Search and Filter */}
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
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
                <MenuItem key={idx} value={dept}>{dept}</MenuItem>
              ))}
            </Select>
          </FormControl>
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
        />
      </Box>

      {/* ✏️ Edit Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit User Details</DialogTitle>
        <DialogContent dividers>
          {selectedRow && (
            <Box
              component="form"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                mt: 1,
                width: '300px',
              }}
            >
              <TextField label="ID" value={selectedRow.id} disabled />
              <TextField
                label="Name"
                value={selectedRow.Name}
                onChange={(e) => handleChange('Name', e.target.value)}
              />
              <TextField
                label="Designation"
                value={selectedRow.Designation}
                onChange={(e) => handleChange('Designation', e.target.value)}
              />
              <TextField
                label="Department"
                value={selectedRow.Department}
                onChange={(e) => handleChange('Department', e.target.value)}
              />
              <TextField
                label="Phone Number"
                type="number"
                value={selectedRow.PhoneNumber}
                onChange={(e) => handleChange('PhoneNumber', e.target.value)}
              />
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default UserDetails;
