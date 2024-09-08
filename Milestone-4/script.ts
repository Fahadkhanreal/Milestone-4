document.getElementById("resumeform")?.addEventListener("submit",function(event){
    event.preventDefault();

   
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement

    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLInputElement;
    const experienceElement = document.getElementById("experience") as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;

  
   if (profilePictureInput &&  nameElement && emailElement && educationElement && experienceElement && skillsElement ) {

    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value; 
   
    const profilePictureFile = profilePictureInput.files?.[0]
    const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';



  
    const resumeOutput = `
  <h2>Resume</h2>
  ${profilePictureURL ? `<img src= ${profilePictureURL} alt="profile Picture" class="profilePicture">` : "" }
<p><strong>Name:</strong> <span id="edit-name" class="editable">  ${name} </p>
  <p><strong>email:</strong> <span id="edit-email" class="editable"> ${email} </p>
  <p><strong>phone:</strong><span id="edit-phone" class="editable">${phone} </p>


  <h3>Education</h3>
  <P <span id="edit-education" class="editable">>${education}</P>

  <h3>Experience</h3>
  <P <span id="edit-experience" class="editable">>${experience}</P>

  <h3>Skills</h3>
  <P <span id="edit-skills" class="editable">>${skills}</P>
  `;







   const resumeOutputElement = document.getElementById("resumeOutput")
   if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput;
    makeEditable();
  }
}else{
    console.log("one or more output elements are missing");
    
}
})


function makeEditable () {
    const editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(function(element){
        element.addEventListener("click",function() {
           const currentElement = element as HTMLElement; 
           const currentvalue = currentElement.textContent || "";

           if (currentElement.tagName === "p" || currentElement.tagName === "SPAN" ){
            const input = document.createElement("input");
            input.type = "text";
            input.value = currentvalue
            input.classList.add("editing-input");

             input.addEventListener("blur",function() {
                currentElement.textContent= input.value;
                currentElement.style.display = "inline"
                input.remove()
             } )

             
             currentElement.style.display = "none"
             currentElement.parentNode?.insertBefore(input , currentElement)
             input.focus();

           }

        });
    })
}