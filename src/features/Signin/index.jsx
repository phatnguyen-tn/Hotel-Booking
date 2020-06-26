import React from "react";
import { Form, FormGroup, Input, Label, Button, Container } from "reactstrap";

Signin.propTypes = {};

function Signin(props) {
  return (
    <Container className="w-50 mt-5">
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
          />
        </FormGroup>

        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
          />
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    </Container>
  );
}

export default Signin;
