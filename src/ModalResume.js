import React from "react";

import "./ModalResume.css";

const ModalResume = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <>
      <div className="modal grid">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title">
              <h2>Bibek Aryal Resume 2021.</h2>
              <form
                method="get"
                action="https://github.com/arlbibek/resume/raw/main/Resume%20Bibek%20Aryal%202021.pdf"
              >
                <button
                  className="btn download"
                  type="submit"
                  title="Download my Resume"
                >
                  <i class="fa fa-download" /> Download
                </button>
              </form>
            </div>
            <div className="modal-close">
              <i
                className="fas fa-times"
                onClick={props.onClose}
                title="dismiss"
              />
            </div>
          </div>
          <iframe
            title="Resume Bibek Aryal 2021"
            src="https://docs.google.com/gview?url=https://github.com/arlbibek/resume/raw/main/Resume%20Bibek%20Aryal%202021.pdf&embedded=true"
            style={{
              width: "100%",
              height: "100%",
            }}
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </>
  );
};
export default ModalResume;
