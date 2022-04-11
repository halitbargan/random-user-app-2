import React, { useState, useEffect } from "react";
import axios from "axios";
import clarus from "../assets/cw.svg";
import man from "../assets/man.svg";
import woman from "../assets/woman.svg";
import mail from "../assets/mail.svg";
import ageMan from "../assets/growing-up-man.svg";
import ageWoman from "../assets/growing-up-woman.svg";
import location from "../assets/map.svg";
import phone from "../assets/phone.svg";
import padlock from "../assets/padlock.svg";

import "./Assets.css";
import AddUser from "./addUser/AddUser";

const Assets = () => {
  const [card, setCard] = useState([]);
  const [name, setName] = useState();
  const [mail1, setMail1] = useState("");
  const [age1, setAge1] = useState("");
  const [location1, setLocation1] = useState([]);
  const [phone1, setPhone1] = useState("");
  const [padlock1, setPadlock1] = useState("");
  const [info, setInfo] = useState("name");
  const [info2, setInfo2] = useState(name);
  useEffect(() => {
    getApi();
  }, []);
  const getApi = async () => {
    const { data } = await axios.get("https://randomuser.me/api/");
    // console.log(data.results)
    setCard(data.results);
    setName(data.results[0].name.first + " " + data.results[0].name.last);
    setMail1(data.results[0].email);
    setAge1(data.results[0].dob.age);
    setLocation1(
      data.results[0].location.street.number +
        " " +
        data.results[0].location.street.name
    );
    setPhone1(data.results[0].phone);
    setPadlock1(data.results[0].login.password);
    setInfo2(data.results[0].name.first + " " + data.results[0].name.last);
  };
  console.log(name, mail1, age1, location1, phone1, padlock1);
  const handleClick = () => {
    getApi();
    setInfo("name");
  };
  const genderPhoto = card[0]?.gender == "male" ? man : woman;
  const agePhoto = card[0]?.gender == "male" ? ageMan : ageWoman;
  return (
    <div className="App">
      <span>
        <img className="cw-logo" src={clarus} alt="" />
      </span>
      {card.length > 0 && (
        <div className="main">
          <section>
            
          
          <nav>
            <img className="profilePhoto" src={card[0].picture.large} alt="" />
          </nav>
          <span>
            <h5>My {info} is</h5>
            <h2>{info2}</h2>
          </span>
          <nav className="icons">
            <img
              onMouseOver={() => {
                setInfo2(name);
                setInfo("name");
              }}
              src={genderPhoto}
              alt=""
            />
            {/* <img src={woman} alt="" /> */}
            <img
              onMouseOver={() => {
                setInfo2(mail1);
                setInfo("mail");
              }}
              src={mail}
              alt=""
            />
            <img
              onMouseOver={() => {
                setInfo2(age1);
                setInfo("age");
              }}
              src={agePhoto}
              alt=""
            />
            {/* <img src={ageWoman} alt="" /> */}
            <img
              onMouseOver={() => {
                setInfo2(location1);
                setInfo("adress");
              }}
              src={location}
              alt=""
            />
            <img
              onMouseOver={() => {
                setInfo2(phone1);
                setInfo("phone");
              }}
              src={phone}
              alt=""
            />
            <img
              onMouseOver={() => {
                setInfo2(padlock1);
                setInfo("password");
              }}
              src={padlock}
              alt=""
            />
          </nav>
          <nav>
            <button onClick={handleClick}>New User</button>
            <button>Add User</button>
          </nav>
          <div>
            <AddUser card={card} />
          </div>
          </section>
        </div>
      )}
    </div>
  );
};
export default Assets;