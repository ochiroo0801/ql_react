import { motion } from "framer-motion";
import styled from "styled-components";
import { desktop, phonexl } from "../../Utilities/Utilities";

const Div = styled(motion.div)`
  width: 100%;
  background-image: linear-gradient(#000105, #080321);
  padding: 50px;
  border-radius: 20px;
  margin-top: 50px;

  @media (min-width: ${phonexl}) {
    margin: auto;
    width: $wrapper;
  }

  .top {
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (min-width: ${desktop}) {
      flex-direction: row;
    }

    .logo {
      width: 80px;
      height: 80px;

      img {
        width: 100%;
      }
    }

    .rigth {
      margin-left: 0;
      text-align: center;
      margin-top: 20px;

      @media (min-width: ${desktop}) {
        margin-top: 0;
        margin-left: 50px;
      }

      h2 {
        color: #fff;
      }
    }

    .location {
      display: flex;
      margin-top: 15px;

      img {
        width: 23px;
      }

      h3 {
        margin-left: 20px;
        color: grey;
        font-weight: 400;
      }
    }
  }

  .middle {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    margin-top: 50px;
    color: #fff;

    @media (min-width: ${desktop}) {
      flex-direction: row;
    }

    .item {
      flex: 1;
      width: 100%;
      padding: 15px 0;

      @media (min-width: ${desktop}) {
        padding: 0;
      }

      &:nth-child(2) {
        border-top: 1px solid #575757;
        border-bottom: 1px solid #575757;

        @media (min-width: ${desktop}) {
          border: none;
          border-left: 1px solid #575757;
          border-right: 1px solid #575757;
        }
      }

      h2 {
        font-weight: 400;
        font-size: 18px;
        margin-top: 8px;
      }
    }
  }
`;

export default Div;
