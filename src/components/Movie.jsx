import { useLocation } from "react-router-dom";

export function Movie() {
    const {state} = useLocation()  //useLocation devuelve todas las opciones del componente al que navegamos
    console.log(state)
  return (
   <h2>{state.original_title}    </h2>
  );
}

