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

export default function ProjectsDone() {
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
                image="/images/portfoliopic.png"
                alt="port-pic"
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
                Title: My Porfolio (Amr's Porfolio)
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
                Description: (This website!) This project is a representation of
                the some of the skills I have acquired throughout my web
                developing journey. I display nested react-routing, hooks, a
                navigation bar, a drawer component when width is small or phone
                used and 3D animation with controller access.
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
                  href="https://amr-portfolio.vercel.app/"
                  underline="none"
                  color="white"
                >
                  {" https://amr-portfolio.vercel.app/"}
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
                <code>MUI</code> <code>React-Routes</code> <code>THREE.JS</code>{" "}
                <code>TypeScript</code> <code>GLTF/GLB</code>
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
                  href="https://github.com/CamelKnight22/Amr-portfolio"
                >
                  <GitHubIcon />
                </IconButton>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper
          sx={{
            background: "linear-gradient(90deg, #5c32a6 2%, #9178be 100%)",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <CardMedia
                component="img"
                image="/images/pawpic.png"
                alt="paw-pic"
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
                Title: Doggie Classes Site
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
                Description: (This website!) This project is a representation of
                the some of the skills I have acquired throughout my web
                developing journey. I display nested react-routing, hooks, a
                navigation bar, a drawer component when width is small or phone
                used and 3D animation and controlling used.
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
                  href="https://doggie-classes.vercel.app/"
                  underline="none"
                  color="white"
                >
                  {" https://doggie-classes.vercel.app/"}
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
                Web Tools: <code>Create-React-App</code> <code>Git</code>{" "}
                <code>Javascript</code> <code>React</code> <code>CSS</code>{" "}
                <code>Mapping</code> <code>Filtering</code> <code>Hooks</code>{" "}
                <code>States</code>{" "}
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
                  href="https://github.com/CamelKnight22/Doggie-Classes"
                >
                  <GitHubIcon />
                </IconButton>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper
          sx={{
            background: "linear-gradient(90deg, #5c32a6 2%, #9178be 100%)",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <CardMedia
                component="img"
                image="/images/memepic.png"
                alt="meme-pic"
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
                Title: Meme Generator
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
                Description: (This website!) This project is a representation of
                the some of the skills I have acquired throughout my web
                developing journey. I display nested react-routing, hooks, a
                navigation bar, a drawer component when width is small or phone
                used and 3D animation and controlling used.
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
                  href="https://meme-generator-ten-blue.vercel.app/"
                  underline="none"
                  color="white"
                >
                  {" https://meme-generator-ten-blue.vercel.app/"}
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
                Web Tools: <code>Create-React-App</code> <code>Git</code>{" "}
                <code>Javascript</code> <code>React</code> <code>CSS</code>{" "}
                <code>API calling</code> <code>Hooks</code> <code>States</code>
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
                  href="https://github.com/CamelKnight22/meme-generator"
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
