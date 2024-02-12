import React, { useEffect, useRef } from "react";
import { useThree, extend, useFrame } from "@react-three/fiber";
import { OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls: OrbitControls})

const Experience = () => {

    const { camera, gl} = useThree()
    const cubeRef = useRef()
    const groupRef = useRef()

    useFrame((state, delta) => {
        cubeRef.current.rotation.y += delta
        // groupRef.current.rotation.y += delta
    })

  return (
    <>

    <orbitControls args={ [ camera, gl.domElement ] }/>
    
    <group ref={ groupRef }>
    
        <mesh position={[-2, 0, 0]} >
            <sphereGeometry />
            <meshBasicMaterial color="orange" wireframe />
        </mesh>

        <mesh ref={ cubeRef } rotation-y={Math.PI * 0.25} position={[2, 0, 0]} scale={1.5}>
            <boxGeometry />
            <meshBasicMaterial color="mediumpurple" />
        </mesh>
        
    </group>

    <mesh rotation-x={ -Math.PI * 0.5 } position={ [0, -1, 0] } scale={10}>
        <planeGeometry />
        <meshBasicMaterial color="green" />
    </mesh>
      
    </>
  );
};

export default Experience;
