import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import styles from "../styles/form.module.css"; // Import CSS module

interface IForm {
  name: string;
  email: string;
  phone: number | null;
  password: string;
}

export const Form = (): React.JSX.Element => {
  const [formState, setFormState] = useState<IForm>({
    name: "",
    email: "",
    phone: null,
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("e.target.value: ", e.target.value);
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    console.log("formState: ", formState);
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate inputs here
    console.log("This is the submitted data: ", formState);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        placeholder="Name"
        name="name"
        onChange={handleChange}
      />
      <input
        className={styles.input}
        placeholder="Email"
        name="email"
        onChange={handleChange}
      />
      <input
        className={styles.input}
        placeholder="Phone number"
        name="phone"
        onChange={handleChange}
      />
      <input
        className={styles.input}
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
      />
      <button className={styles.button} type="submit">
        Submit
      </button>
    </form>
  );
};
