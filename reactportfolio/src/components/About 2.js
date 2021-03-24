import React from "react";

function About2() {
  function imgClick1(e) {
    e.prevent.default();
    
  }
  return (
    <>
      <div className="imgClick">
        <div class="col-12 col-sm-6 col-lg-4 secRow">
          <p className="bio">
            {" "}
            <img
              onClick={() => imgClick1(true)}
              alt="basketball"
              className="ballPic"
              src="https://i.insider.com/5bc0f3f4ae84ee77042e3363?width=1100&format=jpeg&auto=webp"
            ></img>
          </p>
        </div>
      </div>
    </>
  );
}

export default About2;
