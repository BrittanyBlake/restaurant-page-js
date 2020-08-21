export const home = (() => {
  const sectionOne = document.createElement("section");
  sectionOne.setAttribute("class", "page-section clearfix");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  const introDiv = document.createElement("div");
  introDiv.setAttribute("class", "intro");
  const image = document.createElement("img");
  image.setAttribute("class", "intro-img img-fluid mb-3 mb-lg-0 rounded");
  image.setAttribute("src", "src/assets/home2.jpg");
  image.setAttribute("alt", "baking image");
  const textDiv = document.createElement("div");
  textDiv.setAttribute(
    "class",
    "intro-text left-0 text-center bg-faded p-5 rounded"
  );
  const heading = document.createElement("h2");
  heading.setAttribute("class", "section-heading mb-4");
  const spanOne = document.createElement("span");
  spanOne.setAttribute("class", "section-heading-upper");
  spanOne.innerHTML = `Fresh Pastries`;
  const spanTwo = document.createElement("span");
  spanTwo.setAttribute("class", "section-heading-lower");
  spanTwo.innerHTML = `Worth Eating`;
  const paragraph = document.createElement("p");
  paragraph.setAttribute("class", "mb-3");
  paragraph.innerHTML = `Every pastry baked our famous pastry chef starts with locally
              sourced, hand picked ingredients. Once you try it, our pastries will
              be a blissful addition to your everyday routine - we
              guarantee it!`;
  const divBtn = document.createElement("div");
  divBtn.setAttribute("class", "intro-button mx-auto");
  const btn = document.createElement("a");
  btn.setAttribute("class", "btn btn-primary btn-xl");
  btn.setAttribute("href", "#");
  btn.innerHTML = `Visit us Today!`;

  heading.appendChild(spanOne);
  heading.appendChild(spanTwo);
  textDiv.appendChild(heading);
  textDiv.appendChild(paragraph);
  textDiv.appendChild(divBtn);
  divBtn.appendChild(btn);
  introDiv.appendChild(textDiv);
  introDiv.appendChild(image);
  container.appendChild(introDiv);
  sectionOne.appendChild(container);
  return sectionOne;
})();

export const lowerhome = (() => {
  const sectionTwo = document.createElement("section");
  sectionTwo.setAttribute("class", "page-section cta");
  const containerTwo = document.createElement("div");
  containerTwo.setAttribute("class", "container");
  const row = document.createElement("row");
  row.setAttribute("class", "row");
  const col = document.createElement("div");
  col.setAttribute("class", "col-xl-9 mx-auto");
  const rowContent = document.createElement("div");
  rowContent.setAttribute("class", "cta-inner text-center rounded");
  const header = document.createElement("h2");
  header.setAttribute("class", "section-heading mb-4");
  const spanOne = document.createElement("span");
  spanOne.setAttribute("class", "section-heading-upper");
  spanOne.innerHTML = `Our Promise`;
  const spanTwo = document.createElement("span");
  spanTwo.setAttribute("class", "section-heading-lower");
  spanTwo.innerHTML = `To You`;
  const paragraph = document.createElement("p");
  paragraph.setAttribute("class", "mb-0");
  paragraph.innerHTML = `When you walk into our shop to start your day, we are dedicated
                to providing you with friendly service, a welcoming atmosphere,
                and above all else, excellent products made with the highest
                quality ingredients. If you are not satisfied, please let us
                know and we will do whatever we can to make things right! `;

  header.appendChild(spanOne);
  header.appendChild(spanTwo);
  rowContent.appendChild(header);
  rowContent.appendChild(paragraph);
  col.appendChild(rowContent);
  row.appendChild(col);
  containerTwo.appendChild(row);
  sectionTwo.appendChild(containerTwo);
  return sectionTwo;
})();
