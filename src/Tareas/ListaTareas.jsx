const ListaTareas = ({
  ListaTareas,
  eliminarTarea,
  toggleCompletadoDeTarea,
}) => {
  const obtenerListaDeClases = (tarea) => {
    const listaDeClases = [];
    listaDeClases.push(tarea.prioridad);
    if (tarea.completada) {
      listaDeClases.push("strike-through");
    }
    return listaDeClases.join(" ");
  };

  return (
    <div>
      {ListaTareas.length === 0 ? (
        <h2>Parece que no hay tareas</h2>
      ) : (
        <>
          <h1>Lista de tareas</h1>
          <ul>
            {ListaTareas.map((t) => (
              <li key={t.id} className={obtenerListaDeClases(t)}>
                {t.descripcion}
                <input
                  checked={t.completada}
                  data-id={t.id}
                  className="checkbox"
                  type="checkbox"
                  onClick={(e) => {
                    toggleCompletadoDeTarea(e.target.dataset.id);
                  }}
                ></input>
                <button onClick={() => eliminarTarea(t.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ListaTareas;
