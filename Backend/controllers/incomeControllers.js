const xlsx = require("xlsx");
const Income = require("../models/Income");

// adding income 


exports.addIncome = async (req, res) => {
    const userId = req.user.id;

    try { const {icon, source, amount, date} = req.body;

    if( !source || !amount || !date) {
        return res.status(400).json({ message: "Missing required fields" });}

    const newIncome = new Income({
       userId,
        icon,
        source,
        amount,
        date: new Date(date),   
    });

    await newIncome.save();

    res.status(201).json(newIncome); 
}catch(err){
    res.status(500).json({ message:"error adding income", });
}
}
exports.getAllincome = async (req, res) => {
    const userId = req.user.id;
    try{
    const income = await Income.find({userId}).sort({date:-1});
    res.json(income);
}catch (error){
    res.status(500).json({ message:"error getting income", });
}
}
exports.deleteIncome  = async (req, res) => {
   

    try{
        await Income.findByIdAndDelete(req.params.id);
        res.json({message: "income deleted successfully"});
    }catch{
        res.status(500).json({message: "error deleting income"});
    }

}
exports.downloadIncomeExcel = async (req, res) => {

    const userId = req.user.id;
    try{
        const income = await Income.find({userId}).sort({date:-1});
        //prepare data for excel
        const data = income.map((item) => ({
            Source: item.source,
            Amount: item.amount,
            Date: item.date,
        })) ;

        const wb = xlsx.utils.book_new();
        const ws = xlsx.utils.json_to_sheet(data);
        xlsx.utils.book_append_sheet(wb, ws, "Income");
        xlsx.writeFile(wb, "Income_details.xlsx");
        res.download("Income_details.xlsx");

    }catch (error){
        res.status(500).json({ message:"error downloading income", });
    }
};
