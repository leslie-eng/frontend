import React from 'react'
import {Link, useParams} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Button, Card, ListGroupItem} from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

function ProductScreen (){
    const { id } = useParams();
    console.log('ID:', id);
    console.log('Products:', products);

    const product = products.find((p) => p._id === id);
    console.log('Found Product:', product);
    
    if (!product) {
        return <div>Product not found!</div>;
    }
  return (
    <div>
        <Link to='/' className='btn btn-light my-3'>Go back</Link> 
        <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid/>
            </Col>

            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                    <h3>{product.name}</h3>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Rating value={product.rating} text={'${product.numReviews} reviews'} color={'#f8e825'}/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Product:${product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Description:{product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <Row>
                                <Col>Price:</Col>
                                <Col>
                                <strong>${product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>Status:</Col>
                                <Col>
                                <strong>
                                    {product.countInStock > 0 ? 'In Stock': 'Out of Stock'}
                                </strong>
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroup.Item>
                            <Button className='btn-block' disabled={product.countInStock === 0}></Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </div>
  )
}

export default ProductScreen