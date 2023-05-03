import {
  Autocomplete,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const StepOne = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "column" }}
      spacing={{ xs: 2, sm: 3 }}
    >
      <Typography>Step:1</Typography>
      <TextField label="Enter Email" />
      <TextField label="Enter Password" />

      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={[
          "Programmer",
          "React Deeloper",
          "NOde js Developer",
          "Ruby on rails Developer",
          "java Developer",
        ]}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search developer Type"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
      <Button variant="contained" sx={{ maxWidth: "10%" }}>
        Next
      </Button>
      {/* <Button> Next</Button> */}
    </Stack>
  );
};

export default StepOne;
