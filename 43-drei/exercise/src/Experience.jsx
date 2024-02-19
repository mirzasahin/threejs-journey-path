import {
  TransformControls,
  OrbitControls,
  PivotControls,
  Html,
  Text,
} from "@react-three/drei";
import { useRef } from "react";

export default function Experience() {
  const cube = useRef();
  const sphere = useRef();

  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />
      <PivotControls anchor={[0, 0, 0]} depthTest={false} lineWidth={4}>
        <mesh ref={sphere} position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
      </PivotControls>
      <mesh ref={cube} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
        <Html
          position={[1, 1, 0]}
          wrapperClass="label"
          center
          distanceFactor={8}
          occlude={[cube, sphere]}
        >
          Hello!
        </Html>
      </mesh>
      <TransformControls object={cube} mode="translate" /> {/* Rotate, Scale */}
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
      
      <Text
        color="salmon"
        font="./Bangers-Regular.ttf"
        position-y={2}
        maxWidth={2}
        textAlign="center"
      >
        hello world!
        {/* <meshNormalMaterial /> */}
      </Text>
    </>
  );
}
