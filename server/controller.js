module.exports = {


    getDb: (req, res) => {
        const dbInstance = req.app.get('db')
        const { params } = req;
        console.log(params)

        dbInstance.getInventory( params.id )
        .then((products) => res.status(200).send(products) )
        .catch(err => {
            res.status(500).send({ errorMessage: "ERRR try again!" })
        });
    }







}