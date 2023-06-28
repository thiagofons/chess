import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const MovementsData = ({ moves }) => {
  const getMoveText = (move, index) => {
    if (move.isCapture) {
      return (
        <Row>
          {index + 1}. <span style={{ display: 'contents' }}><img className="movements__data__piece" src={move.srcPiece.src} alt={move.srcPiece.alt} /></span> {move.srcSquare.id.toUpperCase()} Captura <span style={{ display: 'contents' }}><img className="movements__data__piece" src={move.capturePiece.src} alt={move.capturePiece.alt} /></span> {move.destSquare.id.toUpperCase()}
        </Row>
      )
    } else {
      return (
        <Row>
          {index + 1}. <span style={{ display: 'contents' }}><img className="movements__data__piece" src={move.srcPiece.src} alt={move.srcPiece.alt} /></span> {move.srcSquare.id.toUpperCase()} -> {move.destSquare.id.toUpperCase()}
        </Row>
      )
    }

  }

  return (
    <Container className="movements__data overflow-auto">
      <Row>
        <Col md='6' className='px-5 py-1' id='white' >
          <Row>Branco</Row>
          {moves.map((move, index) => {
            if (move.srcPiece.color == "white") {
              return (
                getMoveText(move, index)
              )
            } else {
              return (<Row><br /></Row>);
            }

          })}
        </Col>
        <Col md='6' className='px-5 py-1' id='black'>
          <Row>Preto</Row>
          {moves.map((move, index) => {
            if (move.srcPiece.color == "black") {
              return (
                getMoveText(move, index)
              )
            } else {
              return (<Row><br /></Row>);
            }
          })}
        </Col>
      </Row>
    </Container>
  )
}

export default MovementsData;