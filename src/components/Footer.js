import { NavLink, Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="footer">
      <p data-testid="footer-logo" className="paragraph colwhite">
        Boca Cheia
      </p>
      <p className="paragraph colwhite">
        Desenvolvido por alunos esforçados e dedicados do Marcelo Tuba que nos ensinou tudo que era necessário para realização deste site.{" "}
        <a href="https://github.com/tejash023">
          {" "}
          <FiGithub color="white" size="1rem" to="/about" />{" "}
        </a>
      </p>
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/about">
          <li>Sobre</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contato</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Footer;
