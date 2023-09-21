import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./CardDetail.module.css";

export default function CardDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/");
  };

  const [cruiseDetail, setCruiseDetail] = React.useState({});

  React.useEffect(() => {
    fetch(`http://localhost:3001/cruises/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCruiseDetail(data);
      })
      .catch((error) => console.log(error));

    return () => setCruiseDetail({});
  }, [id]);

  return (
    <div className={styles.container}>
      {/* Botón para volver a la página de inicio */}
      <button className={styles.buttonBack} onClick={backToHome}>
        Volver
      </button>

      <div>
        <div>
          {/* Nombre del crucero */}
          <h1>{cruiseDetail.name}</h1>

          {/* Imagen del crucero */}
          <img
            className={styles.image}
            src={cruiseDetail.image}
            alt={cruiseDetail.name + "picture"}
          />

          {/* Información sobre el crucero */}
          <h2>Acerca de {cruiseDetail.name}</h2>
          <p>{cruiseDetail.about}</p>
        </div>

        <div className={styles.divMapIti}>
          <div className={styles.containerTable}>
            <div className={styles.tableTitle}>Itinerario</div>

            {/* Renderiza el itinerario del crucero */}
            {cruiseDetail.itinerary &&
              cruiseDetail.itinerary.map((d) => (
                <div className={styles.travel} key={d.travelDay}>
                  <div className={styles.day}>Día {d.travelDay}</div>
                  <div className={styles.items}>{d.day}</div>
                  <div className={styles.items}>{d.date}</div>
                  <div className={styles.items}>{d.city}</div>
                  <div className={styles.items}>
                    {d.departure_time ? "Salida: " + d.departure_time : ""}
                  </div>
                  <div className={styles.items}>
                    {d.arrival_time ? "Llegada: " + d.arrival_time : ""}
                  </div>
                </div>
              ))}
          </div>

          {/* Imagen del mapa del crucero */}
          <img src={cruiseDetail.map} alt={cruiseDetail.name + "map"} />
        </div>
      </div>
    </div>
  );
}
