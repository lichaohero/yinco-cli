$(function () {
    html = "";
    html += '<nav class="navbar navbar-inverse navbar-fixed-top">';
    html += '<div class="container-fluid">';
    html += '<div class="navbar-header">';
    html += '<a class="navbar-brand" href="#">ProBlog</a>';
    html += '</div>';
    html += '<div class="collapse navbar-collapse" id="menu">';
    html += '<ul class="nav navbar-nav">';
    html += '<li class="active"><a href="#">首页</a></li>';
    html += '<li><a href="#">博客</a></li>';
    html += '<li><a href="#">新闻</a></li>';
    html += '<li><a href="#">游戏赚积分</a></li>';
    html += '<li><a href="#">帮助中心</a></li>';
    html += '</ul>';
    html += '<form class="navbar-form navbar-left" role="search">';
    html += '<div class="form-group">';
    html += '<input type="text" class="form-control" placeholder="搜索博客">';
    html += '</div>';
    html += '<button type="submit" class="btn btn-info">搜索</button>';
    html += '</form>';
    html += '<ul class="nav navbar-nav navbar-right">';
    html += '<li><a href="#">登录</a></li>';
    html += '<li><a href="#">注册</a></li>';
    html += '<li><a href="#">写博客</a></li>';
    html += '<li class="dropdown">';
    html += '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"aria-expanded="false">我的博客<span class="caret"></span></a>';
    html += '<ul class="dropdown-menu">';
    html += '<li><a href="#">我的信息</a></li>';
    html += '<li><a href="#">修改密码</a></li>';
    html += '<li role="separator" class="divider"></li>';
    html += '<li><a href="#">退出登录</a></li>';
    html += '</ul>';
    html += '</li>';
    html += '</ul>';
    html += '</div>';
    html += '</div>';
    html += '</nav>';
    $('#nav').html(html)

    $.each($('#nav li'),function (i, obj) {
        $(obj).on('click',function () {
            $('#nav li').removeClass('active')
            $(obj).addClass('active')
        })
    })
})