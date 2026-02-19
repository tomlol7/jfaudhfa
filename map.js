const panel = document.getElementById("infoPanel");

// All phenotypes and the regions they appear in
const phenotypes = [
{
        name: "Garifuna / Black Carib",
        maleImg: "https://via.placeholder.com/200x250",
        femaleImg: "https://via.placeholder.com/200x250",
        regions: [
            // Central America (Core Ancestral Lands)
            "Belize_BZ", "Stann_Creek_BZ", "Toledo_BZ", "Cayo_BZ",
            "Cortés_HN", "Atlántida_HN", "Colón_HN", "Gracias_a_Dios_HN", "Islas_de_la_Bahía_HN",
            "Izabal_GT",
            "Atlántico_Norte_NI", "Atlántico_Sur_NI",

            // Caribbean Origins (St. Vincent)
            "Saint_Vincent_and_the_Grenadines_VC",

            // Major Diaspora Hubs (USA)
            "New_York_US", "Louisiana_US", "Florida_US", "California_US", "Texas_US", "Illinois_US"
        ]
    },
    {
        name: "Phenotype Y",
        maleImg: "https://via.placeholder.com/200x250",
        femaleImg: "https://via.placeholder.com/200x250",
        regions: ["California_US", "Florida_US"]
    },
    {
        name: "Phenotype Z",
        maleImg: "https://via.placeholder.com/200x250",
        femaleImg: "https://via.placeholder.com/200x250",
        regions: ["Maine_US"]
    }
];

// Create a box for a phenotype (male + female images)
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

        const regionId = this.id;

        // Filter phenotypes that include this region
        const foundPhenotypes = phenotypes.filter(p => p.regions.includes(regionId));

        if (!foundPhenotypes.length) return;

        const phenotypeHTML = foundPhenotypes.map(createPhenotypeBox).join('');

        panel.innerHTML = `
            <button id="closePanel">×</button>
            <h2>${regionId}</h2>
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
