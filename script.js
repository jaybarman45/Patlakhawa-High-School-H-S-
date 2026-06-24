const hamburgerBtn = document.getElementById('hamburgerBtn');
const navContainer = document.getElementById('navContainer');

// Toggle Menu Open status and transform bars to 'X' closing state
hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    navContainer.classList.toggle('active');
});

// Auto collapse mobile window when an internal site link gets selected
document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        navContainer.classList.remove('active');
    });
});








// --- 👤 AUTOMATIC FACULTY ARRAY GENERATOR (WITH IMAGES) ---

const teacherTrack = document.getElementById('teacherTrack');

const teachers = [
    { name: "Aasit Karjee", qual: "M.P.", sub: "Clerk", img: "Aasit_sir.jpg" },
    { name: "Abhijit Bhattacharya", qual: "M.A., B.Ed.", sub: "Sanskrit", img: "Abhijit_sir.jpg" },
    { name: "Ajit Majumdar", qual: "B.A., B.Ed.", sub: "History", img: "Ajit_sir.jpg" },
    { name: "Alim Bepary", qual: "M.A., B.Ed.", sub: "Philosophy", img: "Alim_sir.jpg" },
    { name: "Alok Kar", qual: "M.Sc., Zoology, B.Ed.", sub: "Life Science", img: "Alok_sir.jpg" },
    { name: "Anupam Dutta", qual: "B.A., B.Ed.", sub: "Bengali", img: "Anupom_sir.jpg" },
    { name: "Balay Das", qual: "B.A., D.L.Ed.", sub: "English", img: "Balay_sir.jpg" },
    { name: "Bandana Saha", qual: "M.A., B.Ed.", sub: "Bengali", img: "Bandana_mam.jpg" },
    { name: "Binthi Begam", qual: "B.A., D.L.Ed.", sub: "History", img: "Binthi_mam.jpg" },
    { name: "Bishwajit Nandi", qual: "B.A., B.Ed.", sub: "History", img: "Bishwajit_sir.jpg" },
    { name: "Chinmay K. Barman", qual: "M.A., B.Ed.", sub: "Geography", img: "Chinmay_sir.jpg" },
    { name: "Chittrita Talukder", qual: "M.A., B.Ed.", sub: "English", img: "Chittrita_mam.jpg" },
    { name: "Dipmala Sanal", qual: "M.A., B.Ed.", sub: "English", img: "dipmala_mam.jpg" },
    { name: "Dulal Das", qual: "B.A., B.P.Ed.", sub: "Physical Education", img: "Dulal_sir.jpg" },
    { name: "Gokul C. Paul", qual: "B.Sc., B.Ed.", sub: "Mathematics", img: "Gokul_sir.jpg" },
    { name: "Jharna Barman", qual: "B.A., B.Ed., W.Ed.", sub: "Work Education", img: "Jharna_mam.jpg" },
    { name: "Liton Das", qual: "B.A., B.Ed.", sub: "English", img: "Liton_sir.jpg" },
    { name: "Madhumita Patra", qual: "B.Sc., B.Ed.", sub: "Mathematics", img: "Madhumita_mam.jpg" },
    { name: "Mahamadul Haque", qual: "Class 8", sub: "Peon", img: "Mahamadul_sir.jpg" },
    { name: "Mausumi Dhar", qual: "Assistant Teacher", sub: "Physics", img: "Mausumi_mam.jpg" },
    { name: "Mithun Sarkar", qual: "B.Com., B.P.Ed.", sub: "Physical Education", img: "Mithun_sir.jpg" },
    { name: "Mredul K. Naag", qual: "B.Sc., D.L.Ed.", sub: "Mathematics", img: "Mredul_sir.jpg" },
    { name: "Naresh C. Barman", qual: "P.G., M.A., B.Ed.", sub: "Geography", img: "Naresh_sir.jpg" },
    { name: "Pinki Paul", qual: "B.A., D.L.Ed.", sub: "Bengali", img: "Pinki_mam.jpg" },
    { name: "Pradip K. Barman", qual: "B.Sc., B.Ed.", sub: "Physical Science", img: "Pradip_sir.jpg" },
    { name: "Pralay Sarkar", qual: "M.A., B.Ed.", sub: "Political Science", img: "Pralay_sir.jpg" },
    { name: "Pranab K. Mandal", qual: "M.A., B.Ed.", sub: "English", img: "Pranab_sir.jpg" },
    { name: "Prodipta Nath", qual: "B.Sc., B.Ed.", sub: "Physical Science", img: "Prodipta_mam.jpg" },
    { name: "Rajib Roy", qual: "M.A., B.Ed.", sub: "History", img: "Rajib_sir.jpg" },
    { name: "Sabina Y. Shah", qual: "B.A., B.Ed.", sub: "Bengali", img: "Sabina_mam.jpg" },
    { name: "Safikul Islam", qual: "B.A., B.Ed.", sub: "Geography", img: "Safikul_sir.jpg" },
    { name: "Sanjay Biswas", qual: "M.A., B.Ed.", sub: "Bengali", img: "Sanjay_sir.jpg" },
    { name: "Sanjit K. Mandal", qual: "M.A., B.Ed.", sub: "Education Science", img: "Sanjit_sir.jpg" },
    { name: "Santanu Chaudhary", qual: "M.Sc., B.Ed.", sub: "Mathematics", img: "Santanu_sir.jpg" },
    { name: "Shushant K. Sarkar", qual: "M.Sc., Botany, B.Ed.", sub: "Life Science", img: "Shushant_sir.jpg" },
    { name: "Sukrity D. Barman", qual: "B.A., B.Ed., W.Ed.", sub: "Work Education", img: "Sukrity_mam.jpg" },
    { name: "Sumit Paul", qual: "B.C.A., D.L.Ed.", sub: "Computer", img: "Sumit_sir.jpg" },
    { name: "Tapamay Datta", qual: "B.Sc., B.Ed.", sub: "Mathematics", img: "Tapamay_sir.jpg" },
    { name: "Tauranga Mallik", qual: "M.A., B.Ed.", sub: "Sanskrit", img: "Tauranga_sir.jpg" },
    { name: "Zakirul Islam", qual: "M.P.", sub: "Clerk", img: "Zakirul_sir.jpg" }
];

