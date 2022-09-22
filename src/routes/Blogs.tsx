import { useEffect } from "react";
import { Typography, Box, Divider } from "@mui/material";
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
import FirstEntryProject from "../EntryProject";

const GLB_PATH = "/Amr-Model full.glb";

function TheModel({ ...props }) {
  const { scene, animations } = useGLTF(GLB_PATH);
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions?.["Angry"]) {
      actions["Angry"].play().paused = false;
    }
  }, [actions]);

  return <primitive object={scene} {...props} />;
}
export default function Blogs() {
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
            Blogs
          </Typography>
          <Typography
            sx={{ color: "white", fontSize: 20, m: 5, textAlign: "center" }}
          >
            The following entries follow the interesting discoveries that I have
            encountered through my journey with web developing.
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
              textAlign: "left",
            }}
          >
            Entry 1: Coding vs Animation
          </Typography>
          <Typography sx={{ color: "white", fontSize: 20, m: 7 }}>
            When using React Three Fiber, there are many functions and tools
            that can help you control the scene. In certain situations, when you
            require a certain motion that doesn't follow a constant path or can
            not be determined using mathematical equations, it would be
            difficult to maintain control over the scene. You do not always need
            to strictly code the motion running through the scene. In the
            following project I have created a simple animation cycle in Blender
            with a simple shaped model to try and mimic the motion of traveling
            through the scene. Open the project and scroll through the pages!
            <Divider sx={{ mb: 3 }} />
            <FirstEntryProject />
            <Divider sx={{ mt: 3 }} />
            In this project I used the scroller as the animation controller to
            let me move through the animation I created in Blender. This set up
            helps when needing to edit the pathing or motion within the scene as
            you would not need to code the changes but simply apply them on a 3D
            program. The big con about such set up would be the need to learn a
            new tool like Blender, but such skills would already be needed if
            you choose to use React Three Fiber on a higher level.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
