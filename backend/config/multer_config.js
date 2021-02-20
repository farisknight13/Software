const multer = require('multer')
const fs = require('fs')


module.exports = multerConfig = {
    config: {
        storage: multer.diskStorage({
            destination: (req, file, next) => {
                const body = req.body
                const folder = `./images/`
                if(!fs.existsSync(folder)){
                    fs.mkdirSync(folder)
                }
                const folder_subject = `./images/${body.subject}`
                if(!fs.existsSync(folder_subject)){
                    fs.mkdirSync(folder_subject)
                }
                next(null, folder_subject)
            },
            filename: (req, file, next) => {
                const body = req.body
                const ext = file.mimetype.split('/')[1]
                next(null, `${body.id}-${body.name}-${Date.now()}.${ext}`)
            }
        }),
        limits: { fileSize: 1024 * 1024 * 5 },
        fileFilter: (req, file, next) => {
            const image = file.mimetype.startsWith('image/')
            if(image){
                next(null, true)
            }else{
                next({message: `File type not supported`}, false)
            }
          }
    },
    keyUpload: 'photo'
}