import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import { Modal } from 'react-bootstrap';

import './../styles.css'

function MyCard(props) {
    const [showModal, setShowModal] = useState(false);
  
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const photo = require(`./../../img/portfolio/` + props.picture);
    return (
        <>
            <div onClick={openModal}>
                <Card className="h-100 d-flex flex-column cardHover">
                    <Card.Img top width="100%" src={photo} alt={props.name} className="cardImage" />
                    <Card.Body className='text-center mt-auto'>
                        <Card.Title>{props.name}</Card.Title>
                    </Card.Body>
                </Card>
            </div>

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={photo} alt={props.name} className="w-100" />
                </Modal.Body>
            </Modal>
      </>
    );
}

export default MyCard;