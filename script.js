// لود کردن هدر
fetch("header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    // بعد از لود شدن هدر، لینک active رو مشخص کن
    const links = document.querySelectorAll(".courses-bar a");
    links.forEach(link => {
      if(link.href === window.location.href){
        link.classList.add("active");
      }
    });
  });
