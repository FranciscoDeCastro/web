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

function getMonthDifference() {
    startDate = new Date('2022-06-8')
    endDate = new Date()
    resp = endDate.getMonth() - startDate.getMonth() + 12 * (endDate.getFullYear() - startDate.getFullYear())
    return resp + "+";
  }

  function getMyAge() {
    var dob = new Date("07/31/2002");  
    //calculate month difference from current date in time  
    var month_diff = Date.now() - dob.getTime();  
    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);   
    //extract year from date      
    var year = age_dt.getUTCFullYear();  
    //now calculate the age of the user  
    var age = Math.abs(year - 1970) + "+";
    return age  
  }

  document.getElementById("cantMesesExperiencia").innerHTML = getMonthDifference();
  document.getElementById("miEdad").innerHTML = getMyAge();

  function download(downloadLink, downloadName){
    var link = document.createElement('a');
    link.href = downloadLink;
    link.download = downloadName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);    
  }
