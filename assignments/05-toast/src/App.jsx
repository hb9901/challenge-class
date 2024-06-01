import { nanoid } from "nanoid";
import { useRef } from "react";
import { useToast } from "./contexts/toast.context";

function App() {
  const ID = nanoid();
  const toast = useToast();
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const delayRef = useRef(null);

  const handleClick = () => {
    toast.open({
      id: ID,
      title: titleRef.current.value,
      content: contentRef.current.value,
      delay: Number(delayRef.current.value) || 2000,
    });
  };

  return (
    <main className="h-screen grid place-items-center">
      <div className="grid grid-cols-1 gap-y-6">
        <h1 className="text-2xl font-semibold text-center">토스트 컨트롤러</h1>
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-1.5 items-start">
            <label className="text-sm font=medium">제목 (필수)</label>
            <input
              className="border px-5 py-2.5 rounded-md w-80"
              defaultValue="Scheduled: Catch up"
              ref={titleRef}
            />
          </div>
          <div className="flex flex-col gap-y-1.5 items-start">
            <label className="text-sm font=medium">내용 (필수)</label>
            <input
              className="border px-5 py-2.5 rounded-md w-80"
              defaultValue="Friday, February 10, 2023 at 5:57 PM"
              ref={contentRef}
            />
          </div>
          <div className="flex flex-col gap-y-1.5 items-start">
            <label className="text-sm font=medium">노출 시간(ms) (선택)</label>
            <input
              className="border px-5 py-2.5 rounded-md w-80"
              defaultValue="2000"
              ref={delayRef}
            />
          </div>
          <button
            className="bg-black text-white py-3 text-[15px] rounded-md font-medium hover:bg-black/80 transition active:bg-black/70"
            onClick={handleClick}
          >
            토스트 띄우기
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
