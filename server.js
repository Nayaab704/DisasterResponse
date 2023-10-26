const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const volunteerRoutes = require('./routes/volunteerRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// will Add other routes here..
app.use('/api/volunteers', volunteerRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
