const express = require('express')
const router = express.Router()
const multer = require('multer')
const multerConfig = require('./config/multer_config')
const upload = multer(multerConfig.config).single(multerConfig.keyUpload)
const db = require('./models')


router.get('/', (req, res) => {
    res.send('Hello');
})

router.get('/ListSECheck', async (req, res) => {
    const result = await db.Softs.findAll({
        order: [
            ['id', 'DESC' ]
        ]
    })
    res.status(200).json(result)
})

router.get('/ListIMCheck', async (req, res) => {
    const result = await db.Infors.findAll({
        order: [
            ['id', 'DESC' ]
        ]
    })
    res.status(200).json(result)
})

router.get('/ListMLCheck', async (req, res) => {
    const result = await db.Machines.findAll({
        order: [
            ['id', 'DESC' ]
        ]
    })
    res.status(200).json(result)
})

router.get('/ListPYCheck', async (req, res) => {
    const result = await db.Pythons.findAll({
        order: [
            ['id', 'DESC' ]
        ]
    })
    res.status(200).json(result)
})

router.get('/ListStudentCheck', async (req, res) =>{
    try{
        const result = await db.Softs.findAll({
            order: [
                ['id', 'DESC' ]
            ]
        })
        res.status(200).json(result)

        /*const subject = req.params.subject

        if (subject === "se") {
            const result = await db.Ses.findAll({
                order: [
                    ['id', 'DESC' ]
                ]
            })
            res.status(200).json(result)
        }else if (subject === "im") {
            const result = await db.Ims.findAll({
                order: [
                    ['id', 'DESC' ]
                ]
            })
            res.status(200).json(result)
        }else if (subject === "ml") {
            const result = await db.Mls.findAll({
                order: [
                    ['id', 'DESC' ]
                ]
            })
            res.status(200).json(result)
        }else if (subject === "py") {
            const result = await db.Pys.findAll({
                order: [
                    ['id', 'DESC' ]
                ]
            })
            res.status(200).json(result)
        }*/
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/CheckName', (req, res) => {
    upload(req, res, async (err) => {
        if (err instanceof multer.MulterError) {
            console.log(`error: ${JSON.stringify(err)}`)
            return res.status(500).json({ message: err })
        } else if (err) {
            console.log(`error: ${JSON.stringify(err)}`)
            return res.status(500).json({ message: err})
        }

        const d = req.body
        console.log(d)
        const data = {
            ...req.body,
            photo: req.file ? req.file.filename : undefined
        }
        console.log(data)

        var date = new Date();
        day = date.getDate();
        month = date.getMonth();
        year = date.getFullYear();
        data.day = `${day}-${month}-${year}`
        hours = date.getHours();
        if(hours/10 == 0){
            hours_ = `0${hours}`
            hours = hours_
        }
        minutes = date.getMinutes();
        if(minutes/10 == 0){
            minutes_ = `0${minutes}`
            minutes = minutes_
        }
        seconds = date.getSeconds();
        if(seconds/10 == 0){
            seconds_ = `0${seconds}`
            seconds = seconds_
        }
        data.time = `${hours} : ${minutes} : ${seconds}`

        try {
            data.photo = `./images/${data.subject}/${data.photo}`;
            sub = d.subject
            if(sub === 'se'){
                data.subject = 'SoftwareEngineering'
                const product = await db.Softs.create(data)
                res.status(201).json(product)
            }else if(sub === 'im'){
                data.subject = 'ImformationManagement'
                const product = await db.Infors.create(data)
                res.status(201).json(product)
            }else if(sub === 'ml'){
                data.subject = 'MachineLearning'
                const product = await db.Machines.create(data)
                res.status(201).json(product)
            }else if(sub === 'py'){
                data.subject = 'PythonforPredictive'
                const product = await db.Pythons.create(data)
                res.status(201).json(product)
            }
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    })

})


module.exports = router