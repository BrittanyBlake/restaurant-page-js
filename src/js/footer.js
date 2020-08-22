export const footer = (() => {
  const footer = document.createElement('footer');
  footer.setAttribute('class', 'footer text-faded text-center py-5');
  const container = document.createElement('div');
  container.setAttribute('class', 'container');
  const para = document.createElement('p');
  para.setAttribute('class', 'm-0 small');
  para.innerHTML = 'Copyright &copy; The Brunch Club 2020';

  container.appendChild(para);
  footer.appendChild(container);
  return footer;
})();

export default footer;
