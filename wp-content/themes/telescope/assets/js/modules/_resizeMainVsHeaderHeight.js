// window.addEventListener("load", marginTopSiteContent);
// window.addEventListener("resize", marginTopSiteContent);

const marginTopSiteContent = () => {
  const header = document.querySelector(".header");
  const siteContent = document.querySelector(".site-content");
  const headerHeight = header.offsetHeight;
  siteContent.style.paddingTop = `${headerHeight}px`;
};

export default marginTopSiteContent;
