module.exports = {
    getRegister: (req,res) =>{
        res.render('register', {
            title: 'SingUp'
        })
    }
}