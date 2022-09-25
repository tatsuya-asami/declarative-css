import type { NextPage } from "next";

const GridNormal: NextPage = () => {
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
          grid-column-start: 1;
          grid-column-end: 4;
          grid-row-start: 1;
          grid-row-end: 2;
          background-color: pink;
        }
        .left {
          grid-column-start: 1;
          grid-column-end: 2;
          grid-row-start: 2;
          grid-row-end: 3;
          background-color: green;
        }
        .main {
          grid-column-start: 2;
          grid-column-end: 3;
          grid-row-start: 2;
          grid-row-end: 3;
          background-color: yellow;
        }
        .right {
          grid-column-start: 3;
          grid-column-end: 4;
          grid-row-start: 2;
          grid-row-end: 3;
          background-color: red;
        }
        .footer {
          grid-column-start: 1;
          grid-column-end: 4;
          grid-row-start: 3;
          grid-row-end: 4;
          background-color: aqua;
        }
      `}</style>
    </div>
  );
};

export default GridNormal;
