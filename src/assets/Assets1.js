import React, { useState, useEffect } from "react";
import axios from "axios";
import { ReactComponent as Email } from "../assets/email.svg";
import { ReactComponent as Phone } from "../assets/phone.svg";
import { ReactComponent as Location } from "../assets/location.svg";
import "./Assets.css";

function App() {
  const [persons, setPersons] = useState([]);

  const axiosFunc = () => {
    axios.get("https://randomuser.me/api/").then((res) => {
      const data = res.data.results;
      setPersons(data);

      console.log(data);
    });
  };
  useEffect(() => {
    axiosFunc();
  }, []);

    const handleClick = () => {
      axiosFunc();
    };

  return (
    <div className="App">
      {(persons.length > 0) && (
        <div className="main">
          <section>
            <nav>
              <span>
                <img src={persons[0].picture.large} alt="" />
              </span>
              <h1>
                {" "}
                {persons[0].name.title +
                  " " +
                  persons[0].name.first +
                  " " +
                  persons[0].name.last}
              </h1>
            </nav>
            <nav>
              <span>
                  
              <Email className="logo"/>
              </span>{" "}
              <span>{persons[0].email}</span>
            </nav>
            <nav>
              <span>
            <Phone className="logo"/>
                
              </span>{" "}
              <span>{persons[0].phone}</span>
            </nav>
            <nav>
              <span>
              <Location className="logo"/>
                
              </span>
              <span>
                {persons[0].location.city} - {persons[0].location.country}
              </span>
            </nav>
          </section>
          <section className="section">
            <nav className="age">Age : {persons[0].dob.age}</nav>
            <nav className="register">
              Register Date : {persons[0].registered.date.slice(0, 10)}
            </nav>
          </section>
        </div>
      )}

      <button className="button"onClick={handleClick}>
        RANDOM USER
      </button>
    </div>
  );
}

export default App;
