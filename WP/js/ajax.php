<?php
//文章加载 主循环
function wpjam_loadmore_ajax_handler(){
	$query_args = wpjam_json_decode(stripslashes($_POST['query']));

	$query_args['paged'] = $_POST['paged'] + 1; // we need next page to be loaded
	$query_args['post_status'] = 'publish';
	$query_args['ignore_sticky_posts'] = 1;
	
	global $wp;

	foreach($query_args as $key => $value) {
		$wp->set_query_var($key, $value);
	}

	$wp->query_posts();
 
	if(have_posts()){
		while(have_posts()){ the_post();
			get_template_part( 'template-parts/content-list' );
		}
	}

	exit; 
}
add_action('wp_ajax_loadmore', 'wpjam_loadmore_ajax_handler');
add_action('wp_ajax_nopriv_loadmore', 'wpjam_loadmore_ajax_handler');

//点赞按钮
function wpjam_post_like_button($post_id){	
	// 将 _like_count 改成 likes
	if(metadata_exists('post', $post_id, 'likes')){
		$like_count	= get_post_meta($post_id, 'likes', true) ?: '0';
	}elseif(metadata_exists('post', $post_id, '_like_count')){
		$like_count	= get_post_meta($post_id, '_like_count', true) ?: '0';
		update_post_meta($post_id, 'likes', $like_count);
		delete_post_meta($post_id, '_like_count');
	}else{
		$like_count	= 0;
	}

	$liked		= isset($_COOKIE['liked_' . $post_id]) ? 'liked' : '';
	
	echo '<a href="javascript:;" data-id="'.$post_id.'" class="dashang like '.$liked.'"><i class="iconfont icon-dianzan"></i> 赞<span class="count">('.$like_count.')</span></a>';
}

//点赞
function wpjam_post_like_ajax_handler(){  
	global $wpdb, $post;  
	if($post_id = $_POST["post_id"]){
		if(metadata_exists('post', $post_id, 'likes')){
			$like_count	= get_post_meta($post_id, 'likes', true) ?: '0';
		}elseif(metadata_exists('post', $post_id, '_like_count')){
			$like_count	= get_post_meta($post_id, '_like_count', true) ?: '0';
			update_post_meta($post_id, 'likes', $like_count);
			delete_post_meta($post_id, '_like_count');
		}else{
			$like_count	= 0;
		}  

		$expire = time() + 99999999;  
		$domain = ($_SERVER['HTTP_HOST'] != 'localhost') ? $_SERVER['HTTP_HOST'] : false; // make cookies work with localhost  

		setcookie('liked_' . $post_id, $post_id, $expire, '/', $domain, false);  
		if (!$like_count || !is_numeric($like_count)){
			update_post_meta($post_id, 'likes', 1);
		}else{
			update_post_meta($post_id, 'likes', ($like_count + 1));
		};  

		echo get_post_meta($post_id, 'likes', true); 
	}

	exit;  
}
add_action('wp_ajax_nopriv_post_like', 'wpjam_post_like_ajax_handler');  
add_action('wp_ajax_post_like', 'wpjam_post_like_ajax_handler');

//投稿
add_action( 'wp_ajax_publish_post' , function (){
	global $wpdb;
	$user_id		= get_current_user_id();
	$post_id		= sanitize_text_field($_POST['post_id']);
	$post_status	= sanitize_text_field($_POST['post_status']);
	$thumbnail		= sanitize_text_field($_POST['thumbnail']);

	if($post_id ){

		$old_post	= get_post($post_id);

		if($old_post->post_author != $user){
			$msg = array(
				'state' => 201,
				'tips' => '你不能编辑别人的文章。'
			); 
		}else{
			$post_arr	= [
				'ID'			=> $post_id,
				'post_title'	=> wp_strip_all_tags( $_POST['post_title'] ),
				'post_content'  => $_POST['editor'],
				'post_status'   => $post_status,
				'post_author'   => $user_id,
				'post_category' => $_POST['cats']
			];

			wp_update_post( $post_arr );
			set_post_thumbnail( $post_id, $thumbnail );

			if( $post_id && $thumbnail ){
				set_post_thumbnail( $post_id, $thumbnail );
			}

			$msg = array(
				'state'	=> 200,
				'tips'	=> '文章更新成功！',
				'url'	=> home_url(user_trailingslashit('/user'))
			);
		}
	}else{
		$post_arr	= [
			'post_title'	=> wp_strip_all_tags( $_POST['post_title'] ),
			'post_content'  => $_POST['editor'],
			'post_status'   => $post_status,
			'post_author'   => $user_id,
			'post_category' => $_POST['cats']
		];

		$post_id = wp_insert_post( $post_arr );

		if( $post_id && $thumbnail ){
			set_post_thumbnail( $post_id, $thumbnail );
		}

		if( $post_id ){
			$msg = array(
				'state'	=> 200,
				'tips'	=> '文章提交成功',
				'url'	=> home_url(user_trailingslashit('/user'))
			);
			add_post_meta($post_id, 'tg' , $user_id);
		}else{
			$msg = array(
				'state' => 201,
				'tips' => '提交失败，请稍候再试'
			);  
		}
	}

	wpjam_send_json($msg);
} );