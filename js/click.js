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

function openApproval() {
  const answerContainer = document.querySelector(".management__proposal-answer");
  answerContainer.classList.add("removed");
  const approvalContainer = document.querySelector(".approval__container");
  approvalContainer.classList.toggle("approval_clicked");
}

function closeApproval() {

}