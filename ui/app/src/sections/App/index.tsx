import { faFacebookF, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faBars, faPlus, faStar, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Button, Container, Modal, Nav, Navbar } from "react-bootstrap"
import cabin from "./assets/cabin.png"
import cake from "./assets/cake.png"
import circus from "./assets/circus.png"
import game from "./assets/game.png"
import safe from "./assets/safe.png"
import submarine from "./assets/submarine.png"
import "./styles.css"

export const App = () => {

  const [ modalVisible, setModalVisible ] = useState<boolean>(false)
  const [ modalHeading ] = useState<string>("Lorem Ipsum")
  const [ modalBody ] = useState<string>("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")
  const [ modalImage, setModalImage ] = useState<string>(cabin)

  return (
    <>
      {/* <!-- Navigation--> */ }
      <Navbar
        bg="secondary"
        className="text-uppercase"
        expand="lg"
        fixed="top"
        id="mainNav">
        <Container>
          <Navbar.Brand
            className="text-white"
            href="#page-top">
            бренд
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
            children={ (
              <FontAwesomeIcon icon={ faBars } />
            ) }
            className="bg-primary rounded" />
          <Navbar.Collapse id="navbarResponsive">
            <Nav className="navbar-nav ms-auto">
              <Nav.Item
                className="mx-0 mx-lg-1">
                <Nav.Link
                  className="py-3 px-0 px-lg-3 rounded text-white"
                  href="#portfolio">
                  портфолио
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mx-0 mx-lg-1">
                <Nav.Link
                  className="py-3 px-0 px-lg-3 rounded text-white"
                  href="#about">
                  о нас
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mx-0 mx-lg-1">
                <Nav.Link
                  className="py-3 px-0 px-lg-3 rounded text-white"
                  href="#contact">
                  контакт
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <!-- Masthead--> */ }
      <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
          {/* <!-- Masthead Avatar Image--> */ }
          <img className="masthead-avatar mb-5" src="https://placehold.jp/250x250.png" alt="..." />
          {/* <!-- Masthead Heading--> */ }
          <h1 className="masthead-heading text-uppercase mb-0">бренд</h1>
          {/* <!-- Icon Divider--> */ }
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <FontAwesomeIcon icon={ faStar } />
            </div>
            <div className="divider-custom-line"></div>
          </div>
          {/* <!-- Masthead Subheading--> */ }
          <p className="masthead-subheading font-weight-light mb-0">Текст - Текст - Текст</p>
        </div>
      </header>

      {/* Portfolio Section */ }
      <section className="page-section portfolio" id="portfolio">
        <div className="container">
          {/* Portfolio Section Heading */ }
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Портфолио
          </h2>
          {/* Icon Divider */ }
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <FontAwesomeIcon icon={ faStar } />
            </div>
            <div className="divider-custom-line"></div>
          </div>
          {/* Portfolio Grid Items */ }
          <div className="row justify-content-center">
            {/* Portfolio Item 1 */ }
            <div className="col-md-6 col-lg-4 mb-5">
              <div
                className="portfolio-item mx-auto"
                onClick={ () => {
                  setModalImage(cabin)
                  setModalVisible(true)
                } }>
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <FontAwesomeIcon icon={ faPlus } size="3x" />
                  </div>
                </div>
                <img className="img-fluid" src={ cabin } alt="..." />
              </div>
            </div>
            {/* Portfolio Item 2 */ }
            <div className="col-md-6 col-lg-4 mb-5">
              <div
                className="portfolio-item mx-auto"
                onClick={ () => {
                  setModalImage(cake)
                  setModalVisible(true)
                } }>
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <FontAwesomeIcon icon={ faPlus } size="3x" />
                  </div>
                </div>
                <img className="img-fluid" src={ cake } alt="..." />
              </div>
            </div>
            {/* Portfolio Item 3 */ }
            <div className="col-md-6 col-lg-4 mb-5">
              <div
                className="portfolio-item mx-auto"
                onClick={ () => {
                  setModalImage(circus)
                  setModalVisible(true)
                } }>
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <FontAwesomeIcon icon={ faPlus } size="3x" />
                  </div>
                </div>
                <img className="img-fluid" src={ circus } alt="..." />
              </div>
            </div>
            {/* Portfolio Item 4 */ }
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
              <div
                className="portfolio-item mx-auto"
                onClick={ () => {
                  setModalImage(game)
                  setModalVisible(true)
                } }>
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <FontAwesomeIcon icon={ faPlus } size="3x" />
                  </div>
                </div>
                <img className="img-fluid" src={ game } alt="..." />
              </div>
            </div>
            {/* Portfolio Item 5 */ }
            <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
              <div
                className="portfolio-item mx-auto"
                onClick={ () => {
                  setModalImage(safe)
                  setModalVisible(true)
                } }>
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <FontAwesomeIcon icon={ faPlus } size="3x" />
                  </div>
                </div>
                <img className="img-fluid" src={ safe } alt="..." />
              </div>
            </div>
            {/* Portfolio Item 6 */ }
            <div className="col-md-6 col-lg-4">
              <div
                className="portfolio-item mx-auto"
                onClick={ () => {
                  setModalImage(submarine)
                  setModalVisible(true)
                } }>
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <FontAwesomeIcon icon={ faPlus } size="3x" />
                  </div>
                </div>
                <img className="img-fluid" src={ submarine } alt="..." />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */ }
      <section className="page-section bg-primary text-white mb-0" id="about">
        <div className="container">
          {/* About Section Heading */ }
          <h2 className="page-section-heading text-center text-uppercase text-white">
            О нас
          </h2>
          {/* Icon Divider */ }
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <FontAwesomeIcon icon={ faStar } />
            </div>
            <div className="divider-custom-line"></div>
          </div>
          {/* About Section Content */ }
          <div className="row">
            <div className="col-lg-4 ms-auto">
              <p className="lead">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="col-lg-4 me-auto">
              <p className="lead">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Contact Section--> */ }
      <section className="page-section" id="contact">
        <div className="container">
          {/* <!-- Contact Section Heading--> */ }
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            контакт
          </h2>
          {/* <!-- Icon Divider--> */ }
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <FontAwesomeIcon icon={ faStar } />
            </div>
            <div className="divider-custom-line"></div>
          </div>
          {/* <!-- Contact Section Form--> */ }
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7">
              <form id="contactForm">
                {/* <!-- Name input--> */ }
                <div className="form-floating mb-3">
                  <input className="form-control" id="name" type="text" placeholder="Напишите ваше имя..." />
                  <label htmlFor="name">Имя</label>
                </div>
                {/* <!-- Email address input--> */ }
                <div className="form-floating mb-3">
                  <input className="form-control" id="email" type="email" placeholder="name@example.com" />
                  <label htmlFor="email">Адрес электронной почты</label>
                </div>
                {/* <!-- Phone number input--> */ }
                <div className="form-floating mb-3">
                  <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" />
                  <label htmlFor="phone">Номер телефона</label>
                </div>
                {/* <!-- Message input--> */ }
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Напишите Ваше сообщение..."
                    style={ { height: "10rem" } }></textarea>
                  <label htmlFor="message">Сообщение</label>
                </div>
                {/* <!-- Submit Button--> */ }
                <Button
                  className="btn-xl"
                  variant="primary">
                  Отправить
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Footer--> */ }
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            {/* <!-- Footer Location--> */ }
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Адрес</h4>
              <p className="lead mb-0">
                60486 Theodor-Heuss-Allee 106
                <br />
                Hesse, Frankfurt am Main
              </p>
            </div>
            {/* <!-- Footer Social Icons--> */ }
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Социальные сети</h4>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <FontAwesomeIcon icon={ faFacebookF } />
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                {/* <i className="fab fa-fw fa-twitter"></i> */ }
                <FontAwesomeIcon icon={ faTwitter } />
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                {/* <i className="fab fa-fw fa-linkedin-in"></i> */ }
                <FontAwesomeIcon icon={ faLinkedinIn } />
              </a>
            </div>
            {/* <!-- Footer About Text--> */ }
            <div className="col-lg-4">
              <h4 className="text-uppercase mb-4">Контакты</h4>
              <p className="lead mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Copyright Section--> */ }
      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>
            Дизайн &copy; Lorem Ipsum 2022
          </small>
        </div>
      </div>
      {/* Portfolio Modals */ }
      <Modal
        className="portfolio-modal"
        onHide={ () => setModalVisible(false) }
        show={ modalVisible }
        size="xl">
        <Modal.Header
          className="border-0"
          closeButton>
        </Modal.Header>
        <Modal.Body className="text-center pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                  { modalHeading }
                </h2>
                <div className="divider-custom">
                  <div className="divider-custom-line"></div>
                  <div className="divider-custom-icon">
                    <FontAwesomeIcon icon={ faStar } />
                  </div>
                  <div className="divider-custom-line"></div>
                </div>
                <img className="img-fluid rounded mb-5" src={ modalImage } alt="..." />
                <p className="mb-4">
                  { modalBody }
                </p>
                <button className="btn btn-primary" onClick={ () => setModalVisible(false) }>
                  <FontAwesomeIcon icon={ faXmark } fixedWidth />
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
