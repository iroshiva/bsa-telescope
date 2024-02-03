// select all links with an anchor link
const goToAnchor = () => {
  const allAnchorLinks = document.querySelectorAll('a[href*=\\#]');

  if(allAnchorLinks.length) {
    for (const anchorLink of allAnchorLinks) {
      anchorLink.addEventListener("click", (e) => {
          anchorHref(e.target.hash);
        }
      );
    }
  }

  const anchorHref = (target) => {
    if(target !== '#tarteaucitron'){
      const anchorID = document.getElementById(target.substring(1));
  
      if(anchorID) {
        scroll({
          top: anchorID.offsetTop,
          behavior: "smooth"
        });
      }
    }
  }
}

export default goToAnchor;




