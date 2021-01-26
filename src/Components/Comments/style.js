import styled from "styled-components";
import { blue } from "../../Utilities/Utilities";

const Div = styled.div`
  width: 90%;
  margin: auto;
  margin-bottom: 30px;
  display: flex;
  align-items: flex-start;
  padding: 20px;
  border-radius: 8px;
  background: #ffffff90;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-image: radial-gradient(
      circle farthest-corner at -0.1% 100.8%,
      rgba(198, 0, 255, 1) 0.2%,
      rgba(0, 124, 255, 1) 59.1%,
      rgba(0, 234, 255, 1) 100%
    );
    box-shadow: 0 0 8px #505050;

    .commentContent {
      h5 {
        color: #fff;
      }
    }

    .author {
      box-shadow: 0 0 8px #000000;
    }
  }

  .head {
    display: flex;
    align-items: center;

    h6 {
      font-weight: 700;
      color: rgb(0, 0, 0);
      font-size: 12px;
    }

    h5 {
      margin-left: 10px;
      font-size: 12px;
      color: grey;
      font-weight: 100;
    }
  }

  .author {
    width: 50px;
    height: 50px;
    background: ${blue};
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  .commentContent {
    width: 80%;
    margin-left: 20px;

    .likes {
      height: 40px;
      display: flex;
      align-items: center;

      .like {
        width: 12px;
        height: 12px;

        img {
          width: 100%;
        }
      }

      h5 {
        margin-top: 5px;
        font-size: 12px;
        font-weight: 100;
        margin-left: 5px;
        color: #000;
      }
    }

    .comment {
      font-weight: 500;
      margin-top: 12px;
      color: #6578af;
      line-height: 18px;
    }
  }
`;

export default Div;
