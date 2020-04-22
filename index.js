const http = require('./app.js');
const PORT = 8080;

// On lance le serveur sur le port :8080
http.listen(PORT, () => console.log(`nodejs-express-server listening on port ¯\\_(ツ)_/¯ ${PORT}`));
