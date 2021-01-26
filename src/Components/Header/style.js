import styled from "styled-components";
import { tablet } from "../../Utilities/Utilities";

const Div = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  box-shadow: 0 5px 5px #cccccc80;

  @media (min-with: ${tablet}) {
    padding: 50px 0;
    flex-direction: column;
    width: 100px;
    height: 100vh;
  }

  .logo {
    width: 60px;
    height: 60px;

    img {
      width: 100%;
    }
  }

  .menu {
    width: 50px;
    height: 45px;
    align-items: center;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 10px;

    &:hover {
      span:nth-child(2) {
        width: 70%;
      }
      span:nth-child(3) {
        width: 50%;
      }
    }

    span {
      width: 100%;
      height: 4px;
      background: #000;
      transition: width 0.3s;
    }
  }
`;

export default Div;
