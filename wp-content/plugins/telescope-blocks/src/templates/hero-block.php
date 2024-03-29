<?php

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function block_hero_init()
{
  if (!function_exists('register_block_type')) {
    return;
  }

  register_block_type(PLUGIN_DIR .  'build/templates/hero-block', array(
    'render_callback' => 'block_hero_render'
  ));
}
add_action('init', 'block_hero_init');

// fonction callback pour afficher le bloc en front
function block_hero_render(array $attributes, $content)
{
  ob_start();
?>
    <?= $content ?>


<?php
  $outup = ob_get_contents();

  ob_end_clean();

  return $outup;
}
