const amountInput = document.getElementById('amount');
const fromCurrencySelect = document.getElementById('fromCurrency');
const toCurrencySelect = document.getElementById('toCurrency');
const result = document.getElementById('result');
const form = document.getElementById('converter-form');
const apiUrl = `http://data.fixer.io/api/latest?access_key=760f83652c3711f95ab7ddc8bd86ae31`; // Substitua com sua chave de API

const currencyFlags = {
  'USD': 'us',
  'EUR': 'eu',
  'BRL': 'br',
  'JPY': 'jp',
  'GBP': 'gb',
};

// Função para carregar as moedas
async function loadCurrencies() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    if (!data.success) {
      console.error('Erro ao carregar as moedas:', data.error);
      return;
    }

    const currencies = Object.keys(data.rates);
    currencies.forEach(currency => {
      const optionFrom = document.createElement('option');
      const optionTo = document.createElement('option');
      optionFrom.value = currency;
      optionTo.value = currency;

      const flagClass = currencyFlags[currency] ? `flag-icon-${currencyFlags[currency]}` : '';

      optionFrom.setAttribute('data-flag', flagClass);
      optionTo.setAttribute('data-flag', flagClass);

      optionFrom.textContent = currency;
      optionTo.textContent = currency;

      fromCurrencySelect.appendChild(optionFrom);
      toCurrencySelect.appendChild(optionTo);
    });
  } catch (error) {
    console.error('Erro ao fazer a requisição:', error);
  }
}

// Função para converter moedas
async function convertCurrency(amount, fromCurrency, toCurrency) {
  try {
    const response = await fetch(`${apiUrl}&symbols=${fromCurrency},${toCurrency}`);
    const data = await response.json();
    
    if (!data.success) {
      console.error('Erro na conversão:', data.error);
      return null;
    }

    const rateFrom = data.rates[fromCurrency];
    const rateTo = data.rates[toCurrency];
    const convertedAmount = (amount * rateTo) / rateFrom;
    
    return convertedAmount.toFixed(2);
  } catch (error) {
    console.error('Erro ao fazer a conversão:', error);
  }
}

// Função para salvar o histórico de conversões
function saveToHistory(amount, fromCurrency, toCurrency, result) {
  const conversion = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
  let history = JSON.parse(localStorage.getItem('conversionHistory')) || [];
  history.push(conversion);

  if (history.length > 5) history.shift(); // Limita a 5 itens no histórico

  localStorage.setItem('conversionHistory', JSON.stringify(history));
}

// Função para atualizar o histórico na UI
function updateHistoryUI() {
  const historyList = document.getElementById('history-list');
  const history = JSON.parse(localStorage.getItem('conversionHistory')) || [];

  historyList.innerHTML = ''; // Limpa o histórico antes de atualizar

  history.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    historyList.appendChild(listItem);
  });
}

// Event listener para conversão automática
amountInput.addEventListener('input', async () => {
  const amount = parseFloat(amountInput.value);
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;

  if (isNaN(amount)) return;

  const convertedAmount = await convertCurrency(amount, fromCurrency, toCurrency);
  result.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
  
  saveToHistory(amount, fromCurrency, toCurrency, convertedAmount);
  updateHistoryUI();
});

// Event listeners para mudanças nas moedas
fromCurrencySelect.addEventListener('change', async () => {
  const amount = parseFloat(amountInput.value);
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;

  if (isNaN(amount)) return;

  const convertedAmount = await convertCurrency(amount, fromCurrency, toCurrency);
  result.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
  
  saveToHistory(amount, fromCurrency, toCurrency, convertedAmount);
  updateHistoryUI();
});

toCurrencySelect.addEventListener('change', async () => {
  const amount = parseFloat(amountInput.value);
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;

  if (isNaN(amount)) return;

  const convertedAmount = await convertCurrency(amount, fromCurrency, toCurrency);
  result.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
  
  saveToHistory(amount, fromCurrency, toCurrency, convertedAmount);
  updateHistoryUI();
});

// Carregar as moedas ao iniciar a página
window.onload = () => {
  loadCurrencies();
  updateHistoryUI();
};