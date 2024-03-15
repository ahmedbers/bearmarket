# Bear Market Crypto Analyzer

This is a simple JavaScript tool for analyzing cryptocurrency data to determine if it's in a bear market.

## How to Use

1. Replace the `cryptoData` object in `bear_market_analyzer.js` with your cryptocurrency price data.
2. Run the script using Node.js or in a web browser environment.
3. The script will output whether the cryptocurrency is in a bear market, along with the average price and current price.

## Example

Suppose you have the following cryptocurrency price data:

```javascript
const cryptoData = {
    prices: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]
};
