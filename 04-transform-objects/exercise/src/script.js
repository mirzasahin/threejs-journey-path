import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)

// Position
// mesh.position.set(0.8, -0.6, 1)

// Scale
// mesh.scale.set(3, 0.5, 0.2)

// Rotation
// mesh.rotation.set(1.5 ,2 ,1)

// console.log(mesh.position.length()) // Get distance between object and center of the scene

const group = new THREE.Group()
group.scale.set(1.1, .5, 3)
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: 0xff0000} )
)
cube1.position.x = -2
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00} )
)
cube2.position.x = 0
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff} )
)
cube3.position.x = 2
group.add(cube3)

// Axes helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.set(3, 3, 4)
camera.lookAt(group.position)
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)