import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Work from "../../components/work/Work";
import {
  Box,
  Stack,
  styled,
  Container,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import { BsTelephone } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";
import { colors } from "../../styles/globals";
import HEADER from "../../assets/headerBackground.jpg";
import ABOUTIMG from "../../assets/aboutBackground.png";

const StyledBox = styled(Box)({
  background: `url(${HEADER})`,
  backgroundSize: "100% 100%",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  borderBottomLeftRadius: "150px",
  display: "flex",
  alignItems: "center",
});
const StyledAboutBox = styled(Box)({
  background: `url(${ABOUTIMG})`,
  backgroundSize: "100% 100%",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  borderBottomLeftRadius: "100px",
  borderTopRightRadius: "200px",
  width: "100%",
  height: "500px",
});
const StyledButton = styled(Button)({
  color: colors.WHITE,
  textTransform: "capitalize",
  backgroundColor: colors.SECONDARY,
  borderRadius:"15px",
  padding:"0.5rem 1.5rem",
  fontSize:"0.7rem",
  margin: "0.5rem 0",
  "&:hover": {
    backgroundColor: colors.PRIMARY,
  },
});

const StyledTextBox = styled(Box)({
  lineHeight: "1rem",
  color: colors.SECONDARY,
  textAlign: ["center", "left"],
});

const Homepage = () => {
  return (
    <>
      <Navbar />
      <StyledBox height={["80vh", "75vh"]}>
        <Container maxWidth={"md"}>
          <StyledTextBox width={["100%", "43%"]}>
            <Typography variant="h3">Let Your Home Be Unique</Typography>
            <Typography>
              There are many variations of the passages of lorem Ipsum
              fromavailable,variations of the passages.
            </Typography>
            <StyledButton>
              Get Started <IoIosArrowRoundForward fontSize={"1.5rem"} color={colors.PRIMARY}/>
            </StyledButton>
          </StyledTextBox>
        </Container>
      </StyledBox>
      <Container maxWidth={"md"} paddingY={"2rem"}>
        <Stack direction={["column", "row"]} marginY={"5rem"}>
          <Work title={"Project Plan"} />
          <Work title={"Interior Work"} />
          <Work title={"Realization"} />
        </Stack>
      </Container>
      <Container maxWidth={"md"}>
        <Stack direction={["column", "row"]} paddingY={2} marginBottom={"2rem"}>
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            width={["100%", "600px"]}
            marginY={"3rem"}
            marginRight={["3rem"]}
          >
            <StyledTextBox textAlign={"left"}>
              <Typography mb variant="h5" fontSize={"1.8rem"}>
                We Create The Art Of Stylish Living Stylishly
              </Typography>
              <Typography fontSize={"0.8rem"}>
                It is a long established fact that a reader will be distracted
                by the of readable content of a page when lookings at its
                layouts the points of using that it has a more-or-less normal.
              </Typography>
              <Stack direction="row" spacing={2} marginY={3}>
                <Avatar>
                    <BsTelephone color={colors.PRIMARY}/>
                </Avatar>
                <Stack direction="column" >
                  <Typography fontWeight="500">012345678</Typography>
                  <Typography fontSize="0.8rem">Call Us Anytime</Typography>
                </Stack>
              </Stack>
              <StyledButton>
              Get Free Estimate <IoIosArrowRoundForward fontSize={"1.5rem"} color={colors.PRIMARY}/>
            </StyledButton>
            </StyledTextBox>
          </Stack>
          <StyledAboutBox />
        </Stack>
      </Container>
      <Container maxWidth={"md"}>
        <Box sx={{borderRadius:"10px", backgroundColor:colors.GREY, padding:"1.5rem 1rem"}}>jhgh</Box>
      </Container>
    </>
  );
};

export default Homepage;
