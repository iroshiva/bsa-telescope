/**
 * Registers a new block variation provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-blocks/#registerBlockVariation
 */
// import { registerBlockVariation } from "@wordpress/blocks";

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
// import { __ } from "@wordpress/i18n";

/**
 * Variation content
 */
(function () {
	var registerBlockVariation = wp.blocks.registerBlockVariation;
	var __ = wp.i18n.__;

	const CONTENT = [["telescope-blocks/hero-content-block"]];

	/*
	 * New `core/cover` block variation.
	 */
	const variationsMediaText = {
		name: "variations-cover-hero",
		title: "Variation du block cover",
		description: __(
			"Variation pour l'en-tête de page",
			"variations-media-text",
		),
		category: "telescope",
		attributes: {
			align: "full",
			spacing: {
				margin: {
					bottom: "var(--wp--preset--spacing--84)",
				},
			},
		},
		isDefault: false,
		innerBlocks: CONTENT,
	};

	registerBlockVariation("core/cover", variationsMediaText);
})();
