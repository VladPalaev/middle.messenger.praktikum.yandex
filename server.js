const { json } = require('express');
const express = require('express');
const path = require('path');

require('dotenv').config();

const app = express();
const pathStaticDir = path.resolve(__dirname, 'dist');
const PORT = process.env.PORT ?? 4200;

app.use(express.static(pathStaticDir));
app.use('/static', express.static(path.resolve(__dirname, 'static')));
app.use(json())



app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
