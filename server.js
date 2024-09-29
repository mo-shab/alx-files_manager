const express = require('express');
const app = express();

// Ensure you're requiring the correct module
const routes = require('./routes/index'); 

const port = process.env.PORT || 5000;

// Use the imported routes as middleware
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});