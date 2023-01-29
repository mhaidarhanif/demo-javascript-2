let dataBlogPosts = [];
const url =
  "https://api.kontenbase.com/query/api/v1/7f81c3a1-9695-4797-ae79-98485cb46070/posts";

const blogPostsSectionElement = document.getElementById("blog-posts");

function runApp() {
  getTodos();
}

async function getTodos() {
  const response = await fetch(url);
  const blogPosts = await response.json();

  dataBlogPosts = blogPosts;

  renderBlogPosts();
}

function renderBlogPosts() {
  dataBlogPosts.forEach((blogPost) => {
    const blogPostElement = document.createElement("div");

    blogPostElement.innerHTML = `
      <h2>${blogPost.title}</h2>
      <p>${blogPost.story}</p>
    `;

    blogPostsSectionElement.append(blogPostElement);
  });
}

runApp();
