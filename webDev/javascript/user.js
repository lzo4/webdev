class User {

    deleted = 0;

    constructor(name){
        this.username = name;
    }

    login() {
        if(this.deleted == 0){
            console.log(`${this.username}はログインに成功しました`);
        } else{
            console.log(`${this.username}はログインに失敗しました`);
        }
        
    
    }
}

class AdminUser extends User {

    constructor(name){
        super(name);
    }

    deleteUser(user) {
        user.deleted = 1;
        console.log(`${user.username}を削除しました。`);
    }
}

const user = new User("1");
const adminUser = new AdminUser("adimin_1");

try{
    if(!(user instanceof User)){
        throw "Userオブジェクトを引数にする必要があります。";
    }
    adminUser.deleteUser(user);
}catch (error){
    console.log(error);
}
