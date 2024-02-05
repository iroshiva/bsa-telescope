<?php

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function block_slider_posts_init()
{
  if (!function_exists('register_block_type')) {
    return;
  }

  register_block_type(PLUGIN_DIR .  'build/modules/slider-posts', array(
    'render_callback' => 'block_slider_posts_render'
  ));
}
add_action('init', 'block_slider_posts_init');

// fonction callback pour afficher le bloc en front
function block_slider_posts_render(array $attributes)
{
  $blockClassName = $attributes['blockClassName'];
  $query_args = array(
    'post_type'     => 'post',
    'posts_per_page'   => $attributes['postperpage'],
    'orderby'       => 'date',
    'order'         => $attributes['order'],
  );
  $recents_post_query = new WP_Query($query_args);

  ob_start();
?>
  <div class="swiper swiper-posts <?= $blockClassName; ?>">
    <div class="swiper-wrapper">
      <?php if ($recents_post_query->have_posts()) :
        while ($recents_post_query->have_posts()) : $recents_post_query->the_post();
      ?>
          <div class="card swiper-slide">
            <a href="<?php the_permalink(); ?>" class="card__link"></a>
            <?php
            if (has_post_thumbnail()) {
              echo get_the_post_thumbnail(get_the_ID(), $attributes['imagesize'], array("class" => "card__image"));
            } ?>

            <?php
            echo ($attributes['postcontent']) ? '<p class="card__excerpt">' . get_the_excerpt() . '</p>' : '';
            echo ($attributes['postdate']) ? '<p class="card__postdate">' . get_the_date('F j, Y', get_the_ID()) . '</p>' : '';
            ?>
          </div>
      <?php
        endwhile;
      endif;
      ?>
    </div>
    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev swiper-posts__swiper-btn"></div>
    <div class="swiper-button-next swiper-posts__swiper-btn"></div>
  </div>
<?php
  $outup = ob_get_contents();

  ob_end_clean();
  wp_reset_postdata();

  return $outup;
}
