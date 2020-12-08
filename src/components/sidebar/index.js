const Sidebar = (title, listItems, buttonText) => {
   const aside = document.createElement('aside');

   aside.className = `hero__sidebar sidebar col-3`;

   aside.innerHTML = `
   <h3 class="sidebar__title">${title}</h3>
		<ul class="sidebar__list">`;
   return aside.outerHTML;
};
export default Sidebar();