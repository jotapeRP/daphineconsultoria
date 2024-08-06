import { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Services = () => {
  const ref = useRef();
  const [isVisible, hasIntersected] = useIntersectionObserver(ref, {
    threshold: 0.1,
  });

  return (
    <div className="w-full h-screen bg-[url('/assets/inside-black.png')] bg-cover bg-center bg-[#262626]  flex justify-center items-center">
      <div
        ref={ref}
        className={`transition-all duration-500 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 flex translate-y-10"
        } w-[90%] sm:h-[90%] h-fit sm:items-start items-center flex flex-col justify-between`}
      >
        <h1 className="sm:text-left text-center sm:text-7xl text-4xl font-bold uppercase font-abc text-[#f2f2f2]">
          Nossos Serviços
        </h1>
        <ul className="sm:w-2/3 h-[77%] font-openSans flex sm:flex-wrap flex-col justify-between sm:items-start items-center">
          <li className="sm:w-2/5 w-4/5 h-40 flex flex-col justify-around">
            <h2 className="text-[#b2983f] text-2xl font-bold">1</h2>
            <h2 className="text-[#b2983f] font-bold">Colisão</h2>
            <p className="text-[#f2f2f2] font-bold">
              Cobrimos com agilidade e ​eficiência todos os prejuízos ​sofridos.
            </p>
          </li>
          <li className="sm:w-2/5 w-4/5 h-40 flex flex-col justify-around">
            <h2 className="text-[#b2983f] text-2xl font-bold">2</h2>
            <h2 className="text-[#b2983f] font-bold">
              Roubo, Furto e Perda Total
            </h2>
            <p className="text-[#f2f2f2] font-bold">
              Indenização de 100% da tabela ​FIPE (0% de taxa de ​participação).
            </p>
          </li>
          <li className="sm:w-2/5 w-4/5 h-40 flex flex-col justify-around">
            <h2 className="text-[#b2983f] text-2xl font-bold">3</h2>
            <h2 className="text-[#b2983f] font-bold">Acidente com Terceiros</h2>
            <p className="text-[#f2f2f2] font-bold">
              Cobertura também em caso ​de acidente com terceiros.
            </p>
          </li>
          <li className="sm:w-2/5 w-4/5 h-40 flex flex-col justify-around">
            <h2 className="text-[#b2983f] text-2xl font-bold">4</h2>
            <h2 className="text-[#b2983f] font-bold">Cobertura Nacional</h2>
            <p className="text-[#f2f2f2] font-bold">
              Não importa onde aconteça o ​evento, você poderá contar ​conosco
              em todo Brasil.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
