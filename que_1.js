// Write an backend API to upload an image to AWS S3. This API will be
// called from the front end, 
// and the image received in the backend is in form Data

import express from 'express'
import multer from 'multer'
import AWS from 'aws-sdk'

const app = express()

function load(req,res,next){
    
    // We will use multer for Load From Data and which will Tie to req object
    const upload = multer.load()
    upload((err,res) => {
        if(err){
          res.status(400).send('Error while loading the image')
        }
        next()
    })
}

function backendAPI(req,res,next){
    
    const image = req.file[0]
    
    // Create S3 Client
    const s3 = new AWS({
      accessKeyId : '12234444',
      secretAccessKey : '1213sswdsd'
    })
    
    const uploadObjConfig = {
      AWS_BUCKET_NAME : 'IMAGE',
      content : image
    }
    // Upload to S3 bucket
    s3.upload(uploadObjConfig,(err,res)=>{
      if(err){
        res.status(500).send('Error While uploading to S3')
      }
      res.status(200).send('Image Uploaded to S3')
    })
 
}


app.use('/upload',load, backendAPI)


app.listen(3000,()=>{
  console.log('Server is listening on Port',3000)
})




