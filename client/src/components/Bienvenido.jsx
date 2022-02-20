import axios from "axios"
import { useState } from "react"

export default function Bienvenido(){

    const [chain, setChain] = useState()
    const [data, setData] = useState()
    const [status, setStatus] = useState()

    function onInputChange(e){
        e.preventDefault()
        setChain({
            ...chain,
            [e.target.name] : e.target.value
        })
    }

    function onSend(e){
        e.preventDefault()
        //console.log("Estoy dando clic")
        axios.post("http://localhost:3001/sequence", chain)
        .then((response)=>{
            console.log(response)
            if(response.data.status === "200"){
                setStatus("200")
            } else {
                setStatus("403")
            }
        })
    }

    function onGet(e){
        e.preventDefault()
        //console.log("Estoy recuperando")
        axios.get("http://localhost:3001/stats")
        .then((response)=>{
            console.log(response.data)
            setData(response.data)
        })
    }

    //console.log("Soy el console log con la data dentro", data)
    //console.log("Soy el console log del status", status)

    return( 
    <div>
        <form>
        <label>Ingresa aqui tu cadena</label>
        <input onChange={onInputChange} type='text' name="chain" placeholder="Cadena"></input>
        <button onClick={onSend}>ENVIAR CADENA</button>
        <button onClick={onGet}>OBTENER ESTADÍSTICAS</button>
        <div>
        {
            data? <div>
                <p>Count Sequence String: {data.count_sequence_string}</p> 
                <p>Count No Sequence String: {data.count_no_sequence_string}</p> 
                </div> : <p>No existe información</p>
        }
        </div>
        <div>
        {
            status? <div>
                <p>Status: {status}</p> 
                </div> : <p>No hay status</p>
        }
        </div>
        </form>
    </div>)
}