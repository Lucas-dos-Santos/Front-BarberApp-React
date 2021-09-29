/* eslint-disable */
import React from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import { Button } from "react-bootstrap";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./index.css";

const Calendar = () => {
  let teste = [
    "09:00 - 09:30",
    "09:30 - 10:00",
    "10:00 - 10:30",
    "10:30 - 11:00",
    "11:30 - 12:00",
    "14:00 - 14:30",
    "14:30 - 15:00",
    "15:30 - 16:00",
    "16:30 - 17:00",
    "17:00 - 17:30",
    "17:30 - 18:00",
  ];
  let arr = [
    true,
    false,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
  ];

  const handleDateSelect = (selectInfo) => {
    alert("fff");
  };

  return (
    <main>
      <div className="container">
        <div className="demo-app-sidebar-section text-center">
          <h3>Horarios Disponiveis</h3>
          {teste.map((value, key) => {
            if (!arr[key] === true) {
              return (
                <Button
                  href="#"
                  key={key}
                  variant="secondary"
                  size="sm"
                  disabled
                >
                  {value}
                </Button>
              );
            } else {
              return (
                <Button href="#" key={key} variant="primary" size="sm">
                  {value}
                </Button>
              );
            }
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
