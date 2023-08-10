const createClickHandler = (row) => {
  return () => {
    const [cell] = row.getElementsByTagName("td");
    const id = cell.innerHTML;
    console.log(id);
  };
};

const table = document.querySelector("table");
for (const currentRow of table.rows) {
  currentRow.onclick = createClickHandler(currentRow);
}