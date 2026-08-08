const script = document.createElement("script");

script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";

script.onload = start3D;

document.head.appendChild(script);


function start3D() {

    const container = document.getElementById("three-container");

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
    );

    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });

    renderer.setSize(
        container.clientWidth,
        container.clientHeight
    );

    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);


    // Pink ring
    const geometry = new THREE.TorusGeometry(
        1.6,
        0.12,
        16,
        80
    );

    const material = new THREE.MeshBasicMaterial({
        color: 0xd98aaa,
        wireframe: true
    });

    const object = new THREE.Mesh(
        geometry,
        material
    );

    scene.add(object);


    // Gold ring
    const goldGeometry = new THREE.TorusGeometry(
        1.15,
        0.06,
        16,
        80
    );

    const goldMaterial = new THREE.MeshBasicMaterial({
        color: 0xd4af37,
        wireframe: true
    });

    const goldRing = new THREE.Mesh(
        goldGeometry,
        goldMaterial
    );

    scene.add(goldRing);


    // Mouse movement
    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener("mousemove", (event) => {

        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = (event.clientY / window.innerHeight) * 2 - 1;

    });


    // Animation
    function animate() {

        requestAnimationFrame(animate);

        object.rotation.x += 0.003;
        object.rotation.y += 0.006;

        goldRing.rotation.x -= 0.002;
        goldRing.rotation.y += 0.004;

        object.position.x +=
            (mouseX * 0.5 - object.position.x) * 0.03;

        object.position.y +=
            (-mouseY * 0.5 - object.position.y) * 0.03;

        goldRing.position.x +=
            (mouseX * 0.3 - goldRing.position.x) * 0.03;

        goldRing.position.y +=
            (-mouseY * 0.3 - goldRing.position.y) * 0.03;

        renderer.render(
            scene,
            camera
        );
    }

    animate();


    // Responsive
    window.addEventListener("resize", () => {

        camera.aspect =
            container.clientWidth /
            container.clientHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            container.clientWidth,
            container.clientHeight
        );

    });

}


// Explore button
document.getElementById("exploreButton")
    .addEventListener("click", () => {

        document.getElementById("about")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

    document.getElementById("aboutBookingButton")
    .addEventListener("click", () => {

        document.getElementById("booking")
            .scrollIntoView({
                behavior: "smooth"
            });

    });
document.getElementById("bookingForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const phone =
            document.getElementById("phone").value;

        const email =
            document.getElementById("email").value;

        const service =
            document.getElementById("service").value;

        const date =
            document.getElementById("date").value;

        const time =
            document.getElementById("time").value;

        const message =
            document.getElementById("message").value;


        const selectedServiceName =
    serviceSelect.options[
        serviceSelect.selectedIndex
    ].text;


    const selectedPrice =
    servicePrices[service];


    const selectedDeposit =
    selectedPrice * 0.50;


    const whatsappMessage =
    `Hello Royal Winks! 💕\n\n` +
    `I would like to request an appointment.\n\n` +

    `👤 Name: ${name}\n` +
    `📱 Phone: ${phone}\n` +
    `📧 Email: ${email}\n\n` +

    `✨ Service: ${selectedServiceName}\n` +
    `💰 Service Price: R${selectedPrice}\n` +
    `💳 50% Deposit: R${selectedDeposit}\n\n` +

    `📅 Preferred Date: ${date}\n` +
    `⏰ Preferred Time: ${time}\n\n` +

    `💬 Message: ${message}`;


        const whatsappNumber =
            "27677727845";


        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=` +
            encodeURIComponent(whatsappMessage);


        window.open(
            whatsappURL,
            "_blank"
        );

    });

    const serviceSelect =
    document.getElementById("service");

const priceSummary =
    document.getElementById("priceSummary");

const servicePrice =
    document.getElementById("servicePrice");

const depositAmount =
    document.getElementById("depositAmount");


const servicePrices = {

    "classic-full-set": 120,
    "hybrid-full-set": 130,
    "volume-full-set": 150,

    "classic-set": 120,
    "hybrid-set": 130,
    "volume-set": 150,

    "classic-fill-in": 60,
    "hybrid-fill-in": 65,
    "volume-fill-in": 75,

    "anime-set": 130,
    "cat-eye-set": 130,
    "wispy-set": 150,

    "flare-classic": 180,
    "flare-hybrid-cateye": 200,
    "flare-wispy": 210,
    "flare-volume": 225

};


serviceSelect.addEventListener("change", function() {

    const selectedService =
        serviceSelect.value;

    const price =
        servicePrices[selectedService];


    if (price) {

        const deposit =
            price * 0.50;

        servicePrice.textContent =
            `R${price}`;

        depositAmount.textContent =
            `R${deposit}`;

        priceSummary.classList.add("active");

    } else {

        priceSummary.classList.remove("active");

    }

});

window.addEventListener("load", function() {

    const loadingScreen =
        document.getElementById("loading-screen");

    setTimeout(function() {

        loadingScreen.classList.add("hidden");

    }, 1000);

});