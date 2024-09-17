var form = document.getElementById('resume-form');
var ResumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumehtml = "<h2><b>resume</b></h2>\n<h3>Personal Information</h3>\n<P><B>Name:</B><span contenteditable=\"true\">".concat(name, "</span></P>\n<P><B>Email:</B><span contenteditable=\"true\"> ").concat(email, "</span></P>\n<P><B>Phone:</B><span contenteditable=\"true\">").concat(phone, "</span></P>\n\n<h3>Education</h3>\n\n<P contenteditable=\"true\">").concat(education, "</P>\n\n\n\n<h3>Experience</h3>\n<P contenteditable=\"true\">").concat(experience, "</P>\n\n\n\n<h3>Skills</h3>\n<P contenteditable=\"true\">").concat(skills, "</P>\n\n\n");
    if (ResumeDisplayElement) {
        ResumeDisplayElement.innerHTML = resumehtml;
    }
    else {
        console.error('the resume display element is missing');
    }
});
