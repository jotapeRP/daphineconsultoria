import { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const About = () => {
  const ref = useRef();
  const [isVisible, hasIntersected] = useIntersectionObserver(ref, {
    threshold: 0.1,
  });

  return (
    <div className="w-fit h-screen bg-[#262626] flex justify-center items-center">
      <div
        ref={ref}
        className={`transition-all duration-500 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 flex translate-y-10"
        } w-[90%] h-[90%] flex sm:flex-row flex-col sm:justify-between justify-around`}
      >
        <div className="sm:w-[50%] flex flex-col justify-between">
          <h1 className="sm:mb-0 mb-4 sm:text-7xl sm:text-left text-center text-5xl font-bold uppercase font-abc text-[#f2f2f2]">
            sobre mim
            <br />
            <span className="text-[#b2983f]">daphine Soares</span>
          </h1>
          <div className="sm:mb-0 mb-2 w-full h-44 sm:h-[70%] bg-[url('/assets/daphine2.jpeg')] bg-cover bg-center"></div>
        </div>
        <div className="sm:w-[45%] flex flex-col justify-around">
          <div className="sm:mb-0 mb-4 w-full h-44 sm:h-[50%] bg-[url('/assets/inside-red.jpg')] bg-cover bg-center"></div>
          <p className="text-[#f2f2f2] font-openSans font-bold">
            Sou dedicada a oferecer um atendimento excepcional, comprometida com
            a honestidade e com a visão da melhor e mais segura associação de
            proteção veicular do Brasil, proporcionando extrema tranquilidade
            aos seus associados e suas famílias.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
