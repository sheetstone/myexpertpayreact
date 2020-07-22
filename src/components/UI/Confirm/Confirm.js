import React, { useState } from 'react';

import { Modal, Button }  from 'react-bootstrap';

// How to Use:
// Wrap around the function you want have confirmation dialog:
// <Confirm title="Delete action Confirmation" description="Are you sure to delete this case?">
// { confirm => (
//     <Button variant="link" size="sm" onClick={e => confirm(() => onDeleteClicked(key), e)}>Delete</Button>
// )} 
// </Confirm>

const Confirm = props => {
    const {title, description } = props;
    const [show, setShow ] = useState(false);
    const [callBack, setCallBack ] = useState(null);

    const open = (cb, event) => {
        setShow(true);
        setCallBack({fn: cb }); //Can assign callback to fn direct, react will excute the callback function.
    }

    const close = () => {
        setShow(false);
        setCallBack(null);
    }

    const confirmed = () => {
        callBack.fn();
        close();
    }

    console.log(props);
    return (
        <>
            {props.children(open)}
            <Modal
                show={show}
                onHide={close}
                backdrop="static"
                keyboard={true}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {description}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="link" onClick={close}>Cancel</Button>
                    <Button variant="primary" onClick={confirmed}>Yes</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Confirm;