function Toasts({ children }) {
  return (
    <ul className="fixed bottom-6 right-6 grid grid-cols-1 gap-y-3">
      {children}
    </ul>
  );
}

export default Toasts;
