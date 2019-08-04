function openContent(evt, nthContent) {
  let i;
  let tabcontent;
  let tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("category__title");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("title_selected", "");
  }
  document.getElementById(nthContent).style.display = "block";
  evt.currentTarget.className += " title_selected";
}

function openProposalCategory(evt, nthContent) {
  let i;
  let tabcontent;
  let tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("proposal__status");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("title_selected", "");
  }
  document.getElementById(nthContent).style.display = "block";
  evt.currentTarget.className += " title_selected";

  const answerContainer = document.querySelector(
    ".management__proposal-answer"
  );
  answerContainer.classList.remove("removed");
}

function openProposalCategory2(evt, nthContent) {
  let i;
  let tabcontent;
  let tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("proposal__status");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("title_selected", "");
  }
  document.getElementById(nthContent).style.display = "block";
  evt.currentTarget.className += " title_selected";

  const answerContainer = document.querySelector(
    ".management__proposal-answer"
  );
  answerContainer.classList.add("removed");
}

function openProposal(evt, nthProposal) {
  let j;
  let proposal__tab;
  let proposallinks;

  proposal__tab = document.getElementsByClassName("proposal__tab");
  for (j = 0; j < proposal__tab.length; j++) {
    proposal__tab[j].style.display = "none";
  }

  proposallinks = document.getElementsByClassName("proposal__item");
  for (j = 0; j < proposallinks.length; j++) {
    proposallinks[j].className = proposallinks[j].className.replace(
      "proposal_selected",
      ""
    );
  }
  document.getElementById(nthProposal).style.display = "block";
  evt.currentTarget.className += " proposal_selected";
}

function openSearch() {
  const searchContainer = document.querySelector(".search__container");
  searchContainer.classList.toggle("search_clicked");
}

function closeSearch() {
  const searchContainer = document.querySelector(".search__container");
  searchContainer.classList.remove("search_clicked");
}

function openAnswer() {
  const answerContainer = document.querySelector(".answer__container");
  answerContainer.classList.toggle("answer__container-clicked");
  const blindScreen = document.querySelector(".blind__screen");
  blindScreen.classList.add("screen-selected");
}

function openApproval() {
  const answerContainer = document.querySelector(".approval__container");
  answerContainer.classList.toggle("answer__container-clicked");
  const blindScreen = document.querySelector(".blind__screen");
  blindScreen.classList.add("screen-selected");
}

function openRejection() {
  const answerContainer = document.querySelector(".rejection__container");
  answerContainer.classList.toggle("answer__container-clicked");
  const blindScreen = document.querySelector(".blind__screen");
  blindScreen.classList.add("screen-selected");
}

function openOptions(evt, nthOption) {
  let i;
  let optioncontent;
  let optionlinks;

  optioncontent = document.getElementsByClassName("optioncontent");
  for (i = 0; i < optioncontent.length; i++) {
    optioncontent[i].style.display = "none";
  }

  optionlinks = document.getElementsByClassName("answer__option");
  for (i = 0; i < optionlinks.length; i++) {
    optionlinks[i].className = optionlinks[i].className.replace(
      "answer__option-selected",
      ""
    );
  }
  document.getElementById(nthOption).style.display = "block";
  evt.currentTarget.className += " answer__option-selected";
}

function closeAnswer() {
  const approvalContainer = document.querySelector(".approval__container");
  approvalContainer.classList.remove("answer__container-clicked");
  const rejectionContainer = document.querySelector(".rejection__container");
  rejectionContainer.classList.remove("answer__container-clicked");
  const blindScreen = document.querySelector(".blind__screen");
  blindScreen.classList.remove("screen-selected");
}
