import React from 'react'
import { Container, Row, Col, Card, Button, Input, Textarea } from 'raw-system'

const App = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Grid</h1>
          <Container>
            <Row>
              <Col>1</Col>
              <Col>2</Col>
            </Row>
            <Row>
              <Col>1</Col>
              <Col>2</Col>
              <Col>3</Col>
            </Row>
            <Row>
              <Col>1</Col>
              <Col>2</Col>
              <Col>3</Col>
              <Col>4</Col>
              <Col>5</Col>
              <Col>6</Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Typography</h1>
          <h1>H1 - The quick brown fox jumps over the lazy dog</h1>
          <h2>H2 - The quick brown fox jumps over the lazy dog</h2>
          <h3>H3 - The quick brown fox jumps over the lazy dog</h3>
          <h4>H4 - The quick brown fox jumps over the lazy dog</h4>
          <h5>H5 - The quick brown fox jumps over the lazy dog</h5>
          <h6>H6 - The quick brown fox jumps over the lazy dog</h6>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Button</h1>
          <Button>Button</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Card</h1>
          <Card style={{ width: '300px' }}>Test card</Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Input</h1>
          <Input placeholder='Placeholder' />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Textarea</h1>
          <Textarea placeholder='Placeholder' />
        </Col>
      </Row>
    </Container>
  )
}

export default App
