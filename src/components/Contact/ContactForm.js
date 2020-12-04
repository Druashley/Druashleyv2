import React from "react";
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function ContactForm() {
  const [state, handleSubmit] = useForm("xnqobyya");
  if (state.succeeded) {
    return <p>Thank you for the message. I will reply as soon as possible.</p>;
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label>Message</label>
      <textarea rows="20" cols="15" id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button type="submit" disabled={state.submitting}>
        Submit <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
      </button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  background: #6e6d6d;
  min-height: 25vh;
  min-width: 50%;
  border: 2px solid black;
  box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.3);
  margin: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: white;
  border-radius: 1rem;
  padding: 1rem 2rem;
  label {
    font-weight: bolder;
    display: block;
    font-size: 2rem;
    padding: 0.5rem 0rem;
  }

  textarea {
    resize: none;
  }
  button {
    margin: 1rem 0rem 0rem 70%;
    min-width: 25%;
    align-content: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  @media (max-width: 1300px) {
    margin: 2rem 0rem;
    width: 80%;
    button {
      margin: 1rem 0rem 0rem 70%;
      display: flex;
      width: 25%;
      align-content: center;
      font-size: small;
      text-align: center;
    }
  }

  @media (max-width: 700px) {
    width: 90%;
    button {
      margin: 1rem 0rem 0rem 50%;
      width: 45%;
    }
  }
`;

export default ContactForm;
