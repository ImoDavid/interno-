import React from "react";
import { Box, Stack, styled, Typography } from "@mui/material";
import { colors } from "../../styles/globals";


const StyledAboutBox = styled(Box)({
  width: "100%",
  height: "300px",
  borderBottomLeftRadius: "300px",
  borderTopRightRadius: "100px",
});

const StyledTextBox = styled(Box)({
  lineHeight: "1rem",
  color: colors.SECONDARY,
  "@media screen and (max-width: 1200px)": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding:"0rem",
  },
});

const ServiceWork = ({
  marginRight = "2rem",
  pRight="5rem",
  orderBox = "1",
  title,
  orderPic = "2",
  image,
  marginLeft,
  pLeft,
  icon,
  num,
}) => {
  return (
    <>
      <Stack direction={["column", "row"]} paddingY={2} marginBottom={"1rem"}>
        <Box
          marginY={"2rem"}
          marginRight={["0",marginRight]}
          marginLeft={["0", marginLeft]}
          sx={{ order: ["1", orderBox] }}
        >
          <StyledTextBox textAlign={["center", "left"]} sx={{paddingRight: pRight, paddingLeft:pLeft}}>
            <Stack
              direction={"row"}
              alignItems="center"
              justifyContent={"space-between"}
              marginY={2}

            >
              <Box
                component={"img"}
                src={icon}
                alt={"logo"}
                height={[20, 40]}
                width={[20, 40]}
              />
              <Typography variant={"h3"} color={colors.WHITE}>{num}</Typography>
            </Stack>
            <Typography mb variant="h5" fontSize={"1.8rem"}>
              {title}
            </Typography>
            <Typography fontSize={"0.8rem"}>
              It is a long established fact will be distracted. Lorem Ipsum is
              simply dummy from text of the and typesetting indufstry.
            </Typography>
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

export default ServiceWork;
