import { Box, Stack } from "@mui/material"

export const ExperienceBox = ({company,role, description}) => {
    return(
        <Box className="font" p={{xs:"5px",sm:"10px"}} ml={{sm:1}} mt={{xs: 2, sm: 0}} maxWidth={{sm:"350px"}} width={{xs: "auto",lg:"350px"}} borderRadius={"16px"} bgcolor={"#D9D9D9"} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 10px"}>
            <h3 style={{fontSize: "20px", color: "black", marginBottom: 0}}>{company}</h3>
            <Stack spacing={1} p={"10px"}>
            <Box
        maxWidth={"180px"}
          bgcolor={"white"}
          display={"flex"}
          px={1}
          alignItems={"center"}
          justifyContent={"center"}
          height={"30px"}
          borderRadius={"16px"}
        >
          <h4 className="font">{role}</h4>
        </Box>
        <Box>
        <div style={{ textIndent: "1em", fontSize: "16px", fontWeight: "normal", margin: 0 , color: "black"}}>
            {description}
        </div>
        </Box>
        </Stack>
        </Box>
    )
}