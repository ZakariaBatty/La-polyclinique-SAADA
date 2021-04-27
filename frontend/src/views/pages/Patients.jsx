import React, { useState } from 'react';
// import { useDispatch, connect } from 'react-redux';
// reactstrap components
import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    Table,
    Container,
    Row,
    Col,
    Button,
    FormGroup,
    Input,
    Form
} from 'reactstrap';
import { Modal } from 'react-bootstrap'
// core components
import Header from '../../components/Headers/Header';

const Patients = () => {

    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Header />
            {/* Page content */}
            <Container className="mt--7" fluid>
                {/* Table */}
                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <Col lg="12" md="12" className="mr-autoo">
                                    <Button variant="primary" onClick={() => setModalShow(true)}>
                                        Ajouter patient
                                    </Button>

                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                    />
                                </Col>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Nom & Prénom</th>
                                        <th scope="col">Téléphone</th>
                                        <th scope="col">cin</th>
                                        <th scope="col">dtns</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Badge color="" className="badge-dot mr-4">
                                                <i className="bg-success" />
                                            </Badge>
                                        </td>
                                        <td>
                                            <Badge color="" className="badge-dot mr-4">
                                                <i className="bg-warning" />
                                            </Badge>
                                        </td>
                                        <td>
                                            <Badge color="" className="badge-dot mr-4">
                                                <i className="bg-success" />
                                            </Badge>
                                        </td>
                                        <td>
                                            <Badge color="" className="badge-dot mr-4">
                                                <i className="bg-success" />
                                            </Badge>
                                        </td>
                                        <td className="text-right">
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <CardFooter className="py-4"></CardFooter>
                        </Card>
                    </div>
                </Row>
            </Container>
        </>
    );
}


function MyVerticallyCenteredModal(props) {

    const [doctor, setDoctor] = useState({
        firstName: '',
        lastName: '',
        specialty: '',
        matricule: '',
        maxConsultation: '',

    })

    // const dispatch = useDispatch();

    function handleInputChange(e) {
        setDoctor({ ...doctor, [e.target.name]: e.target.value })
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        // dispatch(addNewDoctor(doctor))
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    nouveaux docteur
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>  Entrez les informations du médecin </h4>
                <Form onSubmit={handleFormSubmit} role="form" method="post">
                    <div className="pl-lg-4">
                        <Row>
                            <Col lg="6">
                                <FormGroup>
                                    <Input
                                        className="form-control-alternative"
                                        placeholder="Nom"
                                        type="text"
                                        name="firstName"
                                        value={doctor.firstName}
                                        onChange={(e) => handleInputChange(e)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col lg="6">
                                <FormGroup>
                                    <Input
                                        className="form-control-alternative"
                                        placeholder="Prénom"
                                        type="text"
                                        name="lastName"
                                        value={doctor.lastName}
                                        onChange={(e) => handleInputChange(e)}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="6">
                                <FormGroup>
                                    <Input
                                        className="form-control-alternative"
                                        type="text"
                                        name="specialty"
                                        placeholder="spécialité"
                                        value={doctor.specialty}
                                        onChange={(e) => handleInputChange(e)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col lg="6">
                                <FormGroup>
                                    <Input
                                        className="form-control-alternative"
                                        placeholder="matricule"
                                        type="text"
                                        name="matricule"
                                        value={doctor.matricule}
                                        onChange={(e) => handleInputChange(e)}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </div>
                    <div className="pl-lg-4">
                        <Row>
                            <Col lg="6">
                                <FormGroup>
                                    <Input
                                        className="form-control-alternative"
                                        id="input-postal-code"
                                        placeholder="Consultation max"
                                        type="number"
                                        name="maxConsultation"
                                        value={doctor.maxConsultation}
                                        onChange={(e) => handleInputChange(e)}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </div>
                    <Modal.Footer>
                        <Button onClick={props.onHide}>Close</Button>
                        <Button variant="primary" type="submit">
                            Ajouter docteur
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default Patients