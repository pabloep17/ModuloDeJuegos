import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-three-js-game',
  templateUrl: './three-js-game.component.html',
  styleUrls: ['./three-js-game.component.css']
})
export class ThreeJsGameComponent {

  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    // Obtener referencia al canvas
    const canvas = this.canvasRef.nativeElement;

    // Crear la escena, la cámara y el renderizador
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas });

    // Crear un cubo rojo
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Posicionar la cámara
    camera.position.z = 5;

    // Renderizar la escena
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }

}
