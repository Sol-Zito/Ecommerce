import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    name: "",
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Este es el form de log</h1>
      <form>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          name="name"
          onChange={handleChange}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Login;
