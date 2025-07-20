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