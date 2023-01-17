
window.onscroll = () => {
  const logo = document.getElementById("headerLogo");
  const logoBox = document.getElementById("logoBox");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    logo.style.maxWidth = "100px";
    logoBox.style.padding = "0 10px";
    for (let elem of document.getElementsByClassName("navbarLink")) {
      elem.style.height = "5vh";
    }
  } else {
    logo.style.maxWidth = "200px";
    logoBox.style.padding = "10px";
    for (let elem of document.getElementsByClassName("navbarLink")) {
      elem.style.height = "7.5vh";
    }
  }
}