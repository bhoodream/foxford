const express = require('express');
const cors = require('cors');

const app = express();
const port = 9000;

app.use(cors());

app.get('/users', (req, res) => {
    res.json([
        { id: '1', name: 'Мария', surName: 'Сидорова', age: 55 },
        { id: '2', name: 'Иван', surName: 'Петров', age: 15 },
        { id: '3', name: 'Вениамин', surName: 'Захаров', age: 99 },
        {
            id: '4',
            name: 'Сноуоул',
            surName: 'Эллен Джорджиане Сер-Леккен',
            age: 8,
        },
    ]);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
