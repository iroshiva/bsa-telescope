<?php
$menuLocations = get_nav_menu_locations();
$navType = $args['nav-type'];
$menuId = $menuLocations[$navType];
$menuObject = wp_get_nav_menu_object($menuId);
$menuTitle = $menuObject->name;
?>
<h4 class="title"><?php echo $menuTitle ?></h4>
<nav class="nav">
  <?= get_template_part(
    'template-parts/navigations/common',
    'nav',
    array(
      'nav-type' => $navType,
    )
  )
  ?>
</nav>