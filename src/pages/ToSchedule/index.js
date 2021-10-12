/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Loading from "../../components/Loading";
import axios from "../../services/api";

const ToSchedule = (date) => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [service, setService] = useState("Corte - Cabelo R$ 20,00");
  const [isLoad, setIsLoad] = useState();
  const history = useHistory();

  const handleSubmit = async (e) => {
    setIsLoad(true);
    e.preventDefault();

    if (phone === "" || name === "") {
      return toast.error("Os campos não podem estar vazios", {
        theme: "colored",
      });
    }
    try {
      await axios.post("schedule", {
        data: date.match.params.date,
        hour: date.match.params.hour,
        service: service,
        client_name: name,
        phone_number: phone,
      });
      history.push("/");
      return toast.success("Horário agendado com sucesso", {
        theme: "colored",
      });
    } catch (err) {
      return err;
    } finally {
      setIsLoad(false);
    }
  };
  return (
    <div className="row d-flex justify-content-center mt-3">
      {isLoad && <Loading />}
      <div className="col-8">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Data</Form.Label>
            <Form.Control
              type={"text"}
              value={date.match.params.date}
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Horario</Form.Label>
            <Form.Control type="text" value={date.match.params.hour} disabled />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Serviço</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setService(e.target.value)}
            >
              <option>Corte - Cabelo R$ 20,00</option>
              <option>Corte com final feliz R$ 200,00</option>
              <option>Corte + Barba R$ 35,00</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Nome completo</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              type="tel"
              placeholder="(99) 9999-9999"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </Form.Group>
          <Form.Group className="text-center">
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              Agendar
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default ToSchedule;
