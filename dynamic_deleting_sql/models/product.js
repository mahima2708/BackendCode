const db = require('../util/database');

const Cart = require('./cart');


module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
   return db.execute('INSERT INTO product (id, title,description,imageUrl,price) VALUES (?,?,?,?,?)',
    [this.id, this.title, this.description, this.imageUrl, this.price]
    );
  }

  static deleteById(id) {
    return db.execute('Delete FROM product WHERE product.id=?',[id]);
  }

  static fetchAll() {
   return  db.execute('SELECT * FROM product');
  }

  static findById(id) {
   return db.execute('SELECT * FROM product WHERE product.id=?', [id]);
  }
};
