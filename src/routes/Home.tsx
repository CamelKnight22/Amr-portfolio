import { useEffect } from "react";
import { Typography, Box, Paper, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  PresentationControls,
  Environment,
  ContactShadows,
  Html,
  useAnimations,
} from "@react-three/drei";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const GLB_PATH = "/Amr-Model full.glb";

function TheModel({ ...props }) {
  const { scene, animations } = useGLTF(GLB_PATH);
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions?.["Waving"]) {
      actions["Waving"].play().paused = false;
    }
  }, [actions]);

  return <primitive object={scene} {...props} />;
}
export default function Home() {
  return (
    <Box sx={{ p: 5 }} component="div">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography
            sx={{
              color: "white",
              fontWeight: 600,
              fontSize: 40,
              m: 5,
              textAlign: "center",
            }}
          >
            Welcome to my portfolio!
          </Typography>
          <Typography
            sx={{ color: "white", fontSize: 20, m: 5, textAlign: "center" }}
          >
            I am Amr! Throughout this portfolio you will explore more about who
            I am, projects I have done, a little bit of blogging as well as some
            animation for you to enjoy. Hope you enjoy your stay!
          </Typography>
          <Typography>
            <IconButton href="https://github.com/CamelKnight22">
              <GitHubIcon
                sx={{
                  color: "white",
                  fontSize: 50,
                  m: 1,
                  textAlign: "center",
                }}
              />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/amr-hamdy-3751b0251/">
              <LinkedInIcon
                sx={{ color: "white", fontSize: 50, m: 1, textAlign: "center" }}
              />
            </IconButton>
          </Typography>
          <Paper
            sx={{
              background: "linear-gradient(90deg, #2f1a53 2%, #7758b5 100%)",
              borderRadius: 3,
            }}
          >
            <Typography
              sx={{ color: "white", fontSize: 18, m: 1, textAlign: "center" }}
            >
              Interact with my 3D model! click and drag in any direction!
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ position: [0, 0, 4], fov: 50 }}
            style={{ position: "relative", width: "100%", height: 600 }}
          >
            <ambientLight intensity={0.1} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              shadow-mapSize={[512, 512]}
              castShadow
            />
            <PresentationControls
              global
              config={{ mass: 2, tension: 500 }}
              snap={{ mass: 4, tension: 1500 }}
              rotation={[0, 0, 0]}
              polar={[-Math.PI / 3, Math.PI / 3]}
              azimuth={[-Math.PI / 1.4, Math.PI / 2]}
            >
              <TheModel
                scale={0.4}
                position={[0, -1.3, 0]}
                castShadow
                receiveShadow
              />
            </PresentationControls>
            <ContactShadows
              position={[0, -1.3, 0]}
              opacity={0.75}
              scale={10}
              blur={2.5}
              far={4}
            />
            <Environment preset="city" />
          </Canvas>
        </Grid>
      </Grid>
    </Box>
  );
}
