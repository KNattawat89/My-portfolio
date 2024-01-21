import { Stack } from "@mui/material"

export const SkillBox = ({image, title}) => {
    return(
        <Stack direction={"row"} alignItems={"center"} spacing={1} >
            <img width={"42px"} height={"42px"} alt={title} src={image}/>
            <div className="font" style={{fontSize: "16px", fontWeight: "normal"}}>{title}</div>
        </Stack>
    )
}