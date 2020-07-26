'use strict'


const Route = use('Route')

Route.on('/').render('welcome')

Route.get('register', 'Auth/RegisterController.index').as('register.index')
Route.post('register', 'Auth/RegisterController.store').as('register.store')

Route.get('login', 'Auth/LoginController.index').as('login.index')
Route.post('login', 'Auth/LoginController.check').as('login.check')
Route.get('logout', 'Auth/LoginController.logout').as('logout')
