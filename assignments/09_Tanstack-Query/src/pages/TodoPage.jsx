import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";
import Page from "../components/Page";

const ENDPOINT = "https://jsonplaceholder.typicode.com/todos";

function TodoPage() {
  const inputRef = useRef(null);

  const { isPending, mutate } = useMutation({
    mutationFn: (variable) => axios.post(ENDPOINT, { variable }),

    onError: () => {
      alert("실패!");
    },
  });

  const handleClickButton = async () => {
    try {
      mutate(inputRef.current.value, {
        onSuccess: () => {
          alert("성공!");
        },
      });
      // const response = await axios.post(ENDPOINT, { value });
      // const data = response.data;
      // console.log(data);
    } catch {}
  };
  axios.get(ENDPOINT);
  return (
    <Page>
      <input
        type="text"
        className="border"
        ref={inputRef}
        disabled={isPending}
      />
      <button
        className="bg-black text-white"
        onClick={handleClickButton}
        disabled={isPending}
      >
        눌러주세요
      </button>
    </Page>
  );
}

export default TodoPage;
