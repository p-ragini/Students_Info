window.addEventListener('load', function(){

    const roll = document.querySelector('#roll');

    const fname = document.querySelector('#fname');
    const mname = document.querySelector('#mname');
    const lname = document.querySelector('#lname');

    const maths = document.querySelector('#inputMath');
    const physics = document.querySelector('#inputPhysics');
    const chemistry = document.querySelector('#inputChemistry');

    const total = document.querySelector('#total');
    const percentage = document.querySelector('#percentage');

    const submit = document.querySelector('#submit');

    roll.addEventListener('keyup', function(){
        var exp = /^[0-9]{1,3}$/;
        var name = this.value;
        if (!exp.test(name)){
            this.style.borderColor = "red";
        }else if (parseInt(this.value)<1){
            this.style.borderColor = "red";
        }else{
            this.style.borderColor = "green";
        }
    });

    fname.addEventListener('keyup', function(){
        var exp = /^[a-zA-Z]{3,30}$/;
        var name = this.value;
        if (!exp.test(name)){
            this.style.borderColor = "red";
        }else{
            this.style.borderColor = "green";
        }
    });

    mname.addEventListener('keyup', function(){
        var exp = /^[a-zA-Z]{0,30}$/;
        var name = this.value;
        if (!exp.test(name)){
            this.style.borderColor = "red";
        }else{
            this.style.borderColor = "green";
        }
    });

    lname.addEventListener('keyup', function(){
        var exp = /^[a-zA-Z]{3,30}$/;
        var name = this.value;
        if (!exp.test(name)){
            this.style.borderColor = "red";
        }else{
            this.style.borderColor = "green";
        }
    });


    maths.addEventListener('keyup', function(){
        var exp = /^[0-9]{1,3}$/;
        var name = this.value;
        if (!exp.test(name)){
            this.style.borderColor = "red";
            total.value = "";
            percentage.value = "";
        }else if (parseInt(this.value)>100){
            this.style.borderColor = "red";
            total.value = "";
            percentage.value = "";
        }else{
            this.style.borderColor = "green";
            var m = maths.value===''?0:parseInt(maths.value);
            var p = physics.value===''?0:parseInt(physics.value);
            var c = chemistry.value===''?0:parseInt(chemistry.value);
            total.value =  m+p+c;
            percentage.value = (parseInt(total.value) / 3).toFixed(2) + "%";
        }
    });

    physics.addEventListener('keyup', function(){
        var exp = /^[0-9]{1,3}$/;
        var name = this.value;
        if (!exp.test(name)){
            this.style.borderColor = "red";
            total.value = "";
            percentage.value = "";
        }else if (parseInt(this.value)>100){
            this.style.borderColor = "red";
            total.value = "";
            percentage.value = "";
        }else{
            this.style.borderColor = "green";
            var m = maths.value===''?0:parseInt(maths.value);
            var p = physics.value===''?0:parseInt(physics.value);
            var c = chemistry.value===''?0:parseInt(chemistry.value);
            total.value =  m+p+c;
            percentage.value = (parseInt(total.value) / 3).toFixed(2) + "%";
        }
    });

    chemistry.addEventListener('keyup', function(){
        var exp = /^[0-9]{1,3}$/;
        var name = this.value;
        if (!exp.test(name)){
            this.style.borderColor = "red";
            total.value = "";
            percentage.value = "";
        }else if (parseInt(this.value)>100){
            this.style.borderColor = "red";
            total.value = "";
            percentage.value = "";
        }else{
            this.style.borderColor = "green";
            var m = maths.value===''?0:parseInt(maths.value);
            var p = physics.value===''?0:parseInt(physics.value);
            var c = chemistry.value===''?0:parseInt(chemistry.value);
            total.value =  m+p+c;
            percentage.value = (parseInt(total.value) / 3).toFixed(2) + "%";
        }
    });

    submit.addEventListener('click', function(e){
        if(!/^[0-9]{1,3}$/.test(roll.value) || parseInt(roll.value)<1){
            alert('Invalid Roll No.');
            e.preventDefault();
        }else if(!/^[a-zA-Z]{3,30}$/.test(fname.value)){
            alert('Invalid First Name');
            e.preventDefault();
        }else if(!/^[a-zA-Z]{0,30}$/.test(mname.value)){
            alert('Invalid Middle Name');
            e.preventDefault();
        }else if(!/^[a-zA-Z]{3,30}$/.test(lname.value)){
            alert('Invalid Last Name');
            e.preventDefault();
        }else if(!/^[0-9]{1,3}$/.test(maths.value) || parseInt(maths.value)>100){
            alert('Invalid Marks for Maths');
            e.preventDefault();
        }else if(!/^[0-9]{1,3}$/.test(physics.value) || parseInt(physics.value)>100){
            alert('Invalid Marks for Physics');
            e.preventDefault();
        }
        else if(!/^[0-9]{1,3}$/.test(chemistry.value) || parseInt(chemistry.value)>100){
            alert('Invalid Marks for Chemistry');
            e.preventDefault();
        }
    });

});