import { useGLTF } from "@react-three/drei";

export const useLoadedModels = () => {
  const computer = useGLTF("./computer_vision/pc.gltf");
  const eye = useGLTF("./computer_vision/eye.gltf");
  const brain = useGLTF("./my_categories/brain.gltf");
  const cube = useGLTF("./my_categories/cube.gltf");
  const web = useGLTF("./my_categories/web.gltf");
  const click = useGLTF("./my_categories/click.gltf")

  return {Computer: computer.scene, Eye: eye.scene, Brain: brain.scene, Web: web.scene, Click: click.scene, Cube: cube.scene};
};
