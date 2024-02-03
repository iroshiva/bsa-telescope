<ul class="nav-items">
  <?php
  // return all registered navigation menu menu locations and the menus assigned to them.
  $menuLocations = get_nav_menu_locations();
  // $arg récup de l'array d'option injecté dans le get_template_part 
  $navType = $args['nav-type'];
  $menuId = $menuLocations[$navType];

  if ($menuId != 0) :

    foreach (wp_get_nav_menu_items($menuId) as $menuItem) :

      $activeClass = '';
      // retourne l'url actuelle sans le / à la fin
      $currentUrl = rtrim(home_url($wp->request), '/');
      // retourne l'url vers lequel pointe le lien sans / à la fin
      $menuItemUrl = rtrim($menuItem->url, '/');

      $menuItemTarget = $menuItem->target;
      // si des classes ont été attribuées au lien dans bo wp Menus
      $itemClasses = implode(' ', $menuItem->classes);

      $isSocialName = str_contains($menuItemUrl, 'facebook') || str_contains($menuItemUrl, 'instagram') || str_contains($menuItemUrl, 'twitch');

      if ($isSocialName) {
        $socialName = ((str_contains($menuItemUrl, 'facebook')) ? 'facebook' : ((str_contains($menuItemUrl, 'instagram')) ? 'instagram' : ((str_contains($menuItemUrl, 'twitch')) ? 'twitch' : '')));
      }

      if ($menuItemUrl == $currentUrl && !$isSocialName) {
        // si les deux url correspondent
        // => l'élément du menu dans ce tour de boucle est celui de la page affichée
        // on définit la classe "active" pour l'élément HTML
        $activeClass = ' active';
        // add active to string of classes
        $itemClasses .= $activeClass;
      }


  ?>
      <li class="nav-item<?= $itemClasses ?>">
        <?php if ($isSocialName && $socialName) { ?>
          <a class="nav-link" aria-current="page" href="<?= $menuItem->url; ?>" target="<?= $menuItemTarget == '_blank' ? '_blank' : '_self'; ?>" <?= $menuItemTarget == '_blank' ? 'rel="noreferrer noopener"' : '';  ?>><svg class="svg">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#<?php echo $socialName; ?>-svg"></use>
            </svg></a>

        <?php } else { ?>
          <a class="nav-link<?= $navType === 'header-right' ? ' btn btn--primary' : ' link-item' ?><?= $menuItemTarget == '_blank' ? ' nav-link--blank' : '' ?>" aria-current="page" href="<?= $menuItem->url; ?>" target="<?= $menuItemTarget == '_blank' ? '_blank' : '_self'; ?>" <?= $menuItemTarget == '_blank' ? 'rel="noreferrer noopener"' : '';  ?>><?= $menuItem->title; ?></a>
        <?php }; ?>
      </li>
    <?php endforeach; ?>
  <?php endif; ?>
</ul>