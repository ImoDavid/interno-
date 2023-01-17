import React from "react";
import { Stack, Box, styled, Typography } from "@mui/material";

const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "end",
  justifyContent: "center",
});

const PagesHero = ({ image, title, des }) => {
  return (
    <>
      <StyledBox
        height={["40vh", "30vh"]}
        sx={{
          background: `url(${image})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Stack
          direction={"column"}
          bgcolor="white"
          textTransform="capitalize"
          p={1}
          borderRadius="15px 15px 0 0"
        >
          <Typography
            variant="h4"
            fontWeight={700}
            letterSpacing={".3rem"}
            textAlign={"center"}
          >
            {title}
          </Typography>
          <Typography>{des}</Typography>
        </Stack>
      </StyledBox>
    </>
  );
};

export default PagesHero;
