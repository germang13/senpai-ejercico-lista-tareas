import React, { useState } from "react";
import FormNuevaTarea from "./Tareas/FormNuevaTarea";
import ListaTareas from "./Tareas/ListaTareas";

const App = () => {
  const [tareas, setTareas] = useState([]);

  const ordenarLista = (listaActual) => {
    return listaActual.sort((a, b) => {
      if (a.prioridad === b.prioridad) {
        return a.fecha - b.fecha;
      }

      if (a.prioridad === "prioridad-alta") {
        return -1;
      }
      if (a.prioridad === "prioridad-baja") {
        return 1;
      }

      if (b.prioridad === "prioridad-alta") {
        return 1;
      }
      if (b.prioridad === "prioridad-baja") {
        return -1;
      }
      return 0;
    });
  };

  const agregarTarea = (nuevaTarea) => {
    setTareas((listaActual) => {
      const nuevaLista = [...listaActual, nuevaTarea];
      return ordenarLista(nuevaLista);
    });
    ordenarLista();
  };

  const eliminarTarea = (idTareaAEliminar) => {
    setTareas((listaActual) =>
      listaActual.filter((t) => t.id !== idTareaAEliminar)
    );
  };

  const toggleCompletarTarea = (idTarea) => {
    setTareas((listaActual) => {
      let nuevaLista = [...listaActual];
      const tareaSeleccionada = { ...tareas.find((t) => t.id === idTarea) };
      tareaSeleccionada.completada = !tareaSeleccionada.completada;
      nuevaLista = nuevaLista.filter((t) => t.id !== idTarea);
      nuevaLista.push(tareaSeleccionada);
      return ordenarLista(nuevaLista);
    });
  };

  return (
    <main>
      {/* formNuevaTarea({onSubmit: nuevaTarea}) */}
      <FormNuevaTarea onSubmit={agregarTarea} />
      <ListaTareas
        ListaTareas={tareas}
        eliminarTarea={eliminarTarea}
        toggleCompletadoDeTarea={toggleCompletarTarea}
      />
    </main>
  );
};

export default App;
