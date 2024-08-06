import { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Contact = () => {
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
        }w-[65%] h-[65%] flex flex-col justify-between sm:text-left text-center`}
      >
        <h1 className="sm:mb-0 mb-8 text-7xl sm:text-left text-center font-bold uppercase font-abc text-[#f2f2f2]">
          entre em contato
        </h1>
        <ul className="w-full h-[77%] font-openSans sm:flex flex-wrap sm:justify-between">
          <li className="sm:w-2/5 sm:h- sm:mb-0 mb-8 flex flex-col justify-center">
            <h2 className="text-[#b2983f] font-bold">Endereço</h2>
            <p className="text-[#f2f2f2] font-bold">
              <a
                href="https://maps.app.goo.gl/CaUw3vVJZE3TCu3K7"
                target="blank"
              >
                R Marechal Deodoro, Vila Dulce Barreiras/BA
              </a>
            </p>
          </li>
          <li className="sm:w-2/5 sm:h- sm:mb-0 mb-8 flex flex-col justify-center">
            <h2 className="text-[#b2983f] font-bold">Telefone</h2>
            <p className="text-[#f2f2f2] font-bold">
              <a href="tel:+5577999829992" target="blank">
                (77) 99982-999​2
              </a>
            </p>
          </li>
          <li className="sm:w-2/5 sm:h- sm:mb-0 mb-8 flex flex-col justify-center">
            <h2 className="text-[#b2983f] font-bold">Email</h2>
            <p className="text-[#f2f2f2] font-bold">daphine.srs@gmail.com</p>
          </li>
          <li className="sm:w-2/5 sm:h- sm:mb-0 mb-8 flex flex-col justify-center">
            <h2 className="text-[#b2983f] font-bold">Instagram</h2>
            <p className="text-[#f2f2f2] font-bold">
              <a
                href="https://www.instagram.com/daphine_soares?igsh=bTZzMGY0eGhyZTY1&utm_source=qr"
                target="blank"
              >
                @d​aphine_soares
              </a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
