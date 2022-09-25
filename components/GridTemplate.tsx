export const GridTemplate = () => {
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
          grid-template:
            "header header header"
            "left main right"
            "footer footer footer";
        }
        .header {
          grid-area: header;
          background-color: pink;
        }
        .left {
          grid-area: left;
          background-color: green;
        }
        .main {
          grid-area: main;
          background-color: yellow;
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
