
console.log("hello");
const app=document.getElementById("app");

const Carro=class{
    constructor(id,modelo,placa,cor,fabricante){
    this.id=id;
    this.modelo=modelo
    this.placa=placa;
    this.cor=cor;
    this.fabricante=fabricante;
    }
}

let listCarros=[]
async function getCarros(){
    const data= await fetch("http://localhost:8000/carro/")
    const response= await data.json();
    for(let i=0;i<response.carros.length;i++){
        const carros=response.carros[i]
        console.log()
        const carro= new Carro(carros._id,carros.modelo,carros.placa,carros.cor,carros.fabricante)
        listCarros.push(carro)
    }
    console.log(listCarros)
}

getCarros()
