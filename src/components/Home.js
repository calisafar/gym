import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import image from '../image/Gym.mp4';
// import image1 from '../images/trainer-img1.png';
function Home() {
  return (
    <div className="video-container">
    <video src={image} alt="" className="image-fluid" autoPlay loop muted/>
    
    {/* <Card style={{ width: '18rem' }} className="product-card"> <Card.Img variant="top" src={image1} /> <Card.Body> 
      <Card.Title>Card Title</Card.Title> <Card.Text> Some quick example text to build on the card title and make up the bulk of the card's content. </Card.Text> 
      <Button variant="primary">Go somewhere</Button>
     </Card.Body> </Card>
     <Card style={{ width: '18rem' }} className="product-card"> <Card.Img variant="top" src={image1} /> <Card.Body> 
      <Card.Title>Card Title</Card.Title> <Card.Text> Some quick example text to build on the card title and make up the bulk of the card's content. </Card.Text> 
      <Button variant="primary">Go somewhere</Button>
     </Card.Body> </Card>
     <Card style={{ width: '18rem' }} className="product-card"> <Card.Img variant="top" src={image1} /> <Card.Body> 
      <Card.Title>Card Title</Card.Title> <Card.Text> Some quick example text to build on the card title and make up the bulk of the card's content. </Card.Text> 
      <Button variant="primary">Go somewhere</Button>
     </Card.Body> </Card> */}
     
  

     </div>
  )
}

export default Home