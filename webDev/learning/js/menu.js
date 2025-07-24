const menu = new Map([
    ["ケーキ",1500],
    ["クッキー",800],
    ["マカロン",1200],
    ["パスタ",1500],
    ["アイス",700],
]);

menu.set("カレー",1700);
console.log(menu.get("ケーキ"));
console.log(menu.has("パスタ"));
menu.delete("アイス");

const orders = [
    ["アイス",3,2100],
    ["プリン",2,1600],
    ["タルト",1,800],
    ["オレンジジュース",1,500],
    ["ホットコーヒー",2,1000],
];

const deletedTaruto = orders.filter(([orderItem]) => {orderItem != "タルト";});
orders.every(([,,price]) => price < 3000);
const sortedOrders = orders.sort(([,,priceA],[,,priceB]) => priceB - priceA)

orders.forEach(([orderItem,amount,price]) => {
    console.log(`${orderItem}を${price}円で${amount}個注文したよ。`);
})

const reducer = (total,[,amount,price]) => total + amount*price;
const sumPrice = orders.reduce(reducer,0);
console.log(`合計金額は${sumPrice}だよ`);