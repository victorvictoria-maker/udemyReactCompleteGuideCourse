export default function TabButton({ children, onClickTab, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : ""} onClick={onClickTab}>
        {children}
      </button>
    </li>
  );
}
