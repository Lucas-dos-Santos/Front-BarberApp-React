import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "../../services/api";

import "./index.css";

const Calendar = () => {
  const [arr, setArr] = useState();
  const date = new Date();
  const [selectDay, setSelectDay] = useState(
    `${date.getFullYear()}-${date.getDate()}-${date.getMonth() + 1}`
  );
  useEffect(() => {
    function getDate() {
      axios.get(`/${selectDay}`).then((resp) => setArr(resp.data));
      console.log(selectDay);
    }

    getDate();
  }, [selectDay, setArr]);

  const handleDateSelect = (e) => {
    setSelectDay(e.startStr);
  };

  return (
    <main>
      <div className="container">
        <div className="demo-app-sidebar-section text-center">
          <h3>Horarios Disponiveis: {`${selectDay}`}</h3>
          {arr && arr.length === 0 && (
            <p>Nenhum horário disponível nesta data</p>
          )}
          {arr &&
            arr.map((value, key) => {
              return (
                <Link
                  key={key}
                  to="/agendar"
                  className="btn btn-outline-primary btn-sm"
                >
                  {value}
                </Link>
              );
            })}
        </div>
      </div>
      <div className="demo-app">
        <div className="demo-app-main">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            buttonText={{
              today: "Hoje",
            }}
            headerToolbar={{
              left: "prev,next today",
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
