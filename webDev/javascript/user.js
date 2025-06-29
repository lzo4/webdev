class User {

    deleted = 0;

    constructor(name){
        this.username = name;
    }

    login() {
        if(this.deleted = 0){
            console.log(`${this.username}はログインに成功しました`);
        } else{
            console.log(`${this.username}はログインに失敗しました`);
        }
        
    
    }
}