import { Box } from "@mui/material"

export const SkillButton = ({title, active}) => {
return(
    <Box display={"flex"} px={"10px"} alignItems={"center"} height={"35px"} borderRadius={"16px"} className={active ? "skillButtonActive"  : "skillButton" }>
        <h4 className="font">{title}</h4>
    </Box>
)
}