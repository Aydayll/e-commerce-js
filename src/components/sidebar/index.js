const Sidebar = (className) => {
    console.log (className)
   const aside = document.createElement('aside');

   aside.className = `hero__sidebar sidebar ${className}`;

   aside.innerHTML = 'xdrftyghdxfchjbknmlnjk';
   return aside.outerHTML;
};
export default Sidebar();