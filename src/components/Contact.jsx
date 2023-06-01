import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  background-color: #B4F8C8;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
  overflow: hidden;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: rgba(180, 248, 200, 0.4);
  }

  &:hover::before {
    animation: sh02 0.5s 0s linear;
  }

  &::before {
    content: '';
    display: block;
    width: 0;
    height: 100%;
    position: absolute;
    top: 0;
    left: -100%;
    background-color: #fff;
    transform: skewX(-20deg);
    transition: left 0.5s ease-in-out;
  }

  @keyframes sh02 {
    from {
      left: -100%;
    }
    to {
      left: 100%;
    }
  }
`;


const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_id",
        "template_id",
        ref.current,
        "public_key"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            <Button type="submit">Send</Button>
            {success &&
              "Your message has been sent. We'll get back to you soon :)"}
          </Form>
        </Left>
      </Container>
    </Section>
  );
};

export default Contact;