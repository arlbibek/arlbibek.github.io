import React from "react";

import "./ModalResume.css";

const ModalResume = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <>
      <div className="modal grid">
        <i
          className="fas fa-times dismiss"
          onClick={props.onClose}
          title="Dismiss"
        />
        <div className="modal-header">
          <h2 style={{ color: "#fff" }}>Bibek Aryal Resume 2021.</h2>
        </div>
        <div className="modal-content">
          <iframe
            title="Resume Bibek Aryal 2021"
            src="https://docs.google.com/gview?url=https://github.com/arlbibek/resume/raw/main/Resume%20Bibek%20Aryal%202021.pdf&embedded=true"
            style={{ width: "100%", height: "100%" }}
            frameborder="0"
          ></iframe>
        </div>
        <div className="modal-footer">
          <form
            method="get"
            action="https://github.com/arlbibek/resume/raw/main/Resume%20Bibek%20Aryal%202021.pdf"
          >
            <button
              className="btn download"
              type="submit"
              title="Save my Resume"
            >
              <i class="fa fa-download" /> Download
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default ModalResume;
