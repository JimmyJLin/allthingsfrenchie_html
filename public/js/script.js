$(function(){
  console.log("running script file")



  // sign in / sign out Modal
  $('#login_button').on('click', function(){
    console.log("login_button clicked")
    $('.ui.small.modal.login').modal('show')

  })

  $('#signup_button').on('click', function(){
    console.log("signup_button clicked")
    $('.ui.small.modal.signup').modal('show')

  })


$('#reset_password_button').on('click', function(){
  console.log("signup_button clicked")
  $('.ui.small.modal.reset_password').modal('show')

})

})
