// 通过验证工具文件来解决问题
function validateUid()//专门验证uid数据的
{
    return validateRegex("uid",/^\w+@\w+\.\w+$/);
}
function validatePassword()//专门验证Uid数据的
{
    return validateEmpty("pwd");
}

window.onload=function()
{
    document.getElementById("uid").addEventListener("blur",function(){
        validateUid();

    },false);
    document.getElementById("pwd").addEventListener("blur",function(){
        validatePassword();

    },false);
    //总验证
    document.getElementById("loginForm").addEventListener("submit",function(e){
        if(validateUid()&&validatePassword())//注意此处写法，只有满足三个条件同时为true的情况下，才允许正常提交。
        {
            this.submit();
        }else
        {
            formStop(e);
        }

    },false);
}


