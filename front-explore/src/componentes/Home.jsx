import React from 'react';
import { useForm } from 'react-hook-form';
import { Outlet, useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate();

    const {register, handleSubmit} = useForm();

    const submitForm = (data) =>{
        console.log(data);
        if(data.data.length == 66)
            navigate(`tx/${data.data}`)
        if(data.data.length == 42)
            navigate(`balance/${data.data}`)
        if(/^\d+\.?\d*$/.test(data.data))
            navigate(`bloque/${data.data}`)
    }

    return (
        <div className='container '> 
            <h1 className='text-center'>Explorador de la cadena de Ethereum</h1>
            <form className='d-flex justify-content-center gap-1' onSubmit={handleSubmit(submitForm)}>
                <input {...register("data")} type="text" />
                <button className='btn btn-primary'>GO</button>
            </form>
            <div className='border my-3 p-2'>
                <Outlet />
            </div>
    
        </div>
    )
}

export default Home
