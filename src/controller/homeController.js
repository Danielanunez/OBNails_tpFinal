
module.exports = {
    home: (req,res) =>{
       return res.render('index', {
        title: 'OB Nails'
       });
    }
}