const panel = document.getElementById("infoPanel");

// Phenotype data mapped by region
const phenotypeData = {
    Florida_US: {
        regionName: "Florida",
        phenotypes: [
            { 
                name: "Phenotype A", 
                maleImg: "https://via.placeholder.com/200x250", 
                femaleImg: "https://via.placeholder.com/200x250" 
            },
            { 
                name: "Phenotype B", 
                maleImg: "https://via.placeholder.com/200x250", 
                femaleImg: "https://via.placeholder.com/200x250" 
            }
        ]
    },
    California_US: {
        regionName: "California",
        phenotypes: [
            { 
                name: "Phenotype X", 
                maleImg: "https://via.placeholder.com/200x250", 
                femaleImg: "https://via.placeholder.com/200x250" 
            },
            { 
                name: "Phenotype Y", 
                maleImg: "https://via.placeholder.com/200x250", 
                femaleImg: "https://via.placeholder.com/200x250" 
            }
        ]
    },
    // more regions...
};

// Create a box showing both male and female images for a phenotype
function createPhenotypeBox(phenotype) {
    return `
        <div class="phenotype-box">
            <div class="image-pair">
                <img src="${phenotype.maleImg}" alt="Male ${phenotype.name}">
                <img src="${phenotype.femaleImg}" alt="Female ${phenotype.name}">
            </div>
            <p>${phenotype.name}</p>
        </div>
    `;
}

document.querySelectorAll("path").forEach(region => {
    region.addEventListener("click", function() {
        document.querySelectorAll("path").forEach(p => p.classList.remove("selected"));
        this.classList.add("selected");

        const data = phenotypeData[this.id];
        if (!data) return;

        const phenotypeHTML = data.phenotypes.map(createPhenotypeBox).join('');

        panel.innerHTML = `
            <button id="closePanel">×</button>
            <h2>${data.regionName}</h2>
            <div class="phenotype-container">${phenotypeHTML}</div>
        `;

        panel.classList.add("active");

        document.getElementById("closePanel").addEventListener("click", () => {
            panel.classList.remove("active");
            document.querySelectorAll("path").forEach(p => p.classList.remove("selected"));
        });
    });

    // Hover effect
    region.addEventListener("mouseenter", () => {
        if (!region.classList.contains("selected")) region.setAttribute("fill", "#990000");
    });
    region.addEventListener("mouseleave", () => {
        if (!region.classList.contains("selected")) region.setAttribute("fill", "#111");
    });
});
