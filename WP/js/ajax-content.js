// 打赏
jQuery(document).ready(function($) {
  $(".pay_item").click(function(){
  $(this).addClass('checked').siblings('.pay_item').removeClass('checked');
  var dataid=$(this).attr('data-id');
  $(".shang_payimg img").attr("src","https://p.wangdu.site/images/"+dataid+".png");
  $("#shang_pay_txt").text(dataid=="alipay"?"支付宝":"微信");
});
$('.dashang').click(function() {
    $(".hide_box").fadeToggle();
    $(".shang_box").fadeToggle();
})
$('.shang_close').click(function() {
    $(".hide_box").fadeToggle();
    $(".shang_box").fadeToggle();
})
});

// 点赞
$(".like").click(function() {
  if ($(this).hasClass('liked')) {
    alert('您已经赞过了~');
  } else {
    $(this).addClass('liked');

    var button = $(this);
  
    $.ajax({
      url : xintheme.ajaxurl, // AJAX处理程序
      data : {
        action: "post_like",
        post_id: $(this).data("id")
      },
      type : 'POST',
      success : function( data ){
        button.children('.count').html(data);
      }

    });
  }

  return false;
});

// 评论框
$("#qqinfo").blur(function(){
    var qq_num1=$('#qqinfo').val();
    var qq_num = $.trim(qq_num1);
      if(qq_num.length>5 || 10<qq_num.length){
          if(!isNaN(qq_num)){
          $.ajax({
          url:"https://www.wangdu.site/get_qq_info.php",    //如果网站开启了HTTPS，记得这里要修改成https的链接
          type:"get",
          data:{qq:qq_num},
          dataType:"json",
              success:function(data){
                  $("#email").val(qq_num+'@qq.com');
                  $('#comment').focus();
                  // if(data==null){
                  // $("#author").val('QQ游客'); 
                  // }else{
                  // $("#author").val(data[qq_num][6]==""?'QQ游客':data[qq_num][6]);
                  // } 
              },
              error:function(err){
                  // $("#author").val('QQ游客');
                  $("#email").val(qq_num+'@qq.com');
                  $('#comment').focus();
              }
          });
          }else{
              $("#qqinfo").val('');
              $("#qqinfo").attr('placeholder',"QQ号不正确,请再输入！");
              $("#author").val('');
              $("#email").val('');
          } 
      }else{
           $("#qqinfo").val('');
           $("#qqinfo").attr('placeholder',"QQ号不正确,请再输入！");
           $("#author").val('');
           $("#email").val('');
      }
});