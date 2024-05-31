import { useEffect } from "react";
import { useToast } from "../../contexts/toast.context";

function Toast({ id, title, content, delay }) {
  const toast = useToast();

  useEffect(() => {
    console.log(id, delay);
    const timer = setTimeout(() => {
      toast.close(id);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <li className="">
      <div className="flex flex-col shadow-lg bg-white p-6 border rounded-lg w-[320px] transition translate-x-[calc(100%+24px)] items-start duration-500 text-sm !translate-x-0">
        <h6 className="font-semibold">{title}</h6>
        <p>{content}</p>
      </div>
    </li>
  );
}

export default Toast;
