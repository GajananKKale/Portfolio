let education = document.getElementById("education");
let experience = document.getElementById("experience");
let message = document.querySelectorAll(".message");

let togglebtn = true;

let message1 = [
  `<strong>   Year : - 2014 - 2015 </strong> <br>
  <b><span>  SSC </span></b>  from Maharashtra State Board - 87%`,
  `<strong>   Year : - 2016 - 2017 </strong> <br>
   <b><span> HSC </span></b>  from Maharashtra State Board - 72%`,
  ` <strong>   Year : - 2024 - 2025 </strong> <br>
  <b> <span> B.Com </span></b> from Mumbai Univercity - A+`,
  "",
];
let message2 = [
  `<strong>   Year : - 2022 - 2025 </strong> <br>
  <b> <span> Sale Executive </span>: - </b>  Nirja Creation - 2.5 Years.`,
  `<strong>   Year : - 2021 - 2022 </strong> <br>
  <b><span> Office Executive </span> : - </b> Le Classique Realty Pvt Ltd. - 1 Year. `,
  `<strong>   Year : - 2018 - 2018 </strong> <br>
  <b><span> Traffice Warder </span> : - </b> Krystal Integrated Service Ltd - 1 Month. `,
  `<strong>   Year : - 2025 </strong> <br>
  <b> <span> Web Development </span>: - </b> O year. `,
];

education.addEventListener("click", function () {
  message.forEach((p, index) => {
    p.innerHTML = message1[index];
  });
});

experience.addEventListener("click", function () {
  message.forEach((p, index) => {
    p.innerHTML = message2[index];
  });
});

// form data storing in local storage

let myform = document.getElementById("my-form");

class User {
  constructor(name, email, number, city, message) {
    this.name = name;
    this.email = email;
    this.number = number;
    this.city = city;
    this.message = message;
  }
}

myform.addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  let city = document.getElementById("city").value;
  let form_msg = document.getElementById("message").value;

  let user = new User(name, email, number, city, form_msg);

  let newUsers = JSON.parse(localStorage.getItem("User")) || [];
  newUsers.push(user);

  localStorage.setItem("User", JSON.stringify(newUsers));
  alert(`${name} You have successfully Sent your Message!`);
  this.reset();
});
