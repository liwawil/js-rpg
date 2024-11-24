import { resources } from './src/Resource';
import './style.css'


const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

const draw = () => {
  const sky = resources.images.sky;
  if (sky.isLoaded) {
    ctx.drawImage(sky.image, 0, 0);
  }
}

setInterval(() => {
  console.log("draw");
  draw();
})