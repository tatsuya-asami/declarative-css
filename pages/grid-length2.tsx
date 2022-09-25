import type { NextPage } from "next";

const GridLength2: NextPage = () => {
  return (
    <div className="wrapper">
      <div className="header">header</div>
      <div className="left">left</div>
      <div className="centerTop">centerTop</div>
      <div className="centerMiddle">centerMiddle</div>
      <div className="centerBottom">centerBottom</div>
      <div className="right">right</div>
      <div className="footer">footer</div>

      <style jsx>{`
        .wrapper {
          height: 100vh;
          display: grid;
          grid-template:
            "left header       header" 100px
            "left centerTop    right" 1fr
            "left centerMiddle right" 2fr
            "left centerBottom right" 1fr
            "left centerBottom footer" 300px
            / 300px 1fr 3fr;
          gap: 10px 20px;
        }
        .header {
          grid-area: header;
          background-color: pink;
        }
        .left {
          grid-area: left;
          background-color: green;
        }
        .centerTop {
          grid-area: centerTop;
          background-color: blue;
        }
        .centerMiddle {
          grid-area: centerMiddle;
          background-color: yellow;
        }
        .centerBottom {
          grid-area: centerBottom;
          background-color: lightgreen;
        }
        .right {
          grid-area: right;
          background-color: red;
        }
        .footer {
          grid-area: footer;
          background-color: aqua;
        }
      `}</style>
    </div>
  );
};

export default GridLength2;
