<?php

/**
 * Plugin Name:       Telescope Blocks
 * Description:       Plugin pour les blocks gutenberg Hero Section / Half Section / Posts Section / Newsletter Section
 * Requires at least: 6.1
 * Requires PHP:      8.0
 * Version:           0.1.0
 * Author:            Weil Jean
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
function add_custom_category($categories)
{
	// Add the new category in first place in the inserter.
	$categories[0] = [
		'slug' => 'telescope',
		'title' => 'Blocs Telescope',
	];

	return $categories;
}
add_filter('block_categories_all', 'add_custom_category');
