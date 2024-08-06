import { useState } from "react";
import emailjs from "@emailjs/browser";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("Olá! Gostaria de fazer uma cotação!");

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      message: message,
      number: number,
    };

    emailjs
      .send(
        "service_qkvfct3",
        "template_5gydg4n",
        templateParams,
        "3W0Zb3RW9YThbpMOd"
      )
      .then(
        (response) => {
          console.log("email enviado", response.status, response.text);
          setName("");
          setNumber("");
          setMessage("Olá! Gostaria de fazer uma cotação!");

          onClose();
        },
        (err) => {
          console.log("ERRO: ", err);
        }
      );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black opacity-50"
      ></div>
      <div className="relative bg-white p-6 rounded-lg z-10 w-full max-w-lg mx-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600"
        >
          X
        </button>
        <h2 className="text-xl font-bold mb-4">Cotação</h2>
        <form onSubmit={sendEmail}>
          <div className="mb-4">
            <label className="block text-gray-700">Nome</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Telefone</label>
            <input
              type="number"
              placeholder="EX: (99) 9 9999-9999"
              onChange={(e) => setNumber(e.target.value)}
              value={number}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mensagem</label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
