import React, { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { loadGLTFModel } from "../../lib/model";
import { BodyModel, DefaultBodyContaner, Footer, Header } from "./styles";

const LitterWitch: React.FC = () => {
  let DataRender = 0;
  const refBody = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [renderer, setRenderer] = useState<any>();
  const [_camera, setCamera] = useState<any>();
  const [target] = useState(new THREE.Vector3(0, 1, 0));
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.4 * Math.PI),
      20,
      40 * Math.cos(0.1 * Math.PI)
    )
  );
  const [scene] = useState(new THREE.Scene());
  const [_controls, setControls] = useState<any>();

  const handleWindowResize = useCallback(() => {
    const { current: container } = refBody;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      renderer.setSize(scW, scH);
    }
  }, [renderer]);

  useEffect(() => {
    const { current: container } = refBody;
    if (container && !renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.sRGBEncoding;

      if (DataRender == 0) {
        container.appendChild(renderer.domElement);

        DataRender = 1.7;
      }
      setRenderer(renderer);

      const scale = 2.3;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale + 0.6,
        scale + -0.2,
        -scale / 2,
        0.001,
        50000
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);
      setCamera(camera);

      const ambientLight = new THREE.AmbientLight(0xcccccc, 0.22);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.enablePan = false;
      controls.enableZoom = false;

      controls.target = target;
      setControls(controls);

      loadGLTFModel(scene, "/little-witch/knight.glb", {
        receiveShadow: false,
        castShadow: false,
      }).then(() => {
        animate();
        setLoading(false);
      });

      const easeOutCirc = (x: number) => {
        return Math.sqrt(1 - Math.pow(x - 1, 4));
      };
      let req: any = null;
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);
        frame = frame <= 100 ? frame + 1 : frame;
        const p = initialCameraPosition;
        if (frame <= 100) {
          const p = initialCameraPosition;

          const rotSpeed = -easeOutCirc(frame / 240);

          // camera.position.y = 200;
          // camera.position.x = p.x + p.z + 200;
          // camera.position.z = p.z - p.x + 400;
          // camera.lookAt(target);

          camera.position.y = 10;
          camera.position.x = p.x * Math.cos(rotSpeed);
          // camera.position.z =
          //   p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
          camera.lookAt(target);
        } else {
          controls.update();
        }

        renderer.render(scene, camera);
      };

      return () => {
        cancelAnimationFrame(req);
        renderer.dispose();
      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, false);
    return () => {
      window.removeEventListener("resize", handleWindowResize, false);
    };
  }, [renderer, handleWindowResize]);

  return (
    <div className="LitterWitch">
      <BodyModel ref={refBody} />
    </div>
  );
};

export default LitterWitch;
