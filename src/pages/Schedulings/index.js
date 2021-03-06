import { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import Loading from "../../components/Loading";
import axios from "../../services/api";

const Scheduling = () => {
  const [schedulings, setSchedulings] = useState();
  const [isLoad, setIsLoad] = useState();

  useEffect(() => {
    const getSchedulings = async () => {
      setIsLoad(true);
      await axios.get("schedule").then((resp) => setSchedulings(resp.data));

      setIsLoad(false);
    };

    getSchedulings();
  }, []);
  return (
    <div className="container mt-3">
      {isLoad && <Loading />}
      <Table bordered hover size="sm" className="text-light">
        <thead>
          <tr>
            <th>Data</th>
            <th>Horario</th>
            <th>Cliente</th>
            <th>Serviço</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {schedulings &&
            schedulings.map((value, key) => (
              <tr key={key}>
                <td>{value.data}</td>
                <td>{value.hour}</td>
                <td>{value.client_name}</td>
                <td>{value.service}</td>
                <td>{value.phone_number}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Scheduling;
