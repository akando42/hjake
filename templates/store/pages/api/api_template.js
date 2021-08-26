// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req,res) => {
  const {db} = await connectToDatabase()
  const {
    query: { id },
    method,
  } = req;
  
  switch(method){
    case "POST":
      try {
        const new_location = await db
          .collection('locations')
          .insertOne(req.body);

        return res.status(200).json({
          success: true,
          data: new_location
        });

      } catch(error){
        return res.status(400).json({
          success: false
        });
      }

    case "GET":
      try {
        const locations = await db
            .collection('locations')
          .find({})
          .toArray();

        res.status(200).json({
          success: true,
          data: locations
        });

      } catch(error){
        res.status(400).json({
          success: false,
          data: error
        });
        }
  }
}