import React from "react";
import {
  Work,
  Testimonial,
  Partners,
  ProjectsGallery,
  ArticlesGallery,
  StylishLiving,
} from "../../components/home-page";
import { Heading, PrimaryButton } from "../../commons";
import {
  Box,
  Stack,
  styled,
  Container,
  Typography,
} from "@mui/material";
import { colors } from "../../styles/globals";



const StyledBox = styled(Box)({
  background: `url(https://res.cloudinary.com/dfljnnxln/image/upload/v1674007936/Photo_3_1_culfor.png)`,
  backgroundSize: "100% 100%",
  backgroundPosition: " center",
  backgroundRepeat: "no-repeat",
  borderBottomLeftRadius: "150px",
  display: "flex",
  alignItems: "center",
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

const StyledBorder = styled(Box)({
  borderRight: `2px solid ${colors.PRIMARY}`,
  "@media screen and (max-width: 1200px)": {
    borderRight: "none",
    borderBottom: `2px solid ${colors.PRIMARY}`,
    paddingBottom: "2rem",
    margin: "1rem",
    width: "100%",
  },
});

const data = [
  {
    img: "https://res.cloudinary.com/dfljnnxln/image/upload/v1674009084/Photo_7_ict8n7.png",
    bgcolor: colors.WHITE,
  },
  {
    img: "https://res.cloudinary.com/dfljnnxln/image/upload/v1674010427/Photo_2_svfsql.png",
    bgcolor: colors.GREY,
  },
  {
    img: "https://res.cloudinary.com/dfljnnxln/image/upload/v1674010427/Photo_1_1_wrsupq.png",
    bgcolor: colors.WHITE,
  },
  
];

const HomePage = () => {
  return (
    <>
      <StyledBox height={["70vh", "75vh"]}>
        <Container maxWidth={"md"}>
          <StyledTextBox width={["100%", "43%"]} textAlign={["center", "left"]}>
            <Typography variant="h3">Let Your Home Be Unique</Typography>
            <Typography>
              There are many variations of the passages of lorem Ipsum
              fromavailable,variations of the passages.
            </Typography>
            <PrimaryButton text="Get Started" />
          </StyledTextBox>
        </Container>
      </StyledBox>

      <Container maxWidth={"md"}>
        <Stack direction={["column", "row"]} marginY={"5rem"}>
          <Work title={"Project Plan"} />
          <Work title={"Interior Work"} />
          <Work title={"Realization"} />
        </Stack>

        <StylishLiving
          num="012345678"
          title="We Create The Art Of Stylish Living Stylishly"
          des="It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal."
          image="https://res.cloudinary.com/dfljnnxln/image/upload/v1673973174/aboutBackground_uouby3.png"
        />
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
              img="https://res.cloudinary.com/dfljnnxln/image/upload/v1674009084/Photo_higgio.png"
             />
            <Testimonial
              name={"Raymond Galario"}
              city={"Sydney, Australia"}
              text="Lorem Ipsum is simply dummy text of the typesetting industry. 
              Ipsum has been scrambled it 
              to make a type book."
              img="https://res.cloudinary.com/dfljnnxln/image/upload/v1674009084/Photo_1_zxa89n.png"
            />
            <Testimonial
              name="Benny Roll"
              city="Sydney, New York"
              text="Lorem Ipsum is simply dummy 
              text of the typesetting industry. 
              Ipsum has been scrambled."
              img="https://res.cloudinary.com/dfljnnxln/image/upload/v1674009083/Photo_2_zmmosb.png"
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
        <ArticlesGallery data={data}/>

        <Box
          sx={{
            borderRadius: "25px",
            backgroundColor: colors.SECONDARY,
            padding: "2rem 1rem",
            margin: "6rem 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Heading
            title="Wanna join the interno?"
            des="It is a long established fact  will be distracted."
            Dcolor={colors.WHITE}
            Tcolor={colors.WHITE}
            fontS="2rem"
          />
          <PrimaryButton
            bgkolor={colors.PRIMARY}
            iconColor={colors.SECONDARY}
            text="Send Now"
          />
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
