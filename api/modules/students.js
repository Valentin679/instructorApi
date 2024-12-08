const {MongoClient, ObjectId} = require("mongodb");
const client = new MongoClient("mongodb+srv://mezeninvalentin:CwOBHe73GTUB2qTl@instructorcluster0.ztxpz.mongodb.net/?retryWrites=true&w=majority&appName=InstructorCluster0");
const collection = client.db("students").collection("B");
// const collection = await db.


module.exports.getAllStudentsCategoryB = async (req, res) => {
    const result = await collection.find().toArray();
    res.send(result);
}
module.exports.addStudent = async (req, res) => {
    if (!req.body) return res.sendStatus(400);
    const result = await collection.insertOne(req.body);
    console.log('req.body', req.body)
    res.send(result);
}
module.exports.getOneStudentById = async (req, res) => {
    const id = req.params.id;
    const newId = new ObjectId(id)
    // получаем одного пользователя по id
    const student = await collection.findOne({'_id': newId})
    if(student) res.json(student);
    else res.json.sendStatus(404);
}

module.exports.editStudentGrades = async (req, res) => {
    const id = req.params.id;
    const newId = new ObjectId(id)
    if (!req.body) return res.sendStatus(400);
    // const oldTitle = req.body.oldTitle;

    console.log('req.body', req.body)
    // const newGrades = {req.body.exercise};
    // обновляем данные
    const result = await collection.findOneAndUpdate({_id: newId}, {$set: newGrades});
    res.status(200).json({result})
}
// module.exports.getFilterOneCategory = async (req, res) => {
//     console.log(req.query)
//     const slug = req.params.slug;
//     const collection = db.collection(slug);
//     const result = await collection.find().toArray();
//     res.send(result);
//
// }