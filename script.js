// Load header
fetch("header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    // After header loads, highlight active link
    const links = document.querySelectorAll(".courses-bar a");
    links.forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add("active");
      }
    });
  });

// Load footer
fetch("footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });
