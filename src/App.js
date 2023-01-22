import './App.css';
import MinecraftCard from './Components/MinecraftCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {  

  const [data,setData] = useState([])
  const getData= ()=>{
        axios('data.json').then((res)=>{
        setData(res.data)
        }).catch((err)=>{
        console.log(err)
        })
  }
  useEffect(()=>{
    getData()
    
  },[data])

  
  return (
    <div className="App">
      <div>
        <h1 className='title'>DLC PARA MINECRAFT DUNGEONS</h1>
        <p className='parrafo'>¡Aventúrate en las profundidades de Minecraft Dungeons con el contenido descargable!</p>
        <p className='parrafo'>¡Desafíate a ti mismo y a tu equipo con nuevas misiones, criaturas, equipamiento y mucho más!</p>
      </div>

      {data?.map(el=>{
        return(

          <MinecraftCard key={el.id} title={el.title} image={el.image} content={el.content}/>
        )
      })}

    </div>
  );
}

export default App;
