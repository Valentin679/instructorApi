const {MongoClient, ObjectId} = require("mongodb");
const client = new MongoClient("mongodb+srv://mezeninvalentin:CwOBHe73GTUB2qTl@instructorcluster0.ztxpz.mongodb.net/?retryWrites=true&w=majority&appName=InstructorCluster0");
const db = client.db("students")


module.exports.getAllStudentsCategoryB = async (req, res) => {
    const collection = await db.collection("B");
    const result = await collection.find().toArray();
    res.send(result);
}
module.exports.addStudent = async (req, res) => {
    const collection = db.collection("B");
    if (!req.body) return res.sendStatus(400);
    const result = await collection.insertOne(req.body);
    console.log('req.body', req.body)
    res.send(result);
}
module.exports.getOneStudentById = async (req, res) => {
    const id = req.params.id;
    const newId = new ObjectId(id)
    // получаем одного пользователя по id
    const collection = db.collection("B");
    const student = await collection.findOne({'_id': newId})
    if(student) res.json(student);
    else res.json.sendStatus(404);
}
// module.exports.getFilterOneCategory = async (req, res) => {
//     console.log(req.query)
//     const slug = req.params.slug;
//     const collection = db.collection(slug);
//     const result = await collection.find().toArray();
//     res.send(result);
//
// }