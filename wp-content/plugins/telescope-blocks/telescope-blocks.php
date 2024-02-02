<?php

/**
 * Plugin Name:       Telescope Blocks
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
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
 * Add Category Telescope to Gutenberg Core Block Category.
 */
function add_custom_category($categories)
{
	$categories[] = [
		'slug' => 'telescope',
		'title' => 'Blocs Telescope',
	];

	return $categories;
}
add_filter('block_categories_all', 'add_custom_category');

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
// function telescope_blocks_telescope_blocks_block_init()
// {
// 	register_block_type(__DIR__ . '/build/1-test/');
// }
// add_action('init', 'telescope_blocks_telescope_blocks_block_init');

function block_variation_example_enqueue()
{
	wp_enqueue_script(
		'variation-media-text-script',
		plugins_url('src/block-variations/media-text.js', __FILE__),
		array('wp-blocks', 'wp-dom-ready', 'wp-edit-post'),
		filemtime(plugin_dir_path(__FILE__) . 'src/block-variations/media-text.js')
	);
}
add_action('enqueue_block_editor_assets', 'block_variation_example_enqueue');
