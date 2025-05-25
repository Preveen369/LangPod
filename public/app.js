import { db } from "./firebase-config.js";
import { collection, addDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

const podcastsCollection = collection(db, "podcasts");

let podcastsAdded = false;
let allPodcasts = []; // Store all podcasts globally

async function addPodcasts(podcasts) {
  if (podcastsAdded) {
    console.log("Podcasts have already been added.");
    return;
  }
  try {
    for (const podcast of podcasts) {
      // Check if a podcast with the same title already exists
      const q = query(podcastsCollection, where("title", "==", podcast.title));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        console.log(`🚫 Podcast already exists: ${podcast.title}`);
        continue;
      }
      await addDoc(podcastsCollection, podcast);
    }
    podcastsAdded = true;
    console.log("🎉 All podcasts added successfully!");
  } catch (err) {
    console.error("🔥 Error adding podcasts:", err);
  }
}

async function getPodcasts() {
  try {
    const querySnapshot = await getDocs(podcastsCollection);
    const podcasts = [];
    querySnapshot.forEach((doc) => {
      podcasts.push({ id: doc.id, ...doc.data() });
    });
    console.log("🎉 All podcasts fetched successfully!");
    return podcasts;
  } catch (e) {
    console.error("🔥 Error getting podcasts: ", e);
    throw e;
  }
}

function renderPodcasts(podcasts) {
  const container = document.getElementById("podcast-container");
  container.innerHTML = ""; // Clear existing content

  if (!podcasts.length) {
    container.innerHTML = `<h3 class="text-center text-warning">Your requested Podcast Not Found</h3>`;
    return;
  }

  podcasts.forEach(({ title, description, embedCode }) => {
    const col = document.createElement("div");
    col.className = "col-12 col-md-6 col-lg-4";

    const card = document.createElement("div");
    card.className = "podcast-card h-100 shadow-sm"; // changed from "card h-100 shadow-sm"

    const cardBody = document.createElement("div");
    cardBody.className = "card-body d-flex flex-column ";

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = title;

    const cardText = document.createElement("p");
    cardText.className = "card-text flex-grow-1";
    cardText.textContent = description;

    const embedDiv = document.createElement("div");
    embedDiv.className = "mt-3";
    embedDiv.innerHTML = embedCode; // Insert raw HTML for iframe

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(embedDiv);

    card.appendChild(cardBody);
    col.appendChild(card);
    container.appendChild(col);
  });
}

function applyFilters() {
  const searchValue = document.getElementById("searchInput").value.toLowerCase();
  const selectedLanguage = document.getElementById("languageFilter").value;
  const selectedLevel = document.getElementById("levelFilter").value;

  const filtered = allPodcasts.filter(podcast => {
    const matchesTitle = podcast.title.toLowerCase().includes(searchValue);
    const matchesLanguage = selectedLanguage === "" || podcast.language === selectedLanguage;
    const matchesLevel = selectedLevel === "" || podcast.level === selectedLevel;
    return matchesTitle && matchesLanguage && matchesLevel;
  });

  renderPodcasts(filtered);
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    // Example usage: load podcasts from a JSON file and add them once
    const response = await fetch('podcasts.json');
    const podcastsData = await response.json();
    await addPodcasts(podcastsData);

    allPodcasts = await getPodcasts();
    renderPodcasts(allPodcasts);

    // Attach event listeners
    document.getElementById("searchInput").addEventListener("input", applyFilters);
    document.getElementById("languageFilter").addEventListener("change", applyFilters);
    document.getElementById("levelFilter").addEventListener("change", applyFilters);

  } catch (error) {
    const container = document.getElementById("podcast-container");
    container.innerHTML = `<p class="text-center text-danger">Failed to load podcasts. Please try again later.</p>`;
  }
});
