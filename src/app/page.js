import Image from "next/image";
import img from '../../public/bed1.jpg'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
export default function Home() {
  return (
    <Box className="">
      <Image src={img} height={1000} width={100} alt="logo"></Image>
      <h2 className="text-5xl">lorem</h2>
      <Button sx={{ m: 12 }}  variant="outlined" href="#outlined-buttons">
        Link
      </Button>
    </Box>
  );
}
