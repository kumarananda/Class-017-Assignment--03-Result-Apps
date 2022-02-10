
// regulaar expretion / validition
let nameV = /^[a-zA-Z\s]{4,20}$/;
let rollV = /^[0-9]{1,4}$/;
let classV = /^[0-9]{2}$/;
//marks valivation 
function markV(m){
    let d = parseInt(m)
    if(d < 0 || d > 100){
        return false;
    }else{
        return true;
    }
}

// console.log(markV(101));

// creat elements
let forName = document.createElement('p');
forName.innerHTML = `Name must be a-z,A-Z min 4 max 20 characters`;
forName.style.color = 'red';

let forRoll = document.createElement('p');
forRoll.innerHTML = `Roll must be 2-4 number characters`;
forRoll.style.color = 'red';

let forClass = document.createElement('p');
forClass.innerHTML = `Class must be 2 number characters`;
forClass.style.color = 'red';








// get element 
const student_form = document.getElementById('student_form');
const mess = document.querySelector('.mess');
const marksInput = document.querySelector('.marksInput');
const studentRow = document.querySelector('.studentRow')

student_form.addEventListener('submit', function (e) {
    e.preventDefault();


    let name = student_form.querySelector('input[placeholder="Student Name"]');
    let roll = student_form.querySelector('input[placeholder="Student Roll"]');
    let classN = student_form.querySelector('input[placeholder="Class"]');
    let photo = student_form.querySelector('input[placeholder="Photo"]');
    let gender = student_form.querySelector('input[name="gender"]:checked');
    // marks
    let ban = student_form.querySelector('input[placeholder="Bangla"]');
    let eng = student_form.querySelector('input[placeholder="English"]');
    let math = student_form.querySelector('input[placeholder="Math"]');
    let sci = student_form.querySelector('input[placeholder="Science"]');
    let s_sci = student_form.querySelector('input[placeholder="Social Science"]');
    let rel = student_form.querySelector('input[placeholder="Religion"]');




    if(name.value =="" || roll.value=="" || classN.value=="" || photo.value=="" || gender.value =="" || ban.value=="" || eng.value=="" || math.value=="" || sci.value=="" || s_sci.value=="" || rel.value==""){
        mess.innerHTML =`<p>All filds are require</p>`;
    }else if(nameV.test(name.value) == false){
        name.nextElementSibling.append(forName);
        name.nextElementSibling.style.display = 'block';
        name.style.marginBottom= '0px';
        
    }else if(rollV.test(roll.value) == false){
        roll.nextElementSibling.append(forRoll);
        roll.nextElementSibling.style.display = 'block';
        roll.style.marginBottom= '0px';
    }else if(classV.test(classN.value) == false){
        classN.nextElementSibling.append(forClass);
        classN.nextElementSibling.style.display = 'block';
        classN.style.marginBottom= '0px';
    }else if(markV(ban.value) == false || markV(eng.value) == false || markV(math.value) == false || markV(sci.value) == false || markV(s_sci.value) == false || markV(rel.value) == false){
        marksInput.nextElementSibling.textContent = `Marks must be 0-100`;
        marksInput.nextElementSibling.style.color = 'red';
    }else {
        
        let LS_data = [];
        
        if(dataGet('Stu_data')){
            LS_data = dataGet('Stu_data');
        }
        LS_data.push({
            Name : name.value,
            Roll : roll.value,
            ClassN :  classN.value,
            Photo  : photo.value,
            Gender : gender.value,
            Bangla : ban.value,
            English : eng.value ,
            Math :  math.value ,
            Science : sci.value,
            Social : s_sci.value,
            rel    : rel.value

        })
        dataSend('Stu_data', LS_data);


        student_form.querySelector('input[placeholder="Student Name"]') = '';
        student_form.querySelector('input[placeholder="Student Roll"]') = '';
        student_form.querySelector('input[placeholder="Class"]') = '';
        student_form.querySelector('input[placeholder="Photo"]') = '';
        // student_form.querySelector('input[name="gender"]:checked');
        
        student_form.querySelector('input[placeholder="Bangla"]') = '';
        student_form.querySelector('input[placeholder="English"]') = '';
        student_form.querySelector('input[placeholder="Math"]') = '';
        student_form.querySelector('input[placeholder="Science"]') = '';
        student_form.querySelector('input[placeholder="Social Science"]') = '';
        student_form.querySelector('input[placeholder="Religion"]') = '';


    }


    
});

function all_student() {
    
    let all_data = dataGet('Stu_data');

    let data= "";

    all_data.map((student, index) => {
        data += `
        
        <tr>
            <td>#</td>
            <td>name</td>
            <td>Roll</td>
            <td>Class</td>
            <td>Gender</td>
            <td>Grade</td>
            <td>CPA</td>
            <td>Photo</td>
            <td>
                
                <button type="button" class="viewD btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#myModal">Details</button>
                <button class="delB btn btn-danger btn-sm"><i class="fa-solid fa-trash-can"></i></button>
            </td>
    </tr>
        
        
        `;
    })
}