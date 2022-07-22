
import data from './logements.js';


function getAll(){
    return data.map(elm=>{return {id:elm.id, cover:elm.cover, title:elm.title}})
}


function getOne(idLocation){
return data.find((elt) => elt.id === idLocation);
}

	
export {
    getAll,
    getOne
}