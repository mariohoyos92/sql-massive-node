UPDATE products SET description = $2 WHERE product_id = $1;
SELECT * FROM products;