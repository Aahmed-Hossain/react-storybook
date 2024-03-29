import React from 'react';
import { FormControl, TextField } from '@mui/material';
import  Box  from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Form = () => {
  const industries = ['Industry 1', 'Industry 2', 'Industry 3']
  return (
   <Box className="h-[100%] flex items-center justify-center  bg-[#E0E0E0] py-20 ">
     <Box className="p-16 shadow-lg bg-white rounded-lg">
        <Typography
                variant="h6"
                style={{ fontSize: "2.2rem", fontWeight: "bold",textAlign:'center' }}
              > XYZ
              </Typography>
        <Typography
                variant="h6"
                style={{ fontSize: "1.8rem", fontWeight: "semibold",textAlign:'center'}}
              > Welcome Onboard
              </Typography>
        <TextField
      id="filled-basic"
      style={{margin: '10px 0'}}
      label="Your Name"
      variant="filled"
      fullWidth
      InputProps={{
      style: { backgroundColor: '#E7E0EC',margin: '10px 0' },
      }}
    />
        <TextField
        style={{margin: '10px 0'}}
      id="filled-basic"
      label="Company Name"
      variant="filled"
      fullWidth
      margin = '10px 0'
      InputProps={{
      style: { backgroundColor: '#E7E0EC'  },
      }}
    />
     <TextField
      id="filled-basic"
      style={{margin: '10px 0'}}
      label="Select Industry"
      variant="filled"
      select
      fullWidth
      InputProps={{
        style: { backgroundColor: '#E7E0EC' },
      }}
    >
    </TextField>

    <Typography
                variant="h6"
                style={{ fontSize: "1rem", fontWeight: "semibold",textAlign:'start', margin:'10px 0px'}}
              > Select Number of Locations
     </Typography>
     {/* select buttons */}
     <Box className="flex gap-4">
     <Button
                variant="contained"
                style={{
                  backgroundColor: "#E7E0EC",
                  padding: "4px 12px",
                  borderRadius: "4px",
                  color:'black'
                }}
              >
                1-10
              </Button>
     <Button
                variant="contained"
                style={{
                  backgroundColor: "#E7E0EC",
                  padding: "4px 12px",
                  borderRadius: "4px",
                  color:'black'
                }}
              >
                10-50
              </Button>
     <Button
                variant="contained"
                style={{
                  backgroundColor: "#333333",
                  padding: "4px 12px",
                  borderRadius: "4px",
                  color:'white'
                }}
              >
                50-150
              </Button>
     <Button
                variant="contained"
                style={{
                  backgroundColor: "#E7E0EC",
                  padding: "4px 12px",
                  borderRadius: "4px",
                  color:'black'
                }}
              >
                150+
              </Button>
     </Box>
     <Button sx={{margin: '10px 0', width:'100%'}}
                variant=""
                style={{
                  backgroundColor: "#333333",
                  padding: "8px 12px",
                  borderRadius: "4px",
                  color:'white'
                }}
              >
               CONTINUE
              </Button>
    </Box>
   </Box>
  );
};

export default Form;
