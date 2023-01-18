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
import { ImQuotesLeft } from "react-icons/im";
import { colors } from "../../styles/globals";



const profile = [
  { img: "https://res.cloudinary.com/dfljnnxln/image/upload/v1674009083/Photo_11_q1caxw.png" },
  { img: "https://res.cloudinary.com/dfljnnxln/image/upload/v1674009084/Photo_12_u5kg1j.png" },
  { img: "https://res.cloudinary.com/dfljnnxln/image/upload/v1674009083/Photo_11_q1caxw.png" },
  { img: "https://res.cloudinary.com/dfljnnxln/image/upload/v1674009084/Photo_13_hu5kdn.png" },
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
          marginX={["3rem", "13rem"]}
          marginY={"3rem"}
          justifyContent="center"
          alignItems="center"
          paddingX={["1rem", "2rem"]}
          paddingY={["1rem" ,"2rem"]}
          sx={{
            border: `10px solid ${colors.GREY}`,
            textAlign: "center",
            borderRadius: "30px",
          }}
        >
          <ImQuotesLeft size={"1.5rem"}/>
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
          image="https://res.cloudinary.com/dfljnnxln/image/upload/v1674009084/Photo_9_h7x6h6.png"
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
          image="https://res.cloudinary.com/dfljnnxln/image/upload/v1674009083/Photo_10_uixa5o.png"
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
              <Box mr={2} mb>
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
                    <Box marginRight={[0, 5]} marginBottom={[3,0]}>
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
