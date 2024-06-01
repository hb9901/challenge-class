import { useEffect, useState } from "react";
import { useToast } from "../../contexts/toast.context";

function Toast({ id, title, content, delay }) {
  const toast = useToast();
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const closeTimer = setTimeout(() => {
      toast.close(id);
    }, delay + 1000);

    const moveLeftTimer = setTimeout(() => {
      setIsOpen((prev) => !prev);
    });

    const moveRightTimer = setTimeout(() => {
      setIsOpen((prev) => !prev);
    }, delay + 500);

    return () => {
      clearTimeout(closeTimer);
      clearTimeout(moveLeftTimer);
      clearTimeout(moveRightTimer);
    };
  }, []);

  return (
    <li>
      <div
        className={`shadow-lg bg-white p-6 border rounded-lg w-[320px] transition flex items-center duration-500 text-sm ${
          isOpen ? "translate-x-[calc(100%+24px)]" : "!translate-x-0"
        }`}
      >
        <div className="grow flex flex-col">
          <h6 className="font-semibold">{title}</h6>
          <p>{content}</p>
        </div>
      </div>
    </li>
  );
}

export default Toast;
