import BigPost from "./bigPost.js";

const Blog = () => {
    const section = document.createElement('div');

    section.innerHTML = `
  <div class= "container">
  <h2>Read our Blog posts</h2>
    <div class= "row">
      ${BigPost()}
    </div>
  </div>
    `;
return section.outerHTML;
};
export default Blog;