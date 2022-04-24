import React from "react";
import "./index.css";
import { useState } from "react";
import DefaultTable from "./DefaultTable";
function NotesApp() {
  const [nameInput, setNameInput] = useState("");
  const [statusInput, setStatusInput] = useState("");
  const [noteList, setNoteList] = useState([]);
  const [allButton, setAllButton] = useState(false);
  const [activeButton, setActiveButton] = useState(false);
  const [completedButton, setCompletedButton] = useState(false);
  const titleChangehandler = (event) => {
    setNameInput(event.target.value);
  };
  const statusChangehandler = (event) => {
    setStatusInput(event.target.value);
  };
  const addNoteHandler = () => {
    setNoteList((notelistValue) => [
      ...notelistValue,
      { value: nameInput, status: statusInput },
    ]);
    setNameInput("");
    setStatusInput("");
    handleAllButton();
  };
  const handleAllButton = () => {
    setAllButton(true);
    setActiveButton(false);
    setCompletedButton(false);
  };
  const handleActiveButton = () => {
    setAllButton(false);
    setActiveButton(true);
    setCompletedButton(false);
  };
  const handleCompletedButton = () => {
    setAllButton(false);
    setActiveButton(false);
    setCompletedButton(true);
  };
  return (
    <div className="layout-column align-items-center justify-content-start">
      <section className="layout-row align-items-center justify-content-center mt-30">
        <input
          data-testid="input-note-name"
          type="text"
          className="large mx-8"
          placeholder="Note Title"
          onChange={titleChangehandler}
          value={nameInput}
        />
        <input
          data-testid="input-note-status"
          type="text"
          className="large mx-8"
          placeholder="Note Status"
          onChange={statusChangehandler}
          value={statusInput}
        />
        <button
          className=""
          data-testid="submit-button"
          onClick={addNoteHandler}
        >
          Add Note
        </button>
      </section>

      <div className="mt-50">
        <ul className="tabs">
          <li
            className="tab-item slide-up-fade-in"
            data-testid="allButton"
            onClick={handleAllButton}
          >
            All
          </li>
          <li
            className="tab-item slide-up-fade-in"
            data-testid="activeButton"
            onClick={handleActiveButton}
          >
            Active
          </li>
          <li
            className="tab-item slide-up-fade-in"
            data-testid="completedButton"
            onClick={handleCompletedButton}
          >
            Completed
          </li>
        </ul>
      </div>
      <div className="card w-40 pt-30 pb-8">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody data-testid="noteList">
            {allButton == true
              ? noteList.map((noteItem) => {
                  return (
                    <tr>
                      <td>{noteItem.value}</td>
                      <td>{noteItem.status}</td>
                    </tr>
                  );
                })
              : ""}
            {activeButton == true
              ? noteList.map((noteItem) => {
                  if (noteItem.status == "Active") {
                    return (
                      <tr>
                        <td>{noteItem.value}</td>
                        <td>{noteItem.status}</td>
                      </tr>
                    );
                  } else {
                    return <></>;
                  }
                })
              : ""}
            {completedButton == true
              ? noteList.map((noteItem) => {
                  if (noteItem.status == "Completed") {
                    return (
                      <tr>
                        <td>{noteItem.value}</td>
                        <td>{noteItem.status}</td>
                      </tr>
                    );
                  } else {
                    return <></>;
                  }
                })
              : ""}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NotesApp;
