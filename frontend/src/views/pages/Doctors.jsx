import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { addNewDoctor, getAllDoctor } from '../../redux/actions/doctorActions'

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
    Input,
    Form,
    FormGroup,
} from 'reactstrap';
import { Modal, FormControl } from 'react-bootstrap'
// core components
import Header from '../../components/Headers/Header';

const Doctors = ({ doctors }) => {
    const [modalShow, setModalShow] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllDoctor());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modalShow]);

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
                                <Col lg="12" md="12" className="mx-autoo">
                                    <Col lg="6" md="6" className="mr-autoo">
                                        <Button variant="primary" onClick={() => setModalShow(true)}>
                                            Ajouter docteur
                                        </Button>

                                        <MyVerticallyCenteredModal
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                        />
                                    </Col>
                                    <Col lg="6" md="6" className="ml-autoo">
                                        <Form inline>
                                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                            <Button variant="outline-info">Search</Button>
                                        </Form>
                                    </Col>
                                </Col>

                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Nom & Prénom</th>
                                        <th scope="col">specialties</th>
                                        <th scope="col">matricule</th>
                                        <th scope="col">Max consultation</th>
                                        <th scope="col">Téléphone</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {doctors && doctors.map((doctor, index) => (
                                        <tr key={index}>
                                            <td>
                                                <Badge color="" className="badge-dot mr-4">
                                                    <i className="bg-success" />
                                                    {doctor.firstName} {doctor.lastName}
                                                </Badge>
                                            </td>
                                            <td>
                                                <Badge color="" className="badge-dot mr-4">
                                                    <i className="bg-success" />
                                                    {doctor.specialty}
                                                </Badge>
                                            </td>
                                            <td>
                                                <Badge color="" className="badge-dot mr-4">
                                                    <i className="bg-success" />
                                                    {doctor.matricule}
                                                </Badge>
                                            </td>
                                            <td>
                                                <Badge color="" className="badge-dot mr-4">
                                                    <i className="bg-success" />
                                                    {doctor.maxConsultation}
                                                </Badge>
                                            </td>
                                            <td>
                                                <Badge color="" className="badge-dot mr-4">
                                                    <i className="bg-success" />
                                                    0687906466
                                                </Badge>
                                            </td>
                                            <td>
                                                <Badge color="" className="badge-dot mr-4">
                                                    <i className="bg-success" />
                                                    action
                                                </Badge>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <CardFooter className="py-4"></CardFooter>
                        </Card>
                    </div>
                </Row>
            </Container >
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

    const dispatch = useDispatch();

    function handleInputChange(e) {
        setDoctor({ ...doctor, [e.target.name]: e.target.value })
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        dispatch(addNewDoctor(doctor))
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

const mapStateToProps = ({ doctor: { doctors } }) => ({
    doctors
})


export default connect(mapStateToProps, null,)(Doctors);