import { Box, Stack } from "@mui/material"

export const ExperienceBox = ({company,role, description}) => {
    return(
        <Box className="font" p={"10px"} width={"330px"} borderRadius={"16px"} bgcolor={"black"} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}>
            <h3 style={{fontSize: "20px", color: "white", marginBottom: 0}}>{company}</h3>
            <Stack spacing={1} p={"10px"}>
            <Box
        maxWidth={"180px"}
          bgcolor={"white"}
          display={"flex"}
          
          alignItems={"center"}
          justifyContent={"center"}
          height={"30px"}
          borderRadius={"16px"}
        >
          <h4 className="font">{role}</h4>
        </Box>
        <Box>
        <div style={{ textIndent: "1em", fontSize: "16px", fontWeight: "normal", margin: 0 , color: "white"}}>
            {description}
        </div>
        </Box>
        </Stack>
        </Box>
    )
}