import * as React from "react";
import {
  Paper,
  Box,
  Stack,
  Grid,
  CardMedia,
  Typography,
  IconButton,
  Link,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function FirstEntryProject() {
  return (
    <Box sx={{ width: "100%" }} component="div">
      <Stack spacing={2}>
        <Paper
          sx={{
            background: "linear-gradient(90deg, #5c32a6 2%, #9178be 100%)",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <CardMedia
                component="img"
                image="/images/rotatepic.png"
                alt="rotating-world"
                sx={{
                  width: 1,
                  height: 0.9,
                  m: 1,
                  borderRadius: 1,
                }}
              />
            </Grid>
            <Grid item xs={9}>
              <Typography
                sx={{
                  color: "white",
                  fontSize: 17,
                  m: 1,
                  textAlign: "left",
                  mt: 3,
                  mr: 3,
                }}
              >
                Title: Rotating World
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: 17,
                  m: 1,
                  textAlign: "left",
                  mr: 3,
                }}
              >
                Description: In this site I build a simple 3D model with an
                animation that only rotates it on the X-axis to a certain angel.
                I then control the animation with the scroller to mimic the idea
                of traveling through different terrains while looking through
                the pages.
              </Typography>

              <Typography
                sx={{
                  color: "white",
                  fontSize: 17,
                  m: 1,
                  textAlign: "left",
                  mr: 3,
                }}
              >
                Link:
                <Link
                  href="https://rotating-world.vercel.app/"
                  underline="none"
                  color="white"
                >
                  {" https://rotating-world.vercel.app/"}
                </Link>
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: 17,
                  m: 1,
                  textAlign: "left",
                  mr: 3,
                }}
              >
                Web Tools: <code>Vite.JS</code> <code>Git</code>{" "}
                <code>Javascript</code> <code>React</code> <code>CSS</code>{" "}
                <code>THREE.JS</code> <code>TypeScript</code> <code>Hooks</code>{" "}
                <code>States</code>
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: 17,
                  m: 1,
                  textAlign: "left",
                  mr: 3,
                }}
              >
                3D Tool: <code>Blender</code>
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: 17,
                  m: 1,
                  textAlign: "left",
                  mr: 3,
                }}
              >
                Github:
                <IconButton
                  sx={{ color: "white", fontSize: 17, m: 1 }}
                  href="https://github.com/CamelKnight22/RotatingWorld"
                >
                  <GitHubIcon />
                </IconButton>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Stack>
    </Box>
  );
}
