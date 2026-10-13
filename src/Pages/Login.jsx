import "../css/Login.css";
import { useState } from "react";

function Login() {
  const [form, setForm] = useState({
    phone: "",
    password: ""
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

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message);
        return;
      }

      setMessage(`Welcome ${data.user.name}! Login successful.`);
    } catch (error) {
      setMessage("Server se connection nahi ho pa raha");
    }
  }

  return (
    <>
      <div className="submit">
        <form className="f" onSubmit={Submit}>
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
            Password
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={form.password}
              onChange={Handle}
              required
            />
          </label>
          <br />

          <button id="b" type="submit">
            Login
          </button>

          <p>{message}</p>
        </form>
      </div>
    </>
  );
}

export default Login;