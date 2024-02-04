<?php

/**
 * Plugin Name:       Telescope Blocks
 * Description:       Plugin pour les blocks gutenberg Hero Section / Half Section / Posts Section / Newsletter Section
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Weil Jean
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       telescope-blocks
 *
 * @package           create-block
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

define('PLUGIN_DIR', plugin_dir_path(__FILE__));

/**
 * Block Initializer.
 */
require_once plugin_dir_path(__FILE__) . 'src/init.php';


/**
 * Add Category 'Telescope' to Gutenberg Core Block Category.
 */
function custom_block_category($categories)
{
	$custom_block = array(
		'slug'  => 'telescope',
		'title' => 'Blocs Telescope',
	);

	$categories_sorted = array();
	$categories_sorted[0] = $custom_block;

	foreach ($categories as $category) {
		$categories_sorted[] = $category;
	}

	return $categories_sorted;
}
add_filter('block_categories_all', 'custom_block_category');
