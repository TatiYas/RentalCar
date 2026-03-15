"use client";

import { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik"; 
import css from "./CarForm.module.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  date: Yup.date().nullable().notRequired(),
  comment: Yup.string().max(200, "Max 200 characters"),
});


const initialValues = {
  name: "",
  email: "",
  date: null as Date | null,
  comment: "",
};

type FormValues = typeof initialValues;

export default function CarForm() {
  const handleSubmit = async (values: FormValues) => {
    try {
    
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Car booked successfully!");
    } catch (error) {
      alert("Booking failed. Please try again.");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, values }) => (
        <Form className={css.form}>
          <div>
            <p className={css.formTitle}>Book your car now</p>
            <p className={css.formText}>
              Stay connected! We are always ready to help you.
            </p>
          </div>

          <div className={css.formInputContainer}>
       
            <Field
              name="name"
              placeholder="Name*"
              className={css.formInput}
            />
            <ErrorMessage name="name" component="p" />

            
            <Field
              name="email"
              placeholder="Email*"
              className={css.formInput}
              type="email"
            />
            <ErrorMessage name="email" component="p" />

          
            <DatePicker
              selected={values.date}
              onChange={(date: Date | null) => setFieldValue("date", date)}
              placeholderText="Booking date"
              className={css.formInput}
              dateFormat="dd/MM/yyyy"
              calendarStartDay={1}
            />
            <ErrorMessage name="date" component="p" />

           
            <Field
              as="textarea"
              name="comment"
              placeholder="Comment"
              className={css.formInput}
            />
            <ErrorMessage name="comment" component="p" />
          </div>

          <button className={css.formButton} type="submit">
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
}
