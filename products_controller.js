module.exports = {
    create: (req,res) =>{
        const dbInstance = req.app.get('db');
        dbInstance.create_product([req.body.name, req.body.description, req.body.price, req.body.imageurl]).then((products)=> res.status(200).send(products)).catch(err => {res.status(500); console.log(err)});
    },
    getOne: (req,res) => {
        const dbInstance = req.app.get('db');
        console.log(req.params);
        dbInstance.read_product([req.params.id]).then((products)=> res.status(200).send(products)).catch(err => {res.status(500); console.log(err)});
    },
    getAll: (req,res) =>{
        const dbInstance = req.app.get('db');
        dbInstance.read_products([]).then((products)=> res.status(200).send(products)).catch(err => {res.status(500); console.log(err)});
    },
    update: (req,res)=>{
        const dbInstance = req.app.get('db');
        dbInstance.update_product([+req.params.id, req.query.desc]).then((products)=> res.status(200).send(products)).catch(err => {res.status(500); console.log(err)});
    },
    deleteProduct: (req,res) =>{
        const dbInstance = req.app.get('db');
        dbInstance.delete_product([+req.params.id]).then((products)=> res.status(200).send(products)).catch(err => {res.status(500); console.log(err)});
    }
}