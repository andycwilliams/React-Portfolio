function getAge() {
  const today = new Date();
  const birthday = new Date(1990, 9, 02);
  let currentAge = today.getFullYear() - birthday.getFullYear();
  let monthEl = today.getMonth() - birthday.getMonth();
  if (monthEl < 0 || (monthEl === 0 && today.getDate() < birthday.getDate())) {
    currentAge--;
  }
  // return currentAge;
  return (document.getElementById("ageGet").innerHTML = currentAge);
}

getAge();
