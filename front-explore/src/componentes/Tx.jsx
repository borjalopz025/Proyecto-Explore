import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getTx } from '../api';


const Tx = () => {

    const params = useParams();

    const { isLoading, isError, data } = useQuery(['tx', params.tx], getTx)

    if(isLoading) {
        return <h1>Cargando...</h1>
    }
    if (isError){
        return <h1>Error</h1>
    }

    return (
        <pre>
            tx: {params.tx}
            {
                JSON.stringify(data, null, 4)
            }
        </pre>
    )
}

export default Tx
