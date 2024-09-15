const form= document.getElementById('resume-form') as HTMLFormElement;
const ResumeDisplayElement= document.getElementById ('resume-display') as HTMLDivElement;
form.addEventListener('submit', (event:Event)=> 
   { event.preventDefault();
const name=(document.getElementById('name') as HTMLInputElement).value;
const email=(document.getElementById('email') as HTMLInputElement).value;
const phone=(document.getElementById('phone') as HTMLInputElement).value;
const education=(document.getElementById('education') as HTMLInputElement).value;
const experience=(document.getElementById('experience') as HTMLInputElement).value;
const skills=(document.getElementById('skills') as HTMLInputElement).value;

const resumehtml=`<h2><b>resume</b></h2>
<h3>Personal Information</h3>
<P><B>Name:</B>${name}</P>
<P><B>Email:</B>${email}</P>
<P><B>Phone:</B>${phone}</P>

<h3>Education</h3>

<P>${education}</P>



<h3>Experience</h3>
<P>${experience}</P>



<h3>Skills</h3>
<P>${skills}</P>


`;
if (ResumeDisplayElement){ResumeDisplayElement.innerHTML=resumehtml}
else{
    console.error('the resume display element is missing')
}







   }
)