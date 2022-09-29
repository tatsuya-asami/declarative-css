const KanzenKanzen = () => {
  return (
    <div className="outer">
      <div className="inner">
        <p>誰でも簡単に</p>
        <p>読みやすいCSSを書く方法がありました！！</p>
      </div>
      <style jsx>
        {`
          .outer {
            height: 100vh;
            display: grid;
            place-items: center;
          }

          .inner {
            width: 140px;
            padding: 5px 10px;
            border: 2px solid black;
            border-radius: 10px;
          }

          p {
            margin: 0;
          }
        `}
      </style>
    </div>
  );
};

export default KanzenKanzen;
