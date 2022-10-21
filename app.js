function getMonthDifference() {
    startDate = new Date('2022-06-8')
    endDate = new Date()
    return (
        endDate.getMonth() -
        startDate.getMonth() +
        12 * (endDate.getFullYear() - startDate.getFullYear()) + "+"
    );
  }

  document.getElementById("cantMesesExperiencia").innerHTML = getMonthDifference();


(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();