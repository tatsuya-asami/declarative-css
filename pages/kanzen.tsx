const Kanzen = () => {
  return (
    <div className="outer">
      <div className="inner">
        <p>CSS</p>
        <p>完全に理解した</p>
      </div>
      <style jsx>
        {`
          .outer {
            position: fixed;
            inset: 0;
            margin: auto;
            width: 140px;
            height: 70px;
            padding: 5px 10px;
            border: 2px solid black;
            border-radius: 10px;
          }

          .inner {
            width: 100%;
            margin-left: 40px;
          }

          p {
            margin: 0;
          }
        `}
      </style>
    </div>
  );
};

export default Kanzen;
