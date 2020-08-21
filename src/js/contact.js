export const contact = (() => {
  const section = document.createElement('section');
  section.setAttribute('class', 'page-section cta');
  const container = document.createElement('div');
  container.setAttribute('class', 'container');
  const row = document.createElement('div');
  row.setAttribute('class', 'row');
  const col = document.createElement('div');
  col.setAttribute('class', 'col-xl-9 mx-auto');
  const content = document.createElement('div');
  content.setAttribute('class', 'cta-inner text-center rounded');
  const header = document.createElement('h2');
  header.setAttribute('class', 'section-heading mb-5');
  const spanOne = document.createElement('span');
  spanOne.setAttribute('class', 'section-heading-upper');
  spanOne.innerHTML = 'Come On In';
  const spanTwo = document.createElement('span');
  spanOne.setAttribute('class', 'section-heading-lower');
  spanTwo.innerHTML = 'We\'re Open';
  const schedule = document.createElement('ul');
  schedule.setAttribute(
    'class',
    'list-unstyled list-hours mb-5 text-left mx-auto',
  );
  schedule.innerHTML = `
                <li class="list-unstyled-item list-hours-item d-flex">
                  Sunday
                  <span class="ml-auto">Closed</span>
                </li>
                <li class="list-unstyled-item list-hours-item d-flex">
                  Monday
                  <span class="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li class="list-unstyled-item list-hours-item d-flex">
                  Tuesday
                  <span class="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li class="list-unstyled-item list-hours-item d-flex">
                  Wednesday
                  <span class="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li class="list-unstyled-item list-hours-item d-flex">
                  Thursday
                  <span class="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li class="list-unstyled-item list-hours-item d-flex">
                  Friday
                  <span class="ml-auto">7:00 AM to 8:00 PM</span>
                </li>
                <li class="list-unstyled-item list-hours-item d-flex">
                  Saturday
                  <span class="ml-auto">9:00 AM to 5:00 PM</span>
                </li>
    `;
  const paragragh = document.createElement('p');
  paragragh.setAttribute('class', 'address mb-5');
  paragragh.innerHTML = ` 
        <em>
         <strong>1116 Orchard Street</strong>
         <br> Golden Valley, New Jersey
        </em>
    `;
  const smallPara = document.createElement('p');
  smallPara.setAttribute('class', 'mb-0');
  smallPara.innerHTML = `
        <small>
          <em>Call Anytime</em>
        </small>
        <br>
        (317) 585-8468
    `;

  header.appendChild(spanTwo);
  header.appendChild(spanOne);
  content.appendChild(header);
  content.appendChild(schedule);
  content.appendChild(paragragh);
  content.appendChild(smallPara);
  col.appendChild(content);
  row.appendChild(col);
  container.appendChild(row);
  section.appendChild(container);
  return section;
})();
export default contact;
