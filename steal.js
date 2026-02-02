// تغيير أول عنوان H1 في الصفحة
document.querySelector('h1').innerText = "تم اختراق هذا القسم";

// تغيير كل الفقرات (p) في الموقع لنص محدد
var paragraphs = document.querySelectorAll('p');
paragraphs.forEach(p => p.innerText = "محتوى محذوف لأسباب أمنية");