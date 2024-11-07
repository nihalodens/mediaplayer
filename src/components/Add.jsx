// rafce
import React,{useState} from 'react'
import { Modal,Button,Form,FloatingLabel, Alert } from 'react-bootstrap'
import { saveVideoAPI } from '../services/allAPI';

const Add = ({setAddResponseFromHome}) => {
  const [invalidYouTubeLink,setInvalidYouTubeLink] = useState(false)
  const [show, setShow] = useState(false);
  const [videoDetails,setVideoDetails] = useState({
    caption:"",imgUrl:"",youTubeLink:""
  })
  console.log(videoDetails);
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const extractingEmbedLinkFromYoutubeLink = (userInputYouTubeLink)=>{
    // steps creating embed link from you tube link
    if(userInputYouTubeLink.includes("https://www.youtube.com/watch?v=")){
      console.log(userInputYouTubeLink.split("v=")[1].slice(0,11));
      const videoId = userInputYouTubeLink.split("v="[1].slice(0,11))
      setInvalidYouTubeLink(false)
      setVideoDetails({...videoDetails,youTubeLink:`https://www.youtube.com/embed${videoId}`})
    }else{
      setInvalidYouTubeLink(true)
      setVideoDetails({...videoDetails,youTubeLink:""})

    }
  }

  const handleUploadVideo = async ()=>{
    // object destructure : const {key1,key2,....} = object-name
    const {caption,imgUrl,youTubeLink} = videoDetails
    if (caption && imgUrl && youTubeLink){
      // store video details permanently
      // 
      try{
        const result = await saveVideoAPI(videoDetails)
        console.log(result);
        if(result.status>=200 && result.status<300){
          // 
          alert("video uploaded succesfully")
          handleClose
          // pass result to view component
          setAddResponseFromHome(result)
        }else{
          console.log(result);  
        }
        
      }catch(err){
          console.log(err);  
      }
      alert("proceed to store video details permanently")
    }else
    alert("please fill the form!!!")
  }

  return (
    <>
    <div className='d-flex align-items-center'>
      <h5>Upload new video</h5>
      <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5'>+</button>
    </div>

    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
        <Modal.Header closeButton>
          <Modal.Title>Uploading Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border rounded p-3">
          <FloatingLabel onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} controlId="floatingCaption" label="Video Caption">
          <Form.Control type="text" placeholder="Video Caption" />
          </FloatingLabel>
          <FloatingLabel className='mt-2' controlId="floatingUrl" label="Video Image Url">
          <Form.Control onChange={e=>setVideoDetails({...videoDetails,imgUrl:e.target.value})} type="text" placeholder="Video Image Url" />
          </FloatingLabel>
          <FloatingLabel className='mt-2' controlId="floatingLink" label="Video Youtube Link">
          <Form.Control  onChange={e=>extractingEmbedLinkFromYoutubeLink(e.target.value)} type="text" placeholder="Video Youtube Link" />
          </FloatingLabel>
          {
           invalidYouTubeLink &&
          <div className='text-danger fw-bolder mt-2'>Invalid youTube Link...please try with other!!!!</div>
          }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleUploadVideo} className='btn btn-info' variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
    

    
  )
}

export default Add