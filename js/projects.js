const projects = [
  {
    img: "https://raw.githubusercontent.com/Dragonglass101/Dragonglass101.github.io/main/imgs/Devilslist.png",
    title: "Decentralized Angellist",
    tech_stack: "Tezos, IPFS, React JS",
    date: "July 21, 2022",
    description:
      "DevilsList is an end-to-end platform where investors may invest in businesses using tez/USDT and sign SAFT/SAFEs directly on the site. When a round closes, this website keeps track of the cap-table, and entrepreneurs may pay their workers and vendors in tez/USDT",
    live: "https://decentralizedangellist.web.app/",
    github: "https://github.com/Dragonglass101/Decentralized-AngelList",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Cuphead Clone",
    tech_stack: "SDL Graphics Library",
    date: "November 19, 2021",
    description: "",
    live: "",
    github: "https://github.com/Dragonglass101/CPP-Project",
  },
  {
    img: "../imgs/sportify.png",
    title: "Sportify",
    tech_stack: "Firebase, React JS",
    date: "March 21, 2022",
    description:
      "A web application to manage sports tournaments and show live scores of different events. Was used for IIITB Sports Fest, Spandan. It provides the following functionalities: Users can view live scores, Admins can create and manage fixtures, Admins can update the score board",
    live: "https://sportify-8829a.web.app/",
    github: "https://github.com/Bondok6/Reservify",
  },
];
const cards = document.querySelector(".cards");

const createCard = (projects) => {
  console.log("creating cards");
  projects.forEach((project) => {
    let html = `
  <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
    <div class="card-awsome text-white card-awsome-has-bg click-col" style="background-image:url(${project.img});">
      <img class="card-awsome-img d-none" src=${project.img}>
      <div class="card-awsome-img-overlay d-flex flex-column">
        <div class="card-awsome-body myDIV" style="margin-top:20px">
          <small class="card-awsome-meta mb-2" style="font-size:15px; font-weight:bold;">${project.tech_stack}</small>
            <h4 class="card-awsome-title mt-0" style="font-size:25px;" ><a class="text-white" herf="#">${project.title}</a></h4>
          <small style="font-size:15px"><i class="far fa-clock"></i> ${project.date}</small>
          <div class="desc" style="padding-left:30px; padding-right:30px; display:flex; text-align:left ">
            <p style="font-size:17px"> ${project.description} </p>
          </div>
        </div>
      </div>
    </div>
  </div>`;
    cards.innerHTML += html;
  });
};

createCard(projects);
