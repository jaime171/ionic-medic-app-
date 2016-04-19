angular
	.module('starter')
	.factory('doctoresService', ['$http', function($http) {
		var doctoresSelected = [];
		var doctores = [
			{
				"id": 1,
				"nombre": "Dr. Martín Alfredo Segovia Domínguez",
        "img": "martin_alfredo",
        "especialidad": "Medicina Interna",
        "consultorio": "Hospital La Concepción, consultorio 14H",
				"direccion": "Blvd. Venustiano Carranza 4036, Virreyes Residencial, 25230 Saltillo",
        "horario": "Previa Cita",
				"telefono": "4168603",
				"ciudad": "saltillo",
        "correo": "dr.alfredo.segovia@hotmail.com",
        "redes": "",
        "bio": "18 años ejerciendo.",
        "emergencia": "8444168603"
			},
			{
				"id": 2,
        "nombre": "Especialidades en Odontología de Saltillo",
        "img": "avatar_m",
        "especialidad": "Dentista",
        "consultorio": "Privado",
        "direccion": "Castelar Ote. #696, entre Arteaga y Matamoros. Zona Centro.",
        "horario": "Previa Cita",
        "telefono": "4123426 | 4143398 (Emergencia: 8444374867)",
        "ciudad": "saltillo",
        "correo": "",
        "redes": "",
        "bio": "",
        "emergencia": "8444123426"
			},
			{
				"id": 3,
        "nombre": "Especialidades en Odontología de Saltillo",
        "img": "avatar_m",
        "especialidad": "Dentista",
        "consultorio": "Privado",
        "direccion": "Matamoros Nte. #1478. Una cuadra antes del Blvd. Coss. Zona Centro.",
        "horario": "Previa Cita",
        "telefono": "4166348 (Emergencia: 4374867)",
        "ciudad": "saltillo",
        "correo": "",
        "redes": "",
        "bio": "",
        "emergencia": "8444166348"
			},
			{
        "id": 4,
        "nombre": "New Smile",
        "img": "avatar_m",
        "especialidad": "Dentista",
        "consultorio": "Privado",
        "direccion": "",
        "horario": "",
        "telefono": "",
        "ciudad": "saltillo",
        "correo": "",
        "redes": "",
        "bio": "",
        "emergencia": ""
			},
      {
        "id": 5,
        "nombre": "New Smile",
        "img": "avatar_m",
        "especialidad": "Dentista",
        "consultorio": "Privado",
        "direccion": "",
        "horario": "",
        "telefono": "",
        "ciudad": "saltillo",
        "correo": "",
        "redes": "",
        "bio": "",
        "emergencia": ""
      },
      {
        "id": 6,
        "nombre": "Dr. Benjamín Cantú López",
        "img": "benjamin_cantu",
        "especialidad": "Ginecología y Obstetricia",
        "consultorio": "Privado",
        "direccion": "Abasolo #809, esquina con Luis de Cepeda, Saltillo",
        "horario": "Lunes a sábados de 8am a 7pm (Previa Cita)",
        "telefono": "1347920 | 1347921 (Emergencia: 8442779581)",
        "ciudad": "saltillo",
        "correo": "drcantummf@gmail.com",
        "redes": "https://www.facebook.com/drcantummf",
        "bio": "Subespecialidad en Medicina Materno fetal. Embarazo normal y complicado. Ultrasonido fetal especializado. Eco 3D/4D. Ginecología.",
        "emergencia": "8441347920"
      },
      {
        "id": 7,
        "nombre": "Dr. Catalina Espino Rodriguez",
        "img": "catalina_espino",
        "especialidad": "Alergia e Inmunología Clínica",
        "consultorio": "Hospital La Concepción, consultorio 22",
        "direccion": "Blvd. Venustiano Carranza 4036, Virreyes Residencial, 25230 Saltillo",
        "horario": "Lunes a viernes de 11am a 1pm y 4:30pm a 8pm (Previa Cita)",
        "telefono": "4150347",
        "ciudad": "saltillo",
        "correo": "leticia-riverag@hotmail.com",
        "redes": "",
        "bio": "23 años de experiencia en el área de alergia, diagnostico y tratamiento lérgica dermatitis atópica, asma bronquial y urticaria. Experiencia en 22 campamentos para niños con asma bronquial y carreras para pacientes con asma bronquial.",
        "emergencia": "8444150347"
      },
      {
        "id": 8,
        "nombre": "Dr. Ana Catalina Castillo",
        "img": "avatar_w",
        "especialidad": "Cirugía General",
        "consultorio": "",
        "direccion": "",
        "horario": "",
        "telefono": "",
        "ciudad": "saltillo",
        "correo": "",
        "redes": "",
        "bio": "",
        "emergencia": ""
      },
      {
        "id": 9,
        "nombre": "Dr. Carlos Alberto Macías Gónzalez",
        "img": "avatar_m",
        "especialidad": "Traumatólogo y Ortopedia",
        "consultorio": "",
        "direccion": "",
        "horario": "",
        "telefono": "",
        "ciudad": "saltillo",
        "correo": "",
        "redes": "",
        "bio": "",
        "emergencia": ""
      },
      {
        "id": 10,
        "nombre": "Dr. Leopoldo Dávila Gómez",
        "img": "leopoldo_davila",
        "especialidad": "Gastroenterólogo",
        "consultorio": "Hospital La Concepción, consultorio 20",
        "direccion": "Blvd. Venustiano Carranza 4036, Virreyes Residencial, 25230 Saltillo",
        "horario": "Lunes a viernes de 10:30am a 1pm y de 4:30pm a 8pm. Sábados de 10am a 1pm.",
        "telefono": "4156010",
        "ciudad": "saltillo",
        "correo": "leodavila58@yahoo.com.mx",
        "redes": "",
        "bio": "Más de 20 años ejerciendo como gastroenterólogo y endoscopista.",
        "emergencia": "8444156010"
      },
      {
        "id": 11,
        "nombre": "Dr. Raúl Mauricio Córdova Reyes",
        "img": "raul_cordova",
        "especialidad": "Dentista",
        "consultorio": "Privado",
        "direccion": "Blvd. Jesús Valdés Sánchez 2669. Col. Oceanía",
        "horario": "Lunes a Viernes de 9am a 12pm y de 3pm a 8m. Sábados de 9am a 1pm.",
        "telefono": "1540345 | (Emergencia: 8441732071)",
        "ciudad": "saltillo",
        "correo": "drcordovaraul@hotmail.com",
        "redes": "",
        "bio": "Cirujano dentista. Diplomado en Endodoncia. Diplomado en Odontología Estética.",
        "emergencia": "8441540345"
      },
      {
        "id": 12,
        "nombre": "Dr. Lilia Guadalupe Salinas Hernández",
        "img": "avatar_w",
        "especialidad": "Electrodiagnóstico",
        "consultorio": "Hospital La Concepción | Torre médica de especialidades II. Consultorio 4",
        "direccion": "Blvd. Venustiano Carranza 4036, Virreyes Residencial, 25230 Saltillo",
        "horario": "Lunes a viernes de 8am a 8pm. (Visitas a domicilio).",
        "telefono": "4161043 | 8448692725",
        "ciudad": "saltillo",
        "correo": "dralilya@hotmail.com",
        "redes": "",
        "bio": "17 años de experiencia en rehabilitación física pediátrica.",
        "emergencia": "8444161043"
      },
      {
        "id": 13,
        "nombre": "Dr. Ana Patricia Cárdenas Vizcarra",
        "img": "avatar_w",
        "especialidad": "Medicina Física y Rehabilitación",
        "consultorio": "",
        "direccion": "",
        "horario": "",
        "telefono": "",
        "ciudad": "saltillo",
        "correo": "",
        "redes": "",
        "bio": "",
        "emergencia": ""
      },
      {
        "id": 14,
        "nombre": "Dr. Eduardo Iván Garza Garza",
        "img": "avatar_m",
        "especialidad": "Ginecología y Obstetricia",
        "consultorio": "",
        "direccion": "",
        "horario": "",
        "telefono": "",
        "ciudad": "saltillo",
        "correo": "",
        "redes": "",
        "bio": "",
        "emergencia": ""
      },
      {
        "id": 15,
        "nombre": "Dr. Ofelia Altagracia Díaz Morales",
        "img": "ofelia_altagracia",
        "especialidad": "Ginecología y Obstetricia",
        "consultorio": "Hospital La Concepción, consultorio 7",
        "direccion": "Blvd. Venustiano Carranza 4036, Virreyes Residencial, 25230 Saltillo",
        "horario": "Lunes a sábados de 8am a 1pm",
        "telefono": "4160105 | 4392641",
        "ciudad": "saltillo",
        "correo": "dra.alta@hotmail.com",
        "redes": "",
        "bio": "25 años de experiencia.",
        "emergencia": "8444160105"
      },
      {
        "id": 16,
        "nombre": "Dr. Armando Ramírez Alverde",
        "img": "armando_ramirez",
        "especialidad": "Ginecología y Obstetricia",
        "consultorio": "Hospital La Concepción, consultorio 6",
        "direccion": "Blvd. Venustiano Carranza 4036, Virreyes Residencial, 25230 Saltillo",
        "horario": "Lunes a jueves de 10am a 1pm y de 4pm a 8pm. Sábados de 10am a 1pm.",
        "telefono": "4160105 | 4392641 (Emergencia: 8444272290)",
        "ciudad": "saltillo",
        "correo": "aramirezal@hotmail.com",
        "redes": "",
        "bio": "25 años de experiencia. Diplomado en colposcopía y climaterio.",
        "emergencia": "8444160105"
      },
      {
        "id": 17,
        "nombre": "Dr. Angélica N. Díaz Castaño",
        "img": "avatar_w",
        "especialidad": "Medicina Interna",
        "consultorio": "",
        "direccion": "",
        "horario": "",
        "telefono": "",
        "ciudad": "saltillo",
        "correo": "",
        "redes": "",
        "bio": "",
        "emergencia": ""
      },
      {
        "id": 18,
        "nombre": "Dr. Derikah Gonzalez",
        "img": "avatar_w",
        "especialidad": "Reumatólogo",
        "consultorio": "",
        "direccion": "",
        "horario": "",
        "telefono": "",
        "ciudad": "saltillo",
        "correo": "",
        "redes": "",
        "bio": "",
        "emergencia": ""
      },
      {
        "id": 19,
        "nombre": "Dr. Edel Oliver Colín Rodulfo",
        "img": "avatar_m",
        "especialidad": "Traumatólogo y Ortopedia",
        "consultorio": "Hospital La Concepción, consultorio 38",
        "direccion": "Blvd. Venustiano Carranza 4036, Virreyes Residencial, 25230 Saltillo",
        "horario": "Lunes a viernes de 11 am a 1pm y 4pm a 6pm",
        "telefono": "4161807 (Emergencia: 8448800902)",
        "ciudad": "saltillo",
        "correo": "eocr17@hotmail.com",
        "redes": "",
        "bio": "Ortopedia y Traumatología / cirugía articular. 5 años ejerciendo.",
        "emergencia": "8444161807"
      },
      {
        "id": 20,
        "nombre": "Dr. Angélica N. Díaz Castaño",
        "img": "avatar_w",
        "especialidad": "Infectología",
        "consultorio": "",
        "direccion": "",
        "horario": "",
        "telefono": "",
        "ciudad": "saltillo",
        "correo": "",
        "redes": "",
        "bio": "",
        "emergencia": ""
      },
      {
        "id": 21,
        "nombre": "Dr. Germán Sorchini Barrón",
        "img": "german_sorchini",
        "especialidad": "Pediatra",
        "consultorio": "Hospital La Concepción, consultorio 37",
        "direccion": "Blvd. Venustiano Carranza 4036, Virreyes Residencial, 25230 Saltillo",
        "horario": "Previa Cita",
        "telefono": "4168085",
        "ciudad": "saltillo",
        "correo": "hersor37@hotmail.com",
        "redes": "",
        "bio": "30 años de experiencia. Facultad de Medicina de México e Instituto Nacional de Pediatría.",
        "emergencia": ""
      },
      {
        "id": 22,
        "nombre": "Dr. Germán Sorchini Barrón",
        "img": "german_sorchini",
        "especialidad": "Infectología",
        "consultorio": "Hospital La Concepción, consultorio 37",
        "direccion": "Blvd. Venustiano Carranza 4036, Virreyes Residencial, 25230 Saltillo",
        "horario": "Previa Cita",
        "telefono": "4168085",
        "ciudad": "saltillo",
        "correo": "hersor37@hotmail.com",
        "redes": "",
        "bio": "30 años de experiencia. Facultad de Medicina de México e Instituto Nacional de Pediatría.",
        "emergencia": ""
      },
      {
        "id": 23,
        "nombre": "Dr. Lorena Ayala Pineda",
        "img": "lorena_ayala",
        "especialidad": "Cirugía Plástica y Reconstructiva",
        "consultorio": "Hospital La Concepción, consultorio 25.",
        "direccion": "Blvd. Venustiano Carranza 4036, Virreyes Residencial, 25230 Saltillo",
        "horario": "Lunes a Viernes de 4:30 a 8pm",
        "telefono": "4162945 (Emergencia: 8444278700)",
        "ciudad": "saltillo",
        "correo": "dra_lorena_ayala@yahoo.com",
        "redes": "",
        "bio": "20 años de experiencia en cirugía plástica y reconstructiva. 15 años en cirugía de mano.",
        "emergencia": "8444162945"
      },
      {
        "id": 24,
        "nombre": "Dr. Guillermo Enrique Rosales Rocha",
        "img": "avatar_m",
        "especialidad": "Urólogía",
        "consultorio": "Hospital La Concepción, Torre 2, consultorio 25.",
        "direccion": "Blvd. Venustiano Carranza 4036, Virreyes Residencial, 25230 Saltillo",
        "horario": "",
        "telefono": "4390607",
        "ciudad": "saltillo",
        "correo": "",
        "redes": "",
        "bio": "",
        "emergencia": "8444390607"
      },
      {
        "id": 25,
        "nombre": "Dr. Alejandra Cruz Lozano",
        "img": "avatar_w",
        "especialidad": "Otorrinolaringología",
        "consultorio": "Torre Medyca – Adrián Muguerza 1115 – 202. Col. Brisas",
        "direccion": "",
        "horario": "(Previa Cita)",
        "telefono": "4150122 (Emergencia: 8444193810)",
        "ciudad": "saltillo",
        "correo": "alecruz03@hotmail.com",
        "redes": "",
        "bio": "",
        "emergencia": "8444150122"
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
      // console.log(city, specialty)
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


