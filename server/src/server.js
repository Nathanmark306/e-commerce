const http = require('http');
const { app } = require('./app');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

require('dotenv').config();

mongoose.connection.once('open', () => console.log('DB connection ready'));
mongoose.connection.on('error', (error) => console.error(error));

async function loadOnStart() {
  await mongoose.connect(process.env.MONGODB_URL);
  //'mongodb+srv://ecommerce:7EpEUDMoHkvwEfWp@nasacluster.znbvauu.mongodb.net/?retryWrites=true&w=majority'

  server.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
  });
}

loadOnStart();
