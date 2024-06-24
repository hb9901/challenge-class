import { DefaultError, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";

const endpoint = "https://jsonplaceholder.typicode.com/posts";

function PostForm() {
  const titleDOMRef = useRef<HTMLInputElement>(null);
  const bodyDOMRef = useRef<HTMLTextAreaElement>(null);

  const { mutateAsync: createPost } = useMutation<
    unknown,
    DefaultError,
    { title: string; body: string }
  >({
    mutationFn: (data) => axios.post(endpoint, data),
  });

  const handleClickButton = async () => {
    const title = titleDOMRef.current?.value;
    const body = bodyDOMRef.current?.value;

    if (!title || !body) return alert("데이터를 입력해주세요");

    const data = { title, body };
    await createPost(data);
  };

  return (
    <div className="flex felx-col p-4">
      <input ref={titleDOMRef} className="border border-black" />
      <textarea ref={bodyDOMRef} className="border border-black" />
      <button onClick={handleClickButton} className="border border-black">
        포스트 생성하기
      </button>
    </div>
  );
}

export default PostForm;
