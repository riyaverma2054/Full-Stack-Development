function sum(transactions) {
  return transactions.reduce(
    (acc, t) => {
      if (t.amount > 0) acc.income += t.amount;
      else acc.expense += Math.abs(t.amount);
      return acc;
    },
    { income: 0, expense: 0 }
  );
}

function handleSubmit(text, amount, transactions) {
  if (!text || amount === 0) return transactions;

  const maxId = transactions.length
    ? Math.max(...transactions.map(t => t.id))
    : 0;

  const newTransaction = {
    id: maxId + 1,
    text,
    amount
  };

  return [...transactions, newTransaction];
}

function renderTransactions(transactions) {
  return transactions.map(t => `${t.text} : ${t.amount}`);
}

function deleteTransaction(transactions, id) {
  return transactions.filter(t => t.id !== id);
}

function processData(input) {
  const data = input.trim().split(/\s+/);
  let idx = 0;

  const N = Number(data[idx++]);
  let transactions = [];

  for (let i = 0; i < N; i++) {
    const text = data[idx++];
    const amount = Number(data[idx++]);
    transactions.push({
      id: i + 1,
      text,
      amount
    });
  }

  const newText = data[idx++];
  const newAmount = Number(data[idx++]);
  const deleteId = Number(data[idx++]);

  transactions = handleSubmit(newText, newAmount, transactions);
  transactions = deleteTransaction(transactions, deleteId);

  const totals = sum(transactions);
  const renderedList = renderTransactions(transactions);

  console.log(
    JSON.stringify({
      transactions,
      totals,
      renderedList
    })
  );
}

process.stdin.resume();
process.stdin.setEncoding("ascii");

let input = "";
process.stdin.on("data", function (chunk) {
  input += chunk;
});

process.stdin.on("end", function () {
  processData(input);
});