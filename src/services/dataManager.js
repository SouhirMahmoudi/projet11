
/**
 * 
 * 	{
		"id": "6ff132c6",
		"title": "Charmant studio",
		"cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-18-1.jpg",
		"pictures": [
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-18-1.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-18-2.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-18-3.jpg"
		],
		"description": "Ce studio décoré avec goût sera votre nid douillet après une longue journée passée à découvrir Paris.",
		"host": {
			"name": "Michel Romy",
			"picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-11.jpg"
		},
		"rating": "4",
		"location": "Ile de France - Paris 13e",
		"equipments": [
			"Équipements de base",
			"Four",
			"Frigo",
			"Wi-fi",
			"Micro-Ondes"
		],
		"tags": [
			"Studio",
			"Charmant",
			"13e"
		]
	},
 */
import data from './logements.js';


function getAll(){
    return data.map(elm=>{return {id:elm.id, cover:elm.cover, title:elm.title}})
}

function getOne(id){

}

export {
    getAll,
    getOne
}