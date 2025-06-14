// proxy-server.js

import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

// ✅ 1. Restaurant List Endpoint
app.get("/api/restaurants", async (req, res) => {
  const swiggyAPI =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  try {
    const response = await fetch(swiggyAPI, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)",
        Accept: "application/json",
        Referer: "https://www.swiggy.com/",
        Origin: "https://www.swiggy.com",
      },
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Restaurant list fetch failed:", error.message);
    res.status(500).json({ error: "Failed to fetch restaurants" });
  }
});

// ✅ 2. Menu By ID Endpoint
app.get("/api/city/delhi/:id", async (req, res) => {
  const { id } = req.params;
  const swiggyAPI2 = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.71700&lng=75.83370&restaurantId=${id}`;

  try {
    const response = await fetch(swiggyAPI2, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)",
        Accept: "application/json",
        Referer: "https://www.swiggy.com/",
        Origin: "https://www.swiggy.com",
      },
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Menu fetch failed:", error.message);
    res.status(500).json({ error: "Failed to fetch menu" });
  }
});

// ✅ Server Start
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Proxy server is running at http://localhost:${PORT}`);
});






// import express from "express";
// import fetch from "node-fetch";
// import cors from "cors";

// const app = express();
// app.use(cors());

// app.get("/api/restaurants", async (req, res) => {
//   try {
//     const swiggyUrl =
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

//     const swiggyUrl2 =  `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.71700&lng=75.83370&restaurantId=${id}`;  

//     const response = await fetch(swiggyUrl,swiggyUrl2 {
//       headers: {
//         "User-Agent":
//           "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
//         Accept: "application/json",
//         Referer: "https://www.swiggy.com/",
//         Origin: "https://www.swiggy.com",
//       },
//     });

//     const data = await response.json(); // will work now

//     res.json(data);
//   } catch (err) {
//     console.error("Error fetching Swiggy API:", err.message);
//     res.status(500).json({ error: "Failed to fetch Swiggy data" });
//   }
// });

// app.listen(5000, () => {
//   console.log("Server is running on http://localhost:5000");
// });






// import fetch from "node-fetch";
// import express from "express";
// import cors from "cors";


// const app = express();
// app.use(cors()); // Allow requests from all origins

// const PORT = 5000;

// app.get("/api/restaurants", async (req, res) => {
//   try {
//     const swiggyUrl =
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

//     const response = await fetch(swiggyUrl);
//     const data = await response.json();

//     res.json(data);
//   } catch (error) {
//     console.error("Error fetching Swiggy API:", error);
//     res.status(500).json({ error: "Failed to fetch data from Swiggy" });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`✅ Backend running at http://localhost:${PORT}`);
// });




