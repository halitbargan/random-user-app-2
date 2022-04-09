import React, { useState, useEffect } from "react";
import axios from "axios";
import { ReactComponent as Email } from "../assets/email.svg";
import { ReactComponent as Phone } from "../assets/phone.svg";
import { ReactComponent as Location } from "../assets/location.svg";
import { ReactComponent as Clarusway } from "../assets/cw.svg";
import { ReactComponent as Man } from "../assets/man.svg";
import { ReactComponent as Mail } from "../assets/mail.svg";
import { ReactComponent as GrowMan } from "../assets/growing-up-man.svg";
import { ReactComponent as Map } from "../assets/map.svg";
import { ReactComponent as Lock} from "../assets/padlock.svg";


import "./Assets.css";

function App() {
  const [persons, setPersons] = useState([]);
  const [name, setName] = useState([]);

  const axiosFunc = () => {
    axios.get("https://randomuser.me/api/").then((res) => {
      const data = res.data.results;
      setPersons(data);
      setName(data[0].name.first)

      console.log(data);
  
    });
  };
  console.log(name)
  useEffect(() => {
    axiosFunc();
  }, []);

    const handleClick = () => {
      axiosFunc();
    };

  return (
    <div className="App">
      <span>
        <Clarusway className="cw-logo" />
      </span>

      {(persons.length > 0) && (
       
        <div className="main">
          <section>
              <nav>
                <img src={persons[0].picture.large} alt="" />
              </nav>
              <span>
                <h1>My {name} is </h1>
                <br />
                <p>{name}</p>
              </span>
              <nav>
                <Man className="logo" onClick=(e)=>{setName(e.target.value)}/>
                <Mail className="logo"onClick={handleClick} />
                <GrowMan className="logo"onClick={handleClick}/>
                <Map className="logo"onClick={handleClick}/>
                <Phone className="logo"onClick={handleClick}/>
                <Lock className="logo"onClick={handleClick}/>

              </nav>

            <nav>
            <button className="button"onClick={handleClick}>
        NEW USER
      </button>
      <button className="button">
        ADD USER
      </button>
            </nav>
            </section>
        </div>
      )}
      
      
      
    </div>
  );
}

export default App;
