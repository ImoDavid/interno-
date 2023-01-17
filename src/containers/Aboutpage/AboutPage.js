import React from "react";
import {
  Stack,
  Box,
  styled,
  Typography,
  Container,
} from "@mui/material";
import { Formik, Form } from "formik";
import { AboutDescription } from "../../components/about-page/";
import { PagesHero, Heading, Input, TextArea,PrimaryButton } from "../../commons";
import { colors } from "../../styles/globals";
import ABOUTIMG from "../../assets/aboutpagebackground.png";
import ABOUTPAGE1 from "../../assets/aboutpageimage1.jpg";
import ABOUTPROFILE from "../../assets/aboutpageprofile1.png";

const profile = [
  { img: ABOUTPROFILE },
  { img: ABOUTPROFILE },
  { img: ABOUTPROFILE },
  { img: ABOUTPROFILE },
];


const StyledBox = styled(Box)({
  marginBottom: ["1rem", "1.4rem"],
});
const AboutPage = () => {
  return (
    <>
      <PagesHero image={"https://res.cloudinary.com/dfljnnxln/image/upload/v1673966522/aboutpagebackground_x6c9sx.png"} title="about" des="about/about us" />
      <Container maxWidth={"md"}>
        <Stack
          direction={"column"}
          sx={{
            border: `10px solid ${colors.GREY}`,
            margin: "3rem 15rem",
            padding: "1rem",
            textAlign: "center",
            borderRadius: "30px",
          }}
        >
          <Typography fontStyle={"italic"} fontWeight={"500"} m>
            I like an interior that defies labeling. I don't really want someone
            to walk into a room and know that I did it
          </Typography>
          <Typography variant="body">-BUNNY WILLIAM</Typography>
        </Stack>

        <AboutDescription
          title="What We Do"
          des=" It is a long established fact that a reader will be distracted
                  by the of readable content of a page when lookings at its
                  layouts the points of using that it has a more-or-less normal."
          buttonText="Our Concept"
          image={ABOUTPAGE1}
        />

        <AboutDescription
          orderBox="2"
          orderPic="1"
          marginLeft={"3rem"}
          marginRight="0"
          title="The End Result"
          des="It is a long established fact that a reader will be distracted by the of readable content of a page 
          when lookings at its layouts the points of using 
          that it has a more-or-less normal."
          buttonText="Our Concept"
          image={ABOUTPAGE1}
        />
      </Container>

      <Box
        sx={{
          backgroundColor: colors.GREY,
          padding: "2rem 1rem",
          marginTop: "6rem",
          marginBottom: [6, 8],
        }}
      >
        <Container maxWidth={"md"}>
          <Heading title="What the People Thinks About Us" />
          <Stack
            direction={["column", "row"]}
            alignItems={"center"}
            justifyContent={"center"}
            my={5}
          >
            {profile.map((ele) => (
              <Box mr={2}>
                <Box
                  component={"img"}
                  src={ele.img}
                  alt={"logo"}
                  height={"250px"}
                  sx={{ objectFit: "cover", borderRadius: "25px" }}
                />
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>
      <Container maxWidth={"md"}>
        <Heading title="Creative project? Let's have a productive talk." />
        <Box padding={[1,7]}>
          <Formik
            initialValues={{
              firstname: "",
              surname: "",
              Email: "",
              mobileNumber: "",
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(async () => {
                const payload = {
                  firstname: values.firstname,
                  lastname: values.surname,
                  Email: values.Email,
                  message: values.message,
                };
                try {
                  resetForm(true);
                  setSubmitting(false);
                } catch (err) {
                  console.log(err);
                }
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Container maxwidth={"sm"}>

              <Form>
                <StyledBox>
                  <Stack
                    direction={["column", "row"]}
                    
                  >
                    <Box marginRight={[0, 5]}>
                      <Input name="name" type="text" placeholder="name" />
                    </Box>
                    <Box>
                      <Input name="Email" type="text" placeholder="lastname" />
                    </Box>
                  </Stack>
                </StyledBox>

                <StyledBox>
                  <TextArea
                    name="message"
                    type="text"
                    placeholder="Hello Iam Intrested in.."
                  />
                </StyledBox>

                <StyledBox sx={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                  <PrimaryButton text="Send Now"/>
                </StyledBox>
              </Form>
                    </Container>
            )}
          </Formik>
        </Box>
      </Container>
    </>
  );
};

export default AboutPage;
