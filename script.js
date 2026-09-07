const taskState = { x: false, tg: false };

function markTask(task) {
  taskState[task] = true;
}

function toggleChecker() {
  const checked = document.getElementById("confirmTasks").checked;
  document.getElementById("checker").classList.toggle("enabled", checked);
}

function isLikelySolanaAddress(value) {
  return /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(value);
}

// Deterministic pseudo-random-looking allocation based on the wallet address.
// This is intentionally a front-end preview; it is NOT a blockchain activity lookup.
function allocationFor(wallet) {
  let hash = 2166136261;
  for (let i = 0; i < wallet.length; i++) {
    hash ^= wallet.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  hash >>>= 0;
  const min = 100000;
  const max = 2000000;
  const amount = min + (hash % (max - min + 1));
  return Math.floor(amount / 1000) * 1000;
}

function formatNumber(n) {
  return new Intl.NumberFormat("en-US").format(n);
}

function checkAirdrop() {
  const wallet = document.getElementById("wallet").value.trim();
  const result = document.getElementById("result");

  if (!document.getElementById("confirmTasks").checked) {
    result.className = "result show";
    result.innerHTML = "<strong>Complete both community tasks first.</strong><br><small>Follow X and join Telegram, then tick the confirmation box.</small>";
    return;
  }

  if (!isLikelySolanaAddress(wallet)) {
    result.className = "result show";
    result.innerHTML = "<strong>Please enter a valid-looking Solana address.</strong><br><small>Use the Base58 wallet address you want to check.</small>";
    return;
  }

  const amount = allocationFor(wallet);
  result.className = "result show";
  result.innerHTML = `
    <small>PRELIMINARY $SOLBRO ALLOCATION</small>
    <div class="amount">${formatNumber(amount)} $SOLBRO</div>
    <div class="wallet-ok">Wallet: ${wallet}</div>
    <small style="display:block;margin-top:12px">Final eligibility and claim rules will be announced officially.</small>
  `;
}

document.getElementById("year").textContent = new Date().getFullYear();
