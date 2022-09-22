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
                  href="https://amr-portfolio-o5kj.vercel.app/"
                  underline="none"
                  color="white"
                >
                  {" https://amr-portfolio-o5kj.vercel.app/"}
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
                Description: In this project I build an mimic a database by
                creating an array of data that I then call or "map" into the
                site in the form of cards that display various information about
                each group of data. This site also has a functional searchbar
                that "filters" the cards and displays only the ones with the
                title name in the search.
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
                Description: In this project I call or "fetch" specific data
                from an API and view it in the site in form of an image. I also
                use hooks in form of "states" to edit the top and bottom texts
                of the images while the user is still able to call new images
                from the API without changing the "state" of the site (in other
                words you don't lose the written unsaved data)
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
