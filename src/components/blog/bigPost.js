const BigPost =(className) => {
const column = document.createElement('div');

column.className = className

  column.innerHTML= `
  <div class="big-post__item">
   <span class="big-post__tips">Dinner tips</span>
    <img class="big-post__background"  src="https://realfood.tesco.com/media/images/1400x919-Avocado-pasta-2ffd4148-2a06-42ca-acdd-bb81aac68319-0-1400x919.jpg"/>
      <div class= "big-post__info">
       <h3 class="big-post__title">Our chef tips for a great and tasty dinner ready in 20 minutes</h3>
         <div class= "row">
         <img class="big-post__avatar" />
          <span class="big-post__a">Author</span>
          <time class="big-post__date">17. 6. 2020</time>
         </div>
      </div>
  </div>
  `;
  return column.outerHTML;
};
export default BigPost;