const accordions = document.querySelectorAll(".accordion");
    accordions.forEach(btn => {
      btn.addEventListener("click", function() {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        panel.classList.toggle("open");
      });
    });