import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const Example = () => {
  return (
    <div className="grid w-full place-content-center  text-slate-900">
      <TiltCard />
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;
  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;
    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-96 w-[400px] rounded-xl bg-gradient-to-br from-yellow-300 to-violet-900"
    >
      <div
        style={{
          transform: "translateZ(200px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white p-5 shadow-lg"
      >
        <img className="bg-blue-700 m-auto rounded-full mt-5" src="https://www.theaquarious.com/assets/icons/why-chosse-ico1.svg" alt="" />
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-start text-2xl font-bold mt-5 m-auto"
        >
          12+ Years of experience
        </p>
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className=" text-2xl mt-5"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim a veritatis doloremque qui perferendis! Nam ducim
        </p>
      </div>
    </motion.div>
  );
};
export default Example;