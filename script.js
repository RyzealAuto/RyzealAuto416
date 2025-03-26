// ซ่อนหน้า Intro หลังจาก 8 วินาที
setTimeout(() => {
  document.getElementById("intro-screen").style.display = "none";
  document.getElementById("main-content").style.display = "block";
}, 8000);

// ปุ่ม Skip Intro
function skipIntro() {
  document.getElementById("intro-screen").style.display = "none";
  document.getElementById("main-content").style.display = "block";
}

// ฟังก์ชันเปลี่ยนหน้า
document.addEventListener("DOMContentLoaded", function () {
  function showPage(pageId) {
    // ซ่อนทุกหน้า
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.add('hidden'));

    // แสดงหน้าที่เลือก
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
      selectedPage.classList.remove('hidden');
    }

    // ตรวจสอบและแสดง .news-section เฉพาะหน้า Home
    const newsSection = document.querySelector('.news-section');
    if (newsSection) {
      if (pageId === 'home') {
        newsSection.style.display = "block";
        setTimeout(() => {
          newsSection.style.opacity = "1";
          newsSection.style.visibility = "visible";
        }, 100);
      } else {
        newsSection.style.opacity = "0";
        newsSection.style.visibility = "hidden";
        setTimeout(() => {
          newsSection.style.display = "none";
        }, 300);
      }
    }
  }

  // เพิ่ม Event Listener ให้ปุ่มเมนูทั้งหมด
  const menuLinks = document.querySelectorAll("nav ul li a");
  menuLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const pageId = this.getAttribute("onclick").match(/'([^']+)'/)[1];
      showPage(pageId);
    });
  });

  // โหลดครั้งแรกให้ไปหน้า Home
  showPage('home');
});

// เริ่มต้นที่หน้า Home
document.addEventListener("DOMContentLoaded", function () {
  showPage('home');
});

function filterItems() {
  let input = document.getElementById("search-item").value.toLowerCase();
  let table = document.querySelector(".item-table");
  let rows = table.getElementsByTagName("tr");

  for (let i = 1; i < rows.length; i++) { // เริ่มที่ 1 เพื่อข้ามหัวตาราง
    let itemName = rows[i].getElementsByTagName("td")[1].innerText.toLowerCase();
    if (itemName.includes(input)) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}

