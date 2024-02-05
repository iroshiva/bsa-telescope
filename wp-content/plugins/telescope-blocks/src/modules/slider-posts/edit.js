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
import { useBlockProps } from "@wordpress/block-editor";
import { InspectorControls } from "@wordpress/block-editor";

import {
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
} from "@wordpress/components";

/**
 * Utile pour aller récupérer des d’informations dans le coeur de WordPress.
 * @wordpress/data == sorte de WP Query pour Js.
 */
import { useSelect } from "@wordpress/data";

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
 * BaN5a6II4ZC176Zp
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps({ className: "swiper-posts" });
	setAttributes({ blockClassName: blockProps.className });

	// Récupération des articles en fonction de attributes.postperpage
	const posts = useSelect(
		(select) => {
			return select("core").getEntityRecords("postType", "post", {
				per_page: attributes.postperpage,
				orderby: "date",
				order: attributes.order,
			});
		},
		[attributes.postperpage, attributes.order],
	);

	const displayPostDate = (postDate) => {
		const date = new Date(postDate);

		const options = { year: "numeric", month: "short", day: "numeric" };
		const formattedDate = date.toLocaleDateString("fr-FR", options);

		return formattedDate;
	};

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody title={"Paramètres"}>
					<RangeControl
						value={attributes.postperpage}
						label={"Number of posts"}
						min={0}
						max={50}
						initialPosition={5}
						allowReset
						onChange={(value) => setAttributes({ postperpage: value })}
					/>
					<SelectControl
						label="Ordre"
						value={attributes.order}
						options={[
							{ label: "Croissant", value: "asc" },
							{ label: "Décroissant", value: "desc" },
						]}
						onChange={(value) => setAttributes({ order: value })}
					/>
				</PanelBody>
				<PanelBody title={"Excerpt de l'article"}>
					<ToggleControl
						label="Afficher l'excerpt"
						checked={attributes.postcontent}
						onChange={(value) => setAttributes({ postcontent: value })}
					/>
				</PanelBody>
				<PanelBody title={"Date de l'article"}>
					<ToggleControl
						label="Afficher la date"
						checked={attributes.postdate}
						onChange={(value) => {
							console.log(value);
							setAttributes({ postdate: value });
						}}
					/>
				</PanelBody>
				<PanelBody title={"Image"}>
					<SelectControl
						label="Taille del'image"
						value={attributes.imagesize}
						options={[
							{ label: "Thumbnail", value: "thumbnail" },
							{ label: "Medium", value: "medium" },
							// { label: "Medium Large", value: "medium_large" },
							// { label: "Large", value: "large" },
							{ label: "Full", value: "full" },
						]}
						onChange={(value) => setAttributes({ imagesize: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<div className="swiper-wrapper">
				{!posts && "Loading"}
				{posts && posts.length === 0 && "No Posts"}
				{posts &&
					posts.length > 0 &&
					posts.map((post) => {
						const media = post.featured_media
							? wp.data.select("core").getMedia(post.featured_media)
							: null;
						return (
							<div href={post.link} className="card swiper-slide">
								<img
									src={
										media?.media_details.sizes[attributes.imagesize]?.source_url
									}
									className="card__image"
								/>
								{attributes.postcontent && (
									<p className="card__excerpt">{post.excerpt.raw}</p>
								)}
								{attributes.postdate && (
									<p className="card__postdate">{displayPostDate(post.date)}</p>
								)}
							</div>
						);
					})}
			</div>
		</div>
	);
}
