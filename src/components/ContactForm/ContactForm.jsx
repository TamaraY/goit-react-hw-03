import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import styles from "./ContactForm.module.css";

const ContactForm = ({ handleAdd }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, options) => {
    handleAdd(values);
    options.resetForm();
  };

  const formSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Name is required field"),
    number: Yup.string()
      .matches(/^[0-9]+$/, "Number must contain only digits")
      .min(7, "Number too short!")
      .required("Number is required"),
  });

  return (
    <div className={styles.formWrap}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={formSchema}
      >
        <Form className={styles.form}>
          <label className={styles.label}>
            <span>Name </span>
            <Field
              type="text"
              name="name"
              placeholder="Input name"
              className={styles.input}
            />
            <ErrorMessage name="name" component="p" className={styles.error} />
          </label>
          <label className={styles.label}>
            <span>Number</span>
            <Field
              type="tel"
              name="number"
              placeholder="Input phone number"
              className={styles.input}
            />
            <ErrorMessage
              name="number"
              component="p"
              className={styles.error}
            />
          </label>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
