import { Container } from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const ItemListContainer = ({ greeting }) => {
    console.log(greeting);
    return (
        <>
            <Alert variant="success">
                    {greeting}
            </Alert>
        </>
    );
};

export default ItemListContainer;