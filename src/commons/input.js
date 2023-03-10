import React from "react";
import { ErrorMessage, useField, Field } from "formik";
import { Box, Typography, styled } from "@mui/material";


const StyledFormGroup = styled(Box)({
  display: "flex",
  // flex:" 0 0 auto",
  // flexFlow: "row wrap",
  alignItems: "center",
  marginBottom: 0,
  
})
const StyledInput = styled(Field)({
  border:"none",

  "&.is-invalid": {
    borderBottom: "1px solid red",
  },

  "&.form-control": {
    display:" block",
    width: "300px",
    // height: ,
     padding:".5rem" ,
    // fontSize:,
     lineHeight:"" ,
    // color: ,
    // backgroundCcolor: 
     backgroundClip: "padding-box",
     borderBottom:"1px solid grey",
     "@media screen and (max-width: 1200px)": {
      width:"100%"
     } },
});
const StyledErrorMessage = styled(ErrorMessage)({
  "&.error":{
    color:"red",
  }
}) 
const Input = ({ label, touched, ...props }) => {
  const [field, meta] = useField(props);

  // const { values, handleChange } = useFormik();

  return (
    <StyledFormGroup>
      <Typography htmlFor={field.name} gutterBottom>
        {label}
      </Typography>
      <StyledInput
        {...field}
        {...props}
        name={field.name}
        id={field.name}
        className={`is-invalid form-control
        ${meta.touched && meta.error && `is-invalid`}`}
      />

      <StyledErrorMessage component="div" className="error" color={"red"} name={field.name} />
    </StyledFormGroup>
  );
};

export default Input;
