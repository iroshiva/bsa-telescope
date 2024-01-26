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
require_once plugin_dir_path(__FILE__) . 'templates/hero-block.php';

require_once plugin_dir_path(__FILE__) . '1-test.php';
require_once plugin_dir_path(__FILE__) . 'posts-block.php';
