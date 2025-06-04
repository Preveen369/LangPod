# 🎧🌍 LangPod – Your Gateway to Global Fluency

![Platform](https://img.shields.io/badge/Platform-Web-blue.svg)
![Tech](https://img.shields.io/badge/Backend-Firebase-orange.svg)
![Language](https://img.shields.io/badge/Language-JavaScript-yellow.svg)
![UI](https://img.shields.io/badge/UI-Bootstrap-green.svg)
![License](https://img.shields.io/badge/License-MIT-lightgrey.svg)

LangPod is a lightweight, Firebase-powered web app that curates top language learning podcasts from Spotify. It helps learners stay consistent on their language journey, offering seamless access anytime, anywhere—whether commuting, relaxing, or working out. LangPod supports steady progress toward fluency.

🔗 **Project Demo**: <https://langpod-c36c6.firebaseapp.com/>

---

## 🚀 Features

### 🎙️ Curated Podcasts
- Browse handpicked language learning podcasts from Spotify.  
- Filter by language and proficiency level.  
- Search by title for fast discovery.

### 📚 Categorized Content
- Easily explore podcasts by beginner, intermediate, or advanced levels.  
- Discover language-specific content for targeted learning.

### 🧩 Dynamic UI
- Modern, mobile-responsive layout using Bootstrap 5.  
- Clean podcast cards with embedded Spotify players.

### 📂 Firestore Integration
- All podcast data is fetched dynamically from Firebase Firestore.  
- Easily updatable and scalable podcast collection.

### ☁️ Firebase Hosting
- Deployed on Firebase for fast, secure, and reliable access.

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, Bootstrap, JavaScript  
- **Backend**: Firebase Firestore  
- **Hosting**: Firebase Hosting  
- **Tools**: Firebase CLI

---

## 📂 Project Structure

```
LangPod/
└── public/
    ├── app.js                     # Main JavaScript logic for fetching and displaying podcasts
    ├── firebase-config.js         # Firebase configuration and initialization
    ├── index.html                 # Main HTML file for the app's UI
    ├── podcast-icon.png           # Icon for podcasts or app branding
    ├── podcasts.json              # JSON file with podcast data for Firestore import
    ├── styles.css                 # Custom CSS styles for the app
└── .firebaserc                    # Firebase configuration file
└── firebase.json                  # Firebase hosting configuration
```

---

## 🧪 Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/langpod.git
cd langpod
```

2. **Configure Firebase**

- Create a project on Firebase Console  
- Enable Firestore Database  
- Add your Firebase config to `firebase-config.js`  
- Import podcast data from `podcasts.json` into Firestore

3. **Run & Deploy**

```bash
firebase login
firebase init
firebase deploy
```

🌐 Access your app live at: <https://langpod-c36c6.firebaseapp.com/>

---

## 🤝 Contributing

Pull requests are welcome! Feel free to fork the repository and suggest improvements.

Steps to contribute:

```bash
# 1. Fork the repository
# 2. Create a feature branch
git checkout -b feature-name

# 3. Commit your changes
git commit -m "Add feature description"

# 4. Push to GitHub
git push origin feature-name

# 5. Open a Pull Request
```

---

## 📧 Contact

For queries or suggestions:

- 📩 Email: spreveen123@gmail.com  
- 🌐 LinkedIn: Preveen S

---

## 🌟 Show Your Support

If you find this project interesting, please consider giving it a ⭐ on GitHub to show your support!
