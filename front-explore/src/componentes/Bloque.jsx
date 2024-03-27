import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getBlock } from '../api';


const Bloque = () => {

    const params = useParams();

    const { isLoading, isError, data } = useQuery(['bloque', params.bloque], getBlock)

    if(isLoading) {
        return <h1>Cargando...</h1>
    }
    if (isError){
        return <h1>Error</h1>
    }

    return (
        <pre>
            bloque: {params.bloque}
            {
                JSON.stringify(data, null, 4)
            }
        </pre>
    )
}

export default Bloque