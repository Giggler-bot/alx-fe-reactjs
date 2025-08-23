import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

export default function App() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Form Handling Demo</h1>
      <div style={{ display: "flex", gap: 24 }}>
        <div>
          <h2>Manual Controlled</h2>
          <RegistrationForm />
        </div>
        <div>
          <FormikForm />
        </div>
      </div>
    </div>
  );
}
