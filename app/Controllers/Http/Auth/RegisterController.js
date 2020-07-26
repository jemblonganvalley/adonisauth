'use strict'

const User = use('App/Models/User')
const {validate} = use('Validator')

class RegisterController {

    index({view}){
        return view.render('auth.register')
    }

    async store({request, session, response}){

        const rules = {
            name : 'required',
            email : 'required|unique:users,email',
            password : 'required'
        }

        const message = {
            'name.required' : 'nama tidak boleh kosong!',
            'email.required' : 'email tidak boleh kosong!',
            'email.unique' : 'email sudah terdaftar',
            'password.required' : 'password harus diisi!'
        }

        const validation = await validate(request.all(), rules, message)

        if(validation.fails()){
            session.withErrors(validation.messages()).flashExcept(['password'])
            return response.redirect('back')
        }

        const user = await User.create({
            name : request.input('name'),
            email : request.input('email'),
            password : request.input('password')
        })

        session.flash({ notification: 'success register' })
        return response.redirect('back')

    }


}

module.exports = RegisterController
