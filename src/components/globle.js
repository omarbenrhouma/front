import React, { useRef,  useEffect } from 'react';
import * as THREE from 'three';
import image from '../assets/globe.png';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from 'react';

function Globe() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);

    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);

  const particleConfig = {
    particles: {
      number: {
        value: 100,
        width: 10,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#00EBB5",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#00EBB5"
        },
        polygon: {
          nb_sides: 5
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: false,
          mode: "push"
        },
        resize: false
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 1
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  };
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();

    // Setup the camera
    const camera = new THREE.PerspectiveCamera(50, 1000 / window.innerHeight, 1, 1000);
    camera.position.set(0, 0, 400);

    // Setup the renderer
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(1000, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // set the color to black and the opacity to 0

    // Load the globe texture
    const loader = new THREE.TextureLoader();
    const globe = new THREE.SphereGeometry(150, 150, 30);
    const globeMat = new THREE.MeshPhongMaterial({ map: loader.load(image), transparent: true });
    const globeMesh = new THREE.Mesh(globe, globeMat);
    scene.add(globeMesh);
    globeMesh.position.set(0, 0, -50); // move the globe mesh 50 units away from the camera

    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(1, 0, 0);
    spotLight.castShadow = false;
    spotLight.shadow.mapSize.width = 20 ;
    spotLight.shadow.mapSize.height = 20;
    spotLight.shadow.camera.near = 0;
    spotLight.shadow.camera.far = 0;
    spotLight.shadow.camera.fov = 0;
    scene.add(spotLight);

    // Setup the ambient light
    const ambientLight = new THREE.AmbientLight(0x03fcfc, 0.7);
    scene.add(ambientLight);

    // Animate the scene
    const animate = async() =>{
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      globeMesh.rotation.y -= .008;
    }
    animate();


  }, []);


  return (
    <div>
 <Particles
      id="tsparticles"
      init={particlesInit}
      options={particleConfig}
      loaded={particlesLoaded}
      style={{ position: 'absolute', maxHeight: '600px', maxWidth: '800px', top: '0%', right:'30%'  }}

    />    
    <canvas ref={canvasRef} id="globe" style={{ position: 'absolute', top: 0, right:530 , width: '100vw', height: '100vh'}} />
    </div>
  );
}

export default Globe;