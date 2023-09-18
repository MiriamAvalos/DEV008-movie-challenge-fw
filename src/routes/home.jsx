import { useState } from "react";
import getData from "../Api";
import Card from "../components/Card";

export default function Home () {
    //declarar un estado llamado results , una función que puede modificar el estado llamada setResults y se le asigna a results
    //el valor inicial que es un array , useState le indica al codigo que vas a declarar un estado
    //actualiza en tiempo real
    const [results,setResults] = useState([])
    console.log("kesesto" ,results);
    getData().then((response) => {
        setResults(response.results)
        //console.log("peliculas" , response.results);
    })
    return (
        <>
      
        <h1> PRUEBA HOME </h1>
        <Card/>
        </>
    )
}