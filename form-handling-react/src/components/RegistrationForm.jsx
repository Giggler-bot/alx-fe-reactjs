import React from "react";

export default function RegistrationForm({ onRegister }) {
  const [form, setForm] = React.useState({
    username: "",
    email: "",
    password: ""
  });
  const [errors, setErrors] = React.useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const err = {};
    if (!form.username.trim()) err.username = "Username is required";
    if (!form.email.trim()) err.email = "Email is required";
    if (!form.password.trim()) err.password = "Password is required";
    // basic email pattern
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) err.email = "Invalid email";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    // simulate API request
    try {
      // replace with real API call later
      const payload = { ...form };
      console.log("Registering (mock):", payload);
      if (onRegister) onRegister(payload);
      // reset
      setForm({ username: "", email: "", password: "" });
      setErrors({});
      alert("Mock registration successful");
    } catch (err) {
      console.error(err);
      alert("Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 480 }}>
      <div>
        <label>Username</label>
        <input name="username" value={form.username} onChange={handleChange} />
        {errors.username && <div style={{ color: "red" }}>{errors.username}</div>}
      </div>

      <div>
        <label>Email</label>
        <input name="email" value={form.email} onChange={handleChange} />
        {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
      </div>

      <div>
        <label>Password</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} />
        {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
}
 ["value={username}", "value={email}", "value={password}"]

 ["if (!email", "if (!password"]