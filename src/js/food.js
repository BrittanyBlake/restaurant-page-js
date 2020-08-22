import foodImage from '../assets/product2.jpg';

export const food = (() => {
  const section = document.createElement('section');
  section.setAttribute('class', 'page-section');
  const container = document.createElement('div');
  container.setAttribute('class', 'container');
  const product = document.createElement('div');
  product.setAttribute('class', 'product-item');
  const productTitleDiv = document.createElement('div');
  productTitleDiv.setAttribute('class', ' product-item-title d-flex');
  const productTitle = document.createElement('div');
  productTitle.setAttribute('class', 'bg-faded p-5 d-flex mr-auto rounded');
  const header = document.createElement('h2');
  header.setAttribute('class', 'section-heading mb-0');
  const spanOne = document.createElement('span');
  spanOne.setAttribute('class', 'section-heading-upper');
  spanOne.innerHTML = 'Delicious Treats, Good Eats';
  const spanTwo = document.createElement('span');
  spanTwo.setAttribute('class', 'section-heading-lower');
  spanTwo.innerHTML = 'Bakery &amp; Kitchen';
  const image = document.createElement('img');
  image.setAttribute(
    'class',
    'product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0',
  );
  image.setAttribute('src', foodImage);
  image.setAttribute('alt', 'toast with poached egg');
  const description = document.createElement('div');
  description.setAttribute('class', 'product-item-description d-flex ml-auto');
  const descriptionText = document.createElement('div');
  descriptionText.setAttribute('class', 'bg-faded p-5 rounded');
  const text = document.createElement('p');
  text.setAttribute('class', 'mb-0');
  text.innerHTML = ` Our seasonal menu features delicious snacks, baked goods, and
                even full meals perfect for breakfast or lunchtime. We source
                our ingredients from local, oragnic farms whenever possible,
                alongside premium vendors for specialty goods.`;

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

export default food;