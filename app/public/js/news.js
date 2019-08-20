window.onload=function() {
    document.querySelector('.update').onclick=function() {
        const id = document.querySelector('.id').value;
        const name = document.querySelector('.name').value;
        const url = document.querySelector('.url').value;
        let xmlhttp = null;
		if (window.XMLHttpRequest) {// code for Firefox, Opera, IE7, etc.
			xmlhttp = new XMLHttpRequest();
		} else if (window.ActiveXObject) {// code for IE6, IE5
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		//编写回调函数
		xmlhttp.onreadystatechange = function() {
			/* 	alert(xmlhttp.readyState); */
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				alert('update success');
			}
			/* alert(123); */
		}
		//open设置请求方式和请求路径
		xmlhttp.open('post', '/update/news?id='+id+'&name='+name+'&url='+url);//一个servlet，后面还可以写是否同步
		//设置请求头
		// xmlhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded")
		//send 发送
		xmlhttp.send();
    }
}