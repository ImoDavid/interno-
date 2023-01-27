import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Box, Stack, styled, Typography, Button } from "@mui/material";
import { colors } from "../../styles/globals";

const GridContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(250px, 1fr))`,
  gridGap: "15px",
  alignItems: "stretch",

  "@media screen and (max-width: 1200px)": {
    gridGap: "14px",
    gridTemplateColumns: `repeat(auto-fill, minmax(200px, 1fr))`,
  },
});

const StyledGridElements = styled(Box)({
  width: "100%",
});

const StyledButton = styled(Button)({
  color: colors.SECONDARY,
  textTransform: "capitalize",
  backgroundColor: colors.WHITE,
  margin: "1.5rem 0",
  "&:hover": {
    backgroundColor: colors.PRIMARY,
    color: colors.WHITE,
  },
});

const data = [
  {
    title: "Project Plan",
  },
  {
    title: "Interior Work",
  },
  {
    title: "Retail Design",
  },
  {
    title: "2d/3d Art Work",
  },
  {
    title: "Interior Work",
    bgcolor: colors.GREY,
  },
  {
    title: "Decoration Work",
  },
];
const ServicePlan = () => {
  return (
    <>
      <Box marginTop={[6, 6]} marginBottom={[6, 8]}>
        <GridContainer>
          {data.map((ele) => (
            <StyledGridElements key={ele.img}>
              <Box
                sx={{
                  textAlign: "center",
                  margin: "1rem",
                  lineHeight: "1rem",
                  paddingX: ["1rem"],
                  borderRadius: "25px",
                  backgroundColor: colors.WHITE,
                  ":hover": {
                    backgroundColor: colors.GREY,
                  },
                }}
              >
                <Typography mb variant="h6">
                  {ele.title}
                </Typography>
                <Typography>
                  There are many variations of the passages of lorem Ipsum from
                  available, majority.
                </Typography>
                <StyledButton>
                  Read More{" "}
                  <IoIosArrowRoundForward
                    fontSize={"1.5rem"}
                    color={colors.PRIMARY}
                  />
                </StyledButton>
              </Box>
            </StyledGridElements>
          ))}
        </GridContainer>
      </Box>
    </>
  );
};

export default ServicePlan;
