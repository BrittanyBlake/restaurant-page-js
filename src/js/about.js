export const about = (() => {
  const section = document.createElement('section');
  section.setAttribute('class', 'page-section about-heading');
  section.setAttribute('id', 'display-about');
  const container = document.createElement('div');
  container.setAttribute('class', 'container');
  const image = document.createElement('img');
  image.setAttribute(
    'class',
    'img-fluid rounded about-heading-img mb-3 mb-lg-0',
  );
  image.setAttribute('src', 'src/assets/about4.jpg');
  image.setAttribute('alt', 'Cafe interior');
  const content = document.createElement('div');
  content.setAttribute('class', 'about-heading-content');
  const row = document.createElement('div');
  row.setAttribute('class', 'row');
  const col = document.createElement('div');
  col.setAttribute('class', 'col-xl-9 col-lg-10 mx-auto');
  const aboutInfo = document.createElement('div');
  aboutInfo.setAttribute('class', 'bg-faded rounded p-5');
  const header = document.createElement('h2');
  header.setAttribute('class', 'section-heading mb-4');
  const spanOne = document.createElement('span');
  spanOne.setAttribute('class', 'section-heading-upper');
  spanOne.innerHTML = 'Strong Coffee, Tasty Pastries, Amazing Breakfast';
  const spanTwo = document.createElement('span');
  spanTwo.setAttribute('class', 'section-heading-lower');
  spanTwo.innerHTML = 'About Our Cafe';
  const paragraph = document.createElement('p');
  paragraph.innerHTML = `Founded in 1987 by the Hernandez brothers, our establishment
                  has been serving up rich coffee sourced from artisan farmers
                  in various regions of South and Central America and various delicious pastries 
                  and brunch favorites. We are dedicated to travelling the world, finding the best coffee 
                  and brunch recipes, and bringing back to you here in our cafe.`;
  const paragraphTwo = document.createElement('p');
  paragraphTwo.setAttribute('class', 'mb-0');
  paragraphTwo.innerHTML = `We guarantee that you will fall in <em>lust</em> with our
                  decadent flavours the moment you walk inside until you finish
                  your last bite. Join us for your daily routine, an outing with
                  friends, or simply just to enjoy some alone time.`;

  container.appendChild(image);
  header.appendChild(spanOne);
  header.appendChild(spanTwo);
  aboutInfo.appendChild(header);
  aboutInfo.appendChild(paragraph);
  aboutInfo.appendChild(paragraphTwo);
  col.appendChild(aboutInfo);
  row.appendChild(col);
  content.appendChild(row);
  container.appendChild(content);
  section.appendChild(container);
  return section;
})();

export default about;