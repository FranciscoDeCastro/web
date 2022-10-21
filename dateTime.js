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