// index.js

'const'; express = require('express');
'const'; bodypParser = require ('body-parser');
'const'; mongoose = require ('mongoose');

'const';app = express();
'const';port =process.env.PORT; 3000;

app.use(bodyParser.json());

mongoose.connect('I will input mongodb url later for i have no internet',
{
    useNewURLParser: true,
    UseUnifiedTopology: true});

    app.listen(port, ()=> {
        console.log('server is running on port ${3000}');
    });

    'const';Patient = require('./models/patient');

    app.post('/patients', async (req, res)=> {
        try{
            'const'; newPatient = await
            patient.create(req.body);
            res.json(newPatient);
        } catch (error) {
            res.status(500).json({ error:
            'Internal Server Error'});
        }
    });


    




    