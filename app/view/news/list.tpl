<html>
    <head>
        <title>egg-test-laoer--news list</title>
        <link rel="stylesheet" href="/public/css/news.css" />
    </head>
    <body>
        <ul class="news-view view">
            {% for item in msg %}
                <li class="item">
                    <a href="{{item.url}}">{{item.name}}</a>
                    <span>{{item.url}}</span>
                </li>
            {% endfor %}
        </ul>
        <input type='text' class='id'/>
        <input type='text' class='name'/>
        <input type='text' class='url'/>
        <button class='update'>更新</button>
    </body>
    <script src="/public/js/news.js"></script>  
</html>