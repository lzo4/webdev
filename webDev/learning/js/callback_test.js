
function hello(name) {
    console.log(`こんにちは、${name}`);
}
setTimeout(hello,2000,"サスケ");

setTimeout((name) => console.log(`こんにちは、${name}`),2000,"イタチ");


