import triunfo from "/assets/triunfo.png";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { useRef, useState } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import Modal from "./Modal";
import daphine from "/assets/daphine.png";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const ref = useRef();
  const [isVisible, hasIntersected] = useIntersectionObserver(ref, {
    threshold: 0.1,
  });

  return (
    <>
      <div className=" w-fit h-screen bg-black bg-[url('/assets/lambo.png')] flex bg-cover sm:bg-left bg-center justify-center items-center">
        <div
          ref={ref}
          className={`transition-all duration-500 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 flex translate-y-10"
          } w-[90%] h-[90%] flex flex-col justify-between`}
        >
          <div className="flex justify-center sm:block">
            <a href="/">
              <img src={triunfo} alt="logo" className="sm:w-96 w-72" />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-end">
            <h1 className="sm:mb-0 mb-8 sm:text-7xl sm:text-left text-center text-4xl font-abc uppercase font-bold text-[#f2f2f2]">
              proteção veicular com{" "}
              <span className="text-[#b2983f]">cobertura nacional</span>
            </h1>
            <div className="flex m-auto flex-col items-center">
              <img className="sm:w-96 w-44" src={daphine} alt="" />
              <button
                onClick={openModal}
                className=" flex items-center justify-center px-2 py-4 h-9 w-64 bg-[#b2983f] font-openSans font-extrabold text-[#f2f2f2] uppercase rounded-full"
              >
                Faça sua cotação{" "}
                <span className="ml-2 inline-block animate-bounce-horizontal">
                  <FaArrowRight className="w-6 h-6" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <a
        href="https://wa.me/+5577999829992"
        className="sm:hidden z-10 fixed bottom-14 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={24} />
      </a>
    </>
  );
};

export default Home;
