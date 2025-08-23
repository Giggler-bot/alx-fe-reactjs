import React from "react";
import FormikForm from "./components/formikForm"; // note: lowercase filename

export default function App() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Form Handling Demo</h1>
      <FormikForm onRegister={(data) => console.log("Registered via Formik:", data)} />
    </div>
  );
}
