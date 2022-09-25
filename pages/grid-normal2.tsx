import type { NextPage } from "next";

const GridNormal2: NextPage = () => {
  return (
    <div className="wrapper">
      <div className="header">header</div>
      <div className="left">left</div>
      <div className="main">main</div>
      <div className="right">right</div>
      <div className="footer">footer</div>

      <style jsx>{`
        .wrapper {
          height: 100vh;
          display: grid;
        }
        .header {
          grid-column: 1 / 4;
          grid-row: 1 / 2;
          background-color: pink;
        }
        .left {
          grid-column: 1 / 2;
          grid-row: 2 / 3;
          background-color: green;
        }
        .main {
          grid-column: 2 / 3;
          grid-row: 2 / 3;
          background-color: yellow;
        }
        .right {
          grid-column: 3 / 4;
          grid-row: 2 / 3;
          background-color: red;
        }
        .footer {
          grid-column: 1 / 4;
          grid-row: 3 / 4;
          background-color: aqua;
        }
      `}</style>
    </div>
  );
};

export default GridNormal2;
