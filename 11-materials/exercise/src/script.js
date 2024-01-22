import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from 'lil-gui'
import {RGBELoader} from  'three/examples/jsm/loaders/RGBELoader'

/**
 * Debug
 */
const gui = new GUI()

/**
 * Base
 */
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()

const doorColorTexture = textureLoader.load('./textures/door/color.jpg')
const doorAlphaTexture = textureLoader.load('./textures/door/alpha.jpg')
const doorAmbientOcclusionTexture = textureLoader.load('./textures/door/ambientOcclusion.jpg')
const doorHeightTexture = textureLoader.load('./textures/door/height.jpg')
const doorNormalTexture = textureLoader.load('./textures/door/normal.jpg')
const doorMetalnessTexture = textureLoader.load('./textures/door/metalness.jpg')
const doorRoughnessTexture = textureLoader.load('./textures/door/roughness.jpg')
const matcapTexture = textureLoader.load('./textures/matcaps/9.png')
const gradientTexture = textureLoader.load('./textures/gradients/5.jpg')


doorColorTexture.colorSpace = THREE.SRGBColorSpace
matcapTexture.colorSpace = THREE.SRGBColorSpace

/**
 * Objects
 */
// MeshBasicMaterial
/* const material = new THREE.MeshBasicMaterial({ map: doorColorTexture }); // Way 1
// const material = new THREE.MeshBasicMaterial() // Way 2
material.map = doorColorTexture // Way 2
material.color = new THREE.Color('red')
material.transparent = true
material.opacity = 0.3
material.alphaMap = doorAlphaTexture
material.side = THREE.DoubleSide // Available 2 side of the objets & in the object to see outside // It needs more cpu and gpu power.
 */

/* // MeshNormalMaterial
const material = new THREE.MeshNormalMaterial()
material.wireframe = true
material.flatShading = true */

/* // MeshMatcapMaterial
const material = new THREE.MeshMatcapMaterial()
material.matcap = matcapTexture
 */

/* // MeshDepthMaterial
const material = new THREE.MeshDepthMaterial() */

/* // MeshLambertMaterial
const material = new THREE.MeshLambertMaterial() */

/* // MeshPhongMaterial
const material = new THREE.MeshPhongMaterial()
material.shininess = 100
Material.specular = new THREE.Color(0x1188ff) */

/* // MeshToonMaterial
const material = new THREE.MeshToonMaterial()
gradientTexture.minFilter = THREE.NearestFilter
gradientTexture.magFilter = THREE.NearestFilter
gradientTexture.generateMipmaps = false
material.gradientMap = gradientTexture */

// MeshStandardMaterial
const material = new THREE.MeshStandardMaterial()
material.metalness = 1
material.roughness = 1
material.map = doorColorTexture
material.aoMap = doorAmbientOcclusionTexture
material.aoMapIntensity = 1
material.displacementMap = doorHeightTexture
material.displacementScale = 0.1
material.metalnessMap = doorMetalnessTexture
material.roughnessMap = doorRoughnessTexture
material.normalMap = doorNormalTexture
material.normalScale.set(0.5, 0.5)
material.transparent = true
material.alphaMap = doorAlphaTexture

gui.add(material, 'metalness').min(0).max(1).step(0.0001)
gui.add(material, 'roughness').min(0).max(1).step(0.0001) 


const torus = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.15, 64, 64), material);
const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.5, 64, 64), material);
const plane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1, 100, 100), material);

sphere.position.x = -2
torus.position.x = 2

scene.add(sphere, torus, plane);

/**
 * Lights
 */
/* const ambientLight = new THREE.AmbientLight(0xffffff, 1)
scene.add(ambientLight)

const pointLight = new THREE.PointLight(0xffffff, 40, 5)
pointLight.position.set(0, 0, 4)
const pointLightHelper = new THREE.PointLightHelper(pointLight)
scene.add(pointLight, pointLightHelper) */

/**
 * Environment map
 */
const rgbeLoader = new RGBELoader()
rgbeLoader.load('./textures/environmentMap/2k.hdr', (environmentMap) =>
{
  environmentMap.mapping = THREE.EquirectangularReflectionMapping
  scene.background = environmentMap
  scene.environment = environmentMap
})


/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  1000
);
camera.position.z = 4;

lane.rotation.y = 0.1 * elapsedTime
  torus.rotation.y = 0.1 * elapsedTime

  sphere.rotation.x = - 0.15 * elapsedTime
  plane.rotation.x = - 0.15 * elapsedTime
  torus.rotation.x = - 0.15 * elapsedTime

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
