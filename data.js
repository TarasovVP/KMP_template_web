export async function fetchItems() {
  await delay(2600);
  return [
    'First object',
    'Second object',
    'Third object',
    'Forth object',
  ];
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}