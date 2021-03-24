import React from "react";
import "../utils/About.css";
import { Modal, Button } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      className="modalFirst"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Most of my time after college was spent working to maintain normal
          expenses. My major started as computer engineering which included
          learning coding with Python, a different language then I use now.
          Struggled at first but made great connections.
        </p>
        <img
          alt="basketball"
          className="modalPic1"
          src="https://media4.giphy.com/media/HGLtXrhNu22oxTAmzQ/200w.webp?cid=ecf05e47fbkakxv19ime9gdhqzk4crh0n0av0hvk7rrhn2e3&rid=200w.webp"
        ></img>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal1(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Trapped in the same things leads to the same ways. Now I know what I
          want and can’t seek to anyone for it. Forced me to make a change.
        </p>
        <img
          alt="basketball"
          className="modalPic1"
          src="https://media0.giphy.com/media/kclHo5njjKaPkFx1w0/200w.webp?cid=ecf05e47rhgpvscz40xxp4ueayz1fmgu1utlfs72xlzlkyrq&rid=200w.webp"
        ></img>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal2(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Knowing the opportunities I’m more susceptible to because of my
          everyday improvement motivates me to code. Full stack development fits
          my peronnel in the aspect of allowing myself to visualize my thoughts
          and be as creative as possible.
        </p>
        <img
          alt="basketball"
          className="modalPic1"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzYiBrCoGOL6ph0G1_AFGEWYhJuD5hGGAyoQ&usqp=CAU"
        ></img>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal3(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
        I play a lot video games and watch twitch.  Also have a past in film aspects and video production.  I can make a playlist of music to explain my life’s destiny. 
        </p>
        <img
          alt="basketball"
          className="modalPic1"
          src="https://media0.giphy.com/media/UmQrx37p5LVxC/200w.webp?cid=ecf05e47c8cps1coplsf75a01nfyip6b2frykjf3a7nuv6h4&rid=200w.webp"
        ></img>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal4(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
        In high school,  I played basketball for the team and achieved a lot with the program.  My dog keeps me company every once in a while I mirror NBA highlights in the garage.
        </p>
        <img
          alt="basketball"
          className="modalPic1"
          src=" data:image/jpeg;base64,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"
        ></img>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function About() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow1, setModalShow1] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  const [modalShow3, setModalShow3] = React.useState(false);
  const [modalShow4, setModalShow4] = React.useState(false);

  return (
    <>
      <div className="aboutpage">
        <div className="heading"></div>
        <div className="Cardbio">
          <p className="bio">
            While keeping an open mind I strive to achieve many goals for
            progression. My positive attitude motivates me to get involved with
            activities that better my chance for the best outcome. Staying
            involved with current events and technology focuses on a creative
            aspect with coding.{" "}
          </p>
          <h1 className="view">Click To View</h1>
        </div>
        <div className="Card">
          <div className="row" id="gallery">
            <div class="col-12 col-sm-6 col-lg-4 secRow">
              <p className="bio">
                {" "}
                <img
                  onClick={() => setModalShow(true)}
                  alt="basketball"
                  className="ballPic"
                  src="https://i.insider.com/5bc0f3f4ae84ee77042e3363?width=1100&format=jpeg&auto=webp"
                ></img>
              </p>
            </div>
            <div class="col-12 col-sm-6 col-lg-4">
              <p className="bio">
                {" "}
                <img
                  onClick={() => setModalShow1(true)}
                  alt="basketball"
                  className="ballPic"
                  src="https://i.pinimg.com/originals/00/03/37/00033795066a73d61dcb7628c624d1e2.jpg"
                ></img>
              </p>
            </div>
            <div class="col-12 col-sm-6 col-lg-4 secRow">
              <p className="bio">
                {" "}
                <img
                  onClick={() => setModalShow2(true)}
                  alt="basketball"
                  className="ballPic"
                  src="data:image/jpeg;base64,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"
                ></img>
              </p>
            </div>
          </div>
        </div>

        <div className="Card2">
          <h2 className="hiTitle">Learn More</h2>
          <div className="row" id="gallery">
            <div class="col-12 col-sm-6 col-lg-6">
              <p className="bio">
                {" "}
                <img
                  onClick={() => setModalShow3(true)}
                  alt="basketball"
                  className="ballPic"
                  src="data:image/jpeg;base64,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"
                ></img>
              </p>
            </div>
            <div class="col-12 col-sm-6 col-lg-6">
              <p className="bio">
                {" "}
                <img
                  onClick={() => setModalShow4(true)}
                  alt="basketball"
                  className="ballPic"
                  src="https://c.pshere.com/photos/bf/eb/art_basketball_basket_basketball_court_building_cartoon_city_daytime_graffiti-1002179.jpg!d"
                ></img>
              </p>
            </div>
          </div>
        </div>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <MyVerticallyCenteredModal1
          show={modalShow1}
          onHide={() => setModalShow1(false)}
        />
        <MyVerticallyCenteredModal2
          show={modalShow2}
          onHide={() => setModalShow2(false)}
        />
        <MyVerticallyCenteredModal3
          show={modalShow3}
          onHide={() => setModalShow3(false)}
        />
        <MyVerticallyCenteredModal4
          show={modalShow4}
          onHide={() => setModalShow4(false)}
        />
      </div>
    </>
  );
}

export default About;
