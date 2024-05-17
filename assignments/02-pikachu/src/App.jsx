import { useEffect, useRef, useState } from "react";
import "./App.css";
import pikachu from "./assets/img/pikachu.png";

function App() {
  const START_ROW_POSITION = 0;
  const START_COLUMN_POSITION = 0;
  const BLOCK_WIDTH = 50;
  const BLOCK_HEIGHT = 50;
  const MAX_ROW_NUM = 500;
  const MAX_COLUMN_NUM = 500;
  const MIN_ROW_NUM = 0;
  const MIN_COLUMN_NUM = 0;
  const ANIMATION_DELAY = 300;
  const [position, setPosition] = useState({
    x: START_ROW_POSITION,
    y: START_COLUMN_POSITION,
    direction: 1,
  });
  const pikachuRef = useRef(null);

  const movePikachu = (x, y, direction) => {
    const moveX = BLOCK_WIDTH * x;
    const moveY = BLOCK_HEIGHT * y;

    direction && turnPikachu(direction);

    setPosition((prev) => {
      const newX = prev.x + moveX;
      const newY = prev.y + moveY;

      if (newX < MIN_ROW_NUM || newX >= MAX_ROW_NUM) return prev;
      if (newY < MIN_COLUMN_NUM || newY >= MAX_COLUMN_NUM) return prev;

      return {
        x: newX,
        y: newY,
        direction: direction ? direction : prev.direction,
      };
    });
  };

  const jumpPikachu = (direction) => {
    pikachuRef.current.animate(
      [
        {
          transform: `scaleX(${direction})`,
        },
        {
          transform: `translateY(-${BLOCK_HEIGHT}px) scaleX(${direction})`,
        },
      ],
      {
        duration: ANIMATION_DELAY,
      }
    );
  };

  const turnPikachu = (direction) => {
    pikachuRef.current.style.transform = `scaleX(${direction})`;
    pikachuRef.current.style.transition = `${ANIMATION_DELAY}`;
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 37 || e.key === "ArrowRight") {
        movePikachu(1, 0, 1);
      } else if (e.key === 39 || e.key === "ArrowLeft") {
        movePikachu(-1, 0, -1);
      } else if (e.key === 38 || e.key === "ArrowUp") {
        movePikachu(0, -1);
      } else if (e.key === 40 || e.key === "ArrowDown") {
        movePikachu(0, 1);
      } else if (e.key === 32 || e.key === " ") {
        jumpPikachu(position.direction);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [position]);

  return (
    <div>
      <img
        ref={pikachuRef}
        className="pikachu"
        src={pikachu}
        style={{ left: position.x, top: position.y }}
      />
      <div className="img-wrapper" />
    </div>
  );
}

export default App;
