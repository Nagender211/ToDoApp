const axios = require('axios');

const baseUrl="http://localhost:5000"

const getAllDo = (setToDo) =>{
    axios
    .get(baseUrl)
    .then(({data})=>{
        consoles.log("dataa.....>>,",data)
        setToDo(data)
    })
}
export {getAllDo}