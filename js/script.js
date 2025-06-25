const apkData = {
  coolgame: {
    name: "Cool Game MOD",
    size: "120MB",
    version: "1.5",
    icon: "assets/icons/coolgame.png",
    description: "Unlimited Coins + Skins",
    android: "5.0+",
    url: "https://github.com/ransara-devnath/ModZone/releases/download/v1.0/coolgame.apk",
    previewImages: [
      "https://github.com/ransara-devnath/ModZone/raw/main/previews/coolgame1.jpg",
      "https://github.com/ransara-devnath/ModZone/raw/main/previews/coolgame2.jpg"
    ]
}
};

document.getElementById("searchBox")?.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const q = e.target.value.toLowerCase();
    window.location.href = `download.html?search=${encodeURIComponent(q)}`;
}
});

window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const key = params.get("search");
  if (key && apkData[key]) {
    const app = apkData[key];
    let html = `
      <div class="apk-card">
        <img src="${app.icon}" class="apk-icon" />
        <h2>${app.name}</h2>
        <p><strong>Size:</strong> ${app.size}</p>
        <p><strong>Version:</strong> ${app.version}</p>
        <p><strong>Android:</strong> ${app.android}</p>
        <p>${app.description}</p>
        <a href="${app.url}" class="download-btn">Download APK</a>
    `;
    if (app.previewImages && app.previewImages.length> 0) {
      html += `<div class="preview-gallery">`;
      app.previewImages.forEach(img => {
        html += `<img src="${img}" class="preview-thumb" alt="Preview Image">`;
});
      html += `</div>`;
}
    html += `</div>`;
    document.getElementById("apkDetails").innerHTML = html;
}
};