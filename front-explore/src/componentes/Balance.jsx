import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getBalance } from '../api';

 
const Balance = () => {

    const params = useParams();
    const { isLoading, isError, data } = useQuery(['balance', params.address], getBalance)

    if(isLoading) {
        return <h1>Cargando...</h1>
    }
    if (isError){
        return <h1>Error</h1>
    }

    return (
        <pre>
            Balance: {params.balance}
            {
                JSON.stringify(data, null, 4)
            }
        </pre>
    )
}

export default Balance
