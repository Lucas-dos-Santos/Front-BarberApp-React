import { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "../../services/api";

const Scheduling = () => {
  const [schedulings, setSchedulings] = useState();

  useEffect(() => {
    function getSchedulings() {
      axios.get("schedule").then((resp) => setSchedulings(resp.data));
    }

    getSchedulings();
  }, []);
  return (
    <div className="container mt-3">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Data</th>
            <th>Horario</th>
            <th>Cliente</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {schedulings &&
            schedulings.map((value, key) => (
              <tr key={key}>
                <td>{value.id}</td>
                <td>{value.data}</td>
                <td>{value.hour}</td>
                <td>{value.client_name}</td>
                <td>{value.phone_number}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Scheduling;
