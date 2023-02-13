import React from "react";
import picture from "../assets/picture.png";
import note from "../assets/note.png";

function UpperComponent() {
  return (
    <div className="flexContainer">
      <section className="leftSection" style={{ width: "30%" }}>
        <div className="basic">
          <img src={picture} alt="" />
          <h3>Diane Cooper</h3>
          <p className="paraContent">diane.cooper@example.com</p>
          <div className="posts">
            <div>
              <div className="paraCount">15</div>
              <p className="paraContent">Past</p>
            </div>
            <div className="posts1">
              <div className="paraCount">02</div>
              <p className="paraContent">Upcoming</p>
            </div>
          </div>
        </div>
        <button>Send Message</button>
        <div>
          <div className="files">Files/Documents</div>
          <div className="fileContent">
            <img src={note} />
            Check Up Results.pdf
          </div>
          <div className="fileContent">
            <img src={note} />
            Check Up Results.pdf
          </div>
          <div className="fileContent">
            <img src={note} />
            Dental X-Ray Results.pdf
          </div>
          <div className="fileContent">
            <img src={note} />
            Medical Prescription.pdf
          </div>
        </div>
      </section>
      <section style={{ width: "60%", padding: "3rem" }}>
        <div className="sideContent">
          <div className="container">
            <div className="paraContent">Gender</div>
            <div className="info">Female</div>
          </div>
          <div className="container">
            <div className="paraContent">Birthday</div>
            <div className="info">Feb 24th, 1997</div>
          </div>
          <div className="container">
            <div className="paraContent">Phone Number</div>
            <div className="info">(239) 555-0108</div>
          </div>
          <div className="container">
            <div className="paraContent">Registered Date</div>
            <div className="info">Feb 24th, 1997</div>
          </div>
          <div className="container">
            <div className="paraContent">Street Address</div>
            <div className="info">JL. Deponegoro No. 21</div>
          </div>
          <div className="container">
            <div className="paraContent">City</div>
            <div className="info">Cilacap</div>
          </div>
          <div className="container">
            <div className="paraContent">Zipcode</div>
            <div className="info">655849</div>
          </div>
          <div className="container">
            <div className="paraContent">Member Status</div>
            <div className="info">Active Member</div>
          </div>
        </div>

        <div className="options">
          <div
            className="testingButton"
            style={{ background: "white", color: "blue" }}
          >
            Upcoming Appointments
          </div>
          <div className="testingButton">Past Appointments</div>
          <div className="testingButton">Medical Reports</div>
        </div>
        <div className="lowerComponent">
          <div className="head">
            <div>Root Canal Treatment</div>
            <div
              className="testingButton"
              style={{ background: "white", color: "gray" }}
            >
              Show Previous Treatment
            </div>
          </div>
          <div className="body">
            <div className="bodyUpper">
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                  29 Nov `19
                </div>
                <div className="paraContent">09:00-10:00</div>
              </div>
              <div className="date">
                <div className="paraContent">Treatment</div>
                <div className="info">Open Access</div>
              </div>
              <div className="date">
                <div className="paraContent">Dentist</div>
                <div>Drg. Adam H.</div>
              </div>
              <div className="date">
                <div className="paraContent">Nurse</div>
                <div>Jessicamila</div>
              </div>
              <div
                className="date"
                style={{ color: "blue", display: "flex", alignItems: "center" }}
              >
                <img src={note} alt="" />
                <span style={{ fontSize: "11px" }}>Notes</span>
              </div>
            </div>
          </div>

          <div className="body">
            <div className="bodyUpper">
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                  12 Nov `19
                </div>
                <div className="paraContent">09:00-10:00</div>
              </div>
              <div className="date">
                <div className="paraContent">Treatment</div>
                <div className="info">Root Access</div>
              </div>
              <div className="date">
                <div className="paraContent">Dentist</div>
                <div>Drg. Adam H.</div>
              </div>
              <div className="date">
                <div className="paraContent">Nurse</div>
                <div>Jessicamila</div>
              </div>
              <div
                className="date"
                style={{ color: "blue", display: "flex", alignItems: "center" }}
              >
                <img src={note} alt="" />
                <span style={{ fontSize: "11px" }}>Notes</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UpperComponent;
