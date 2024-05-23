import styled from "styled-components";

const mockData = [
  {
    date: "1",
    title: "새로운 메모 qwerasdfzxcvqweer",
  },
  {
    date: "2",
    title: "새로운 메모",
  },
  {
    date: "3",
    title: "새로운 메모",
  },
  {
    date: "4",
    title: "새로운 메모",
  },
  {
    date: "5",
    title: "새로운 메모",
  },
  {
    date: "6",
    title: "새로운 메모",
  },
  {
    date: "7",
    title: "새로운 메모",
  },
];
function Memos() {
  return (
    <MemosList>
      {mockData.map((memo) => {
        return (
          <Memo key={memo.date}>
            <MemoTitle>{memo.title}</MemoTitle>
            <MemoDate>{memo.date}</MemoDate>
          </Memo>
        );
      })}
    </MemosList>
  );
}

export default Memos;

const MemosList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;

  row-gap: 8px;
  padding: 20px 12px;
  margin: 0px;

  overflow-x: hidden;
  list-style: none;
`;

const Memo = styled.li`
  display:inline-grid;
  padding: 12px 24px;

  height: 56px;

  width: 100%;

  border-radius: 4px;

  background-color: rgb(255, 224, 127);

  cursor: pointer;
  box-sizing: border-box;
`;

const MemoTitle = styled.h6`
  margin: 0px 0px 2px;
  min-height: 15px;

  font-size: 13px;
  font-weight: 700;

  text-overflow: ellipsis;
  overflow-x: hidden;
  white-space: nowrap;
`;

const MemoDate = styled.time`
  font-size: 12px;
  color: rgb(64, 64, 64);
`;
