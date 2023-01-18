import React from "react";
import { StylishLiving } from "../../components/home-page/";
import { Box, Container } from "@mui/material";

const ErrorPage = () => {
  return (
    <>
      <Container maxWidth={"md"}>
        <Box my={5}>
          <StylishLiving
            image="https://res.cloudinary.com/dfljnnxln/image/upload/v1673973818/404_jiua0p.png"
            err="404"
            title="We are sorry, but the page
        you requested was not found"
        btext="Back To Home"
          />
        </Box>
      </Container>
    </>
  );
};

export default ErrorPage;
