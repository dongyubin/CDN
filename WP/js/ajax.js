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
jQuery(function($){
	
	$('.xintheme-loadmore').click(function(){

		//AJAX翻页
		var loadmore_data = {
			'action': 'loadmore',
			'query': xintheme.query,
			'paged' : xintheme.current_page
		};

		var button = $(this);
		
		$.ajax({
			url : xintheme.ajaxurl, // AJAX处理程序
			data : loadmore_data,
			type : 'POST',
			beforeSend : function ( xhr ) {
				button.html('加载中...'); // 更改按钮文本，还可以添加预加载图像
			},
			success : function( data ){
				if( data ) { 
					button.html('加载更多').parent().before(data); // 插入新的文章
					xintheme.current_page++;
 
					if (xintheme.current_page >= xintheme.max_page ) 
						button.parent().remove(); // 如果最后一页，删除按钮
 
					// 如果你使用一个需要它的插件，你也可以在这里触发“后加载”事件。
					// $( document.body ).trigger( 'post-load' );
				} else {
					button.parent().remove(); // 如果没有数据，也删除按钮
				}
			}

		});
	});

	if(xintheme.paging_type == 4){
		//AJAX翻页
		var canBeLoaded = true, // 此PARAM只允许在必要时启动Ajax调用
			bottomOffset = 2000; // 当你想加载更多的文章时，页面底部的距离（px）
	 
		$(window).scroll(function(){

		var loadmore_data = {
			'action': 'loadmore',
			'query': xintheme.query,
			'paged' : xintheme.current_page
		};

			if( $(document).scrollTop() > ( $(document).height() - bottomOffset ) && canBeLoaded == true ){
				$.ajax({
					url : xintheme.ajaxurl,
					data : loadmore_data,
					type :'POST',
					beforeSend: function( xhr ){
						// 您也可以在这里添加自己的预加载程序
						// Ajax调用正在进行中，我们不应该再运行它，直到完成
						canBeLoaded = false; 
					},
					success:function(data){
						if( data ) {
							$('.posts-wrapper').find('article:last-of-type').after( data ); // 在哪个位置插入文章
							canBeLoaded = true; // AJAX已经完成，现在我们可以再次运行它了



							xintheme.current_page++;

							if (xintheme.current_page >= xintheme.max_page ) 
								button.remove(); // 如果最后一页，删除按钮
						}
					}
				});
			}
		});
	}

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
                    if(data==null){
                    $("#author").val('QQ游客'); 
                    }else{
                    $("#author").val(data[qq_num][6]==""?'QQ游客':data[qq_num][6]);
                    } 
                },
                error:function(err){
                    $("#author").val('QQ游客');
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

	//投稿
	$(document).on('click', '.publish_post', function(event) {
	    event.preventDefault();
	    var title = $.trim($('#post_title').val());
	    var status = $(this).data('status');
	    $('#post_status').val(status);
	    var editor = tinymce.get('editor'); 
	    var content = editor.getContent();
	    $('#editor').val(content);

	    if( !content ){
	        alert('请填写文章内容！');
	        return false;
	    }

	    if( title == 0 ){
	        alert('请输入文章标题！');
	        return false;
	    }

	    $.ajax({
	        url: xintheme.ajaxurl,
	        type: 'POST',
	        dataType: 'json',
	        data: $('#post_form').serializeArray(),
	    }).done(function( data ) {
	        if( data.state == 200 ){
	            alert(data.tips);
	            window.location.href = data.url;
	        }else{
	            alert(data.tips);
	        }
	    }).fail(function() {
	        alert('出现异常，请稍候再试！');
	    });
	    
	});
	$(document).on('click', '.select-img', function(event) {
		event.preventDefault();
		
		var upload_img;  
	    if( upload_img ){   
	        upload_img.open();   
	        return;   
	    }   
	    upload_img = wp.media({   
	        title: '选择图片',   
	        button: {   
	        text: '添加为封面图',   
	    },   
	        multiple: false   
	    });   
	    upload_img.on('select',function(){   
	        thumbnail_img = upload_img.state().get('selection').first().toJSON(); 
	        if( thumbnail_img.subtype == 'png' || thumbnail_img.subtype == 'jpeg' || thumbnail_img.subtype == 'gif' ){
	            $('img.thumbnail').attr('src', thumbnail_img.url ).show();
	            $('input.thumbnail').val(thumbnail_img.id);
	        }else{
	            alert('请选择图片！'); 
	        }  
	    });   
	    upload_img.open(); 
	});
});