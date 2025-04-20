function importWallet() {
    const input = document.getElementById('private-key');
    const phrase = input.value.trim();
  
    const walletInfo = document.getElementById('wallet-info');
  
    if (phrase === "") {
      walletInfo.innerHTML = "<p style='color: red;'>Введите сид-фразу или приватный ключ.</p>";
      return;
    }
  
    // Пример вывода "успешного импорта"
    walletInfo.innerHTML = `
      <p style="color: #00ff99;">Кошелек успешно импортирован!</p>
      <p><strong>Фраза:</strong> ${phrase}</p>
    `;
  
    // Очистить поле
    input.value = "";
  }
