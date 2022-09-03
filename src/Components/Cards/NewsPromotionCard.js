import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap'

const NewsPromotionCard = props => {
  let { imgSrc, by, date, title, description } = props.data1;
  return (
    <div>
      {[
        'Trasnparent',
      ].map((variant) => (
        <Card bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ backgroundColor: 'transparent', border: 'none' }}
          className="m-2">
          <Card.Img className='np-card-image' src={imgSrc} />
          <Card.Body>
            <Card.Text className='np-card-by'>{by}</Card.Text>
            <Card.Text className='np-card-date'>{date}</Card.Text>
            <Card.Text className='np-card-title'>{title}</Card.Text>
            <Card.Text className='np-card-description'>{description}</Card.Text>
          </Card.Body>
          <a class="np-readmorebtn" href="#">Read More {'>'}</a>
        </Card>
      ))
      }
    </div>
  )
}

export default NewsPromotionCard;