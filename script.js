// Add your links here
const links = [
    { title: "Instagram", url: "https://instagram.com" },
    { title: "YouTube", url: "https://youtube.com" },
    { title: "TikTok", url: "https://tiktok.com" },
    { title: "Master Group Website", url: "#" },
    { title: "Altera: The Arcane Age (Game Page)", url: "#" }
];

const linksContainer = document.getElementById("links");

links.forEach(link => {
    const a = document.createElement("a");
    a.className = "link-btn";
    a.href = link.url;
    a.target = "_blank";
    a.textContent = link.title;
    linksContainer.appendChild(a);
});
