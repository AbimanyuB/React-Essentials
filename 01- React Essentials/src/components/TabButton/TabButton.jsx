export default function TabButton({ children, onSelect, isSelected }) {
  console.log(isSelected)
  return (
    <li>
      <button className={isSelected ? 'active' : null} onClick={onSelect}>{children}</button>
    </li>
  );
}
