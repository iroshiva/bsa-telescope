<!DOCTYPE html>
<!--[if lte IE 11]><html <?php language_attributes(); ?> class="no-js lte-ie11"> <![endif]-->
<!--[if gte IE 11]><!-->
<html <?php language_attributes(); ?> class="no-js"><!--<![endif]-->

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<!-- <div class="site-container"> -->
	<header id="header" class="header">
		<?= get_template_part('template-parts/svg/common-svg'); ?>
		<div class="header__main">
			<?php
			if (function_exists('the_custom_logo')) {
				the_custom_logo();
			}
			?>
			<nav class="nav nav--center">
				<?= get_template_part(
					'template-parts/navigations/common',
					'nav',
					array(
						'nav-type' => 'header-center',
					)
				)
				?>
			</nav>
			<nav class="nav nav--right">
				<?= get_template_part(
					'template-parts/navigations/common',
					'nav',
					array(
						'nav-type' => 'header-right',
					)
				)
				?>
			</nav>
			<div class="btn--hamb hamburger hamburger--spring" id="js-navbar-toggle">
				<div class="hamburger hamburger--spring">
					<span class="hamburger-box">
						<span class="hamburger-inner"></span>
					</span>
				</div>
			</div>
		</div>
		<div class="header__resp">
			<nav class="nav nav--center">
				<?= get_template_part(
					'template-parts/navigations/common',
					'nav',
					array(
						'nav-type' => 'header-center',
					)
				)
				?>
			</nav>
			<nav class="nav nav--right">
				<?= get_template_part(
					'template-parts/navigations/common',
					'nav',
					array(
						'nav-type' => 'header-right',
					)
				)
				?>
			</nav>
		</div>
	</header>

	<main class="main">