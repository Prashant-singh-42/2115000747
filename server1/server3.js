import express from "express";
import axios from "axios";
import { getToken } from './tokenGen.js';
import cors  from 'cors'

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};
app.use(cors(corsOptions));  
  

let token = "";

const itemsArray = [
  "Phone",
  "Computer",
  "TV",
  "Earphone",
  "Tablet",
  "Charger",
  "Mouse",
  "Keypad",
  "Bluetooth",
  "Remote",
  "Speaker",
  "Headset",
  "Laptop",
  "PC",
];

const companies = ["AMZ", "FLP", "SNP", "MYN", "AZO"];

const initializeToken = async () => {
  try {
    token = await getToken();
    console.log("Token initialized successfully");
  } catch (error) {
    console.error("Error fetching token:", error.message || error);
  }
};

initializeToken().then(() => {
  app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
  });
});

app.get("/companies/:companyName/categories/:category/products", async (request, response) => {
  const { companyName, category } = request.params;
  const { top, minPrice, maxPrice, sortBy } = request.query;

  console.log(category, companyName);
  console.log(request.query)

  if (!itemsArray.includes(category)) {
    return response.status(404).json({ error: "Category not found" });
  }

  if (!companies.includes(companyName)) {
    return response.status(404).json({ error: "company not found" });
  }

  try {
    const res = await axios.get(
      `http://20.244.56.144/test/companies/${companyName}/categories/${category}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    let products = res.data

    if (sortBy != "null") {
        products.sort((a, b) => {
            return a[sortBy] > b[sortBy] ? 1 : -1;
        });
    }

    response.status(200).json(products);
  } catch (error) {
    console.error("Error:", error.message || error);
    response.status(500).json({ error: "Error fetching products" });
  }
});