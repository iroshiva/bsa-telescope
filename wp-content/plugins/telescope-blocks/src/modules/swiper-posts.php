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

  register_block_type(PLUGIN_DIR .  'build/modules/swiper-posts', array(
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

  ob_start();
?>
  <div class="container swiper swiper-posts">
    <?php if (count($posts) == 0) { ?>
      <p>Pas d'article</p>
    <?php } ?>

    <div class="swiper-wrapper">

      <?php foreach ($posts as $post) {
        $thumbnail_id = get_post_thumbnail_id($post->ID);
      ?>
        <a href="<?php echo get_permalink($post->ID) ?>" class="swiper-slide card">
          <?php echo wp_get_attachment_image($thumbnail_id, 'thumbnail', false, array('class' => 'card_image')); ?>
          <h4><?php echo get_the_title($post->ID) ?></h4>
          <p><?php echo get_the_excerpt($post->ID) ?></p>
        </a>
      <?php } ?>
    </div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
<?php
  $outup = ob_get_contents();

  ob_end_clean();

  return $outup;
}
