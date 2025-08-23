import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Yup validation schema
const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function FormikForm({ onRegister }) {
  return (
    <div style={{ maxWidth: 480 }}>
      <h2>Registration (Formik + Yup)</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            // simulate API call
            await new Promise((r) => setTimeout(r, 500));
            console.log("Formik submit (mock):", values);
            if (onRegister) onRegister(values);
            alert("Mock registration (Formik) successful");
            resetForm();
          } catch (e) {
            alert("Registration failed");
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form noValidate>
            <div style={{ marginBottom: 12 }}>
              <label htmlFor="username">Username</label><br />
              <Field id="username" name="username" placeholder="yourname" />
              <ErrorMessage name="username" component="div" style={{ color: "red" }} />
            </div>

            <div style={{ marginBottom: 12 }}>
              <label htmlFor="email">Email</label><br />
              <Field id="email" name="email" placeholder="you@example.com" />
              <ErrorMessage name="email" component="div" style={{ color: "red" }} />
            </div>

            <div style={{ marginBottom: 12 }}>
              <label htmlFor="password">Password</label><br />
              <Field id="password" name="password" type="password" placeholder="******" />
              <ErrorMessage name="password" component="div" style={{ color: "red" }} />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

 ["string().required"]