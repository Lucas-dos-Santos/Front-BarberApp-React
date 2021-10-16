import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Loading from "../Loading";
import axios from "../../services/api";

import "./index.css";

const Calendar = () => {
  const [arr, setArr] = useState();
  const [isLoad, setIsLoad] = useState();
  const date = new Date();
  const [selectDay, setSelectDay] = useState(
    `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  );
  const [dateTitle, setDateTitle] = useState([
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
  ]);
  useEffect(() => {
    const getDate = async () => {
      setIsLoad(true);
      await axios.get(`free/${selectDay}`).then((resp) => setArr(resp.data));
      setIsLoad(false);
    };

    getDate();
  }, [selectDay, setArr]);

  const handleDateSelect = (e) => {
    setSelectDay(e.startStr);
    setDateTitle(e.startStr.split("-"));
  };

  return (
    <main>
      {isLoad && <Loading />}
      <div className="container mt-3">
        <div className="demo-app-sidebar-section text-center text-light">
          <h3>Horarios Disponiveis: {`${dateTitle[2]}/${dateTitle[1]}`}</h3>
          {arr && arr.length === 0 && (
            <p>Nenhum horário disponível nesta data</p>
          )}
          {arr &&
            arr.map((value, key) => {
              return (
                <Link
                  key={key}
                  to={`/agendar/${value}/${selectDay}`}
                  className="btn btn-primary btn-sm mb-1 me-1"
                >
                  {value}
                </Link>
              );
            })}
        </div>
      </div>
      <div className="demo-app">
        <div className="demo-app-main text-light">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            buttonText={{
              today: "Hoje",
            }}
            headerToolbar={{
              left: "",
              center: "title",
              right: "",
            }}
            hiddenDays="0"
            initialView="dayGridMonth"
            locale="pt-BR"
            selectable={true}
            select={(e) => handleDateSelect(e)}
          />
        </div>
      </div>
    </main>
  );
};

export default Calendar;
