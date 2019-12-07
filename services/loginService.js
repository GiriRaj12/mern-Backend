
class loginCheck{
    checkUser(userName, passWord){
        console.log(userName+passWord);
        if(length(userName) < 0){
            return false;
        }
        else{
            return true;
        }
    }
}

export default loginCheck;