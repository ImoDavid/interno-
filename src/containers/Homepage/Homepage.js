import React from "react";
import {
  Work,
  Testimonial,
  Partners,
  Heading,
  ProjectsGallery,
  ArticlesGallery,
} from "../../components/home-page";
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
  backgroundPosition: " center",
  backgroundRepeat: "no-repeat",
  borderBottomLeftRadius: "150px",
  display: "flex",
  alignItems: "center",

});
const StyledAboutBox = styled(Box)({
  background: `url(${ABOUTIMG})`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  borderBottomLeftRadius: "100px",
  borderTopRightRadius: "200px",
  width: "100%",
  height: "500px",
})
const StyledButton = styled(Button)({
  color: colors.WHITE,
  textTransform: "capitalize",
  backgroundColor: colors.SECONDARY,
  borderRadius: "15px",
  padding: "0.5rem 1.5rem",
  fontSize: "0.7rem",
  margin: "0.5rem 0",
  "&:hover": {
    backgroundColor: colors.PRIMARY,
  },
});

const StyledTextBox = styled(Box)({
  lineHeight: "1rem",
  color: colors.SECONDARY,
  "@media screen and (max-width: 1200px)": {
   display:"flex",
   flexDirection:"column",
   alignItems:"center",
   justifyContent:"center",
  }});

const StyledBorder = styled(Box)({
  borderRight: `2px solid ${colors.PRIMARY}`,
  "@media screen and (max-width: 1200px)": {
    borderRight: "none",
    borderBottom: `2px solid ${colors.PRIMARY}`,
    paddingBottom: "2rem",
    margin: "1rem",
    width:"100%"
  },
});

const HomePage = () => {
  return (
    <>
      <StyledBox height={["70vh", "75vh"]}>
        <Container maxWidth={"md"}>
          <StyledTextBox width={["100%", "43%"]}  textAlign={ ["center", "left"]}>
            <Typography variant="h3">Let Your Home Be Unique</Typography>
            <Typography>
              There are many variations of the passages of lorem Ipsum
              fromavailable,variations of the passages.
            </Typography>
            <StyledButton>
              Get Started{" "}
              <IoIosArrowRoundForward
                fontSize={"1.5rem"}
                color={colors.PRIMARY}
              />
            </StyledButton>
          </StyledTextBox>
        </Container>
      </StyledBox>

      <Container maxWidth={"md"}>
        <Stack direction={["column", "row"]} marginY={"5rem"}>
          <Work title={"Project Plan"} />
          <Work title={"Interior Work"} />
          <Work title={"Realization"} />
        </Stack>

        <Stack direction={["column", "row"]} paddingY={2} marginBottom={"2rem"}>
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            width={["100%", "600px"]}
            marginY={"3rem"}
            marginRight={["3rem"]}
          >
            <StyledTextBox textAlign={["center","left"]}>
              <Typography mb variant="h5" fontSize={"1.8rem"}>
                We Create The Art Of Stylish Living Stylishly
              </Typography>
              <Typography fontSize={"0.8rem"}>
                It is a long established fact that a reader will be distracted
                by the of readable content of a page when lookings at its
                layouts the points of using that it has a more-or-less normal.
              </Typography>
              <Stack direction="row" spacing={2} marginY={3} marginX={"auto"}>
                <Avatar>
                  <BsTelephone color={colors.PRIMARY} />
                </Avatar>
                <Stack direction="column">
                  <Typography fontWeight="500">012345678</Typography>
                  <Typography fontSize="0.8rem">Call Us Anytime</Typography>
                </Stack>
              </Stack>
              <StyledButton>
                Get Free Estimate{" "}
                <IoIosArrowRoundForward
                  fontSize={"1.5rem"}
                  color={colors.PRIMARY}
                />
              </StyledButton>
            </StyledTextBox>
          </Stack>
          <StyledAboutBox />
        </Stack>

        <Box
          sx={{
            borderRadius: "25px",
            backgroundColor: colors.GREY,
            padding: "2rem 1rem",
            marginTop: "6rem",
          }}
        >
          <Heading title="What the People Thinks About Us" />
          <Stack direction={["column", "row"]} paddingY={5}>
            <Testimonial
              name="Nattasha Mith"
              city="Sydney, USA"
              text="Lorem Ipsum is simply dummy text of the typesetting industry.Ipsum has been."
            />
            <Testimonial
              name={"Raymond Galario"}
              city={"Sydney, Australia"}
              text="Lorem Ipsum is simply dummy text of the typesetting industry. 
                Ipsum has been scrambled it 
                to make a type book."
            />
            <Testimonial
              name="Benny Roll"
              city="Sydney, New York"
              text="Lorem Ipsum is simply dummy 
              text of the typesetting industry. 
              Ipsum has been scrambled."
            />
          </Stack>
        </Box>

        <Stack
          direction={["column", "row"]}
          paddingY={"6rem"}
          alignItems={"center"}
          justifyContent="center"
        >
          <Partners />
        </Stack>

        <Heading
          title="Follow Our Projects"
          des="It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points."
        />
        <ProjectsGallery />
      </Container>

      <Box bgcolor={colors.GREY} marginBottom={[6, 8]}>
        <Container maxWidth={"md"}>
          <Stack
            direction={["column", "row"]}
            paddingY={"6rem"}
            alignItems={"center"}
            justifyContent="center"
          >
            <StyledBorder>
              <Heading
                title="12"
                des="Years Of Experiance"
                x="0"
                fontS="3.0rem"
                Tcolor={colors.PRIMARY}
                Dcolor={colors.OFF_GREY}
              />
            </StyledBorder>
            <StyledBorder>
              <Heading
                title="85"
                des="Success Project"
                x="0"
                fontS="3.0rem"
                Tcolor={colors.PRIMARY}
                Dcolor={colors.OFF_GREY}
              />
            </StyledBorder>
            <StyledBorder>
              <Heading
                title="15"
                des="Active Project"
                x="0"
                fontS="3.0rem"
                Tcolor={colors.PRIMARY}
                Dcolor={colors.OFF_GREY}
              />
            </StyledBorder>
            <Heading
              title="95"
              des="Happy CUstomers"
              x="0"
              fontS="3.0rem"
              Tcolor={colors.PRIMARY}
              Dcolor={colors.OFF_GREY}
            />
          </Stack>
        </Container>
      </Box>
      <Container maxWidth={"md"}>
        <Heading
          title="Articles & News"
          des="It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using."
        />
        <ArticlesGallery />

        <Box
          sx={{
            borderRadius: "25px",
            backgroundColor: colors.SECONDARY,
            padding: "2rem 1rem",
            margin: "6rem 0",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column",
          }}
        >
          <Heading
            title="Wanna join the interno?"
            des="It is a long established fact  will be distracted."
            Dcolor={colors.WHITE}
            Tcolor={colors.WHITE}
            fontS="2rem"
          />
          <StyledButton sx={{backgroundColor:colors.PRIMARY}}>
          Contact With Us{" "}
            <IoIosArrowRoundForward
              fontSize={"1.5rem"}
              color={colors.WHITE}
            />
          </StyledButton>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
