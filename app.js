
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
const studentRow = document.querySelector('.studentRow');



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

        
        all_student();

        // student_form.querySelector('input[placeholder="Student Name"]').value = '';
        // student_form.querySelector('input[placeholder="Student Roll"]').value = '';
        // student_form.querySelector('input[placeholder="Class"]').value = '';
        // student_form.querySelector('input[placeholder="Photo"]').value = '';

        // student_form.querySelector('input[name="gender"]:checked');
        
        // student_form.querySelector('input[placeholder="Bangla"]').value = '';
        // student_form.querySelector('input[placeholder="English"]').value = '';
        // student_form.querySelector('input[placeholder="Math"]').value = '';
        // student_form.querySelector('input[placeholder="Science"]').value = '';
        // student_form.querySelector('input[placeholder="Social Science"]').value = '';
        // student_form.querySelector('input[placeholder="Religion"]').value = '';

        

    }

    
});

all_student();
function all_student() {
    

    
    let all_data = dataGet('Stu_data');

    let data= "";

    all_data.map((student, index) => {

        let cgpacheck = myr.cgpacal(myr.gpa(student.Bangla), myr.gpa(student.English), myr.gpa(student.Math), myr.gpa(student.Science), myr.gpa(student.Social), myr.gpa(student.rel) );

        data += `
        
        <tr style="vertical-align: middle;">
            <td>${index + 1}</td>
            <td>${student.Name}</td>
            <td>${student.Roll}</td>
            <td>${student.ClassN}</td>
            <td>${student.Gender}</td>
            <td>${cgpacheck}</td>
            <td>${myr.totalGrade(cgpacheck)}</td>
            <td><img style=" width:50px; height:50px; object-fit:cover;" src="${student.Photo}"></td>
            <td>
                
                <button onclick="getSingleResult(${ index })" type="button" class="viewD btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#myModal">Details</button>
                <button onclick="deletestudent(${ index })" class="delB btn btn-danger btn-sm"><i class="fa-solid fa-trash-can"></i></button>
            </td>
    </tr>
        
        
        `;
    });

    studentRow.innerHTML = data ;
};



function deletestudent(index) {
    // alert(index);
    let LS_data = dataGet('Stu_data');
    let confirmVa = confirm(`Are you want to delete ${LS_data[index].Name} data`)

    if(confirmVa == true){
        let LS_data = dataGet('Stu_data'); // get localstorage array data
        LS_data.splice(index , 1); // remove seleceted data 
        dataSend('Stu_data', LS_data); // replase and resand new array on localstorage
        all_student(); // recall html sending function
    }else{
        return false;
    }
}

const JsElementResuat = document.querySelector('.JsElementResuat');
function getSingleResult(index){
    let LS_data = dataGet('Stu_data');

    let cgpacheck = myr.cgpacal(myr.gpa(LS_data[index].Bangla), myr.gpa(LS_data[index].English), myr.gpa(LS_data[index].Math), myr.gpa(LS_data[index].Science), myr.gpa(LS_data[index].Social), myr.gpa(LS_data[index].rel) );
    

    JsElementResuat.innerHTML = `
    
    <div class="row">
        <div class="col-md-6">
            <h5>Student Name: ${LS_data[index].Name}</h5>
            <h5>Student Roll: ${LS_data[index].Roll}</h5>
            <h5>Student Class: ${LS_data[index].ClassN}</h5>
        </div>
        <div class="col-md-6">
        <div class="studentPhoto">
            <img class="shadow" style="width: 82px;" src="${LS_data[index].Photo}" alt="">
        </div> 
        </div>
    </div>
    <div class="row">
        <div class="col">
            <table class="table table-striped table-bordered table-hover table-condensed text-center">
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Marks</th>
                        <th>GPA</th>
                        <th>Grade</th>
                        <th>CGPA</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody class="markssheet">
                    <tr>
                        <td>Bangla</td>
                        <td>${LS_data[index].Bangla}</td>
                        <td>${myr.gpa(LS_data[index].Bangla)}</td>
                        <td>${myr.grade(LS_data[index].Bangla)}</td>
                        <td  rowspan="6" >${cgpacheck}</td>
                        <td rowspan="6" >${myr.totalGrade(cgpacheck)}</td>
                    </tr>
                    <tr>
                        <td>English</td>
                        <td>${LS_data[index].English}</td>
                        <td>${myr.gpa(LS_data[index].English)}</td>
                        <td>${myr.grade(LS_data[index].English)}</td>
                    </tr>
                    <tr>
                        <td>Math</td>
                        <td>${LS_data[index].Math}</td>
                        <td>${myr.gpa(LS_data[index].Math)}</td>
                        <td>${myr.grade(LS_data[index].Math)}</td>
                    </tr>
                    <tr>
                        <td>Science</td>
                        <td>${LS_data[index].Science}</td>
                        <td>${myr.gpa(LS_data[index].Science)}</td>
                        <td>${myr.grade(LS_data[index].Science)}</td>
                    </tr>
                    <tr>
                        <td>Social Science</td>
                        <td>${LS_data[index].Social}</td>
                        <td>${myr.gpa(LS_data[index].Social)}</td>
                        <td>${myr.grade(LS_data[index].Social)}</td>
                    </tr>
                    <tr>
                        <td>Religion</td>
                        <td>${LS_data[index].rel}</td>
                        <td>${myr.gpa(LS_data[index].rel)}</td>
                        <td>${myr.grade(LS_data[index].rel)}</td>
                    </tr>
                        


                </tbody>
            </table>

        </div>
    </div>
    `;
   
    // console.log(LS_data[index].Bangla);

}