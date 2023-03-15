import clsx from "clsx";
import { useState } from "react";
import Button from "./components/Button.jsx";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup.string().min(3).trim().required(),
  surname: yup.string().min(3).trim().required(),
  age: yup.number().positive().integer().required(),
  email: yup.string().email(),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Le numéro de téléphone doit contenir 10 chiffres")
});

const App = () => {
  const [people, setPeople] = useState([]);
  const handleSubmit = (
    { name, surname, age, email, Phone },
    { resetForm }
  ) => {
    setPeople([...people, { name, surname, age, email, Phone }]);
    resetForm();
  };

  return (
    <main className="p-4 flex flex-col gap-4">
      <Formik
        initialValues={{
          name: "",
          surname: "",
          age: "",
          email: ""
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form noValidate className="p-4 flex flex-col gap-4">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium">Name</span>
            <Field
              className="px-3 py-1.5 border-2"
              placeholder="Enter name"
              name="name"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium">Surname</span>
            <Field
              className="px-3 py-1.5 border-2"
              placeholder="Enter surname"
              name="surname"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium">Age</span>
            <Field
              className="px-3 py-1.5 border-2"
              placeholder="Enter age"
              name="age"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium">Email</span>
            <Field
              className="px-3 py-1.5 border-2"
              placeholder="Enter email"
              name="email"
            />
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium">Phone</span>
              <Field
                className="px-3 py-1.5 border-2"
                placeholder="Enter Phone"
                name="Phone"
              />
            </label>
          </label>
          <Button type="submit">Add Person</Button>
        </Form>
      </Formik>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? "#f1e6ff" : "#e8ccff",
                border: "1px solid black"
              }}
            >
              <td>{person.name}</td>
              <td>{person.surname}</td>
              <td>{person.age}</td>
              <td>{person.email}</td>
              <td>{person.Phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default App;
