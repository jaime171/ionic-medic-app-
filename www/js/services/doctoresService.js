angular
	.module('starter')
	.factory('doctoresService', ['$http', function($http) {
		var doctoresSelected = [];
		var doctores = [
			{
				"id": 1,
				"nombre": "Martin Alfredo Segovia",
        "img": "martin_alfredo",
        "especialidad": "cardiologo",
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
        "nombre": "Especialidad Numero 2",
        "img": "catalina_espino",
        "especialidad": "dentista",
        "direccion": "Venustiano Carrranza 4036-22",
        "horario": "11:00 - 13:00 y 16:30 - 20:00 hrs (cita previa)",
        "telefono": "8444150347",
        "ciudad": "saltillo",
        "correo": "leticia-riverag@hotmail.com",
        "bio": "23 años en el área e alergia , diagnsotico y tratamiento lérgica dermatitis atopica asma bronquial. urticaria,. experiencia en 22 campamentos para niños con asma bronquial y carreas para pacientes con asma bronquial."
			},
			{
        "id": 4,
        "nombre": "Especialidad Numero 3",
        "img": "catalina_espino",
        "especialidad": "dentista",
        "direccion": "Venustiano Carrranza 4036-22",
        "horario": "11:00 - 13:00 y 16:30 - 20:00 hrs (cita previa)",
        "telefono": "8444150347",
        "ciudad": "leon",
        "correo": "leticia-riverag@hotmail.com",
        "bio": "23 años en el área e alergia , diagnsotico y tratamiento lérgica dermatitis atopica asma bronquial. urticaria,. experiencia en 22 campamentos para niños con asma bronquial y carreas para pacientes con asma bronquial."
			}
		]
		function getDoctoresByCity(city){
			var docs = doctores.filter(function(doc){
				return doc.ciudad == city;
			})
			return docs;
		}
    function getDoctoresBySpecialty(city, specialty){
      var doct = doctores.filter(function(doc){
        return( (doc.ciudad == city) && (doc.especialidad == specialty));
      })
      console.log(city, specialty)
      return doct;
    }


    function getDoctorById(id){
      var doc = doctores.filter(function(doc){
        return doc.id == id;
      })
      return doc[0];
    }

    function setListDoc(docs){
      doctoresSelected = docs;
    }

    function getListDoc(){
      return doctoresSelected;
    }
    
		return { 
			getDoctoresByCity: getDoctoresByCity,
			getDoctorById: getDoctorById,
      getDoctoresBySpecialty: getDoctoresBySpecialty,
      setListDoc: setListDoc,
      getListDoc: getListDoc

		};
}]);


