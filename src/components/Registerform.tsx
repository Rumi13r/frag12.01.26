import { useState } from "react";
import "./RegistrationForm.css";
const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clearForm = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <form className="component-card">
        <h2>Регистрация</h2>

        <input
          type="text"
          placeholder="Име"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Имейл"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Парола"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={clearForm} className="reset-btn">
          Изчисти
        </button>
      </form>

      <div className="component-card">
        <h2>Въведени данни</h2>
        <p>Въведено име: {name}</p>
        <p>Въведен имейл: {email}</p>
        <p>Въведена парола: {password}</p>
      </div>
    </>
  );
};

export default RegistrationForm;
