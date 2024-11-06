import contact from "../assets/svg/contact.svg";

const Contact = () => {
  return (
    <div className="container">
      <h2 className="heading-text">Contate-nos</h2>

      <p className="subheading-text">
        Encontre o melhor serviço de entrega de comida com Boca Cheia!
      </p>
      <p className="paragraph">
        Um aplicativo de entrega de comida não é nada sem uma seção de contato que está disponível 24 horas por dia, 7 dias por semana. Isso ocorre porque a entrega é mais rápida e sem complicações a experiência de pedidos para os clientes é de extrema importância. O a seção entre em contato conosco deve ser facilmente acessível e deve ter todos os informações necessárias que o cliente possa precisar.
      </p>
      <img className="display-img-bg mtop20" src={contact} />
    </div>
  );
};

export default Contact;
