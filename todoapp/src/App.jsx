import React, { useEffect, useState } from 'react';
import Axios from 'axios'
const App = () => {
    const [todo,setTodo] = useState(null)
    useEffect(()=>{
        const gettodo = async()=>{
            await Axios({
                method:"get",
                url:'http://127.0.0.1:8000/'
            }).then(response=>{
                console.log(response.data);
                setTodo(response.data)

                
            })
        }
        gettodo()
    },[])
    return (
        <div>
            <h1>ToDo</h1>
            <hr />
                {
                  todo != null ?(
                  <div>
                        {
                            todo.map((d, i)=>(
                               <div key={i}>
                                <h1>{d.id}</h1>
                                <h1>{d.text}</h1>
                                <h1>{d.date}</h1>
                               </div>
                            ))
                        }
                  </div>
                  )
                  :
                  (<h1>Data Not Found</h1>)
                }
        </div>
    );
};

export default App;
