const express = require('express');
const app = express();
require('dotenv').config();

const childRoutes = require('./routes/childRoutes');
const userRoutes = require('./routes/userRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const agencyRoutes = require('./routes/agencyRoutes');
const logRoutes = require('./routes/logRoutes');

app.use(express.json());

app.use('/api/children', childRoutes);
app.use('/api/users', userRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/agencies', agencyRoutes);
app.use('/api/logs', logRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
