import React, { useEffect, useState } from "react";
import { formatDate } from "../../utils/helpers";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
 


  // const separteDateMonth = (datemonth) => {
  //   const returnedDate = formatDate(event?.date, "short");
  //   const dateMontArr = returnedDate.split(" ");
  //   return datemonth === "date" ? dateMontArr[1] : dateMontArr[0];
  // };



  return (
    <div className="col-lg-4 col-md-12 mb-5">
      <Link to={`/events/${event._id}`} style={{ textDecoration: "none" }}>
        <div className="card-container">
          <div className="img-container position-relative">
            <img src={event.image} alt="https://th.bing.com/th/id/OIP.se6duPKpArNz0YnywnnYHQHaHa?w=158&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7" style={{"height":"20rem"}} />
            <div className="category-date-container text-center px-4 py-3 position-absolute top-0 rounded-border">
              <p>{("date")}</p>
              <p>{("month")}</p>
            </div>
          </div>
          <div className="content-container p-5">
            <h4>{event?.title}</h4>
            <div className="time-place-container">
              <p>
                <i className="fa-solid fa-clock"></i> {event?.time}
              </p>
              <p>
                <i className="fa-solid fa-location-dot"></i> {event?.location}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

const EventSection = ({ events, loading, totalcards }) => {
  const host = "http://localhost:5000"
  const [rows, setRows] = useState(null)
  var rand=0
  useEffect(() => {
    const getBlogProfile = async () => {
      const response = await fetch(`${host}/api/auth/getevent`, {
        method: 'GET'
      });

      const json = await response.json();
      setRows(json)
    }
    getBlogProfile();


  }, [])
  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <div className="loading-circle"></div>
      </div>
    );
  } else {
    return (
      <section id="events" className="my-5">
        <div className="container">
          <div className="row text-center py-4">
            <h2>Upcoming Events</h2>
          </div>
          <div className="row" >
            {rows&&Object.keys(rows).map((index) => {
              if (index < totalcards) {
                return <EventCard event={rows[index]} />;
              }
            })}
            {/* {rows&&rows.map((element) => {
    return <div key={rand++} style={{"margin":"0","padding":"0","width":"100%"}}>
       <EventCard event={element} />
    </div>
})} */}
          </div>
        </div>
      </section>
    );
  }
};
export default EventSection;
