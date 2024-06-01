import { useEffect } from "react";
import { useToast } from "../../contexts/toast.context";

function Toast({ id, title, content, delay }) {
  const toast = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      toast.close(id);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <li>
      <div className="shadow-lg bg-white p-6 border rounded-lg w-[320px] transition translate-x-370px flex items-center duration-500 text-sm ">
        <div className="grow flex flex-col">
          <h6 className="font-semibold">{title}</h6>
          <p>{content}</p>
        </div>
      </div>
    </li>
  );
}

export default Toast;
