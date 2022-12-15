module.exports = {
    singIn: (req,res) =>{
        res.render('inicioSesion', {
            title: 'SingIn'
        });
    }
}