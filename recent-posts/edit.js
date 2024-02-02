/**
 * Retrieves the translation of text.
 *https://wpengine.com/builders/create-a-slider-block/
 https://kinsta.com/blog/dynamic-blocks/
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
import {
  RichText,
  URLInput,
  InspectorControls,
  ColorPalette,
} from "@wordpress/block-editor";

import {
  PanelBody,
  IconButton,
  RangeControl,
  FontSizePicker,
  SelectControl,
  ToggleControl,
} from "@wordpress/components";

import { Fragment, useState, useEffect } from "@wordpress/element";

/**
 * Utile pour aller récupérer des d’informations dans le coeur de WordPress.
 * @wordpress/data == sorte de WP Query pour Js.
 */
import { useSelect } from "@wordpress/data";

import ServerSideRender from "@wordpress/server-side-render";

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
  const blockProps = useBlockProps({ className: "swiper-posts" });

  if (!props.attributes.PostType) {
    wp.apiFetch({
      url: "/bsa-web/wp-json/wp/v2/types",
    }).then((PostType) => {
      props.setAttributes({
        PostType: PostType,
      });
    });
  }

  const postSelectOptions = () => {
    return Object.keys(props.attributes.PostType).map((Post) => {
      return {
        label: Post,
        value: Post,
      };
    });
  };

  const updatePost = (e) => {
    props.setAttributes({
      SelectedPostType: e.target.value,
    });
  };

  // Récupération dynamique des articles
  const posts = useSelect((select) => {
    return select("core").getEntityRecords(
      "postType",
      props.attributes.SelectedPostType,
      { per_page: 3 }
    );
  });

  const displayDate = (postDate) => {
    const date = new Date(postDate);

    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = date.toLocaleDateString("fr-FR", options);

    return formattedDate;
  };

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title={"Parameter Settings"}>
          <RangeControl
            value={props.attributes.postperpage}
            label={"Number of posts"}
            min={0}
            max={50}
            initialPosition={5}
            allowReset
            onChange={(value) => props.setAttributes({ postperpage: value })}
          />
          <SelectControl
            label="Type de post"
            value={props.attributes.SelectedPostType}
            options={postSelectOptions()}
            onChange={(value) =>
              props.setAttributes({ SelectedPostType: value })
            }
          />
          <SelectControl
            label="Order By"
            value={props.attributes.Order}
            options={[
              { label: "Ascending", value: "ASC" },
              { label: "Descending", value: "DESC" },
            ]}
            onChange={(value) => props.setAttributes({ Order: value })}
          />
        </PanelBody>
        <PanelBody title={"Post Meta Settings"}>
          <ToggleControl
            label="Display Post Date"
            checked={props.attributes.postdate}
            onChange={(value) => {
              console.log(value);
              props.setAttributes({ postdate: value });
            }}
          />
        </PanelBody>
        <PanelBody title={"Post Excerpt Settings"}>
          <ToggleControl
            label="Display Post Excerpt"
            checked={props.attributes.postcontent}
            onChange={(value) => props.setAttributes({ postcontent: value })}
          />
        </PanelBody>
        <PanelBody title={"Image Settings"}>
          <SelectControl
            label="Image Size"
            value={props.attributes.imagesize}
            options={[
              { label: "Thumbnail", value: "thumbnail" },
              { label: "Medium", value: "medium" },
              { label: "Medium Large", value: "medium_large" },
              { label: "Large", value: "large" },
              { label: "Full", value: "full" },
            ]}
            onChange={(value) => props.setAttributes({ imagesize: value })}
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
            console.log(post);
            return (
              <div href={post.link} className="card swiper-slide">
                <img
                  src={
                    media?.media_details.sizes[props.attributes.imagesize]
                      ?.source_url
                  }
                  className="card__image"
                />
                {props.attributes.postcontent && (
                  <p className="card__excerpt">{post.excerpt.raw}</p>
                )}
                {props.attributes.postdate && (
                  <p className="card__postdate">{displayDate(post.date)}</p>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}
