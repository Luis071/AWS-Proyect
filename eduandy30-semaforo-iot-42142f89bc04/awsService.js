const awsIot = require("aws-iot-device-sdk");

const device  =  awsIot.device({
  keyPath: './awsCerts/81b02903b7f4fa5bbaa43b8960f3f44532e062e6a500253d7d2b9bd14f98f376-private.pem.key',
  certPath: './awsCerts/81b02903b7f4fa5bbaa43b8960f3f44532e062e6a500253d7d2b9bd14f98f376-certificate.pem.crt',
  caPath: './awsCerts/AmazonRootCA1.pem',
  host: 'a224djswcwoxo7-ats.iot.us-east-1.amazonaws.com',
  clientId: 'Fase3',
  region: 'us-east-1',
});



module.exports = { device };
