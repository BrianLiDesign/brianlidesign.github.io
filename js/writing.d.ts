/**
 * Defines a new type named `Person` with three properties.
 *
 * This is a type alias, a way to give a new name to an existing type.
 * In this case, we're creating a new name for an object with specific properties.
 *
 * @property {string} title - Post title
 * @property {string} date - Human readable date (e.g. "August 2025")
 * @property {string[]} tags - Array of tags associated with the blog post
 * @property {string} description - Short summary
 * @property {string} image - Path to thumbnail image
 * @property {string} imageAlt - Alt text for the thumbnail
 * @property {string} slug - URL slug (used to build the post link)
 */
/**
 * Blog type and a small renderer that appends blog cards to #blog-container.
 * Build/compile this file to js/blog.js (or your project's output folder) so writing.html can load it.
 */
export type Blog = {
    title: string;
    date: string;
    tags: string[];
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
};
declare const blogs: Blog[];
/** Render all blogs into container with id 'blog-container' */
export declare function renderBlogs(containerId?: string): void;
export { blogs };
//# sourceMappingURL=writing.d.ts.map