<?php
// Register Menus
register_nav_menus(array(
  'header-center' => __('Header Navigation Center', 'mytheme'),
  'header-right' => __('Header Navigation Droite', 'mytheme'),
  'footer-1' => __('Footer Navigation 1', 'mytheme'),
  'footer-2' => __('Footer Navigation 2', 'mytheme'),
  'footer-3' => __('Footer Navigation 3', 'mytheme'),
  'footer-4' => __('Footer Navigation 4', 'mytheme'),
));

// permettre d'ajouter une propriété 'add_li_class' dans wp_nav_menu
function add_additional_class_on_li($classes, $item, $args)
{
  if (isset($args->add_li_class)) {
    $classes[] = $args->add_li_class;
  }
  return $classes;
}
add_filter('nav_menu_css_class', 'add_additional_class_on_li', 1, 3);
