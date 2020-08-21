export const header = (() => {
  const head = document.createElement("h1");
  head.setAttribute(
    "class",
    "site-heading text-center text-white d-none d-lg-block"
  );
  const supportText = document.createElement("span");
  supportText.setAttribute("class", "site-heading-upper text-primary mb-3");
  supportText.innerHTML = `THE MOST EXCLUSIVE SPOT TO GET YOUR BRUNCH FIX`;
  const headText = document.createElement("span");
  headText.setAttribute("class", "site-heading-lower");
  headText.innerHTML = `THE BRUNCH CLUB`;

  head.appendChild(supportText);
  head.appendChild(headText);
  return head;
})();
