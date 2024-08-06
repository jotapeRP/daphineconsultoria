import { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Review = () => {
  const ref = useRef();
  const [isVisible, hasIntersected] = useIntersectionObserver(ref, {
    threshold: 0.1,
  });
  return (
    <div className="w-full h-screen bg-[#262626] flex justify-center items-center">
      <div
        ref={ref}
        className={`transition-all duration-500 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 flex translate-y-10"
        } w-[90%] h-[90%] flex flex-col sm:justify-around items-center`}
      >
        <h1 className="sm:mb-0 mb-10 sm:text-7xl text-4xl font-bold uppercase font-abc text-[#b2983f]">
          Avaliações dos clientes
        </h1>
        <ul className="flex sm:w-3/4 sm:h-3/5 h-full sm:flex-row flex-col justify-between sm:items-start items-center">
          <li className="sm:w-44 w-4/5">
            <h2 className="text-[#b2983f] font-bold mb-6">Ma​theus Alves</h2>
            <p className="text-[#f2f2f2] font-openSans font-bold">
              Meu carro precisava ​urgentemente de ​assistência de ​madrugada e
              a ​consultora me atendeu ​no momento em que eu ​liguei! Excelente
              ​atendimento ao cliente!
            </p>
          </li>
          <li className="sm:w-44 w-4/5">
            <h2 className="text-[#b2983f] font-bold mb-6">Ca​rlos Miguel</h2>
            <p className="text-[#f2f2f2] font-openSans font-bold">
              Depois de muitos anos ​com outra empresa, ​mudei para a Triunfo
              ​Car truck e não poderia ​estar mais feliz com a ​decisão.
              Realmente ​cumprem o que ​prometem!
            </p>
          </li>
          <li className="sm:w-44 w-4/5">
            <h2 className="text-[#b2983f] font-bold mb-6">An​a Rocha</h2>
            <p className="text-[#f2f2f2] font-openSans font-bold">
              Atendimento rápido e ​eficiente. Estou muito ​satisfeita com a
              ​proteção do meu ​veículo!
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Review;
