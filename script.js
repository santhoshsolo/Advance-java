const baseUrl = 'https://api.coingecko.com/api/v3/coins/markets';
const params = {
    vs_currency: 'usd',
    order: 'market_cap_desc',
    per_page: 10,
    page: 1,
    sparkline: false
};

// Function to render data in the table
function renderData(data) {
    const tbody = document.getElementById('cryptoData').getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''; // Clear existing data

    data.forEach(coin => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><span class="math-inline">\{coin\.name\}</td\>
<td\></span>{coin.symbol}</td>
            
