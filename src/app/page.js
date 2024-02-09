import Image from "next/image";
import img from '../../public/camera image.png'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { FaArrowLeft } from "react-icons/fa";
import { LuRefreshCcwDot } from "react-icons/lu";
import { BiSolidVideoRecording } from "react-icons/bi";

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
        <p className="text-gray-500 font-semibold">Bank Entrance-front-view Camera1</p>
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

 <Box className="px-4">
  {/* video  and  refresh camera button container*/}
  <div className="flex gap-4 my-12">
        <button className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-300"> <BiSolidVideoRecording className="font-extrabold tex-xl"/> <span className="text-md font-semibold">View Recorded Videos</span>
         </button>
        <button className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-300"> <LuRefreshCcwDot className="font-extrabold"/> <span className="text-md font-semibold">Refresh Camera</span>
         </button>
        </div>
        
       <div className=" flex gap-16">
        {/* image container */}
       <Image className="rounded-md " src={img} height={1000} width={550} alt="camera image">
        </Image>
        {/* camera details */}
        <div className="border rounded-md p-6 w-full">
          <div className="flex justify-between">
            <h3 className="font-bold text-2xl"> Camera Details</h3> 
            <button className="bg-[#21E062] p-1 rounded-md text-white font-medium">Active
            </button>
          </div>

          {/* camera details tags */}
          <div className="space-y-3 mt-8">
            <p className="font-semibold text-lg">Location: <span className="text-gray-500 font-normal">Coimbatore</span></p>
            <p className="font-semibold text-lg">City: <span className="text-gray-500 font-normal">Coimbatore</span></p>
            <p className="font-semibold text-lg">Timezone: <span className="text-gray-500 font-normal">Delhi-India</span></p>
            <p className="font-semibold text-lg">Date added: <span className="text-gray-500 font-normal">Aug 03, 2023 12:01:42 PM</span></p>
            <p className="font-semibold text-lg">Last update: <span className="text-gray-500 font-normal">Aug 03, 2023 12:01:42 PM</span></p>
        
            <p className="font-semibold text-lg pt-6">Manufacture details: <span className="text-gray-500 font-normal">ADT</span></p>
            <p className="font-semibold text-lg ">RTSP/HLS URL: <span className="text-blue-600 font-normal underline">Copy URL</span></p>
       
          </div>
        </div>
       </div>
 </Box>
    </Box>
  );
}
