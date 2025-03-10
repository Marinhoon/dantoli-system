import React, { useState } from 'react';
import '../Home.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Home: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#servicos" onClick={toggleMobileMenu}>Serviços</a></li>
            <li><a href="#quem-somos" onClick={toggleMobileMenu}>Quem Somos</a></li>
            <li><a href="#clientes" onClick={toggleMobileMenu}>Clientes</a></li>
            <li><a href="#contato" onClick={toggleMobileMenu}>Contato</a></li>
          </ul>
        </div>
      </nav>

      <header className="header">
        <img src="/public/img/logo.png" alt="Logo DANTOLI" className="logo" />
      </header>

      <section id="servicos" className="section">
        <h2>Serviços</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src="caminho/para/icone1.png" alt="Serviço 1" />
            <h3>Reformas</h3>
            <p>Reformas residenciais e comerciais com qualidade e segurança.</p>
          </div>
          <div className="service-card">
            <img src="caminho/para/icone2.png" alt="Serviço 2" />
            <h3>Construção</h3>
            <p>Construção de edifícios e infraestrutura com tecnologia avançada.</p>
          </div>
          <div className="service-card">
            <img src="caminho/para/icone3.png" alt="Serviço 3" />
            <h3>Manutenção</h3>
            <p>Serviços de manutenção preventiva e corretiva.</p>
          </div>
        </div>
      </section>

      <section id="quem-somos" className="section">
        <h2>Quem Somos</h2>
        <div className="about-content">
          <img src="caminho/para/imagem-equipe.jpg" alt="Nossa Equipe" className="about-image" />
          <div className="about-text">
            <p>
              A DANTOLI Gestão e Facility é uma empresa especializada em serviços de construção civil,
              comprometida com a qualidade e excelência em cada projeto. Com uma equipe de profissionais
              altamente qualificados, buscamos sempre superar as expectativas dos nossos clientes,
              oferecendo soluções inovadoras e sustentáveis.
            </p>
            <h3>Nossos Valores</h3>
            <ul>
              <li>Compromisso com a qualidade</li>
              <li>Sustentabilidade</li>
              <li>Inovação</li>
              <li>Transparência</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="clientes" className="section">
        <h2>Clientes</h2>
        <div className="clients-content">
          <p>Atendemos empresas de diversos segmentos com excelência. Aqui estão alguns dos nossos clientes:</p>
          <div className="clients-grid">
            <img src="caminho/para/logo-cliente1.png" alt="Cliente 1" className="client-logo" />
            <img src="caminho/para/logo-cliente2.png" alt="Cliente 2" className="client-logo" />
            <img src="caminho/para/logo-cliente3.png" alt="Cliente 3" className="client-logo" />
            <img src="caminho/para/logo-cliente4.png" alt="Cliente 4" className="client-logo" />
          </div>
          <h3>Depoimentos</h3>
          <div className="testimonials">
            <div className="testimonial">
              <p>"A DANTOLI realizou um excelente trabalho na reforma da nossa sede. Profissionais competentes e dedicados!"</p>
              <p><strong>- Cliente A</strong></p>
            </div>
            <div className="testimonial">
              <p>"Recomendamos a DANTOLI pela qualidade dos serviços e pelo comprometimento com os prazos."</p>
              <p><strong>- Cliente B</strong></p>
            </div>
          </div>
          <a href="#contato" className="cta-button">Solicite um Orçamento</a>
        </div>
      </section>

      <section id="contato" className="section">
        <h2>Contato</h2>
        <form className="contact-form">
          <input type="text" placeholder="Seu nome" required />
          <input type="email" placeholder="Seu e-mail" required />
          <textarea placeholder="Sua mensagem" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>
      <footer className="footer">
        <p>&copy; 2025 DANTOLI Gestão e Facility. Todos os direitos reservados.</p>
        <div className="social-links">
          <a href="#facebook">Facebook</a>
          <a href="#instagram">Instagram</a>
          <a href="#linkedin">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;