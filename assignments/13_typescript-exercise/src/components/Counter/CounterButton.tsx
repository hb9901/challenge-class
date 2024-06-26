// type VeryUsefulType<T> = T & { children: React.ReactNode };

import { PropsWithChildren } from "react";

// interface CounterButtonProps {
//   onClick: () => void;
// }

// function CounterButton({ onClick: handleClick, children }: VeryUsefulType<CounterButtonProps>) {
//   return <button onClick={handleClick}>{children}</button>;
// }

// export default CounterButton;

interface CounterButtonProps {
  onClick: () => void;
}

function CounterButton({
  onClick: handleClick,
  children,
}: PropsWithChildren<CounterButtonProps>) {
  return <button onClick={handleClick}>{children}</button>;
}

export default CounterButton;
