export const scrollToElement = (className: string) => {
  const element = document.querySelector(`.${className}`);
  const top = !!element ? element.getBoundingClientRect().top + window.pageYOffset : 0;
  window.scrollTo({top: top - 20, behavior: "smooth"});
};
