

// get element 
const student_form = document.getElementById('student_form');
const mess = document.querySelector('.mess');

student_form.addEventListener('submit', function (e) {
    e.preventDefault();

    let Name = student_form.querySelector('input[placeholder="Student Name"]').value;
    let Roll = student_form.querySelector('input[placeholder="Student Roll"]').value;
    let Class = student_form.querySelector('input[placeholder="Class"]').value;
    let Photo = student_form.querySelector('input[placeholder="Photo"]').value;
    let Gender = student_form.querySelector('input[name="gender"]:checked');

    // marks
    let ban = student_form.querySelector('input[placeholder="Bangla"]').value;
    let eng = student_form.querySelector('input[placeholder="English"]').value;
    let math = student_form.querySelector('input[placeholder="Math"]').value;
    let sci = student_form.querySelector('input[placeholder="Science"]').value;
    let s_sci = student_form.querySelector('input[placeholder="Social Science"]').value;
    let rel = student_form.querySelector('input[placeholder="Religion"]').value;



    if(Name=="" || Roll=="" || Class=="" || Photo=="" || Gender.value =="" || ban=="" || eng=="" || math=="" || sci=="" || s_sci=="" || rel==""){
        mess.innerHTML =`<p>All filds are require</p>`;
    }else{
        
    }


    
});