import React, { createContext, useState, useEffect  } from "react";
import { firebase } from '../Settings/ConfigFirebase';
import { onValue, ref, set} from 'firebase/database';


export const AlimentoContext = createContext();

const AlimentoProvider = (props)=>{
    const [tablaA, setTablaA] = useState([])
    const [alimento, setAlimento] = useState(
        {
            id:"",
            nombre:"",
            cantidad:"",
            unidad:"",
            categoria:""
        }
    );


    useEffect(() => {

        let alimentosLista = [];
        const dbRef = ref(firebase, 'Alimentos');
        onValue(dbRef, (snapshot) => {
            snapshot.forEach((row) => {
                alimentosLista.push({
                    id: row.key,
                    nombre: row.val().nombre,
                    cantidad: row.val().cantidad,
                    unidad: row.val().unidad,
                    categoria: row.val().categoria,
                })
            });
            setTablaA(alimentosLista)
        }, {
            onlyOnce: true
        });

    }, []);

    const eliminar = (id) => {

        set(ref(firebase, 'Alimentos/' + id), null)
        .then(() => {
            alert("Eliminado")
        })
        .catch((error) => {
          // The write failed...
        });

        const temporal = tablaA.filter((item) => {
            return item.id !== id;
        })
        setTablaA(temporal)
    }

    return(
        <AlimentoContext.Provider
            value={{alimento,tablaA,setAlimento,setTablaA, eliminar}}>
                {props.children}
        
        </AlimentoContext.Provider>
        );
    }

    export default AlimentoProvider;
