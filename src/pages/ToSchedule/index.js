import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";

const ToSchedule = (date) => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.error("Os campos não podem estar vazios", { theme: "colored" });
    console.log("oi");
  };
  return (
    <div className="row d-flex justify-content-center mt-3">
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
            <Form.Select aria-label="Default select example">
              <option value="1">Corte - Cabelo R$ 20,00</option>
              <option value="1">Corte com final feliz R$ 200,00</option>
              <option value="1">Corte +Barba R$ 35,00</option>
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