function renderMarquee() {
    let content = '';

    teachers.forEach(t => {
        content += `
            <div class="teacher-profile-card">
                <img src="${t.img}" 
                     alt="${t.name}"
                     style="width:80px;height:80px;border-radius:50%;object-fit:cover;margin-bottom:10px;">

                <div style="font-weight:700;">${t.name}</div>
                <div style="font-size:11px;color:var(--neon-blue);">${t.qual}</div>
                <div style="font-size:12px;color:var(--text-muted);">${t.sub}</div>
            </div>
        `;
    });

    // Duplicate for smooth infinite scrolling
    teacherTrack.innerHTML = content + content;
}

renderMarquee();













// --- 🎛️ BULLETPROOF CAROUSEL SLIDER CONTROLLER ---
document.addEventListener("DOMContentLoaded", () => {
    const imageBelt = document.getElementById('imageBelt');
    const slidePrev = document.getElementById('slidePrev');
    const slideNext = document.getElementById('slideNext');

    // Safe Check: Ensure elements exist on the current page layout
    if (!imageBelt || !slidePrev || !slideNext) {
        console.warn("⚠️ Slider elements missing from the DOM. Check your HTML IDs.");
        return;
    }

    console.log("✅ Gallery Slider System initialized successfully!");

    // Calculate how much to scroll based on the actual width of a single card
    const getScrollDistance = () => {
        const firstCard = imageBelt.querySelector('.gallery-slide-card');
        if (firstCard) {
            // Card width + the gap spacing width between cards
            return firstCard.getBoundingClientRect().width + 25; 
        }
        return 320; // Fallback calculation value
    };

    // Right Arrow Event Trigger
    slideNext.addEventListener('click', (e) => {
        e.preventDefault();
        const step = getScrollDistance();
        const maxScroll = imageBelt.scrollWidth - imageBelt.clientWidth;
        
        if (imageBelt.scrollLeft >= maxScroll - 10) {
            // Loop back to the beginning seamlessly
            imageBelt.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            imageBelt.scrollBy({ left: step, behavior: 'smooth' });
        }
    });

    // Left Arrow Event Trigger
    slidePrev.addEventListener('click', (e) => {
        e.preventDefault();
        const step = getScrollDistance();
        
        if (imageBelt.scrollLeft <= 10) {
            // Jump over to the very end indices
            imageBelt.scrollTo({ left: imageBelt.scrollWidth, behavior: 'smooth' });
        } else {
            imageBelt.scrollBy({ left: -step, behavior: 'smooth' });
        }
    });
});
