import "./styles.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Teste = () => {
  console.log("oi");
  return (
    <>
      <div className="container-top" />
      <div className="container-bottom">
        <img src="profile.png" alt="profile" className="img-profile" />
        <span className="name">Sandro Buchecha</span>
        <div className="button-face">
          <FaFacebook size={26} color="#3b5998" />
        </div>
        <div className="button">
          <FaInstagram size={26} color="#f3505a" />
        </div>
        <div>
          <h5 className="title">Lista de Serviços</h5>
          <div className="d-flex justify-content-around mb-3">
            <div className="box">
              <strong>Corte - Cabelo</strong> <br /> R$ 19,99
            </div>
            <button type="button" className="btn-sched">
              Agendar
            </button>
          </div>
          <div className="d-flex justify-content-around mb-3">
            <div className="box">
              <strong>Corte - Barba</strong> <br /> R$ 19,99
            </div>
            <button type="button" className="btn-sched">
              Agendar
            </button>
          </div>
          <div className="d-flex justify-content-around">
            <div className="box">
              <strong>Corte + Barba</strong> <br /> R$ 34,99
            </div>
            <button type="button" className="btn-sched">
              Agendar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teste;
