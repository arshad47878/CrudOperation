import {
  TextField,
  Typography,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Stack,
  Container,
  Autocomplete,
  Button,
} from "@mui/material";
import React from "react";
import StepOne from "./StepOne";

const MForm = () => {
  const stepRenderFn = () => {
    const steps = {
      1: StepOne,
    };
    return steps[1];
  };
  return (
    <form>
      <Container></Container>
    </form>
  );
};

export default MForm;
