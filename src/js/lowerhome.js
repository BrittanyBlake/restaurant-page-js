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
    const header = document.createElement("h2")
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
}) ();