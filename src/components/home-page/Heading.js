import React from "react";
import { Typography, Box } from "@mui/material";
import { colors } from "../../styles/globals";

const Heading = ({
  title,
  des,
  x = "10rem",
  Tcolor = colors.SECONDARY,
  Dcolor = colors.SECONDARY,
  fontS= "1.8rem"
}) => {
  return (
    <>
      <Box mb textAlign="center" paddingX={["0rem", x]}>
        <Typography
          mb
          variant="h5"
          fontSize={fontS}
          color={Tcolor}
          paddingX={["0rem","5rem"]}
        >
          {title}
        </Typography>
        {des && <Typography color={Dcolor}> {des}</Typography>}
      </Box>
    </>
  );
};

export default Heading;
