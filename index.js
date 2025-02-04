document.addEventListener("DOMContentLoaded", function () {
  // Rotating Name in Multiple Languages
  const nameElement = document.getElementById("rotating-name");

  if (nameElement) {
    // Ensure the element exists before running the script
    const names = [
      "Dheerendra Prajapati",
      "धीरेंद्र प्रजापति", // Hindi
      "ధీరేంద్ర ప్రజాపతి", // Telugu
      "ಧೀರೇಂದ್ರ ಪ್ರಜಾಪತಿ", // Kannada
      "ધીന്ദ്ര પ્રજાપતિ", // Gujarati
      "ধীরেন্দ্র প্রজাপতি", // Bengali
    ];
    let index = 0;

    setInterval(() => {
      nameElement.textContent = names[index];
      index = (index + 1) % names.length;
    }, 2000);
  } else {
    console.error("Element with ID 'rotating-name' not found!");
  }
});