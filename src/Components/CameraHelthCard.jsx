import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { StyledEngineProvider } from "@mui/material/styles";
import { GiCctvCamera } from "react-icons/gi";
import { IoIosWarning } from "react-icons/io";
import Button from "@mui/material/Button";
import { BsFillInfoCircleFill } from "react-icons/bs";

const CameraHelthCard = () => {
  const data = [
    { value: 56, label: "Super Healthy (56)", color: "#19A01E" },
    { value: 35, label: "Healthy (35)", color: "#00DB4A" },
    { value: 27, label: "Warning (27)", color: "#FB8B34" },
    { value: 6, label: "Danger (6)", color: "#ED1C24" },
  ];
  const colors = ["#19A01E", "#00DB4A", "#FB8B34", "#ED1C24"];

  const size = {
    width: 300,
    height: 200,
  };

  const StyledText = styled("text")(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: "middle",
    font: "bold",
    dominantBaseline: "central",
    fontSize: 30,
  }));
  function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText x={left + width / 2} y={top + height / 2}>
        <tspan fontSize="2rem" fontWeight="bold">
          124
        </tspan>
        <tspan
          x={left + width / 2}
          dy="1.4em"
          fontSize="1.1rem"
          fontWeight="normal"
        >
          Cameras
        </tspan>
        {children}
      </StyledText>
    );
  }

  return (
    <Box className="h-screen flex justify-center items-center  bg-[#E0E0E0]">
      <Box className="bg-white shadow-lg rounded-lg flex  gap-8 py-6">
        <StyledEngineProvider injectFirst>
          {/* StyledEngineProvider is used to override the mui provided styles */}
          <Box className=" w-52" sx={{ padding: 0, margin: 0 }}>
            <PieChart
              series={[
                {
                  data,
                  innerRadius: 65,
                  outerRadius: 80,
                },
              ]}
              colors={colors}
              legend={{ hidden: true }}
              {...size}
            >
              <PieCenterLabel />
            </PieChart>
          </Box>
        </StyledEngineProvider>
        <Box className=" w-full pr-3 flex flex-col space-y-3">
          {/*  Camera Health header container */}
          <Box>
            <Typography
              className="text-center"
              variant="h5"
              style={{
                fontWeight: "bold",
                alignItems: "center",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Camera Health
            </Typography>
          </Box>
          {/*  total camera  container */}
          <Box className="bg-gray-300 rounded-md  flex items-center gap-3 p-3">
            <GiCctvCamera className="text-blue-500 text-2xl" />
            <Typography style={{ fontWeight: "bold" }}>
              Totally 124 Cameras are in 9 NVRs and installed in 12 Locations
            </Typography>
          </Box>
          {/*  warnig camera  container */}
          <Box className="bg-[#FFBFCC] rounded-md  flex justify-between gap-3 p-3">
            <Box className="flex items-center gap-3 ">
              <IoIosWarning className="text-red-600 text-2xl" />
              <Typography style={{ fontWeight: "bold" }}>
                Totally 124 Cameras are in 9 NVRs and installed in 12 Locations
              </Typography>
            </Box>
            <Button
              variant=""
              color="default"
              size="medium"
              style={{
                borderRadius: "4px",
                padding: "6px",
                backgroundColor: "white",
                textTransform: "none",
              }}
            >
              View Cameras
            </Button>
          </Box>
          {/* camera statistics */}
          <Box className="flex gap-6">
            {data.map((item, idx) => (
              <Box key={idx} className="flex items-center gap-1">
                <Typography
                  sx={{
                    backgroundColor: item.color,
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: "2px",
                  }}
                />

                <Typography variant="subtitl" fontWeight="bold" gutterBottom>
                  {item.label}
                </Typography>
                <BsFillInfoCircleFill className="text-gray-500" />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CameraHelthCard;
