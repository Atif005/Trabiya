function toggleContent(buttonId, contentId) {
  var button = document.getElementById(buttonId);
  var content = document.getElementById(contentId);

  if (content.style.display === "none") {
    button.textContent = "اخفاء المحتوى";
    content.style.display = "block";
  } else {
    button.textContent = "الإنتقال الى الصفحة التالية";
    content.style.display = "none";
    window.location.href = "tahlil.html"; // تحويل المستخدم إلى mimo.html
  }
}