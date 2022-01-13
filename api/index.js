const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const axios = require("axios");
const { Book } = require("./src/db");
                 
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console

    const getbooks = [ 
      {
        title: "Lord of the rings",
        description:"A fictional great saga",
        },
  
        {
        title: "The count of monte cristo",
        description:"The tale of a man who seeks revenge",
        },
        
        {
          title: "The Hobbit",
          description:"Bilbo's journey",
         },  
  ]
    // console.log("ESTO ME TRAE LA API",getcountries.data)
    getbooks.map(async (book) => {
      try {
        await Book.findOrCreate({
          where: {
            
            title: book.title,
            description: book.description
          },
        });
      } catch (error) {
        console.log(error);
      }
    });
  });
});
