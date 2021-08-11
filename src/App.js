import "./styles.css";
import { useState } from "react";
import ReactDom from "react-dom";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="App">
        <button onClick={() => setIsOpen(true)}>Open</button>
        <Modal
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          Fancy Modal
        </Modal>
      </div>
      <div className="other">some other block</div>
    </>
  );
}

function Modal({ children, isOpen, onClose }) {
  if (!isOpen) return null;
  return ReactDom.createPortal(
    <>
      <div className="overlay"></div>
      <div className="modal">
        <button onClick={onClose}>close</button>
        <div>{children}</div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
