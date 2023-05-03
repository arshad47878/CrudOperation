import { Stack } from "@mui/material";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

export default function Master() {
  return (
    <>
      <Stack>
        <Header />
        <Content />
        <Footer />
      </Stack>
    </>
  );
}
