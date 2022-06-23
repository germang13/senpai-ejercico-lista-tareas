import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FormNuevaTarea = ({ onSubmit }) => {
  const [descripcion, setDescripcion] = useState("");
  const [prioridad, setPrioridad] = useState("");

  const submitTarea = (ev) => {
    ev.preventDefault();
    onSubmit({
      id: uuidv4(),
      fecha: new Date(),
      descripcion,
      prioridad,
      completada: false,
    });
  };

  const actualizarPrioridad = (ev) => {
    setPrioridad(ev.target.value);
  };

  return (
    <form>
      <label htmlFor="descripcion">Descripcion</label>
      <input
        onChange={(e) => {
          setDescripcion(e.target.value);
        }}
        type="text"
        name="descripcion"
      />

      <select
        onChange={actualizarPrioridad}
        defaultValue={0}
        name="prioridad"
        id="select-prioridad"
      >
        <option disabled value={0}>
          Selecciona prioridad
        </option>
        <option value="prioridad-alta">Alta</option>
        <option value="prioridad-media">Media</option>
        <option value="prioridad-baja">Baja</option>
      </select>

      <button onClick={submitTarea}> Agregar</button>
    </form>
  );
};

export default FormNuevaTarea;
