<src="https://cdn.jsdelivr.net/jquery/1.12.4/jquery.min.js">
  <src="https://cdn.jsdelivr.net/jquery.validation/1.15.1/jquery.validate.min.js"> 
  $(function() {
  
  $("form[name='registration']").validate({
    
    rules: {
      
      name: "required",
      
      email: {
        required: true,
        email: true
      },
      
      password: {
        required: true,
        minlength: 5
        maxlength: 20
      }
    },
    
    messages: {
      name: "Please enter your name",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
        maxlength: "Your password must be less than 20"
      },
      email: "Please enter a valid email address"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});