import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  username: Yup.string().required("Username required"),
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string().min(6, "Password too short").required("Password required"),
});

export default function FormikForm({ onRegister }) {
  return (
    <div style={{ maxWidth: 480 }}>
      <h2>Registration (Formik + Yup)</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            console.log("Formik submit (mock):", values);
            if (onRegister) onRegister(values);
            setSubmitting(false);
            resetForm();
            alert("Mock registration (Formik) successful");
          }, 500);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label>Username</label>
              <Field name="username" />
              <ErrorMessage name="username" component="div" style={{ color: "red" }} />
            </div>

            <div>
              <label>Email</label>
              <Field name="email" />
              <ErrorMessage name="email" component="div" style={{ color: "red" }} />
            </div>

            <div>
              <label>Password</label>
              <Field name="password" type="password" />
              <ErrorMessage name="password" component="div" style={{ color: "red" }} />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
