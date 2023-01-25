
window.onscroll = () => {
  const logo = document.getElementById("headerLogo");
  const logoBox = document.getElementById("logoBox");
  const header = document.getElementById("header")
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    logo.style.maxWidth = "100px";
    logoBox.style.padding = "0 10px";
    header.style.height = `${Math.max(250 - document.documentElement.scrollTop, 100)}px`;
    for (let elem of document.getElementsByClassName("navbarLink")) {
      elem.style.height = "5vh";
    }

  } else {
    logo.style.maxWidth = "200px";
    logoBox.style.padding = "10px";
    header.style.height = "250px";
    for (let elem of document.getElementsByClassName("navbarLink")) {
      elem.style.height = "7.5vh";
    }
  }
}