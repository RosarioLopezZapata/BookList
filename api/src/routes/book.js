const { Router } = require("express");
const { Book } = require("../db"); //importo el modelo de la base de datos
const { Op } = require("sequelize");

const router = Router();

router.get("/", async (req, res) => {
  try {
    {
      let book = await Book.findAll({
        
      });
      return res.send(book);
    }
  } catch (error) {
    res.status(404).send("Book not found");
  }
});


router.get("/:idLibro", async (req, res) => {
  try {
    const { idLibro } = req.params;
    const detailBook = await Book.findByPk(idLibro.toUpperCase(), {
        attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    return res.send(detailBook);
  } catch (error) {
    res.status(404).send("Book detail not found");
  }
});

router.post("/",async (req,res)=>{
  try {
      const {title,description}=req.body;

      const newBook=  await Book.create({
        title,
        description
      })
      
      res.send(title)

  } catch (error) {
      
      console.log(error)
  }
  
})


 router.put('/:id', (req, res) => {
  const id  = req.params.id;
  
  Book.update(req.body,{
    where: {id:id}
  })

  .then(num => {
    if (num==1){
      res.send({
        message: "Book was updated successfully"
      });
    }
    else{
      res.send(
        {
          message: "Book was NOT updated successfully"
        }
      )
    }
  })
  .catch(err=>{
    res.status(500).send({
      message:"Error updating"
    })
  })

})

module.exports = router;