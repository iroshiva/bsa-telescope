<?php

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function block_jobs_list_init()
{
  if (!function_exists('register_block_type')) {
    return;
  }

  register_block_type(PLUGIN_DIR .  'build/1-test', array(
    'attributes' => [
      'blockID' => [
        'type' => 'string',
        'default' => ''
      ],
      'blockClassName' => [
        'type' => 'string',
        'default' => ''
      ],
      'jobsPerResult' => [
        'type' => 'string',
        'default' => 2
      ],
      'jobsDisplay' => [
        'type' => 'string',
        'default' => 'column'
      ],
      'paginationModeValue' => [
        'type' => 'string',
        'default' => 'none'
      ],
      'isSearchInput' => [
        'type' => 'boolean',
        'default' => false
      ],
      'isHeroSearchInput' => [
        'type' => 'boolean',
        'default' => false
      ],
      'heroSearchContainerClass' => [
        'type' => 'string',
        'default' => 'searchContainerHero'
      ],
    ],
    'render_callback' => 'block_jobs_list_render'
  ));
}
add_action('init', 'block_jobs_list_init');

// fonction callback pour afficher le bloc en front
function block_jobs_list_render(array $attributes)
{
}
