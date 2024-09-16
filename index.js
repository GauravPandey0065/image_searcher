const accessKey = "FrZj9MwwVxVOQe3ZmITtJ8sqraCqgs28rn_FkJbBx_k";
let currentPage = 1;
let currentQuery = "";

// Load initial images when the page is opened
window.onload = function () {
    loadInitialImages();
};

// Function to fetch images from Unsplash based on the search query or initial load
async function fetchImages(query = "", page = 1) {
    const url = query 
        ? `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${accessKey}&per_page=12`
        : `https://api.unsplash.com/photos?page=${page}&client_id=${accessKey}&per_page=12`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return query ? data.results : data; // Handle search or default images
    } catch (error) {
        console.error("Error fetching images:", error);
    }
}

// Load initial random images
async function loadInitialImages() {
    const images = await fetchImages("", currentPage);
    displayImages(images);
    document.getElementById("show-more-btn").style.display = "block";
}

// Function to search images based on query
async function searchImages() {
    const query = document.getElementById("searcher").value;
    if (!query) {
        alert("Please enter a search term.");
        return;
    }

    currentQuery = query;  // Set the current query
    currentPage = 1; // Reset page for new search

    const images = await fetchImages(query, currentPage);
    document.querySelector(".container").innerHTML = ""; // Clear container
    displayImages(images);
    document.getElementById("show-more-btn").style.display = "block"; // Show "Show More" button
}

// Function to display images in the container
function displayImages(images) {
    const container = document.querySelector(".container");

    images.forEach((image) => {
        const box = document.createElement("div");
        box.classList.add("box");
        box.innerHTML = `
            <img src="${image.urls.regular}" alt="${image.alt_description}">
            <div class="caption">${image.alt_description || "No description"}</div>
        `;
        container.appendChild(box);
    });
}

// Function to load more images
async function loadMoreImages() {
    currentPage++; // Increment page for pagination
    const images = await fetchImages(currentQuery, currentPage);
    displayImages(images); // Add more images to the container
}

// Handle search input for live filtering
document.querySelector("#searcher").addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        const caption = box.querySelector(".caption").textContent.toLowerCase();
        if (caption.includes(searchTerm)) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    });
});
