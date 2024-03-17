<?php 
/**
 * Plugin name: My block
 * Plugin URI: https://leshiypos.by
 * Description: Gutenberg block
 * Author: Dev_site
 * Author URI: @wp_devsite
 */
function wpdev_myblock_init(){
    register_block_type_from_metadata( __DIR__ ); //Регистрирует блок JSON указываем путь к каталогу где находится блок JSON - т.е. корень
}

add_action( "init", "wpdev_myblock_init" );



?>