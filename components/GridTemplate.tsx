export const GridTemplate = () => {
  return (
    <div className="wrapper">
      <div className="header">header</div>
      <div className="left">left</div>
      <div className="main">main</div>
      <div className="right">right</div>
      <div className="footer">footer</div>

      <style jsx>{`
        .header {
          background-color: pink;
        }
        .left {
          background-color: green;
        }
        .main {
          background-color: yellow;
        }
        .right {
          background-color: red;
        }
        .footer {
          background-color: aqua;
        }
      `}</style>
    </div>
  );
};
