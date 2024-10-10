"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = formData;
    const whatsappMessage = `Olá! Meu nome é ${name}. Meu email é ${email}. Vim pelo site. Aqui está minha mensagem: ${message}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=5511947910983&text=${encodeURIComponent(whatsappMessage)}`;
    
    // Tentar abrir o WhatsApp
    try {
      window.open(whatsappURL, "_blank");
      setSubmitSuccess(true);
      setSubmitError(false);
      setFormData({ name: "", email: "", message: "" }); // Limpa o formulário
    } catch (error) {
      setSubmitSuccess(false);
      setSubmitError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="messages" />
      <div className="row controls">
        <div className="col-12">
          <div className="input-group-meta form-group mb-20 mt-30">
            <label htmlFor="name">Diga seu nome</label>
            <input
              type="text"
              placeholder="Seu nome"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <div className="help-block with-errors" />
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta form-group mb-20">
            <label htmlFor="email">Seu melhor email</label>
            <input
              type="email"
              placeholder="Email*"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div className="help-block with-errors" />
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta form-group mb-15">
            <label htmlFor="message">Nos envie uma mensagem</label>
            <textarea
              placeholder="Sua mensagem*"
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <div className="help-block with-errors" />
          </div>
        </div>

        <div className="col-12">
          <button
            type="submit"
            className="btn-twentyTwo w-100 fw-500 tran3s text-uppercase mb-30"
          >
            Enviar mensagem
          </button>
        </div>
      </div>

      {submitSuccess && (
        <div className="alert alert-success mt-3">
          Mensagem enviada com sucesso! Entraremos em contato em breve.
        </div>
      )}
      {submitError && (
        <div className="alert alert-danger mt-3">
          Ocorreu um erro ao enviar sua mensagem. Tente novamente.
        </div>
      )}
    </form>
  );
};

export default ContactForm;
