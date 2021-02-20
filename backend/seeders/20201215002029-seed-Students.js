'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    data_std.map(item=>{
      item.created_at = new Date()
      item.updated_at = new Date()
    })

    return queryInterface.bulkInsert('Students', data_std, {})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {})
  }
};

const data_std = [
  {
    "id": 61050220,
    "name": "nanthipat",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg",
    "subject": "ImformationManagement"
  },
  {
    "id": 6150229,
    "name": "pathipol",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg",
    "subject": "SoftwareEngineering"
  },
  {
    "id": 61050239,
    "name": "piyathida",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg",
    "subject": "SoftwareEngineering"
  },
  {
    "id": 61050242,
    "name": "pongsatorn",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg",
    "subject": "PythonforPredictive"
  },
  {
    "id": 61050246,
    "name": "pornthawee",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg",
    "subject": "PythonforPredictive"
  },
  {
    "id": 61050254,
    "name": "pichaiporn",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg",
    "subject": "ImformationManagement"
  },
  {
    "id": 61050255,
    "name": "phimporn",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg",
    "subject": "PythonforPredictive"
  },
  {
    "id": 61050258,
    "name": "faris",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg",
    "subject": "PythonforPredictive"
  },
  {
    "id": 61050285,
    "name": "worarat",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg",
    "subject": "MachineLearning"
  },
  {
    "id": 61050292,
    "name": "siriluk",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg",
    "subject": "PythonforPredictive"
  },
  {
    "id": 61050302,
    "name": "sorawit",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg",
    "subject": "ImformationManagement"
  },
  {
    "id": 61050960,
    "name": "anongnrat",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg",
    "subject": "PythonforPredictive"
  },
  {
    "id": 62050111,
    "name": "jeonjungkook",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg",
    "subject": "PythonforPredictive"
  },
  {
    "id": 62050222,
    "name": "parkjimin",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg",
    "subject": "MachineLearning"
  },
  {
    "id": 62050333,
    "name": "kimnumjoon",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg",
    "subject": "SoftwareEngineering"
  },
  {
    "id": 62050444,
    "name": "kimseokjin",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg",
    "subject": "PythonforPredictive"
  },
  {
    "id": 62050555,
    "name": "jonghoseok",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg",
    "subject": "ImformationManagement"
  },
  {
    "id": 62050666,
    "name": "minyoonki",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg",
    "subject": "PythonforPredictive"
  },
  {
    "id": 62050777,
    "name": "kimtaehyung",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg",
    "subject": "SoftwareEngineering"
  },
  {
    "id": 63050111,
    "name": "jungkook",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg",
    "subject": "PythonforPredictive"
  },
  {
    "id": 63050222,
    "name": "jimin",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg",
    "subject": "PythonforPredictive"
  },
  {
    "id": 63050333,
    "name": "jhope",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg",
    "subject": "SoftwareEngineering"
  },
  {
    "id": 63050444,
    "name": "rm",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg",
    "subject": "ImformationManagement"
  },
  {
    "id": 63050555,
    "name": "jin",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg",
    "subject": "MachineLearning"
  },
  {
    "id": 63050666,
    "name": "suga",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg",
    "subject": "PythonforPredictive"
  },
  {
    "id": 63050777,
    "name": "v",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg",
    "subject": "SoftwareEngineering"
  },
  {
    "id": 64050111,
    "name": "jenny",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg",
    "subject": "ImformationManagement"
  },
  {
    "id": 64050222,
    "name": "lisa",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg",
    "subject": "ImformationManagement"
  },
  {
    "id": 64050333,
    "name": "jisoo",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg",
    "subject": "PythonforPredictive"
  },
  {
    "id": 64050444,
    "name": "rose",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg",
    "subject": "SoftwareEngineering"
  },
  {
    "id": 65050111,
    "name": "soobin",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg",
    "subject": "MachineLearning"
  },
  {
    "id": 65050222,
    "name": "beomgyu",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg",
    "subject": "PythonforPredictive"
  },
  {
    "id": 65050333,
    "name": "yoenjun",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg",
    "subject": "ImformationManagement"
  },
  {
    "id": 65050444,
    "name": "taehyun",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg",
    "subject": "MachineLearning"
  },
  {
    "id": 65050555,
    "name": "kai",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg",
    "subject": "SoftwareEngineering"
  }
]
