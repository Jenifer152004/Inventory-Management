<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inventory - Admin</title>
    <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
    <h1>Manage Inventory</h1>
    <table>
        <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
        </tr>
        <% inventory.forEach(item => { %>
        <tr>
            <td><%= item.id %></td>
            <td><%= item.name %></td>
            <td><%= item.quantity %></td>
            <td>$<%= item.price.toFixed(2) %></td>
            <td>
                <!-- Update Quantity -->
                <form action="/update" method="POST" style="display: inline-block; margin-right: 5px;">
                    <input type="hidden" name="id" value="<%= item.id %>">
                    <input type="number" name="quantity" placeholder="New Quantity" style="width: 120px;">
                    <button type="submit">Update Quantity</button>
                </form>

                <!-- Update Product Name and Price -->
                <form action="/update-details" method="POST" style="display: inline-flex; gap: 5px; align-items: center;">
    <input type="hidden" name="id" value="<%= item.id %>">
    
    <input type="text" name="name" 
           placeholder="New Product Name" 
           value="<%= item.name %>" 
           style="width: 150px; padding: 5px;">
    
    <input type="number" step="0.01" name="price" 
           placeholder="New Price" 
           value="<%= item.price %>" 
           style="width: 100px; padding: 5px;">
    
    <button type="submit" style="padding: 5px 10px; cursor: pointer;">Update Details</button>
</form>

                <!-- Delete Product -->
                <form action="/delete" method="POST" style="display: inline-block;">
                    <input type="hidden" name="id" value="<%= item.id %>">
                    <button type="submit">Delete</button>
                </form>
            </td>
        </tr>
        <% }) %>
    </table>

    <h2>Add New Product</h2>
    <form action="/add" method="POST" style="margin-top: 20px; text-align: center;">
        <input type="text" name="name" placeholder="Product Name" required style="width: 150px; margin-right: 10px;">
        <input type="number" name="quantity" placeholder="Quantity" required style="width: 100px; margin-right: 10px;">
        <input type="number" step="0.01" name="price" placeholder="Price" required style="width: 100px; margin-right: 10px;">
        <button type="submit">Add Product</button>
    </form>
</body>
</html>
