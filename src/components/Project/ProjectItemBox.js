import { Box, Stack } from "@mui/material";

export const ProjectItemBox = ({ image, title, tag, description }) => {
  return (
    <Box  sx={{
        ":hover": {
          transform: "scale(1.05)",
          transition: "0.3s" 
        },
      }} bgcolor={"#D9D9D9"} width={"310px"} borderRadius={"16px"} boxShadow={"rgba(0, 0, 0, 0.35) 0px 3px 10px"}>
      <Stack className="font" spacing={1} direction={"column"}>
        <img
          src={image}
          alt={title}
          width={"310px"}
          height={"200px"}
          style={{ borderRadius: "16px 16px 0 0" }}
        />
        <Stack px={"20px"}>
        <h3 style={{ fontSize: "20px" }}>{title}</h3>
        <Box
          bgcolor={"white"}
          display={"flex"}
          px={"10px"}
          alignItems={"center"}
          justifyContent={"center"}
          height={"35px"}
          borderRadius={"16px"}
        >
          <h4 className="font">{tag}</h4>
        </Box>
        <p style={{fontSize: "16px", fontWeight: "normal", textIndent: 1}}>{description}</p>
        </Stack>
      </Stack>
    </Box>
  );
};
