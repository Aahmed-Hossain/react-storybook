import Image from "next/image";
import img from '../../public/bed1.jpg'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { FaArrowLeft } from "react-icons/fa";

export default function Home() {
  return (
    <Box className="px-12 pt-4 ">
      <div className="flex justify-between">
        {/* VMS container */}
        <div className="flex  gap-4">
        <FaArrowLeft className="font-extrabold text-5xl bg-gray-200 p-2 rounded-md"/>
        <div>
        <div className="flex flex-col space-y-2"> 

        <h1><span className="text-4xl font-bold ">VMS</span> <span className="text-xl font-semibold">/ Cameras / Camera Details</span> </h1>
        <p className="text-gray-500 font-semibold">Bank Entrance Fron view camera1</p>
        <p className="font-semibold">View and manage camera details, recordings and connection details</p>
         </div>
        </div>
        </div>
        {/* button container */}
        <div className=" space-x-4 ">
        <Button style={{ color: '#4F4F4F',borderColor: '#4F4F4F' }}variant="outlined">Edit Camera</Button>
        <Button style={{ color: '#4F4F4F',borderColor: '#4F4F4F' }} variant="outlined">Deactivate</Button>
        <Button variant="outlined" color="error">Delete Camera</Button>
        </div>
       

      </div>
      <Image className="mt-4" src={img} height={1000} width={100} alt="logo"></Image>
      <h2 className="text-5xl">lorem</h2>
      <Button sx={{ m: 12 }}  variant="outlined" href="#outlined-buttons">
        Link
      </Button>
    </Box>
  );
}
