export function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your list🚀</em>
      </footer>
    );
  const numitems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((numPacked / numitems) * 100);
  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "You got everything! Ready to go💖"
          : `You have ${numitems} items on your list, and you already packed ${numPacked} (${
              numPacked === 0 ? 0 : packedPercentage
            }%)`}
      </em>
    </footer>
  );
}
