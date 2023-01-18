import React from "react";
import { Box, Stack, Typography, Avatar } from "@mui/material";
import { colors } from "../../styles/globals";



const Testimonial = ({name,city,text, img}) => {
  return (
    <>
      <Box bgcolor={colors.WHITE} paddingY={2} paddingX={2} margin={2} borderRadius={"10px"}>
        <Stack direction="row" spacing={2} marginY={3}>
        <Avatar alt="Remy Sharp" src={img} />
          <Stack direction="column">
            <Typography fontWeight="500">{name}</Typography>
            <Typography fontSize="0.8rem">{city}</Typography>
          </Stack>
        </Stack>
        <Typography>
        {text}
        </Typography>
      </Box>
    </>
  );
};

export default Testimonial;
