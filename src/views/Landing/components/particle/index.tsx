import React, { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { ISourceOptions } from "tsparticles-engine";
import particlesOptions from "./particles.json";

const Particle = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  return(
    <>
      <Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>
    </>
  );
}

export default Particle;