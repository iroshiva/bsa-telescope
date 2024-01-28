<?php

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function block_swiper_posts_init()
{
  if (!function_exists('register_block_type')) {
    return;
  }

  register_block_type(PLUGIN_DIR .  'build/swiper-posts', array(
    'render_callback' => 'block_swiper_posts_render'
  ));
}
add_action('init', 'block_swiper_posts_init');

// fonction callback pour afficher le bloc en front
function block_swiper_posts_render(array $attributes)
{
  $args = [
    'posts_per_page' => 3,
  ];

  $posts = get_posts($args);

  if (count($posts) == 0) {
    return "<p>Pas d'article</p>";
  }

  $markup = '<ul class="wp-block-capitainewp-dynamic">';

  foreach ($posts as $post) {

    $markup .= sprintf(
      '<li><a href="%1$s">%2$s</a></li>',
      esc_url(get_permalink($post->ID)),
      esc_html(get_the_title($post->ID))
    );
  }
  $markup .= '</ul>';

  return $markup;
}
