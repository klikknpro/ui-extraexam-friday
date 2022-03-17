const companies = [
  {
    title: "Apple",
    sub: "AAPL",
    text: "$ 2.690 T",
  },
  {
    title: "Microsoft",
    sub: "MSFT",
    text: "$ 2.228 T",
  },
  {
    title: "Saudi Aramco",
    sub: "2222.SR",
    text: "$ 2.205 T",
  },
  {
    title: "Alphabet (Google)",
    sub: "GOOG",
    text: "$ 1.778 T",
  },
  {
    title: "Amazon",
    sub: "AMZN",
    text: "$ 1.565 T",
  },
  {
    title: "Tesla",
    sub: "TSLA",
    text: "$ 837.00 B",
  },
  {
    title: "Nvidia",
    sub: "NVDA",
    text: "$ 601.99 B",
  },
];

const companyCard = (company) => {
  return `
    <div class="card">
      <h3 class="sub">${company.sub}</h3>
      <h2 class="title">${company.title}</h2>
      <p class="text">${company.text}</p>
      <button>
        Visit
        <span class="material-icons"> arrow_forward </span>
      </button>
    </div>
  `;
};

function init() {
  const main = document.querySelector(".main");

  for (let i = 0; i < companies.length; i++) {
    const company = companies[i];
    main.insertAdjacentHTML("beforeend", companyCard(company));
  }
}

window.addEventListener("load", init);
