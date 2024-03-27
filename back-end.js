const ex = require("express");
const cors = require("cors")
const {Web3} = require("web3");


const app = ex();
app.use(cors())

const url_infura = "https://mainnet.infura.io/v3/2d6e90c8ecbd42deba13d1402c683b0d";
const web3 = new Web3(url_infura)

app.get("/", async(req,res) =>{
    const bloque = await web3.eth.getBlockNumber();
    res.send({bloque: bloque.toString()})
});

app.get("/bloque/:bloque", async(req,res) =>{
    try{
        const bloque = await web3.eth.getBlock(req.params.bloque)
        res.send(bloque)
    }catch(error){
        res.status(500).send({mensaje: error.message})
    }
});

app.get("/tx/:tx", async(req,res) =>{
    try {
        const tx = await web3.eth.getTransaction(req.params.tx)
        res.send(tx)
        
    } catch (error) {
        res.status(500).send({mensaje: error.message})
        
    }
});

app.get("/balance/:address", async(req,res) =>{
    try {
        const balance = await web3.eth.getBalance(req.params.address)
        res.send({balance: balance.toString(), ethers: balance.toString() / 1e18, ethers2: web3.utils.fromWei(balance, 'ether')})
        
    } catch (error) {
        res.status(500).send({mensaje: error.message})
    
    }
});

app.listen(7777, () =>{
    console.log("servidor desplegado");
});

BigInt.prototype.toJSON = function () {
    return this.toString();
};