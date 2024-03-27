export const getBlock = async(bloque) =>{
    console.log(bloque);
    const response = await fetch(`http://localhost:7777/bloque/${bloque.queryKey[1]}`);
    const data = await response.json();
    return data;
}

export const getTx = async(tx) =>{
    console.log(tx);
    const response = await fetch(`http://localhost:7777/tx/${tx.queryKey[1]}`);
    const data = await response.json();
    return data;
}


export const getBalance = async(balance) =>{
    console.log(balance);
    const response = await fetch(`http://localhost:7777/balance/${balance.queryKey[1]}`);
    const data = await response.json();
    return data;
}

