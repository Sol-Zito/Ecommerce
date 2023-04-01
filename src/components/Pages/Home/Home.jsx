import { Button } from "@mui/material";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../Context/UserContext/UserContext";

const Home = () => {
  const navigate = useNavigate();
  // // userContext basados en usuarios de git,
  // //ver como usarlo.modificarlo para lograr usar una propia api
  // const userContext = useContext(UserContext);
  // const { user, changeUser } = userContext;
  // const [input, setInput] = useState(user.username);

  // const [change, setChange] = useState(false);

  // const onClick = async () => {
  //   const data = await fetch(`https://api.github.com/users/${input}`);
  //   const json = await data.json();

  //   console.log(json.message);

  //   if (!json.message) {
  //     const { name, avatar_url, html_url, login } = json;

  //     changeUser({ name, avatar_url, html_url, username: login });
  //     setChange(true);
  //   } else {
  //     alert("no existe");
  //     setChange(false);
  //     setInput("");
  //   }

  //   //const [json1, setJson1] = useState({});
  //   // const dataA = axios.get(`https://api.github.com/users/${input}`);
  //   // dataA.then((res) => setJson1(res.data));
  //   // console.log(json1);
  // };
  // userContext es hasta aca

  const loginFunction = () => {
    console.log("ya termine el proceso");
    navigate("/shop");
  };
  return (
    <>
      <br></br>
      <h1>Bienvenido al home</h1>
      <br></br>

      {/* En este div esta lo del useContext ver de modificarlo*/}
      {/* <div>
        <div>
          <input
            placeholder="Ingresa el nombre de usuario"
            defaultValue={user.username}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={onClick}>Ver Perfil</button>
        </div>

        {change && (
          <section>
            <button>
              <a href={user.html_url} target="_blank" rel="noreferrer">
                Ver perfil completo
              </a>
            </button>
            <h3>Nombre: {user.name}</h3>
            <h4>Alias: {user.username}</h4>
            <img src={user.avatar_url} alt={user.name} />
          </section>
        )}
      </div> */}

      <br></br>
      <Button variant="contained" onClick={loginFunction} color="success">
        Ingresar
      </Button>
    </>
  );
};

export default Home;
