const logoDefMaxWidth = 200;

window.onscroll = () => {
  const logo = document.getElementById("headerLogo");
  const logoBox = document.getElementById("logoBox");
  const header = document.getElementById("header")
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    logo.style.maxWidth = "100px" /*`${Math.max(logoDefMaxWidth - document.documentElement.scrollTop, 100)}px`*/;
    logoBox.style.padding = "10px 10px";
    for (let elem of document.getElementsByClassName("navbarLink")) {
      elem.style.height = "5vh";
    }
    header.style.height = `${Math.max(320 - document.documentElement.scrollTop, 185)}px`;

  } else {
    logo.style.maxWidth = `${logoDefMaxWidth}px`;
    logoBox.style.padding = "10px 30px";
    for (let elem of document.getElementsByClassName("navbarLink")) {
      elem.style.height = "7.5vh";
    }
    header.style.height = "inital";
  }
}