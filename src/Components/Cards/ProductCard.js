import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap'

const ProductCard = props => {
  let { location, sublocation, imgSrc, title, description } = props.data;
  return (
    <div className='container-fluid'>
      {[
        'TrasnparentGrey',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ backgroundColor: 'grey', border: 'none', borderRadius: '5%' }}
          className="mb-2 m-5">
          <Card.Title className='product-card-location' style={{ display: 'flex', flexDirection: 'row', marginLeft: '5%', backgroundColor: 'transparent', fontSize: '37px' }}>{location}
            <Card.Subtitle className='product-card-sublocation' style={{ flex: 0.4, marginTop: '3%', marginLeft: '3%', fontSize: '23px' }}>{sublocation}</Card.Subtitle>
          </Card.Title>
          <Card.Img className='product-card-image' variant='top' src={imgSrc} />
          <Card.Body>
            <Card.Title className='product-card-title' style={{ fontSize: '30px' }}>{title}</Card.Title>
            <Card.Title className='product-card-description' style={{ fontSize: '16px' }}>{description}</Card.Title>
          </Card.Body>
          <div class="text-center p-3">
            <button
              type="button"
              class="btn btn-light"
              style={{ fontWeight: 500, fontSize: '18px', marginRight: '1rem' }}
            >
              Join Hunt
            </button>
            <button
              type="button"
              class="btn btn-outline-light"
              style={{ fontWeight: 500, fontSize: '18px' }}
            >
              Learn More
            </button>
          </div>
        </Card>
      ))
      }
    </div>
  )
}



export default ProductCard;





