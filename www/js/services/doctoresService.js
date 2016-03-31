angular
	.module('starter')
	.factory('doctoresService', ['$http', function($http) {
		

		var doctores = [
			{
				"id": 1,
				"nombre": "Jaime Simental Saltillo",
				"direccion": "Abasolo 997",
				"telefono": "8444847999",
				"pareja": "Iliana Mellado",
				"city": "saltillo"
			},
			{
				"id": 2,
				"nombre": "Iliana Mellado Goerne",
				"direccion": "Privada Lourdes 550",
				"telefono": "8442048200",
				"pareja": "Jaime Martinez",
				"city": "saltillo"
			},
			{
				"id": 3,
				"nombre": "Edgar Zavala",
				"direccion": "FBR",
				"telefono": "8448076459",
				"pareja": "Ilse",
				"city": "leon"
			},
			{
				"id": 4,
				"nombre": "Ilse",
				"direccion": "FBR",
				"telefono": "8448076459",
				"pareja": "Edgar",
				"city": "guanajuato"
			}
		]
		function getDoctoresByCity(city){
			var docs = doctores.filter(function(doc){
				return doc.city == city;
			})
			return docs;
		}
		function getDoctorById(id){
			var doc = doctores.filter(function(doc){
				return doc.id == id;
			})
			return doc[0];
		}

		return { 
			getDoctoresByCity: getDoctoresByCity,
			getDoctorById: getDoctorById
		};
}]);


