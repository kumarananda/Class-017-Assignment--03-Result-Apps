/**
 * 
 * @param {key name on localdtorage} key 
 * @param {Array data which convart to string and send on localstorage} Arr 
 */
function dataSend(key, Arr) {
    let data = JSON.stringify(Arr);
    localStorage.setItem(key, data)
};

/**
 * 
 * @param {data from localstorage vai key name} key 
 * @returns 
 */
function dataGet(key) {
    let data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];

}




// Subject Marks app with notification Color start
function Myresult(){
    this.gpa = function (marks){
        let gpa;
        if (marks >= 0 && marks < 33) {
            return gpa = 0;
        } else if (marks >= 33 && marks < 40) {
            return gpa = 1;
        } else if (marks >= 40 && marks < 50) {
            return gpa = 2;
        } else if (marks >= 50 && marks < 60) {
            return gpa = 3;
        } else if (marks >= 60 && marks < 70) {
            return gpa = 3.5;
        } else if (marks >= 70 && marks < 80) {
            return gpa = 4;
        } else if (marks >= 80 && marks <= 100) {
            return gpa = 5;
        }else if (marks > 100) {
            return `Invalid`;
        }
        return gpa;
        
    };

    this.grade = function (marks){
        let grade;
        if (marks >= 0 && marks < 33) {
            return grade = `F`;
        } else if (marks >= 33 && marks < 40) {
            return grade = `D`;
        } else if (marks >= 40 && marks < 50) {
            return grade = `C`;
        } else if (marks >= 50 && marks < 60) {
            return grade = `B`;
        } else if (marks >= 60 && marks < 70) {
            return grade = `A-`;
        } else if (marks >= 70 && marks < 80) {
            return grade = `A`;
        } else if (marks >= 80 && marks <= 100) {
            return grade = `A+`;
        }else if (marks > 100) {
            return `Invalid`;
        }
        return grade;
        
    };

    this.cgpacal = (bangla, english, math, socialScience, science, religion) => {

        let cgpacal = (bangla + english + math + socialScience + science + religion) / 6;

        if (bangla == 0 || english == 0 || math == 0 || socialScience == 0 || science == 0 || religion == 0) {
            return `Your result is Failed`;
        } else {
            return `Your CGPA: ${cgpacal.toFixed(2)} & Grade: ${myr.totalGrade(cgpacal)} `; //
        }

    }

    this.totalGrade = function(cgpacal){
        
        if( cgpacal >= 0 && cgpacal < 1){
            return `F`;
        }else if( cgpacal >= 1  && cgpacal < 2){
            return `D`;
        }else if( cgpacal >= 2  && cgpacal < 3){
            return `C`;
        }else if( cgpacal >= 3  && cgpacal < 3.5){
            return `B`;
        }else if( cgpacal >= 3.5  && cgpacal < 4){
            return `A-`;
        }else if( cgpacal >= 4  && cgpacal < 5){
            return `A`;
        }else if( cgpacal <= 5){
            return  `A+`;
        }
    
    }
    this.notifiColor = function (tGrade) {
        if(tGrade == 'F'){
            return `red`;
        }else if(tGrade == 'D'){
            return `fuchsia`;
        }else if(tGrade == 'C'){
            return `orchid`;
        }else if(tGrade == 'B'){
            return `#556B2F`;
        }else if(tGrade == 'A-'){
            return `lime`;
        }else if(tGrade == 'A'){
            return `magenta`;
        }else if(tGrade == 'A+'){
            return `gold`;
        }
    }

    

}

let  myr = new Myresult();

// Subject Marks app with notification Color End


