import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  font-size: 32px;
  font-weight: 700;
  margin: 80px auto 30px auto;
`;

function Title({ text }) {
  return <Div>{text}</Div>;
}

export default Title;
