'use strict'

const {validation} = use('Validator')
const User = use('App/Models/User')

class LoginController {

    index({view}){
        return view.render('auth.login')
    }

    async check({request, auth, session, response}){

        const {email, password} = request.all()

        await auth.attempt(email, password)

        return response.redirect('/')
    }

    async logout({auth, response}){
        await auth.logout()
        return response.redirect('login')
    }

}

module.exports = LoginController
