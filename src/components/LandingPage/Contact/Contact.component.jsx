import React, { useState } from "react"

import {
  ContactContainer,
  Container,
  ContactTitle,
  Split,
  Row,
  Form,
  Field,
  Submit
} from "./Contact.styles"

const Contact = () => {
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  })

  const onChange = e => {
    setFields({
      fields,
      [e.target.name]: e.target.value
    })
  }

  return (
    <ContactContainer>
      <Container>
        <ContactTitle top={20}>Subscribe to our Newsletter!</ContactTitle>
        <Form>
          <Split>
            <Field
              onChange={onChange}
              type="text"
              name="firstName"
              value={fields.firstName}
              placeholder="First Name"
            />
            <Field
              onChange={onChange}
              type="text"
              name="lastName"
              value={fields.lastName}
              placeholder="Last Name"
            />
          </Split>
          <Row>
            <Field
              onChange={onChange}
              type="email"
              name="email"
              value={fields.email}
              placeholder="Email Address"
            />
          </Row>
          <Row>
            <Submit type="submit" value="Subscribe" />
          </Row>
        </Form>
      </Container>
    </ContactContainer>
  )
}

export default Contact
