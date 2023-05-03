import { Button, Stack, TextField } from "@mui/material";

export default function Parent() {
  return (
    <Stack>
      <h1>Redux</h1>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 3, sm: 2 }}>
        <TextField
          required
          id="outlined-required"
          label="Required"
          //   defaultValue="Hello World"
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          //   defaultValue="Hello World"
        />
      </Stack>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 3, sm: 2 }}
        sx={{ marginTop: 2 }}
      >
        <TextField
          required
          id="outlined-required"
          label="Required"
          //   defaultValue="Hello World"
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          //   defaultValue="Hello World"
        />
      </Stack>
      <Stack sx={{ marginTop: 2 }}>
        <Button variant="contained">ADD</Button>
      </Stack>
    </Stack>
  );
}
