    // JavaScript code for form validation
  // Prevent form from submitting
  
    // Retrieve the input field value

  
    // Regular expression pattern for alphanumeric input
    let form = document.getElementById("myForm")

    // Check if the input value matches the pattern
    let regex1 = /^[a-zA-Z0-9]+$/;
    form.addEventListener('submit', function(event){
      let input1 = document.getElementById("inputField")
      if (!regex1.test(input1.value)){
        window.alert('Invalid format!');
        event.preventDefault()
      }
      else { (window.alert("Valid"))}
    })

      // Valid input: display confirmation and submit the form

      // Invalid input: display error message