const quiz = [
  {
    question: "Hitung sisi persegi yang memiliki luas = 256cm2!",
    answer: 16
  },
  {
    question: "Hitung luas persegi dengan sisi 12cm!",
    answer: 144
  },
  {
    question: "Hitung keliling persegi yang memiliki sisi 13cm!",
    answer: 52
  },
  {
    question: "Hitung keliling persegi panjang dengan p = 20 dan l = 35!",
    answer: 110
  },
  {
    question: "Hitung luas persegi panjang dengan p = 4m dan l = 9m",
    answer: 36
  },
  {
    question: "Hitung luas segitiga dengan alas = 20cm dan tinggi = 15cm!",
    answer: 150
  },
  {
    question: "Hitung keliling segitiga sama sisi dengan alas = 12cm dan tinggi = 6cm!",
    answer: 36
  },
  {
    question: "Hitung luas lingkaran dengan diameter = 28cm!",
    answer: 616
  },
  {
    question: "Hitung keliling lingkaran dengan jari-jari = 7cm!",
    answer: 44
  }
]

const rand1 = Math.floor(Math.random()*3)
const rand2 = Math.floor((Math.random()*2)+3)
const rand3 = Math.floor((Math.random()*2)+5)
const rand4 = Math.floor((Math.random()*2)+7)

const que1 = document.getElementById("q1")
que1.innerText = quiz[rand1].question
const que2 = document.getElementById("q2")
que2.innerText = quiz[rand2].question
const que3 = document.getElementById("q3")
que3.innerText = quiz[rand3].question
const que4 = document.getElementById("q4")
que4.innerText = quiz[rand4].question

const ans1 = document.getElementById("a1")
ans1.innerText = quiz[rand1].question
const ans2 = document.getElementById("a2")
ans2.innerText = quiz[rand2].question
const ans3 = document.getElementById("a3")
ans3.innerText = quiz[rand3].question
const ans4 = document.getElementById("a4")
ans4.innerText = quiz[rand4].question

console.log(ans1, ans2, ans3, ans4)

const submit = document.getElementById("submitter")

submit.addEventListener("click", function() {
  console.log(ans1.value, ans2.value, ans3.value, ans4.value)
  let counter = 0
  
  if (Number(ans1.value) === quiz[rand1].answer) {
    counter += 25
  }
  if (Number(ans2.value) === quiz[rand2].answer) {
    counter += 25
  }
  if (Number(ans3.value) === quiz[rand3].answer) {
    counter += 25
  }
  if (Number(ans4.value) === quiz[rand4].answer) {
    counter += 25
  }

  let score = document.getElementById("score")
  score.innerText = `Nilai anda: ${counter}`

  let congrats = document.getElementById("congrats")
  

  if (counter === 100) {
    congrats.innerText = ("Selamat anda telah menyelesaikan latihan dengan nilai sempurna!")
  }
  else if (counter === 75) {
    congrats.innerText = ("Selamat anda telah menyelesaikan latihan dengan nilai cukup!")
  }
  else if (counter <= 50) {
    congrats.innerText = ("Nilai anda masih kurang, silahkan koreksi ulang jawaban anda!")
  }
})
