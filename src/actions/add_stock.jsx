import axios from 'axios';

export const ADD_STOCK = "ADD_STOCK";

export default function(stock) {
  console.log('add_stock action: ', stock);
  // debugger;
  const addToDB = axios.post('/addToWatchlist', {
      userExtId: 45,
      StockTicker: stock.ticker,
      StockName: stock.name,
      ClosingPrice: stock.close_price
    })
    .then(console.log('went through'));


  return {
    type: ADD_STOCK,
    payload: stock
  };
}
