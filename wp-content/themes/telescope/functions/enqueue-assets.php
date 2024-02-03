
<?php

// fonction qui permet de renouveler le [contenthash] généré par webpack
// permet le renouvellement systématique du js et css compilé si changement 
// règle le problème de la mise en cache des assets => change à chaque nouvelle version 
function get_front_path_asset($name)
{
  // un fichier JSON est généré par le plugin webpack-assets-manifest
  // avec tous les assets (nom d'origine: nom d'export)
  // le js et css ont un contenthash en nom d'export
  // chemin du manifest.json
  $map = get_template_directory() . '/dist/assets-manifest.json';
  static $hash = null;

  if (null === $hash) {
    // récupération du contenu du manifest.json
    $hash = file_exists($map) ? json_decode(file_get_contents($map), true) : [];
  }

  // permet de voir si le nom d'origine ($name) est présent
  if (array_key_exists($name, $hash)) {
    return $hash[$name];
  }

  // si non il retourne le nom d'origine $name
  return $name;
}

function mytheme_enqueue_scripts()
{

  // Only use this method is we"re not in wp-admin
  if (!is_admin()) {

    /**
     * jQuery
     * We want to use the modern CDN version of jQuery, not the version shipped with WordPress
     */
    wp_deregister_script("jquery");
    // ajout dernière version de jquery
    wp_register_script("jquery", "https://code.jquery.com/jquery-3.6.0.min.js", FALSE, "3.6.0", true);
    wp_enqueue_script("jquery");

    wp_enqueue_script("theme-bundle-js", get_template_directory_uri() . "/dist/" .  get_front_path_asset('main.js'), array("jquery"), "", true);
    wp_enqueue_style("theme-bundle-css", get_template_directory_uri() . "/dist/" . get_front_path_asset('main.css'), array(), "", "all");
  }
}
add_action("wp_enqueue_scripts", "mytheme_enqueue_scripts", 999);

// Update CSS within in Admin
function block_gut_style()
{
  wp_enqueue_script('block-script', get_template_directory_uri() . "/dist/" . get_front_path_asset('backend.js'), ['wp-blocks']);
  wp_enqueue_style('block-styles', get_template_directory_uri() . "/dist/" .  get_front_path_asset('backend.css'));
}
add_action('enqueue_block_assets', 'block_gut_style');
