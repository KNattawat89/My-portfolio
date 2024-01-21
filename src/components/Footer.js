import { Box } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      width={"100%"}
      height={"60px"}
      bgcolor={"black"}
      color={"white"}
    
      bottom={0}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <h3 className="font" style={{ fontSize: "20px", fontWeight: "bold" }}>
        Designed and Developed by Night
      </h3>
    </Box>
  );
};
