import React from 'react'
import  Box  from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const rows = [
    {id:1,  name: 'Peter John', email: 'Peter@gmail.com', role: 'Owner',location:'Adam Stall', sub_location: 'Coimbatore', last_active: 'Sep 13, 2023 5:51 PM', permissions: 'All Permissions', status: 'Active'},

    {id:2 ,name: 'Lingan', email: 'Lin@gmail.com', role: 'Executive' ,location:'MMDA', sub_location: 'Coimbatore', last_active: 'Today, 2023 2:11 PM', permissions: '3 Permissions', status: 'Active'},

    {id:3, name: 'Adam', email: 'Adam@gmail.com',role: 'Admin', location:'DEO Office', sub_location: 'Delhi', last_active: 'Sep 13, 2023 5:51 PM', permissions: '6 Permissions', status: 'Active'},

    {id:4, name: 'Smith', email: 'Smith@gmail.com',role: 'Supervisor', location:'Plot Hub', sub_location: 'Coimbatore', last_active: 'Sep 13, 2023 5:51 PM', permissions: '5 Permissions', status: 'Active'},

    {id:5, name: 'John Abraham', email: 'Jhon@gmail.com',role: 'Executive', location:'CA', sub_location: 'Delhi', last_active: 'Sep 13, 2023 5:51 PM', permissions: '2 Permissions', status: 'Inactive'},
]
const CameraStatusTable = () => {
  
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#F3F3F3',
      color: '#7A7A7A', 
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:last-child td, &:last-child th': {
      border: 2,
    },
  }));

  
  return (
    <Box
     sx={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#E0E0E0',
        paddingY: '100px',
        paddingX: '10px',
        justifyContent: 'center',
      }}
      >
  <TableContainer sx={{padding:'8px'}} component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
        <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Role</StyledTableCell>
            <StyledTableCell align="center">Locations</StyledTableCell>
            <StyledTableCell align="center">Last Active</StyledTableCell>
            <StyledTableCell align="center">Permissions</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center">{row.role}</StyledTableCell>
              <StyledTableCell align="center">
                {row.location} <br />
                <span className='text-xs'>{row.sub_location}</span>
              </StyledTableCell>
              <StyledTableCell align="center">{row.last_active}</StyledTableCell>
              <StyledTableCell align="center">{row.permissions}</StyledTableCell>
              <StyledTableCell align="center">
              { row.status === 'Active' ?
                <Button
                variant="contained"
                style={{
                  backgroundColor: "#21E062",
                  padding: "4px 10px",
                  borderRadius: "4px",
                  textTransform: "none",
                }}
              >
                {row.status}
              </Button> : 
              <Button
              variant="contained"
              style={{
                backgroundColor: "#ED1C24",
                padding: "3px 8px",
                borderRadius: "4px",
                textTransform: "none",
              }}
            >
              {row.status}
            </Button>
              }
                
                </StyledTableCell>
              <StyledTableCell align="center">
                <span className='flex'> <FaRegEdit className='text-xl font-bold'/> <RiDeleteBin6Line className='text-xl font-bold text-red-500 ml-2'/></span>
                </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </Box>
  )
}

export default CameraStatusTable;