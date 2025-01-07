const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// ✅ Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // To parse JSON data
app.use(express.static('public')); // Serve static files (CSS, JS, Images)
app.set('view engine', 'ejs'); // Set view engine to EJS

// ✅ Sample Inventory Data
let inventory = [
    { id: 1, name: 'Product 1', quantity: 100, price: 10.0 },
    { id: 2, name: 'Product 2', quantity: 50, price: 20.0 }
];

// ✅ Routes

// 📌 User View
app.get('/', (req, res) => {
    res.render('user', { inventory });
});

// 📌 Admin View
app.get('/admin', (req, res) => {
    res.render('admin', { inventory });
});

// 📌 Add New Product
app.post('/add', (req, res) => {
    const { name, quantity, price } = req.body;
    const id = inventory.length > 0 ? inventory[inventory.length - 1].id + 1 : 1; // Generate unique ID
    inventory.push({ id, name, quantity: Number(quantity), price: Number(price) });
    res.redirect('/admin');
});

// 📌 Update Quantity
app.post('/update', (req, res) => {
    const { id, quantity } = req.body;
    const item = inventory.find(i => i.id == id);
    if (item) item.quantity = Number(quantity);
    res.redirect('/admin');
});

// 📌 Update Product Name and Price
app.post('/update-details', (req, res) => {
    const { id, name, price } = req.body;
    const item = inventory.find(i => i.id == id);
    if (item) {
        if (name) item.name = name; // Update name if provided
        if (price) item.price = parseFloat(price); // Update price if provided
    }
    res.redirect('/admin');
});

// 📌 Delete Product
app.post('/delete', (req, res) => {
    const { id } = req.body;
    inventory = inventory.filter(i => i.id != id);
    res.redirect('/admin');
});

// ✅ Start Server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});

