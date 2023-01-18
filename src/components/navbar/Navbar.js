import React, { useState } from "react";
import { Link as RRLink, NavLink } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Stack, styled, Container, Typography } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { colors } from "../../styles/globals";
import LOGO from "../../assets/Logo.png";

const navLinks = [
  { page: "home", url: "/" },
  { page: "about", url: "/about" },
  { page: "services", url: "/services" },
  { page: "project", url: "/project" },
  { page: "blog", url: "/blog" },
  { page: "contact", url: "/contact" },
  { page: <CiSearch fontSize={"1.1rem"} />, url: "/search" },
];
export { navLinks };

const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xs: 300,
      sm: 600,
      md: 900,
      lg: 1224,
      xl: 1536,
    },
  },
});

const StyledContainer = styled(Box)({
  backgroundColor: colors.WHITE,
  position: "sticky",
  top: 0,
  zIndex: 100,
  padding: "1.5rem 0",
  "@media screen and (max-width: 1200px)": {
    padding: "0.5rem 0",
  },
});

const StyledNavLink = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  textTransform: "capitalize",
  fontWeight: "400",
  fontSize: ["1rem", "0.8rem"],
  cursor: "pointer",
  marginRight: "1.8rem",
  fontFamily: "Jost",
});

const StyledLink = styled(NavLink)({
  textDecoration: "none",
  color: colors.NAV_TEXT,

  "&:hover": {},
});

const StyledMobileContainer = styled(Box)({
  position: "absolute",
  height: "auto",
  width: "100%",
  backgroundColor: "#f3f3f3",
  top: "4rem",
  left: 0,
  padding: "1rem 0 ",
});

const MobileLink = styled(NavLink)({
  textDecoration: "none",
  color: colors.NAV_TEXT,
  marginBottom: "1rem",
  textTransform: "capitalize",
  fontWeight: 700,
  fontSize: "14px",

  "&:last-child": {
    marginBottom: 0,
  },
  "&:hover": {
    textDecoration: "underline",
  },
});

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <Container maxWidth="md">
          <Box bgcolor={colors.WHITE} marginX={"auto"} padding={["0", "1rem"]}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              paddingX={["1rem", "0rem"]}
              position={"relative"}
              sx={{
                justifyContent: {
                  xs: "space-between",
                  sm: "space-between",
                  md: "space-between",
                  lg: "flex-start",
                  xl: "flex-start",
                },
              }}
              width={"100%"}
              maxWidth={["100%", "100%", "100%", "1200px"]}
              marginX={"auto"}
            >
              <Box
                width={["auto", "16.779%"]}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                flex={1}
                ml={[0, "20px"]}
              >
                <Box display={"flex"} alignItems={"center"}>
                  <RRLink to={"/"}>
                    <Box
                      component={"img"}
                      src={LOGO}
                      alt={"logo"}
                      height={[10, 15]}
                      width={[10, 15]}
                      mr
                    />
                  </RRLink>
                  <Typography variant="h6" fontWeight={"700"}>
                    Interno
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "none",
                      lg: "block",
                      xl: "block",
                    },
                  }}
                >
                  <Stack direction={"row"}>
                    {navLinks.map((ele) => (
                      <StyledNavLink key={ele.url}>
                        <StyledLink
                          to={ele.url}
                          underline="none"
                          color={colors.NAV_TEXT}
                        >
                          {ele.page}
                        </StyledLink>
                      </StyledNavLink>
                    ))}
                  </Stack>
                </Box>
                <Box
                  display={["block", "none"]}
                  fontSize={"1.5rem"}
                  onClick={() => {
                    setNavbarOpen(!navbarOpen);
                  }}
                  sx={{
                    display: {
                      xs: "block",
                      sm: "block",
                      md: "block",
                      lg: "none",
                      xl: "none",
                    },
                  }}
                >
                {navbarOpen ? <RiCloseFill color={colors.PRIMARY}/> :<RiMenu3Fill/> }  
                </Box>
                {navbarOpen && (
                  <StyledMobileContainer boxShadow={2}>
                    <Stack
                      direction={"column"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      {navLinks.map((ele) => (
                        <MobileLink
                          to={ele.url}
                          key={ele.url}
                          underline="none"
                          color={colors.NAV_TEXT}
                          onClick={() => {
                            setNavbarOpen(!navbarOpen);
                          }}
                        >
                          {ele.page}
                        </MobileLink>
                      ))}
                    </Stack>
                  </StyledMobileContainer>
                )}
              </Box>
            </Stack>
          </Box>
        </Container>
      </StyledContainer>
    </ThemeProvider>
  );
};

export default Navbar;
