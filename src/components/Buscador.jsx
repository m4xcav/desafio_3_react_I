import React from 'react';
import Form from 'react-bootstrap/Form';

const Buscador = ({ onBuscar }) => {
    const onEnter = (event) => {
        if (event.key === 'Enter') {
            const textoBusqueda = event.target.value;
            onBuscar(textoBusqueda);
        }
    };

    return (
        <Form>                
            <Form.Group controlId="formFile">
                <Form.Control
                    size="sm"
                    className="mb-3"
                    type="text"
                    placeholder="Buscar colaborador..."
                    onKeyDown={onEnter}
                />
            </Form.Group>                
        </Form>
    );
};

export default Buscador;
