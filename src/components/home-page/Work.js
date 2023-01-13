import React from "react";
import { Box, styled, Typography, Button } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";
import { colors } from "../../styles/globals";

const StyledButton = styled(Button)({
  color: colors.SECONDARY,
  textTransform: "capitalize",
  backgroundColor: colors.WHITE,
  margin: "1.5rem 0",
  "&:hover": {
    backgroundColor: colors.PRIMARY,
    color:colors.WHITE,
  },
});

const Work = ({title}) => {
  return (
    <>
      <Box sx={{textAlign:"center",margin:"1rem",lineHeight:"1rem", paddingX:["1rem"]}}>
        <Typography mb variant="h6">{title}</Typography>
        <Typography>
          There are many variations of the passages of lorem Ipsum from
          available, majority.
        </Typography>
        <StyledButton>
          Read More <IoIosArrowRoundForward fontSize={"1.5rem"} color={colors.PRIMARY}/>
        </StyledButton>
      </Box>
    </>
  );
};

export default Work;
