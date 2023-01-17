import React from "react";
import { Box, Stack, styled, Typography, Avatar } from "@mui/material";
import { PrimaryButton } from "../../commons";
import { BsTelephone } from "react-icons/bs";
import { colors } from "../../styles/globals";

const StyledAboutBox = styled(Box)({
  width: "100%",
  height: "500px",
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

const StylishLiving = ({
  radiusLeftB = "100px",
  radiusTopR = "200px",
  btext="Get Free Estimate",
  image,
  num,
  err,
  title,
  des,
}) => {
  return (
    <>
      <Stack direction={["column", "row"]} paddingY={2} marginBottom={"2rem"}>
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          width={["100%", "600px"]}
          marginY={"3rem"}
          marginRight={["3rem"]}
        >
          <StyledTextBox textAlign={["center", "left"]}>
            {err && (
              <Typography variant="h1" mb color={colors.PRIMARY}> 
                {err}
              </Typography>
            )}
            <Typography mb variant="h5" fontSize={"1.8rem"}>
              {title}
            </Typography>
            <Typography fontSize={"0.8rem"}>
              {des}
            </Typography>
            {num && (
              <Stack direction="row" spacing={2} marginY={3} marginX={"auto"}>
                <Avatar>
                  <BsTelephone color={colors.PRIMARY} />
                </Avatar>
                <Stack direction="column">
                  <Typography fontWeight="500">{num}</Typography>
                  <Typography fontSize="0.8rem">Call Us Anytime</Typography>
                </Stack>
              </Stack>
            )}
            <PrimaryButton text= {btext} />
          </StyledTextBox>
          <Box></Box>
        </Stack>
        <StyledAboutBox
          sx={{
            background: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            borderBottomLeftRadius: radiusLeftB,
            borderTopRightRadius: radiusTopR,
          }}
        />
      </Stack>
    </>
  );
};

export default StylishLiving;
