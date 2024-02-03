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

	const CONTENT = [
		// We'll write our variation here.
		["telescope-blocks/half-section-content"],
	];

	/*
	 * New `core/group` block variation.
	 */
	const variationsMediaText = {
		name: "variations-media-text",
		title: "Variation du block media text",
		description: __("Variation du bloc media texte", "variations-media-text"),
		attributes: {
			align: "wide",
		},
		isDefault: false,
		innerBlocks: CONTENT,
	};

	registerBlockVariation("core/media-text", variationsMediaText);
})();
