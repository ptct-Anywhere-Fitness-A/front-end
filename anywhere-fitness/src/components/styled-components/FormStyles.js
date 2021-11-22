import styled from "styled-components";

const Form = styled.form`
  background-color: #c4e4b5;
  align-content: center;
  padding: 50px;
  border: 3px #83ca9c solid;
  border-radius: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  width: 40%;
`;

const Input = styled.input`
  padding: 0.5em;
  color: fff;
  background: #f7faf8;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
`;

const Label = styled.label`
  margin-bottom: 1.5em;
  display: block;
  color: #0d420d;
`;

const Button = styled.button`
  padding: 0.5em 0.75em;
  background: #f7faf8;
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 5px;
`;

export { Form, Input, Label, Button };
