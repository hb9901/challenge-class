import { useModal } from "../contexts/modal.context";
import Backdrop from "./Backdrop";

function Modal() {
  const modal = useModal();

  return (
    <Backdrop>
      <article className="modal">
        Modal
        <button onClick={() => modal.close()}>닫기 버튼</button>
      </article>
    </Backdrop>
  );
}

export default Modal;
