const xlsx = require("xlsx");
const Expense = require("../models/Expense");

// adding Expense 


exports.addExpense = async (req, res) => {
    const userId = req.user.id;

    try { const {icon, category, amount, date} = req.body;

    if( !category || !amount || !date) {
        return res.status(400).json({ message: "Missing required fields" });}

    const newExpense = new Expense({
       userId,
        icon,
        category,
        amount,
        date: new Date(date),   
    });

    await newExpense.save();

    res.status(201).json(newExpense); 
}catch(err){
    res.status(500).json({ message:"error adding income", });
}
}
exports.getAllExpense = async (req, res) => {
    const userId = req.user.id;
    try{
    const expense = await Expense.find({userId}).sort({date:-1});
    res.json(expense);
}catch (error){
    res.status(500).json({ message:"error getting income", });
}
}
exports.deleteExpense  = async (req, res) => {
   

    try{
        await Expense.findByIdAndDelete(req.params.id);
        res.json({message: "Expense deleted successfully"});
    }catch{
        res.status(500).json({message: "error deleting income"});
    }

}
exports.downloadExpenseExcel = async (req, res) => {

    const userId = req.user.id;
    try{
        const expense = await Expense.find({userId}).sort({date:-1});
        //prepare data for excel
        const data = expense.map((item) => ({
            category: item.category,
            Amount: item.amount,
            Date: item.date,
        })) ;

        const wb = xlsx.utils.book_new();
        const ws = xlsx.utils.json_to_sheet(data);
        xlsx.utils.book_append_sheet(wb, ws, "expense");
        xlsx.writeFile(wb, "expense_details.xlsx");
        res.download("expense_details.xlsx");

    }catch (error){
        res.status(500).json({ message:"error downloading income", });
    }
};
