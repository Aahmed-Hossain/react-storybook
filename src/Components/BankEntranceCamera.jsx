import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import cameraImg from "../../public/bank_entrance_camera.png";
import Image from "next/image";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Button from "@mui/material/Button";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiSolidVideoRecording } from "react-icons/bi";
import { RiBarChartBoxLine } from "react-icons/ri";
import { TbClipboardPlus } from "react-icons/tb";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

const BankEntranceCamera = () => {
  return (
    <Box
    sx={{
      height: "100%",
      display: "flex",
      alignItems: "center",
      backgroundColor: "#E0E0E0",
      paddingY: "100px",
      // paddingX: "10px",
      justifyContent: "space-evenly",
    }}

    //  className="h-[100%] flex  items-center  bg-[#E0E0E0] py-20 justify-evenly"
     >
      <Card sx={{ maxWidth: 420, fontWeight: "bold", boxShadow: "25px" }}>
        <CardActionArea>
          <Image
            height={500}
            width={600}
            src={cameraImg}
            alt="bank_entrance_camera"
          />
          <CardContent>
            <Typography
              sx={{ fontWeight: "bold" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              Bank Entrance-front-view Camera1
            </Typography>
            <Typography variant="body2" className="flex gap-2 items-center">
              <HiOutlineClipboardDocumentList className="text-2xl" />{" "}
              <span className="text-gray-500  text-lg">3 Recipes Added</span>
            </Typography>
            <Typography
              sx={{ marginTop: "6px" }}
              variant="body2"
              className="flex gap-2 items-center"
            >
              <PendingActionsIcon />{" "}
              <span className="text-gray-500  text-lg ">
                today, 04:45pm: Unidentified face detected
              </span>
            </Typography>
            <Typography
              sx={{ marginTop: "6px" }}
              variant="body2"
              className="flex gap-2 items-center"
            >
              <LocationOnOutlinedIcon />{" "}
              <span className="text-gray-500  text-lg">Coimbatore branch</span>
            </Typography>
            {/* logo buttons */}
            <Box
              sx={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#21E062",
                  padding: "2px 4px",
                  borderRadius: "4px",
                  textTransform: "none",
                }}
              >
                Active
              </Button>
              {/* logo buttons */}
              <Box className="flex gap-3">
                <RiDeleteBin6Line className="text-red-500 font-bold text-xl" />
                <BiSolidVideoRecording className=" font-bold text-xl" />
                <RiBarChartBoxLine className=" font-bold text-xl" />
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
      <Box className="p-3 rounded-lg shadow-lg bg-white">
        <TbClipboardPlus className="text-3xl font-semibold" />
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ fontSize: "1.2rem", margin: "8px 0px" }}
        >
          Recipe Management
        </Typography>
        <Typography className="text-end" variant="body2" color="textSecondary">
          Manage
        </Typography>
      </Box>
    </Box>
  );
};

export default BankEntranceCamera;
