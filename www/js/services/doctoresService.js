angular
	.module('starter')
	.factory('doctoresService', ['$http', function($http) {
		
		var doctores = [
			{
				"id": 1,
				"nombre": "Martin Alfredo Segovia",
        "img": "martin_alfredo",
        "especialidad": "Medicina Interna",
				"direccion": "Hospital La Concepción",
				"telefono": "8444847999",
				"ciudad": "saltillo",
        "correo": "dr.alfredo.segovia@hotmail.com",
        "bio": "18 años ejerciendo"
			},
			{
				"id": 2,
        "nombre": "Catalina Espino",
        "img": "catalina_espino",
        "especialidad": "Inmunologia Clinica",
        "direccion": "Venustiano Carrranza 4036-22",
        "horario": "11:00 - 13:00 y 16:30 - 20:00 hrs (cita previa)",
        "telefono": "8444150347",
        "ciudad": "saltillo",
        "correo": "leticia-riverag@hotmail.com",
        "bio": "23 años en el área e alergia , diagnsotico y tratamiento lérgica dermatitis atopica asma bronquial. urticaria,. experiencia en 22 campamentos para niños con asma bronquial y carreas para pacientes con asma bronquial."
			},
			{
				"id": 3,
				"nombre": "Edgar Zavala",
				"direccion": "FBR",
				"telefono": "8448076459",
				"pareja": "Ilse",
				"ciudad": "leon"
			},
			{
				"id": 4,
				"nombre": "Ilse",
				"direccion": "FBR",
				"telefono": "8448076459",
				"pareja": "Edgar",
				"ciudad": "guanajuato"
			}
		]
		function getDoctoresByCity(city){
			var docs = doctores.filter(function(doc){
				return doc.ciudad == city;
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


