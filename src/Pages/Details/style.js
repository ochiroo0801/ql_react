import styled from "styled-components";

const Div = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  padding-left: 100px;
  position: relative;

  .detailsPopUp {
    margin: auto;
    width: $wrapper;
    z-index: 1;
    min-height: 100vh;
    position: relative;

    .header {
      width: 90%;
      background-size: cover;
      background-position: top center;
      display: flex;
      height: 280px;
      border-radius: 0 80px 0 80px;

      .left {
        flex: 0.5;

        .image {
          width: 100%;
          padding: 50px;
          position: relative;
          cursor: pointer;

          img {
            width: 100%;
            border-radius: 10px;
          }

          .icon {
            width: 60px;
            height: 60px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #fff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 15px 15px 20px #0e0b20;

            img {
              width: 50%;
            }
          }
        }
      }

      .rigth {
        flex: 0.5;
        margin-top: 50px;
        position: relative;

        h2 {
          color: #fff;
          font-weight: 500;
        }
      }
    }

    .comments {
      margin-left: 30px;
      position: relative;
      min-height: 450px;
      margin-top: -80px;
      width: 95%;
      padding-top: 180px;
      padding-bottom: 50px;
      border-radius: 0 80px 80px 0;
      background-repeat: repeat-y;
      background-size: auto;
      z-index: -1;
      background: rgba(0, 1, 78, 0.226);

      h4 {
        margin-left: 80px;
        margin-bottom: 20px;
      }
    }
  }

  .toHome {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    background-size: cover;
    background-repeat: repeat-y;
  }

  .player {
    width: 100%;
    height: 100vh;
    position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;

    .video {
      width: 1280px;
      height: 780px;
      background: #000;
    }

    .shadow {
      position: absolute;
      cursor: pointer;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.788);
      z-index: -1;
    }
  }
`;

export default Div;
