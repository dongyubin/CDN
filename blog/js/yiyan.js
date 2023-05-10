$(function () {
      var myDate = new Date();
      var mon = myDate.getMonth() + 1;
      var day = myDate.getDate();
      var newMon = mon < 10 ? "0" + mon : mon;
      var newDay = day < 10 ? "0" + day : day;
      var rqyyLock = true;
      var randRYY = parseInt(Math.random() * 10);
      $(".wiui-rqyy-item").css(
        "background-image",
        "url(https://img.wiiuii.cn/rqyy-imgs/rqyy-bg-" + randRYY + ".png)"
      );
      $(".wiui-rqyy-day").html(newDay);
      $(".wiui-rqyy-month").html(newMon);
      $.extend({
        yyAjax: function () {
          $.ajax({
            // 链接
            url: "https://api.btstu.cn/yan/api.php?charset=utf-8&encode=json",
            // 请求方法
            type: "GET",
            // 成功返回
            dataType: "json",
            success: function (e) {
              rqyyLock = false;
              var yiyanList = e.text.split("");
              var newYY = "";
              var yyIndex = 0;
              var timer = setInterval(function () {
                newYY += yiyanList[yyIndex];
                yyIndex++;
                if (yyIndex >= yiyanList.length) {
                  clearInterval(timer);
                  rqyyLock = true;
                }
                $(".wiiui-rqyy-yy").html(newYY);
              }, 150);
            }
          });
        }
      });
      $.yyAjax();
      $("#wiui-yybtn").click(function () {
        if (!rqyyLock) return;
        $.yyAjax();
      });
    });
    $(".wiui-rqyy-demo").parent().parent().css({
      padding: "0",
      overflow: "hidden"
    });