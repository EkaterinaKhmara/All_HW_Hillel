export const generateOptions = (name, selectedItem, items, changeFunc) => (
  <select name={name} defaultValue={selectedItem} onChange={changeFunc}>
    {Object.entries(items).map(([key, value]) => (
      <option key={key} value={value}>{value}</option>
    ))}
  </select>
);
