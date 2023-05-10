function fn_qqinfo(){
    var qq_num=$('#qqinfo').val();
    if(qq_num){
        if( !isNaN(qq_num)){
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
            $("#author").val('你输入的好像不是QQ号码');
            $("#email").val('你输入的好像不是QQ号码');
        } 
    }else{
         $("#author").val('请输入您的QQ号');
         $("#email").val('请输入您的QQ号');
    }
}