import React,{useEffect,useState} from 'react';

function Pdfano() {
 
    const[x,setX]=useState(0);
    const[y,setY]=useState(0);
    
    const logmousemove=e=>{
      setX(e.clientX)
      setY(e.clientY)
      } 
      
      useEffect(()=>{
         console.log('useEffect called');
         window.addEventListener('mousemove',logmousemove)
      },[])

      return (
    
    <div><html>
        <header className='text-annotation'>
    <div >
        <p className='first'>Labels</p>
        <hr className='tt'/>
        <p className='bb'>Title Author</p>
        <p className='ty'>Boxes</p> 
        <hr className='tt'/>
            <p className='rr'>x: {x} , y:{y}<br></br>
            x: {x} , y:{y}<br></br>
            x: {x} , y:{y}<br></br>
            x: {x} , y:{y}<br></br></p>

      
    </div>
    </header>
  </html>
           
            </div>
  )
}

export default Pdfano