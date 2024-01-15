export default function TabButton({ children, onClickTab }) {
  return (
    <li>
      <button onClick={onClickTab}>{children}</button>
    </li>
  );
}
