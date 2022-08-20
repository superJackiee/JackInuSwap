import React, { useCallback, CSSProperties } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { ISourceOptions } from "tsparticles-engine";
import particlesOptions from "./particles.json";
import './particle.css';




const Particle = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  const newPosition = {
    
      position: 'absolute !important'
    
  }
  return(
    <>
      <Particles height="120px"
        width="300px"  style={newPosition as CSSProperties} options={particlesOptions as ISourceOptions} init={particlesInit}/>
    </>
  );
}

export default Particle;