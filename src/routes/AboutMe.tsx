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

const GLB_PATH = "/Amr-Model full.glb";

function TheModel({ ...props }) {
  const { scene, animations } = useGLTF(GLB_PATH);
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions?.["Salsa"]) {
      actions["Salsa"].play().paused = false;
    }
  }, [actions]);

  return <primitive object={scene} {...props} />;
}
export default function AboutMe() {
  return (
    <Box component="div" sx={{ p: 5 }}>
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
            About Me
          </Typography>
          <Typography sx={{ color: "white", fontSize: 20, m: 5 }}>
            • Front-End developer with great passion for creating interactive
            pages and creative designs.
          </Typography>
          <Typography sx={{ color: "white", fontSize: 20, m: 5 }}>
            • Graduated with a bachelor of Mechanical Engineering from the
            University of Technology Sydney.
          </Typography>
          <Typography sx={{ color: "white", fontSize: 20, m: 5 }}>
            • Always had a passion for game development which pushed me to learn
            3D modelling.
          </Typography>
          <Typography sx={{ color: "white", fontSize: 20, m: 5 }}>
            • My initial approach to web development was to use Three.JS (React
            Three Fibre) as a bridge to connect me using 3D modelling which I
            already had experience with.
          </Typography>
          <Typography sx={{ color: "white", fontSize: 20, m: 5 }}>
            • I was able to use lots of my experience with c# (used in game
            development specifically in Unity) and transfer it to using JS
            specifically React.
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
      </Grid>
    </Box>
  );
}
