import {
  TransformControls,
  OrbitControls,
  PivotControls,
  Html,
  Text,
  Float,
  MeshReflectorMaterial,
  Stars,
  Sky,
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
        {/* <meshStandardMaterial color="greenyellow" /> */}
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={1}
          mirror={ 0.5 }
          color="greenyellow"
        />
      </mesh>

      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      <Float speed={5} floatIntensity={3}>
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
      </Float>
    </>
  );
}
