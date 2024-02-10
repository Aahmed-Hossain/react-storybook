import Image from "next/image";
import img from "../../public/camera image.png";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { FaArrowLeft } from "react-icons/fa";
import { LuRefreshCcwDot } from "react-icons/lu";
import { BiSolidVideoRecording } from "react-icons/bi";
import Typography from "@mui/material/Typography";
import Paper from '@mui/material/Paper';
import camera1 from '../../public/camera1.png';
import camera2 from '../../public/camera2.png';
import camera3 from '../../public/camera3.png';
import camera4 from '../../public/camera4.png';

export default function Home() {
  return (
    <Box className="px-2 md:px-0 lg:px-12 pt-4 ">
      <div className="flex justify-between">
        {/* VMS container */}

        <div style={{ display: "flex", gap: "16px" }}>
          <FaArrowLeft className="font-bold text-4xl bg-gray-200 p-2 rounded-md" />
          <div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <Typography
                variant="h5"
                style={{ fontSize: "1.5rem", fontWeight: "bold" }}
              >
                <span style={{ fontSize: "2rem", fontWeight: "bold" }}>
                  VMS
                </span>{" "}
                <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                  / Cameras / Camera Details
                </span>
              </Typography>
              <Typography
                variant="body1"
                style={{ color: "#6B7280", fontWeight: "bold" }}
              >
                Bank Entrance-front-view Camera1
              </Typography>
              <Typography variant="body1" style={{ fontWeight: "bold" }}>
                View and manage camera details, recordings, and connection
                details
              </Typography>
            </div>
          </div>
        </div>

        {/* button container */}
        <div className=" space-x-4">
          <Button
            style={{ color: "#4F4F4F", borderColor: "#4F4F4F" }}
            variant="outlined"
          >
            Edit Camera
          </Button>
          <Button
            style={{ color: "#4F4F4F", borderColor: "#4F4F4F" }}
            variant="outlined"
          >
            Deactivate
          </Button>
          <Button variant="outlined" color="error">
            Delete Camera
          </Button>
        </div>
      </div>

      <Box className="px-4">
        {/* video  and  refresh camera button container*/}
        <div style={{ display: "flex", gap: "16px", margin: "45px 0" }}>
          <Button
            variant=""
            color="default"
            size="medium"
            style={{
              borderRadius: "4px",
              padding: "8px",
              backgroundColor: "#EFEFEF",
            }}
          >
            <BiSolidVideoRecording
              style={{ fontSize: "24px", fontWeight: "bold" }}
            />
            <span style={{ fontSize: "16px", fontWeight: "bold" }}>
              View Recorded Videos
            </span>
          </Button>
          <Button
            variant=""
            color="default"
            size="medium"
            style={{
              borderRadius: "4px",
              padding: "8px",
              backgroundColor: "#EFEFEF",
            }}
          >
            <LuRefreshCcwDot style={{ fontSize: "24px", fontWeight: "bold" }} />
            <span style={{ fontSize: "16px", fontWeight: "bold" }}>
              Refresh Camera
            </span>
          </Button>
        </div>

        <div className=" flex gap-8">
          {/* image container */}
          <Image
            className="rounded-md w-7/12 "
            src={img}
            height={600}
            width={800}
            alt="camera image"
          ></Image>
          {/* camera details */}
          <div className="border rounded-md p-6 w-5/12 ">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h6" fontWeight="bold">
                Camera Details
              </Typography>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#21E062",
                  padding: "2px 4px",
                  borderRadius: "4px",
                }}
              >
                Active
              </Button>
            </div>

            {/* camera details tags */}

            <div style={{ marginTop: "8px" }}>
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                gutterBottom
                style={{ paddingTop: "12px" }}
              >
                Location:{" "}
                <span style={{ color: "#4F4F4F", fontWeight: "normal" }}>
                  Coimbatore
                </span>
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                City:
                <span style={{ color: "#4F4F4F", fontWeight: "normal" }}>
                  Coimbatore
                </span>
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Timezone:{" "}
                <span style={{ color: "#4F4F4F", fontWeight: "normal" }}>
                  Delhi-India
                </span>
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Date added:{" "}
                <span style={{ color: "#4F4F4F", fontWeight: "normal" }}>
                  Aug 03, 2023 12:01:42 PM
                </span>
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Last update:{" "}
                <span style={{ color: "#4F4F4F", fontWeight: "normal" }}>
                  Aug 03, 2023 12:01:42 PM
                </span>
              </Typography>

              <Typography
                variant="subtitle1"
                fontWeight="bold"
                style={{ paddingTop: "12px" }}
              >
                Manufacture details:{" "}
                <span style={{ color: "#4F4F4F", fontWeight: "normal" }}>
                  ADT
                </span>
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold">
                RTSP/HLS URL:{" "}
                <span
                  style={{
                    color: "#2196F3",
                    fontWeight: "normal",
                    textDecoration: "underline",
                  }}
                >
                  Copy URL
                </span>
              </Typography>
            </div>
          </div>
        </div>
        <Typography variant="subtitle1" fontWeight="bold" margin='16px 0px' style={{ fontSize: '1.5rem'}}>
        Camera Health and Alert
              </Typography>

