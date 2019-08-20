<html>
    <head>
        <title>{{msg}}</title>
        <link rel="stylesheet" href="../public/css/news.css" />
    </head>
    <body>
        <ul class="news-view view">
        </ul>
        <input type='text' class='id'/>
        <input type='text' class='name'/>
        <input type='text' class='url'/>
        <button class='update'>更新</button>
        </br>
        <input type='text' class='addid'/>
        <input type='text' class='addname'/>
        <input type='text' class='addurl'/>
        <button class='add'>增加</button>
    </body>
    <script>
        xmlhttp = null;
		if (window.XMLHttpRequest) {// code for Firefox, Opera, IE7, etc.
			xmlhttp = new XMLHttpRequest();
		} else if (window.ActiveXObject) {// code for IE6, IE5
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		//编写回调函数
		xmlhttp.onreadystatechange = function() {
            var data = xmlhttp.responseText;
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var data = JSON.parse(xmlhttp.responseText).msg;
                var ul = document.querySelector('.view');
                for (var i=0;i<data.length;i++) {
                    var li = document.createElement('li');
                    li.className = 'item';
                    li.innerHTML = '<a href='+data[i].url+'>'+data[i].name+'</a><span>'+data[i].url+'</span>'+
                    '<button data-id="'+data[i].id+'" class="del">删除</button>';
                    ul.appendChild(li);
                }
                //删除
                let allDel = document.querySelectorAll('.del');
                for (var l=0;l<allDel.length;l++) {
                    allDel[l].addEventListener("click",function() {
                        let id = this.getAttribute('data-id');
                        let xmlhttp = null;
                        if (window.XMLHttpRequest) {// code for Firefox, Opera, IE7, etc.
                            xmlhttp = new XMLHttpRequest();
                        } else if (window.ActiveXObject) {// code for IE6, IE5
                            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                        }
                        //编写回调函数
                        xmlhttp.onreadystatechange = function() {
                            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                                window.location.reload();
                            }
                        }
                        //open设置请求方式和请求路径
                        xmlhttp.open('get', '/del/news?id='+Number(id));//一个servlet，后面还可以写是否同步
                        //设置请求头
                        xmlhttp.setRequestHeader("token",'HsdoUMBxiYb8VxDswfhgp_i3');
                        //send 发送
                        xmlhttp.send();
                    });
                }
			}
		}
		//open设置请求方式和请求路径
		xmlhttp.open("get", "/newss");//一个servlet，后面还可以写是否同步
		//send 发送
		xmlhttp.send();

        window.onload=function(){
            //修改
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
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        var data = JSON.parse(xmlhttp.responseText);
                        console.log(data);
                        if (data.data) {
                            window.location.reload();
                        } else {
                            alert(data.msg);
                        }
                    }
                }
                //open设置请求方式和请求路径
                xmlhttp.open('get', '/update/news?id='+id+'&name='+name+'&url='+url);//一个servlet，后面还可以写是否同步
                //设置请求头
                xmlhttp.setRequestHeader("token",'HsdoUMBxiYb8VxDswfhgp_i3');
                //send 发送
                xmlhttp.send();
            }
            //添加
            document.querySelector('.add').onclick=function() {
                const id = document.querySelector('.addid').value;
                const name = document.querySelector('.addname').value;
                const url = document.querySelector('.addurl').value;
                let xmlhttp = null;
                if (window.XMLHttpRequest) {// code for Firefox, Opera, IE7, etc.
                    xmlhttp = new XMLHttpRequest();
                } else if (window.ActiveXObject) {// code for IE6, IE5
                    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                }
                //编写回调函数
                xmlhttp.onreadystatechange = function() {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        var data = JSON.parse(xmlhttp.responseText);
                        console.log(data);
                        if (data.data) {
                            window.location.reload();
                        } else {
                            alert(data.msg);
                        }
                    }
                }
                //open设置请求方式和请求路径
                xmlhttp.open('get', '/add/news?id='+Number(id)+'&name='+name+'&url='+url);//一个servlet，后面还可以写是否同步
                //设置请求头
                xmlhttp.setRequestHeader("token",'HsdoUMBxiYb8VxDswfhgp_i3');
                //send 发送
                xmlhttp.send();
            }
        }
    </script>  
</html>