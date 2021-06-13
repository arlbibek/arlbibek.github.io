// React Component
import React from "react";

// CSS
import "./ModalResume.css";

const ModalResume = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <iframe
            title="Resume Bibek Aryal 2021"
            src="https://docs.google.com/gview?url=https://github.com/arlbibek/resume/raw/main/Resume%20Bibek%20Aryal%202021.pdf&embedded=true"
            style={{
              width: "100%",
              height: "100%",
            }}
            frameborder="0"
          ></iframe>
          <div className="modal-header">
            <div className="modal-item md-title">
              <h2>Bibek Aryal Resume.</h2>
            </div>
            <div className="modal-item md-buttons">
              <div className="md-btn">
                <form
                  method="get"
                  action="https://github.com/arlbibek/resume/raw/main/Resume%20Bibek%20Aryal%202021.pdf"
                >
                  <button className="" type="submit" title="Download my Resume">
                    <i class="fa fa-download" /> <span>Download</span>
                  </button>
                </form>
              </div>
              <div className="md-btn close">
                <i
                  className="fas fa-times"
                  onClick={props.onClose}
                  title="dismiss"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ModalResume;
