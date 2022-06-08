const STORE_KEY = "users";

function saveUser(user){
    let oldData = readUsers();
    oldData.push(user);

    let val = JSON.stringify(oldData);
    localStorage.setItem(STORE_KEY, val);
}

function readUsers(){
    let data = localStorage.getItem(STORE_KEY);

    if(!data){
        return [];
    }
    else{
        let list = JSON.parse(data);
        return list;
    }
}