import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { StyledEngineProvider } from '@mui/material/styles';
import { GiCctvCamera } from "react-icons/gi";

const CameraHelthCard = () => {
    const data = [
        { value: 56, label: 'Super Healthy (56)' },
        { value: 35, label: 'Healthy (35)' },
        { value: 27, label: 'Warning (27)' },
        { value: 6, label: 'Danger (6)' },
      ];
      const colors = ['#19A01E', '#00DB4A', '#FB8B34', '#ED1C24'];
      
      const size = {
        width: 300,
        height: 200,
        
      };
      
      const StyledText = styled('text')(({ theme }) => ({
        fill: theme.palette.text.primary,
        textAnchor: 'middle',
        font:"bold",
        dominantBaseline: 'central',
        fontSize: 30,
      }));
      function PieCenterLabel({ children }) {
        const { width, height, left, top } = useDrawingArea();
        return (
          <StyledText x={left + width / 2} y={top + height / 2}>
          <tspan fontSize="2rem" fontWeight="bold">124</tspan>
        <tspan x={left + width / 2} dy="1.4em" fontSize="1.1rem" fontWeight="normal">Camera</tspan>
            {children}
          </StyledText>
        );
      }

   return (
<Box className=" shadow-lg rounded-lg flex  gap-8 " >
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
    <Box  className=" w-full">
    <Typography className='text-center' variant="h5" style={{ fontWeight: 'bold', alignItems:'center', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    Camera Health
      </Typography>

    </Box>
    
    </Box>
  );
}

export default CameraHelthCard