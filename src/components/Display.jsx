import React, { useState } from "react";
import "./Display.css"
import icon from "../assets/icons/repeat-outline.svg"

export default function Display(props){
    const [label1, setLabel1] = useState('Dólar Americano')
    const [label2, setLabel2] = useState('Real Brasileiro')
    const [inputMoeda1, setInputMoeda1] = useState(1)
    const [inputMoeda2, setInputMoeda2] = useState(1)
    const [dePara, setDePara] = useState('USD-BRL')

    function convert(){
        const linkApi = `https://economia.awesomeapi.com.br/last/${dePara}`

        fetch(linkApi)
            .then(res => {
                return res.json() 
            })
            .then(json => {
                let cotacao = json[dePara.replace('-','')]["bid"]

                let moeda2 = (parseFloat(inputMoeda1 * cotacao).toFixed(2))
                isNaN(moeda2) ? setInputMoeda2(0) : setInputMoeda2(moeda2)
            })
    }

    function inverter(){
        const aux = label1
        setLabel1(label2)
        setLabel2(aux)
        dePara === 'USD-BRL' ? setDePara('BRL-USD') : setDePara('USD-BRL')
    }

    return (
        <div className="display-card">
            <div className="coin-1">
                <h1>{label1}</h1>
                <span></span>
                <input type="text"
                    value={inputMoeda1}
                    onChange={e => setInputMoeda1(e.target.value)}
                    onKeyUp={convert()}
                    />
            </div>
            <button
                onClick={e => inverter()}><img src={icon} alt="ícone de troca"></img></button>
            <div className="coin-2">
            <h1>{label2}</h1>
                <span></span>
                <input type="text"
                    value={inputMoeda2}
                    onChange={e => setInputMoeda2(e.target.value)}/>
            </div>
        </div>
    )
}
