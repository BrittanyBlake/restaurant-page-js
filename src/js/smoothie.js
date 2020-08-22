import smoothieImage from "../assets/product3.jpg";

export const smoothie = (() => {
  const section = document.createElement('section');
  section.setAttribute('class', 'page-section');
  const container = document.createElement('div');
  container.setAttribute('class', 'container');
  const product = document.createElement('div');
  product.setAttribute('class', 'product-item');
  const productTitleDiv = document.createElement('div');
  productTitleDiv.setAttribute('class', ' product-item-title d-flex');
  const productTitle = document.createElement('div');
  productTitle.setAttribute('class', 'bg-faded p-5 d-flex ml-auto rounded');
  const header = document.createElement('h2');
  header.setAttribute('class', 'section-heading mb-0');
  const spanOne = document.createElement('span');
  spanOne.setAttribute('class', 'section-heading-upper');
  spanOne.innerHTML = 'Looks too Good to Eat';
  const spanTwo = document.createElement('span');
  spanTwo.setAttribute('class', 'section-heading-lower');
  spanTwo.innerHTML = 'Smoothies &amp; Bowls';
  const image = document.createElement('img');
  image.setAttribute(
    'class',
    'product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0',
  );
  image.setAttribute('src', smoothieImage);
  image.setAttribute('alt', 'Smoothie bowl and fruits');
  const description = document.createElement('div');
  description.setAttribute('class', 'product-item-description d-flex mr-auto');
  const descriptionText = document.createElement('div');
  descriptionText.setAttribute('class', 'bg-faded p-5 rounded');
  const text = document.createElement('p');
  text.setAttribute('class', 'mb-0');
  text.innerHTML = ` Travelling the world for the very best quality ingredients is
                something take pride in. When you visit us, you'll always find our
                new blends of fresh fruit or you can create your own signature blend! 
                Please visit us in person for more details.`;

  header.appendChild(spanOne);
  header.appendChild(spanTwo);
  productTitle.appendChild(header);
  productTitleDiv.appendChild(productTitle);
  product.appendChild(productTitleDiv);
  product.appendChild(image);
  descriptionText.appendChild(text);
  description.appendChild(descriptionText);
  product.appendChild(description);
  container.appendChild(product);
  section.appendChild(container);
  return section;
})();

export default smoothie;