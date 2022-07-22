
import data from './logements.js';


function getAll(){
    return data.map(elm=>{return {id:elm.id, cover:elm.cover, title:elm.title}})
}


function getOne(idLocation){
	const result = data.filter(obj=> obj.id === idLocation) ;
	return result;
}

	
export {
    getAll,
    getOne
}