<div className="flex  gap-6 justify-between">
<Paper variant="outlined" square style={{ width: '100%', padding: '16px', borderRadius: '5px' }} >
      <Typography  style={{ fontWeight: 'bold' }}>
        Offline Alert
      </Typography>
      <Typography variant="body2" color="textSecondary">
        If camera is continuously offline for
      </Typography>
      <Typography variant="h5" style={{ fontWeight: 'bold' }}>
        12 minutes
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Send an email to
      </Typography>
      <Typography>
        email.com
      </Typography>
    </Paper>
<Paper variant="outlined" square style={{ width: '100%', padding: '16px', borderRadius: '5px' }}  >
      <Typography  style={{ fontWeight: 'bold' }}>
      Health Grade
      </Typography>
      <Typography variant="h5" style={{ fontWeight: 'bold' }}>
      96%
      </Typography>
      <Typography variant="body2" color="textSecondary">
      Cheers, this camera had no offline time in the last 30 days
      </Typography>
      <Typography style={{color:'#459F49'}}>
      Grade A
      </Typography>
    </Paper >
<Paper variant="outlined" square style={{ width: '100%', padding: '16px', borderRadius: '5px' }} >
      <Typography  style={{ fontWeight: 'bold' }}>
      Health Logs
      </Typography>
      <Typography variant="body2" color="textSecondary">
      Today, 04:37 pm: Activated
      </Typography>
      <Typography variant="body2" color="textSecondary">
      23 Aug, 02:22 pm: Deactivated
      </Typography>
      <Typography variant="body2" color="textSecondary">
      21 Aug, 05:12 am: Activated
      </Typography>
      <Typography variant="body2" color="textSecondary">
      20 Aug, 02:12 am: Deactivated
      </Typography>
      <Typography variant="body2" color="textSecondary">
      19 Aug, 02:12 am: Deactivated
      </Typography>
    </Paper >
</div>
{/* Recent Recordings cards */}
<Typography variant="subtitle1" fontWeight="bold" margin='16px 0px' style={{ fontSize: '1.5rem'}}>
Recent Recordings
  </Typography>

<div className="flex gap-3">
<Paper variant="outlined" square style={{ width: '100%', padding: '10px', borderRadius: '5px' }}  >

     <Image className="rounded-md" src={camera1} height={300} width={350}  alt='Recording_0121'>
     </Image>
     <Typography  style={{ fontWeight: 'bold' , marginTop:'10px' }}>
     Recording_0121
      </Typography>
      <Typography variant="body2" color="textSecondary">
      Today, 04:42 pm
      </Typography>
    </Paper >

    <Paper variant="outlined" square style={{ width: '100%', padding: '10px', borderRadius: '5px' }}  >

     <Image className="rounded-md" src={camera2} height={300} width={350}  alt='Recording_0121'>
     </Image>
     <Typography  style={{ fontWeight: 'bold' , marginTop:'10px' }}>
     Recording_0121
      </Typography>
      <Typography variant="body2" color="textSecondary">
      Today, 02:14 pm
      </Typography>
    </Paper >

    <Paper variant="outlined" square style={{ width: '100%', padding: '10px', borderRadius: '5px' }}  >

     <Image className="rounded-md" src={camera3} height={300} width={350}  alt='Recording_0121'>
     </Image>
     <Typography  style={{ fontWeight: 'bold' , marginTop:'10px' }}>
     Recording_0121
      </Typography>
      <Typography variant="body2" color="textSecondary">
      Today, 02:09 pm
      </Typography>
    </Paper >
    <Paper variant="outlined" square style={{ width: '100%', padding: '10px', borderRadius: '5px' }}  >

     <Image className="rounded-md" src={camera4} height={300} width={350}  alt='Recording_0121'>
     </Image>
     <Typography  style={{ fontWeight: 'bold' , marginTop:'10px' }}>
     Recording_0121
      </Typography>
      <Typography variant="body2" color="textSecondary">
      Today, 02:09 pm
      </Typography>
    </Paper >
</div>
      </Box>
      
    </Box>
  );
}
