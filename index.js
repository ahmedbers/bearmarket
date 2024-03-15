// Function to analyze cryptocurrency data and determine if it's in a bear market
function analyzeCryptoData(data) {
    const prices = data.prices;
    const numDays = prices.length;
    
    // Calculate average price
    const total = prices.reduce((acc, curr) => acc + curr, 0);
    const averagePrice = total / numDays;

    // Check if current price is below the average price
    const currentPrice = prices[numDays - 1];
    const isBearMarket = currentPrice < averagePrice;

    return {
        isBearMarket,
        averagePrice,
        currentPrice
    };
}

// Example data
const cryptoData = {
    prices: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]
};

// Analyze the cryptocurrency data
const analysisResult = analyzeCryptoData(cryptoData);

// Output analysis result
console.log("Analysis Result:");
console.log("-----------------");
console.log("Is in Bear Market:", analysisResult.isBearMarket);
console.log("Average Price:", analysisResult.averagePrice);
console.log("Current Price:", analysisResult.currentPrice);
