function StatusBar({flips, heads, tails}) {
  let message = `Out of ${flips}, there have been ${heads} heads and ${tails} tails.`
  return (<p>{message}</p>);
}

export default StatusBar;
