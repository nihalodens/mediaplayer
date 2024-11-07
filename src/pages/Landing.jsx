// rafce
import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/guitar.jpg'
import feature1 from '../assets/gui.jpg'
import feature2 from '../assets/pia.jpg'
import feature3 from '../assets/drum.jpg'
import { Card } from 'react-bootstrap'



const Landing = () => {
  return (
    <div style={{ padding: '100px' }} className='container'>
      {/* Landing part */}
      <div className='row align-items-center'>
        <div className='col-lg-5'>
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{ textAlign: 'justify' }}>Media Player App will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!!</p>
          <Link to={'/home'} className='btn btn-info'>Get Started</Link>
        </div>
        <div className='col'></div>
        <div className='col-lg-6'>
          <img className='img-fluid ms-5' style={{ width: '300px' }} src={landingImg} alt="" />
        </div>
      </div>
      {/*  */}
      <div className='my-5'>
        <h3 className='text-center'>Features</h3>
        <div className='row mt-5'>
          <div className='col-lg-4'>
            <Card style={{ width: '22rem' }}>
              <Card.Img height={'250px'} variant="top" src={feature1}/>
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                Users can upload, view and remove the videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-lg-4'>
            <Card style={{ width: '22rem' }}>
              <Card.Img height={'250px'} variant="top" src={feature2}/>
              <Card.Body>
                <Card.Title>Categorise Videos
                </Card.Title>
                <Card.Text>
                Users can categorise the videos by drag and drop feature
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-lg-4'>
            <Card style={{ width: '22rem' }}>
              <Card.Img height={'250px'} variant="top" src={feature3}/>
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                Users can manage the watch history of all videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className='my-5 row align-items-center border rounded p-5'>
        <div className="col-lg-5">
          <h3 className='text-warning'>Simple,Fast and Powerful</h3>
          <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder'>Play Everything</span>:Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, tenetur vel neque odio quibusdam quae quod illo rerum. Rem nesciunt numquam perspiciatis fugit nisi ullam? Animi voluptatum laboriosam dignissimos possimus.</p>
          <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder'>Categories Videos</span>:Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, tenetur vel neque odio quibusdam quae quod illo rerum. Rem nesciunt numquam perspiciatis fugit nisi ullam? Animi voluptatum laboriosam dignissimos possimus.</p>
          <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder'>Managing History</span>:Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, tenetur vel neque odio quibusdam quae quod illo rerum. Rem nesciunt numquam perspiciatis fugit nisi ullam? Animi voluptatum laboriosam dignissimos possimus.</p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
        <iframe width="100%" height="568" src="https://www.youtube.com/embed/ISxgctEnrNM" title="&quot;ബോംബേക്കാരാ, ജാവോ എന്ന് പറയണം&quot; ;  &#39;ഭീഷ്മ പർവ്വ&#39;ത്തിലെ ഒരു കൊലമാസ്സ് സീൻ..."  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Landing