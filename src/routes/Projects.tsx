import { useEffect } from "react";
import { Typography, Box } from "@mui/material";
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
import ProjectsDone from "../ProjectsList";

const GLB_PATH = "/Amr-Model full.glb";

function TheModel({ ...props }) {
  const { scene, animations } = useGLTF(GLB_PATH);
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions?.["Hiphop"]) {
      actions["Hiphop"].play().paused = false;
    }
  }, [actions]);

  return <primitive object={scene} {...props} />;
}
export default function Projects() {
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
            Projects
          </Typography>
          <Typography
            sx={{ color: "white", fontSize: 20, m: 5, textAlign: "center" }}
          >
            The following projects show the different skills and approaches I
            have undertaken to implement certain aspects in websites.
          </Typography>
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
        <Grid item xs={12}>
          <Typography
            sx={{
              color: "white",
              fontWeight: 600,
              fontSize: 30,
              m: 2,
              textAlign: "Left",
            }}
          >
            Projects List:
          </Typography>
          <Typography
            sx={{ color: "white", fontSize: 20, m: 5, textAlign: "center" }}
          >
            <ProjectsDone />
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
