import "./App.css";
import Modal from "./components/Modal";
import { useModal } from "./contexts/modal.context";
import "./custom.css";

function App() {
  const modal = useModal();
  // const scrollLock = useScrollLock(); 

  const handleClickButton = () => {
    modal.open(<Modal />);
  };

  return (
    <main>
      <button onClick={handleClickButton}>모달 띄우기</button>
      {Array(5000)
        .fill()
        .map((_, index) => (
          <div key={index}>{index + 1}</div>
        ))}
    </main>
  );
}

export default App;
