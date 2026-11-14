const http = require('node:http');

const puerto = 9090;

const servidor = http.createServer((solicitud, respuesta) => {
  respuesta.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  respuesta.end(
    'Examen final :)\n' +
    'Proyecto de Arquitectura de Computadores\n' +
    'Carné: 7590-23-7243\n' +
    'La aplicación Node.js está funcionando correctamente dentro de Docker.'
  );
});
servidor.listen(puerto, '0.0.0.0', () => {
  console.log(`Servidor listo en el puerto ${puerto}`);
});