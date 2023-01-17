import React from "react";
import {  styled, Button } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";
import { colors } from "../styles/globals";

const StyledButton = styled(Button)({
  color: colors.WHITE,
  textTransform: "capitalize",
  borderRadius: "15px",
  padding: "0.5rem 1.5rem",
  fontSize: "0.7rem",
  margin: "0.5rem 0",
  "&:hover": {
    backgroundColor: colors.PRIMARY,
  },
});

const PrimaryButton = ({ bgkolor = colors.SECONDARY, text, iconColor=colors.PRIMARY }) => {
  return (
    <>
      <StyledButton sx={{ backgroundColor: bgkolor }}>
        {text}
        <IoIosArrowRoundForward fontSize={"1.5rem"} color={iconColor} />
      </StyledButton>
    </>
  );
};

export default PrimaryButton;
