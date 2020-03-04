<?php
include "inc/actions.php";
add_action( 'wp_enqueue_scripts', 'my_scripts_method' );
function my_scripts_method() {


	wp_register_script( 'cookies.js', '/wp-content/themes/Clew-shop/libs/cookies.js' );
	wp_enqueue_script( 'cookies.js' );

	wp_register_script( 'totaljs', '/wp-content/themes/Clew-shop/js/total.js', array( 'jquery' ) );
	wp_enqueue_script( 'totaljs' );
	if ( is_cart() ) {
		remove_action( 'wp_head', array( $GLOBALS['woocommerce'], 'generator' ) );

		wp_register_script( 'cartjs', '/wp-content/themes/Clew-shop/js/cart.js', array( 'jquery' ) );
		wp_enqueue_script( 'cartjs' );

		wp_localize_script(
			'cartjs',
			'cartjs_ajax_obj',
			array( 'ajaxurl' => admin_url( 'admin-ajax.php' ) )
		);


		wp_register_script( 'inputmask', '/wp-content/themes/Clew-shop/libs/inputmask.js', array( 'cartjs' ) );
		wp_enqueue_script( 'inputmask' );


		wp_enqueue_style( 'cart-empty', "/wp-content/themes/Clew-shop/css/cart-empty.css" );

		wp_dequeue_style( 'woocommerce_frontend_styles' );
		wp_dequeue_style( 'woocommerce-general' );
		wp_dequeue_style( 'woocommerce-layout' );
		wp_dequeue_style( 'woocommerce-smallscreen' );
		wp_dequeue_style( 'woocommerce_fancybox_styles' );
		wp_dequeue_style( 'woocommerce_chosen_styles' );
		wp_dequeue_style( 'woocommerce_prettyPhoto_css' );
		wp_dequeue_script( 'selectWoo' );
		wp_deregister_script( 'selectWoo' );
		wp_dequeue_script( 'wc-add-payment-method' );
		wp_dequeue_script( 'wc-lost-password' );
		wp_dequeue_script( 'wc_price_slider' );
		wp_dequeue_script( 'wc-single-product' );
		wp_dequeue_script( 'wc-add-to-cart' );
		wp_dequeue_script( 'wc-cart-fragments' );
		wp_dequeue_script( 'wc-credit-card-form' );
		wp_dequeue_script( 'wc-checkout' );
		wp_dequeue_script( 'wc-add-to-cart-variation' );
		wp_dequeue_script( 'wc-single-product' );
		wp_dequeue_script( 'wc-cart' );
		wp_dequeue_script( 'wc-chosen' );
		wp_dequeue_script( 'woocommerce' );
		wp_dequeue_script( 'prettyPhoto' );
		wp_dequeue_script( 'prettyPhoto-init' );
		wp_dequeue_script( 'jquery-blockui' );
		wp_dequeue_script( 'jquery-placeholder' );
		wp_dequeue_script( 'jquery-payment' );
		wp_dequeue_script( 'fancybox' );
		wp_dequeue_script( 'jqueryui' );

	}

	if ( is_page_template( 'template-afterpay.php' ) ) {
		wp_enqueue_style( 'header', "/wp-content/themes/Clew-shop/css/header.min.css" );
		wp_enqueue_style( 'afterpay', '/wp-content/themes/Clew-shop/css/afterpay.min.css' );
	}
}

add_theme_support( 'title-tag' );
add_theme_support( 'post-thumbnails' );
register_nav_menus( array(
	'desktop-g' => __( 'Desktop-general', 'clew' ),
	'toggle1'   => __( 'Toggle1', 'clew' ),
	'toggle2'   => __( 'Toggle2', 'clew' ),
	'mobile-g'  => __( 'Mobile-general', 'clew' ),
	'footer1'   => __( 'Footer 1', 'clew' ),
	'footer2'   => __( 'Footer 2', 'clew' ),
	'footer3'   => __( 'Footer 3', 'clew' ),
	'footer4'   => __( 'Footer 4', 'clew' ),
) );
/*
 * Switch default core markup for search form, comment form, and comments
 * to output valid HTML5.
*/
add_theme_support( 'html5', array( 'comment-form', 'comment-list', 'gallery', 'caption', ) );
/*
 * Enable support for Post Formats.
 *
 * See: https://codex.wordpress.org/Post_Formats
*/
add_theme_support( 'post-formats', array( 'aside', 'image', 'video', 'quote', 'link', 'gallery', 'audio', ) );
function mytheme_add_woocommerce_support() {
	add_theme_support( 'woocommerce' );
}

add_action( 'after_setup_theme', 'mytheme_add_woocommerce_support' );
// Setup single product page
remove_action( 'woocommerce_before_shop_loop', 'woocommerce_result_count', 20 );
remove_action( 'woocommerce_before_shop_loop', 'woocommerce_catalog_ordering', 30 );
remove_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_rating', 5 );
remove_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20 );
remove_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_price', 10 );
add_action( 'woocommerce_shop_loop_item_title', 'woocommerce_template_loop_price', 20 );
remove_action( 'woocommerce_shop_loop_item_title', 'woocommerce_template_loop_product_title', 10 );
add_action( 'woocommerce_shop_loop_item_title', 'abChangeProductsTitle', 10 );
function abChangeProductsTitle() {
	echo '<span class="product__item-name">' . get_the_title() . '</span>';
}

remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_title', 5 );
add_filter( 'woocommerce_product_single_add_to_cart_text', 'woo_custom_single_add_to_cart_text' ); // 2.1 +
function woo_custom_single_add_to_cart_text() {
	return __( 'Додати до кошика', 'woocommerce' );
}

remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 20 );
remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_add_to_cart', 30 );
add_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_add_to_cart', 20 );
add_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 30 );
// End Product page
add_filter( 'woocommerce_currency_symbol', 'change_existing_currency_symbol', 10, 2 );
add_filter( 'woocommerce_product_variation_title_include_attributes', '__return_false' );
add_filter( 'woocommerce_is_attribute_in_product_name', '__return_false' );
function change_existing_currency_symbol( $currency_symbol, $currency ) {
	switch ( $currency ) {
		case 'UAH':
			$currency_symbol = ' грн';
			break;
	}

	return $currency_symbol;
}

function wp_get_menu_array( $current_menu ) {
	$array_menus = wp_get_nav_menu_items( $current_menu );
	$menu        = array();
	print_r( $array_menus );
	foreach ( $array_menus as $array_menu ) {
		if ( empty( $array_menu->menu_item_parent ) ) {
			$curent_id          = $array_menu->ID;
			$menu[ $curent_id ] = array(
				'id'       => $curent_id,
				'title'    => $array_menu->title,
				'href'     => $array_menu->url,
				'children' => array()
			);
		}
		if ( isset( $curent_id ) && $curent_id == $array_menu->menu_item_parent ) {
			$submenu_id                                        = $array_menu->ID;
			$menu[ $curent_id ]['children'][ $array_menu->ID ] = array(
				'id'       => $submenu_id,
				'title'    => $array_menu->title,
				'href'     => $array_menu->url,
				'children' => array()
			);
		}
	}

	return $menu;
}

function woo_products_by_tags_shortcode( $atts, $content = null ) {
	// Получаем свойства
	extract( shortcode_atts( array( "tags" => '' ), $atts ) );
	ob_start();
	// Определяем параметры запроса
	$args = array( 'post_type' => 'product', 'posts_per_page' => 3, 'product_tag' => $tags );
	// Создаем новый запрос
	$loop = new WP_Query( $args );
	// Получаем количество товаров
	$product_count = $loop->post_count;
	// Если результат
	if ( $product_count > 0 ):
		echo '<div class="section__product-list">';
		// Начало цикла
		while ( $loop->have_posts() ):
			$loop->the_post();
			global $product;
			global $post;
			echo '<a href="" class="section__product-item">';
			echo "<p>" . $thePostID = $post->post_title . " </p>";
			if ( has_post_thumbnail( $loop->post->ID ) ) {
				echo get_the_post_thumbnail( $loop->post->ID, 'shop_catalog' );
			} else {
				echo '<img src="' . $woocommerce->plugin_url() . '/assets/images/placeholder.png" alt="" width="' . $woocommerce->get_image_size( 'shop_catalog_image_width' ) . 'px" height="' . $woocommerce->get_image_size( 'shop_catalog_image_height' ) . 'px" />';
			}
		endwhile;
		echo '</div><!--/.products-->';
	else:
		_e( 'Товаров, удовлетворяющих заданные условия поиска, не найдено.' );
	endif; // endif $product_count > 0

	return ob_get_clean();
}

add_shortcode( "woo_products_by_tags", "woo_products_by_tags_shortcode" );
add_action( 'init', 'woocommerce_clear_cart_url' );
function woocommerce_clear_cart_url() {
	global $woocommerce;
	if ( isset( $_REQUEST['clear-cart'] ) ) {
		$woocommerce->cart->empty_cart();
	}
}

add_action( 'wc_information__header', 'add_header_composition', 15 );
function add_header_composition() {
	echo '<p class="header__composition">' . the_content() . '</p>';
}

add_action( 'wc_information__header', 'add_product_title', 5 );
function add_product_title() {
	echo '<h3 class="header__product-name">' . get_the_title() . '</h3>';
}

remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40 );
add_action( 'wc_information__header', 'add_header_product_type', 10 );
function add_header_product_type() {
	echo '<span class="header__product-type">' . get_field( 'product_type' ) . '</span>';
}


/**
 * Disable the emoji's
 */
function disable_emojis() {
	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );
	remove_action( 'admin_print_styles', 'print_emoji_styles' );
	remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
	remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
	remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
	add_filter( 'tiny_mce_plugins', 'disable_emojis_tinymce' );
	add_filter( 'wp_resource_hints', 'disable_emojis_remove_dns_prefetch', 10, 2 );
}

add_action( 'init', 'disable_emojis' );

/**
 * Filter function used to remove the tinymce emoji plugin.
 *
 * @param array $plugins
 *
 * @return array Difference betwen the two arrays
 */
function disable_emojis_tinymce( $plugins ) {
	if ( is_array( $plugins ) ) {
		return array_diff( $plugins, array( 'wpemoji' ) );
	} else {
		return array();
	}
}

/**
 * Remove emoji CDN hostname from DNS prefetching hints.
 *
 * @param array $urls URLs to print for resource hints.
 * @param string $relation_type The relation type the URLs are printed for.
 *
 * @return array Difference betwen the two arrays.
 */
function disable_emojis_remove_dns_prefetch( $urls, $relation_type ) {
	if ( 'dns-prefetch' == $relation_type ) {
		/** This filter is documented in wp-includes/formatting.php */
		$emoji_svg_url = apply_filters( 'emoji_svg_url', 'https://s.w.org/images/core/emoji/2/svg/' );

		$urls = array_diff( $urls, array( $emoji_svg_url ) );
	}

	return $urls;
}