const {MongoClient, ObjectId} = require("mongodb");
const client = new MongoClient("mongodb+srv://mezeninvalentin:CwOBHe73GTUB2qTl@instructorcluster0.ztxpz.mongodb.net/?retryWrites=true&w=majority&appName=InstructorCluster0");
const db = client.db("students")


module.exports.getAllStudentsCategoryB = async (req, res) => {
    const collection = await db.collection("B");
    const result = await collection.find().toArray();
    res.send(result);
}
// module.exports.getFilterOneCategory = async (req, res) => {
//     console.log(req.query)
//     const slug = req.params.slug;
//     const collection = db.collection(slug);
//     const result = await collection.find().toArray();
//     res.send(result);
//
// }