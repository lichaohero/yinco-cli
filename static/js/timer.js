$(function () {
    var wordsno = $('#newest').html().length;
    console.log(wordsno);
    var readtime = Math.floor(wordsno / 10);
    hour = Math.floor(readtime / 3600);
    minute = Math.floor(readtime / 60);
    second = Math.floor(readtime % 60);
    html += '<div id="time">';
    html += '<div id="hour"><p>' + hour + '<small>时</small></p></div>';
    html += '<div id="minute"><p>' + minute + '<small>分</small></p></div>';
    html += '<div id="second"><p>' + second + '<small>秒</small></p></div>';
    html += '</div>';
    html += '<div>';
    html += '<button id="sors" class="btn">开始</button>';
    html += '</div>';
    $('#timer').html(html);
    var sors = $('#sors');
    sors.on('click', function () {
        if (sors.html() === '开始') {
            sors.html('暂停');
            timerid = setInterval(function () {
                readtime = readtime - 1;
                hour = Math.floor(readtime / 3600);
                minute = Math.floor(readtime / 60);
                second = Math.floor(readtime % 60);
                html = '';
                html += '<div id="hour"><p>' + hour + '<small>时</small></p></div>';
                html += '<div id="minute"><p>' + minute + '<small>分</small></p></div>';
                html += '<div id="second"><p>' + second + '<small>秒</small></p></div>';
                $('#time').html(html);
                console.log(readtime);
                if (readtime <= 0) {
                    clearInterval(timerid);
                    sors.html('开始')
                }
            }, 1000)
        } else if (sors.html() === '暂停') {
            clearInterval(timerid);
            sors.html('开始')
        }
    });
});