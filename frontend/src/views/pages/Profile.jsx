import React, { useState } from 'react';

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
} from 'reactstrap';
// core components
import ProfileHeader from '../../components/Headers/ProfileHeader';

const Profile = () => {
    // stock value owner in object owner  use useState
    const [owner, setOwner] = useState({
        firstName: '',
        lastName: '',
        cin: '',
        email: '',
        rib: '',
        telephone: '',
    });

    // get value from input
    function handleInputChange(e) {
        setOwner({ ...owner, [e.target.name]: e.target.value });
    }

    // function fr send data
    function handleFromSubmit(e) {
        e.preventDefault();
        console.log(owner);
    }

    return (
        <>
            <ProfileHeader />
            {/* Page content */}
            <Container className="mt--7" fluid>
                <Row>
                    <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
                        <Card className="card-profile shadow">
                            <Row className="justify-content-center">
                                <Col className="order-lg-2" lg="3">
                                    <div className="card-profile-image">
                                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                            <img
                                                alt="..."
                                                className="rounded-circle"
                                                src={
                                                    require('../../assets/img/theme/team-4-800x800.jpg')
                                                        .default
                                                }
                                            />
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                            <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"></CardHeader>
                            <CardBody className="pt-0 pt-md-4">
                                <Row>
                                    <hr className="my-3" />
                                    <div className="col">
                                        <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                                            <div className="text-center">
                                                <h3>zakaria batty</h3>
                                                <div className="h5 font-weight-300">
                                                    <i className="ni location_pin mr-2" />
                                                    Email : zbatty1297@gmail.com
                                                </div>
                                                <div className="h5 mt-4">
                                                    <i className="ni business_briefcase-24 mr-2" />
                                                    Phone : +212687904633
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className="order-xl-1" xl="8">
                        <Card className="bg-secondary shadow">
                            <CardHeader className="bg-white border-0"></CardHeader>
                            <CardBody>
                                <Form onSubmit={handleFromSubmit} role="form">
                                    <Row className="align-items-center">
                                        <Col xs="8">
                                            <h3 className="mb-0">My account</h3>
                                        </Col>
                                        <Col className="text-right" xs="4">
                                            <Button color="info" type="submit">
                                                Edit profile
                                            </Button>
                                        </Col>
                                    </Row>
                                    <h6 className="heading-small text-muted mb-4">
                                        User information
                                    </h6>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-first-name"
                                                    >
                                                        First name
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        defaultValue="Lucky"
                                                        id="input-first-name"
                                                        placeholder="First name"
                                                        type="text"
                                                        name="firstName"
                                                        value={owner.firstName}
                                                        onChange={(e) => handleInputChange(e)}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-last-name"
                                                    >
                                                        Last name
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        defaultValue="Jesse"
                                                        id="input-last-name"
                                                        placeholder="Last name"
                                                        type="text"
                                                        name="lastName"
                                                        value={owner.lastName}
                                                        onChange={(e) => handleInputChange(e)}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="12">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-email"
                                                    >
                                                        Email address
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-email"
                                                        placeholder="jesse@example.com"
                                                        type="email"
                                                        name="email"
                                                        value={owner.email}
                                                        onChange={(e) => handleInputChange(e)}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col lg="4">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-city"
                                                    >
                                                        Cin
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        defaultValue="New York"
                                                        id="input-city"
                                                        placeholder="Cin"
                                                        type="text"
                                                        name="cin"
                                                        value={owner.cin}
                                                        onChange={(e) => handleInputChange(e)}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="4">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-country"
                                                    >
                                                        Rib
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        defaultValue="United States"
                                                        id="input-country"
                                                        placeholder="Country"
                                                        type="number"
                                                        name="rib"
                                                        value={owner.rib}
                                                        onChange={(e) => handleInputChange(e)}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="4">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-country"
                                                    >
                                                        Phone
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-postal-code"
                                                        placeholder="Number phone"
                                                        value={owner.telephone}
                                                        type="number"
                                                        name="telephone"
                                                        onChange={(e) => handleInputChange(e)}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Profile;