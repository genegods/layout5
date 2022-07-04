import React from "react";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";
import Content4 from "./Content4";
import Content5 from "./Content5";
import Content6 from "./Content6";
import Content7 from "./Content7";


const MainPage = () => {
  return (
    <React.Fragment>
      <section>
        <div className="layout">
          <div className="content1 centered">
            <Content1 />
          </div>
          <div className="content2 centered">
            <Content2 />
          </div>
          <div className="content3 centered">
            <Content3 />
          </div>
          <div className="content4 centered">
            <Content4 />
          </div >
          <div className="content5 centered">
            <Content5 />
          </div>
          <div className="content6 centered">
            <Content6 />
          </div>
          <div className="content7 centered">
            <Content7 />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default MainPage;
