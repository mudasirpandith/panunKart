import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import product1 from "../images/product1.jpg";
import product2 from "../images/product2.jpg";
import product3 from "../images/product3.jpg";
import laptop from "../images/laptop.jpg";
import mouse from "../images/mouse.jpg";
import speaker from "../images/speaker.jpg";
import pens from "../images/pens.jpg";
import trimmer from "../images/trimmer.jpg";
import bag from "../images/bag.jpg";
import book from "../images/book.jpg";
export default function TopNav() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: window.innerWidth, bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {" "}
        <Tab
          label={
            <Stack
              direction="row"
              spacing={2}
              style={{
                padding: "10px",
                border: "solid pink",
                borderRadius: "50%",
              }}
            >
              <Avatar alt="Remy Sharp" src={product1} />
            </Stack>
          }
        />{" "}
        <Tab
          label={
            <Stack
              direction="row"
              spacing={2}
              style={{
                padding: "10px",
                border: "solid pink",
                borderRadius: "50%",
              }}
            >
              <Avatar alt="Remy Sharp" src={product2} />
            </Stack>
          }
        />{" "}
        <Tab
          label={
            <Stack
              direction="row"
              spacing={2}
              style={{
                padding: "10px",
                border: "solid pink",
                borderRadius: "50%",
              }}
            >
              <Avatar alt="Remy Sharp" src={product3} />
            </Stack>
          }
        />{" "}
        <Tab
          label={
            <Stack
              direction="row"
              spacing={2}
              style={{
                padding: "10px",
                border: "solid pink",
                borderRadius: "50%",
              }}
            >
              <Avatar alt="Remy Sharp" src={laptop} />
            </Stack>
          }
        />{" "}
        <Tab
          label={
            <Stack
              direction="row"
              spacing={2}
              style={{
                padding: "10px",
                border: "solid pink",
                borderRadius: "50%",
              }}
            >
              <Avatar alt="Remy Sharp" src={mouse} />
            </Stack>
          }
        />{" "}
        <Tab
          label={
            <Stack
              direction="row"
              spacing={2}
              style={{
                padding: "10px",
                border: "solid pink",
                borderRadius: "50%",
              }}
            >
              <Avatar alt="Remy Sharp" src={speaker} />
            </Stack>
          }
        />{" "}
        <Tab
          label={
            <Stack
              direction="row"
              spacing={2}
              style={{
                padding: "10px",
                border: "solid pink",
                borderRadius: "50%",
              }}
            >
              <Avatar alt="Remy Sharp" src={pens} />
            </Stack>
          }
        />{" "}
        <Tab
          label={
            <Stack
              direction="row"
              spacing={2}
              style={{
                padding: "10px",
                border: "solid pink",
                borderRadius: "50%",
              }}
            >
              <Avatar alt="Remy Sharp" src={book} />
            </Stack>
          }
        />{" "}
        <Tab
          label={
            <Stack
              direction="row"
              spacing={2}
              style={{
                padding: "10px",
                border: "solid pink",
                borderRadius: "50%",
              }}
            >
              <Avatar alt="Remy Sharp" src={bag} />
            </Stack>
          }
        />{" "}
        <Tab
          label={
            <Stack
              direction="row"
              spacing={2}
              style={{
                padding: "10px",
                border: "solid pink",
                borderRadius: "50%",
              }}
            >
              <Avatar alt="Remy Sharp" src={trimmer} />
            </Stack>
          }
        />{" "}
        <Tab
          label={
            <Stack
              direction="row"
              spacing={2}
              style={{
                padding: "10px",
                border: "solid pink",
                borderRadius: "50%",
              }}
            >
              <Avatar alt="Remy Sharp" src={product2} />
            </Stack>
          }
        />{" "}
        <Tab
          label={
            <Stack
              direction="row"
              spacing={2}
              style={{
                padding: "10px",
                border: "solid pink",
                borderRadius: "50%",
              }}
            >
              <Avatar alt="Remy Sharp" src={product3} />
            </Stack>
          }
        />{" "}
        <Tab
          label={
            <Stack
              direction="row"
              spacing={2}
              style={{
                padding: "10px",
                border: "solid pink",
                borderRadius: "50%",
              }}
            >
              <Avatar alt="Remy Sharp" src={product1} />
            </Stack>
          }
        />{" "}
        <Tab
          label={
            <Stack
              direction="row"
              spacing={2}
              style={{
                padding: "10px",
                border: "solid pink",
                borderRadius: "50%",
              }}
            >
              <Avatar alt="Remy Sharp" src={product2} />
            </Stack>
          }
        />{" "}
        <Tab
          label={
            <Stack
              direction="row"
              spacing={2}
              style={{
                padding: "10px",
                border: "solid pink",
                borderRadius: "50%",
              }}
            >
              <Avatar alt="Remy Sharp" src={product3} />
            </Stack>
          }
        />{" "}
        <Tab
          label={
            <Stack
              direction="row"
              spacing={2}
              style={{
                padding: "10px",
                border: "solid pink",
                borderRadius: "50%",
              }}
            >
              <Avatar alt="Remy Sharp" src={product1} />
            </Stack>
          }
        />{" "}
        <Tab
          label={
            <Stack
              direction="row"
              spacing={2}
              style={{
                padding: "10px",
                border: "solid pink",
                borderRadius: "50%",
              }}
            >
              <Avatar alt="Remy Sharp" src={product2} />
            </Stack>
          }
        />{" "}
        <Tab
          label={
            <Stack
              direction="row"
              spacing={2}
              style={{
                padding: "10px",
                border: "solid pink",
                borderRadius: "50%",
              }}
            >
              <Avatar alt="Remy Sharp" src={product3} />
            </Stack>
          }
        />{" "}
        <Tab
          label={
            <Stack
              direction="row"
              spacing={2}
              style={{
                padding: "10px",
                border: "solid pink",
                borderRadius: "50%",
              }}
            >
              <Avatar alt="Remy Sharp" src={product1} />
            </Stack>
          }
        />{" "}
        <Tab
          label={
            <Stack
              direction="row"
              spacing={2}
              style={{
                padding: "10px",
                border: "solid pink",
                borderRadius: "50%",
              }}
            >
              <Avatar alt="Remy Sharp" src={product2} />
            </Stack>
          }
        />{" "}
        <Tab
          label={
            <Stack
              direction="row"
              spacing={2}
              style={{
                padding: "10px",
                border: "solid pink",
                borderRadius: "50%",
              }}
            >
              <Avatar alt="Remy Sharp" src={product3} />
            </Stack>
          }
        />{" "}
      </Tabs>
    </Box>
  );
}
