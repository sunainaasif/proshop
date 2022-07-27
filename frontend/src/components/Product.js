import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Rating from './Rating'

const Product = ({product}) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image} variant='top'/>
        </Link>
        <Card.Body>
            <Link to={`/product/${product._id}`}>
                <Card.Text as='div'>
                    <h3>{product.name}</h3>
                    <div className="my-3">
                       <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                    </div>

                </Card.Text>
                <Card.Text as="h3">$ {product.price}</Card.Text>
            </Link>
        </Card.Body>
    </Card>
  )
}

export default Product