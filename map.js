const panel = document.getElementById("infoPanel");

const phenotypeData = {
    region1: {
        regionName: "Florida",
        males: [{ img: "https://via.placeholder.com/200x250", name: "John" }],
        females: [{ img: "https://via.placeholder.com/200x250", name: "Maria" }]
    },
    region2: {
        regionName: "California",
        males: [{ img: "https://via.placeholder.com/200x250", name: "Peter" }],
        females: [{ img: "https://via.placeholder.com/200x250", name: "Sophia" }]
    }
};

function createImageBox(person) {
    return `<div class="image-box"><img src="${person.img}"><p>${person.name}</p></div>`;
}

document.querySelectorAll("path").forEach(region => {
    region.addEventListener("click", function() {
        document.querySelectorAll("path").forEach(p => p.classList.remove("selected"));
        this.classList.add("selected");

        const data = phenotypeData[this.id];
        if (!data) return;

        const maleHTML = data.males.map(createImageBox).join('');
        const femaleHTML = data.females.map(createImageBox).join('');

        panel.innerHTML = `
            <button id="closePanel">×</button>
            <h2>${data.regionName}</h2>
            <div class="image-container">${maleHTML}${femaleHTML}</div>
        `;

        document.getElementById("closePanel").addEventListener("click", () => {
            panel.classList.remove("active");
            document.querySelectorAll("path").forEach(p => p.classList.remove("selected"));
        });

        panel.classList.add("active");
    });

    region.addEventListener("mouseenter", () => { if (!region.classList.contains("selected")) region.setAttribute("fill", "#990000"); });
    region.addEventListener("mouseleave", () => { if (!region.classList.contains("selected")) region.setAttribute("fill", "#111"); });
});
