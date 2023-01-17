import React from "react";
import { Stack, Box, styled, Typography, Button } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";
import { colors } from "../../styles/globals";

const StyledAboutBox = styled(Box)({
  borderRadius: "25px",
  width: "100%",
  height: "200px",
});
const StyledButton = styled(Button)({
  color: colors.WHITE,
  textTransform: "capitalize",
  backgroundColor: colors.SECONDARY,
  borderRadius: "15px",
  padding: "0.5rem 1.5rem",
  fontSize: "0.7rem",
  margin: "0.8rem 0",
  "&:hover": {
    backgroundColor: colors.PRIMARY,
  },
});

const StyledTextBox = styled(Box)({
  lineHeight: "1rem",
  color: colors.SECONDARY,
  "@media screen and (max-width: 1200px)": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

const AboutDescripton = ({
  marginRight = "3rem",
  orderBox = "1",
  title,
  des,
  buttonText,
  orderPic = "2",
  image,
  marginLeft,
}) => {
  return (
    <>
      <Stack direction={["column", "row"]} paddingY={2} marginBottom={"2rem"}>
        <Box
          width={["100%", "600px"]}
          marginY={"1rem"}
          marginRight={marginRight}
          marginLeft={["0", marginLeft]}
          sx={{ order: ["1", orderBox] }}
        >
          <StyledTextBox textAlign={["center", "left"]}>
            <Typography mb variant="h5" fontSize={"1.8rem"}>
              {title}
            </Typography>
            <Typography fontSize={"0.8rem"}>{des}</Typography>

            <StyledButton>
              {buttonText}{" "}
              <IoIosArrowRoundForward
                fontSize={"1.5rem"}
                color={colors.PRIMARY}
              />
            </StyledButton>
          </StyledTextBox>
        </Box>
        <StyledAboutBox
          sx={{
            order: ["2", orderPic],
            background: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </Stack>
    </>
  );
};

export default AboutDescripton;
