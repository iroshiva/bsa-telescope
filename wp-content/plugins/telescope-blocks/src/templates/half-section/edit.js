/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit(props) {
	const blockProps = useBlockProps();

	// Template de blocs
	const BASE_TEMPLATE = [
		[
			"core/media-text",
			// [["telescope-blocks/half-section-content"]],
			// [
			// 	[
			// 		"core/heading",
			// 		{
			// 			level: 2,
			// 			content: "Mon titre",
			// 			placeholder: "Mon titre",
			// 			textAlign: "center",
			// 			lock: { move: true, remove: true },
			// 		},
			// 	],
			// 	[
			// 		"core/buttons",
			// 		{
			// 			align: "center",
			// 			layout: { type: "flex", justifyContent: "center" },
			// 			lock: { move: true, remove: false },
			// 		},
			// 		[
			// 			[
			// 				"core/button",
			// 				{
			// 					placeholder: "Texte du bouton",
			// 					text: "Texte du bouton",
			// 				},
			// 			],
			// 		],
			// 	],
			// ],
		],
	];

	return (
		<div {...blockProps}>
			<InnerBlocks
				template={BASE_TEMPLATE} // Le template de base
				// templateLock="all" // Empêcher l'ajout de nouveaux blocs
			/>
		</div>
	);
}
