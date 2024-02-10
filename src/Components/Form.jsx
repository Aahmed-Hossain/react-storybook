import React from 'react';
import { FormControl, TextField } from '@mui/material';
import  Box  from '@mui/material/Box';
import Typography from "@mui/material/Typography";

const Form = () => {

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
      style={{marginTop:'10px'}}
      label="Your Name"
      variant="filled"
      fullWidth
      InputProps={{
      style: { backgroundColor: '#E7E0EC',marginTop:'12px' },
      }}
    />
        <TextField
        style={{marginTop:'20px'}}
      id="filled-basic"
      label="Company Name"
      variant="filled"
      fullWidth
      marginTop='20px'
      InputProps={{
      style: { backgroundColor: '#E7E0EC'  },
      }}
    />
     <TextField
      id="filled-basic"
      style={{marginTop:'20px'}}
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
    </Box>
   </Box>
  );
};

export default Form;
