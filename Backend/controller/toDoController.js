const TODO=require("../models/todoModal")
const getData = async (req, res) => {
     const todos = await TODO.find();
    res.json({ todos });
}
const createData = async (req, res) => {
        const data = req.body;
    console.log("data getted payload", data);
    const todo = new TODO(data);
    await todo.save();
    res.json({ message: "Task created sucessfully" });
}
const updateData =async (req,res) => {
    const id = req.params.id;
    const data = req.body;
    console.log("id getted", id,data);
    const updatedData = await TODO.findByIdAndUpdate({ _id: id }, data );
    console.log("updated data sucess",updatedData);
    

    res.json(updatedData);
    
}
module.exports = {
    getData,
    createData,
    updateData
}