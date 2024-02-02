<?php

/**
 * Blocks Initializer
 *
 * Import all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
  exit;
}

require_once plugin_dir_path(__FILE__) . 'modules/hero-content-block.php';
require_once plugin_dir_path(__FILE__) . 'modules/slider-posts.php';
require_once plugin_dir_path(__FILE__) . 'modules/half-section-content.php';

require_once plugin_dir_path(__FILE__) . 'templates/hero-block.php';
require_once plugin_dir_path(__FILE__) . 'templates/slider-posts-section.php';
require_once plugin_dir_path(__FILE__) . 'templates/half-section.php';
require_once plugin_dir_path(__FILE__) . 'templates/newsletter-section.php';
