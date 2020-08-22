import coffeeImage from "../assets/products-01.jpg";

export const menu = (() => {
  const section = document.createElement('section');
  section.setAttribute('class', 'page-section');
  const container = document.createElement('div');
  container.setAttribute('class', 'container');
  const product = document.createElement('div');
  product.setAttribute('class', 'product-item');
  const productInfo = document.createElement('div');
  productInfo.setAttribute('class', 'product-item-title d-flex');
  const item = document.createElement('div');
  item.setAttribute('class', 'bg-faded p-5 d-flex ml-auto rounded');
  const header = document.createElement('h2');
  header.setAttribute('class', 'section-heading mb-0');
  const spanOne = document.createElement('span');
  spanOne.setAttribute('class', 'section-heading-upper');
  spanOne.innerHTML = 'Blended to Perfection';
  const spanTwo = document.createElement('span');
  spanTwo.setAttribute('class', 'section-heading-lower');
  spanTwo.innerHTML = 'Coffees &amp; Teas';
  const image = document.createElement('img');
  image.setAttribute(
    'class',
    'product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0',
  );
  image.setAttribute('src', coffeeImage);
  image.setAttribute('alt', 'Coffees and teas');
  const description = document.createElement('div');
  description.setAttribute('class', 'product-item-description d-flex mr-auto');
  const descriptionText = document.createElement('div');
  descriptionText.setAttribute('class', 'bg-faded p-5 rounded');
  const text = document.createElement('p');
  text.setAttribute('class', 'mb-0');
  text.innerHTML = ` We take pride in our work, and it shows. Every time you order a
                beverage from us, we guarantee that it will be an experience
                worth having. Whether it's our world famous Venezuelan
                Cappuccino, a refreshing iced herbal tea, or something as simple
                as a cup of speciality sourced black coffee, you will be coming
                back for more.`;

  header.appendChild(spanOne);
  header.appendChild(spanTwo);
  item.appendChild(header);
  productInfo.appendChild(item);
  product.appendChild(productInfo);
  product.appendChild(image);
  descriptionText.appendChild(text);
  description.appendChild(descriptionText);
  product.appendChild(description);
  container.appendChild(product);
  section.appendChild(container);
  return section;
})();

export default menu;