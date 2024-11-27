import React, { ChangeEvent, SyntheticEvent, useState } from "react";

interface IForm {
  name: string;
  email: string;
  phone: number | null;
  password: string;
}

export const Form = () => {
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
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" name="name" onChange={handleChange} />
      <input placeholder="Email" name="email" onChange={handleChange} />
      <input placeholder="Phone number" name="phone" onChange={handleChange} />
      <input placeholder="Password" name="password" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};
