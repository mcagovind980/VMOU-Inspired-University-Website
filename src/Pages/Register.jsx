import { useState } from "react";
import "../css/Register.css";

function Register() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    age: "",
    password: "",
    confirmPassword: ""
  });

  const [message, setMessage] = useState("");

  function Handle(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  async function Submit(e) {
    e.preventDefault();
    setMessage("");

    if (form.password !== form.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
        }
      );

      const data = await response.json();

      setMessage(data.message);

      if (response.ok) {
        setForm({
          name: "",
          phone: "",
          age: "",
          password: "",
          confirmPassword: ""
        });
      }
    } catch (error) {
      setMessage("Server se connection nahi ho pa raha");
    }
  }

  return (
    <>
      <div className="submits">
        <form className="f" onSubmit={Submit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={form.name}
              onChange={Handle}
              required
            />
          </label>
          <br />

          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              placeholder="Enter Your Phone Number"
              value={form.phone}
              onChange={Handle}
              pattern="[0-9]{10}"
              maxLength={10}
              required
            />
          </label>
          <br />

          <label>
            Age
            <input
              type="number"
              name="age"
              placeholder="Enter Your Age"
              value={form.age}
              onChange={Handle}
              min="1"
              required
            />
          </label>
          <br />

          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={form.password}
              onChange={Handle}
              minLength={8}
              required
            />
          </label>
          <br />

          <label>
            Re-enter Password
            <input
              type="password"
              name="confirmPassword"
              placeholder="Again Enter Your Password"
              value={form.confirmPassword}
              onChange={Handle}
              minLength={8}
              required
            />
          </label>
          <br />

          <button id="b1" type="submit">
            Register
          </button>

          <p>{message}</p>
        </form>
      </div>
    </>
  );
}

export default Register;