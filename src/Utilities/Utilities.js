import styled from "styled-components";

const wrapper = "70%";
const blue = "#414fe6";
const grey = "#3a4055";
const toDown = `linear-gradient(#000105, #080321)`;
const toLeft = `linear-gradient(90deg, #000105 0%, #080321 80%)`;

const phonexl = `576px`;
const tablet = `768px`;
const desktop = `992px`;
const desktopxl = `1200px`;

const Wrapper = styled.div`
  margin: auto;
  padding: 0 10px;
  width: 100%;

  @media (min-width: ${tablet}) {
    padding: 0;
    width: 70%;
  }
`;

export {
  wrapper,
  blue,
  grey,
  toDown,
  toLeft,
  phonexl,
  tablet,
  desktop,
  desktopxl,
  Wrapper,
};
