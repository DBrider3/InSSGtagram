function ck() {
    if(form.login.username.value==""){login.username.focus(); alert("빈칸을 확인하세요"); return;}
    if(form.login.password.value==""){login.password.focus(); alert("빈칸을 확인하세요"); return;}
    // if(login.username.value == "admin" && login.password.value == "123"){
    //     location.href="index.html";
    // } // 예시부분 DB랑 연동하는 부분 필요
    location.href="index.html";
}
// <!--<script>-->
// <!--    function ck() {-->
// <!--        if(loginForm.username.value==""){login.username.focus(); alert("빈칸을 확인하세요"); return;}-->
// <!--        if(loginForm.password.value==""){login.password.focus(); alert("빈칸을 확인하세요"); return;}-->
// <!--        // if(login.username.value == "admin" && login.password.value == "123"){-->
// <!--        document.loginForm.action = "index.html";-->
// <!--        //} // 예시부분 DB랑 연동하는 부분 필요-->
//
// <!--    }-->
// <!--    function onKeyupPasswd(){-->
// <!--        if(window.event.keyCode == 13){ // enter key code:13-->
//     <!--            ck();-->
//     <!--        }-->
//     <!--    }-->
//     <!--    {-->
//     <!--        if (data['status'] == true){-->
//     <!--            alert(data['data'])-->
//
//
//     <!--            {"status":1, "data":"login succed"}-->
//     <!--        }-->
//
//     <!--    }-->
// <!--</script>-->