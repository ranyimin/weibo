 
var yx;
function checkemail() {
	var email = document.getElementById("email");
	var msg = document.getElementById("email").value;
	// 邮箱格式验证
	var emailmsg = document.getElementById("emailmsg");
	if (email.value.indexOf("@") == -1) {
		emailmsg.innerHTML = "<img src='icon/err.png' align='absmiddle'> <font color='red'>邮箱格式错误</font>";
	} else {
		emailmsg.innerHTML = "<img src='icon/ok.png' align='absmiddle'> ";
		// 用户名是否重复验证
		var url = "RegisterServlet?email=" + msg;
		var xhr = createXMLHttpRequest();
		xhr.open("GET", url, true);
		xhr.onreadystatechange = seekCallBake;
		xhr.send(null);
		function seekCallBake() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				emailmsg.innerHTML = xhr.responseText;
				yx = xhr.responseText;
			}
		}
	}
}
function checkpwd() {
	var pwd = document.getElementById("password");
	var pwdmsg = document.getElementById("pwdmsg");
	if (pwd.value.length < 6 || pwd.value.length > 16) {
		pwdmsg.innerHTML = "<img src='icon/err.png' align='absmiddle'> <font color='red'>长度为6~16位</font>";
	} else {
		pwdmsg.innerHTML = "<img src='icon/ok.png' align='absmiddle'>";
	}
}
function checkrepwd() {
	var pwd = document.getElementById("password");
	var repwd = document.getElementById("rpassword");
	var repwdmsg = document.getElementById("repwdmsg");
	if (pwd.value != repwd.value) {
		repwdmsg.innerHTML = "<img src='icon/err.png' align='absmiddle'> <font color='red'>密码不一致</font>";
	} else {
		repwdmsg.innerHTML = "<img src='icon/ok.png' align='absmiddle'>";
	}
}

function checknickname() {
	var nickname = document.getElementById("nickname");
	var nicknamemsg = document.getElementById("nicknamemsg");
	if (nickname.value.indexOf(" ") == -1) {
		nicknamemsg.innerHTML = "<img src='icon/ok.png' align='absmiddle'>";
	} else {
		nicknamemsg.innerHTML = "<img src='icon/err.png' align='absmiddle'> <font color='red'>不能包含空格</font>";
	}
	if (nickname.value.length == 0) {
		nicknamemsg.innerHTML = "<img src='icon/err.png' align='absmiddle'> <font color='red'>昵称不能为空</font>";
	}
}

function checkquestion() {
	var pwdQuestion = document.getElementById("pwdQuestion");
	var questionmsg = document.getElementById("questionmsg");
	if (pwdQuestion.value.indexOf(" ") == -1) {
		questionmsg.innerHTML = "<img src='icon/ok.png' align='absmiddle'>";
	} else {
		questionmsg.innerHTML = "<img src='icon/err.png' align='absmiddle'> <font color='red'>不能包含空格</font>";
	}
	if (pwdQuestion.value.length == 0) {
		questionmsg.innerHTML = "<img src='icon/err.png' align='absmiddle'> <font color='red'>密保不能为空</font>";
	}
}

function checkanswer() {
	var pwdAnswer = document.getElementById("pwdAnswer");
	var answermsg = document.getElementById("answermsg");
	if (pwdAnswer.value.indexOf(" ") == -1) {
		answermsg.innerHTML = "<img src='icon/ok.png' align='absmiddle'>";
	} else {
		answermsg.innerHTML = "<img src='icon/err.png' align='absmiddle'> <font color='red'>不能包含空格</font>";
	}
	if (pwdAnswer.value.length == 0) {
		answermsg.innerHTML = "<img src='icon/err.png' align='absmiddle'> <font color='red'>答案不能为空</font>";
	}
}


