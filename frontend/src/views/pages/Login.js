import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { login } from '../../redux/actions/authActions';
import { Redirect } from 'react-router-dom';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
} from 'reactstrap';

const Login = ({ error, success }) => {
  const [auth, setAuth] = useState({
    email: '',
    password: '',
  });

  //---------
  const [auterror, setAutherror] = useState(null);
  const [authsuccess, setAuthsuccess] = useState(null);

  // dispatch
  const dispatch = useDispatch();

  // use Effect get data
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (auterror && auterror !== null) {
      setAutherror(error);
      dispatch({ type: 'TOGGLE_SUCCESS' });
    }
    if (authsuccess) {
      setAuthsuccess(success);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auterror, authsuccess]);

  // get value
  function handleInputChange(e) {
    setAuth({ ...auth, [e.target.name]: e.target.value });
  }

  // if click submit
  function handleFormSubmit(event) {
    event.preventDefault();
    dispatch(login(auth));
  }

  function showError() {
    return error && <div className="alert alert-danger">{error}</div>;
  }

  function redirectAuth() {
    return success && <Redirect to="/" />;
  }

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-muted text-center mt-2 mb-3">
              <small>Sign in with</small>
            </div>
            {showError()} {redirectAuth()}
            <Form onSubmit={handleFormSubmit} role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    required
                    type="email"
                    name="email"
                    value={auth.email}
                    onChange={(event) => handleInputChange(event)}
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    required
                    autoComplete="new-password"
                    name="password"
                    value={auth.password}
                    onChange={(event) => handleInputChange(event)}
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Button className="my-4" color="primary" type="submit">
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

const mapStateToProps = ({ auth: { error, success } }) => ({
  error,
  success,
});

export default connect(mapStateToProps, null)(Login);
