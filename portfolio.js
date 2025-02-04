// Rotating Name in Multiple Languages
const nameElement = document.getElementById('rotating-name');
const names = [
  "Dheerendra Prajapati",
  "धीरेंद्र प्रजापति", // Hindi
  "ధీరేంద్ర ప్రజాపతి", // Telugu
  "ಧೀರೇಂದ್ರ ಪ್ರಜಾಪತಿ", // Kannada
  "ધીરેન્દ્ર પ્રજાપતિ", // Gujarati
  "ধীরেন্দ্র প্রজাপতি", // Bengali
];
let index = 0;

setInterval(() => {
  nameElement.textContent = names[index];
  index = (index + 1) % names.length;
}, 2000);