window.onload = function() {
    var list = {
        name: [],
        surname: [], 
        email: [], 
        phone: [], 
        age: []   
    }
    var i1 = 0;
    var input_save = this.document.querySelector('#save');
    var block = document.querySelector('.block');
    var input_win = this.document.querySelector('#win');
    var result = this.document.querySelector('#result');
    var table = this.document.querySelector('.table_row');
    /*-------------*/
    var in_name = this.document.querySelector('#in_1');
    in_name.addEventListener('change', function(ev){
        list.name[i1] = in_name.value;
    });
    var in_surname = this.document.querySelector('#in_2');
    in_surname.addEventListener('change', function(ev){
        list.surname[i1] = in_surname.value;
    });
    var in_email = this.document.querySelector('#in_3');
    in_email.addEventListener('change', function(ev){
        list.email[i1] = in_email.value;
    });
    var in_phone = this.document.querySelector('#in_4');
    in_phone.addEventListener('change', function(ev){
        list.phone[i1] = in_phone.value;       
    });
    var in_age = this.document.querySelector('#in_5');
    in_age.addEventListener('change', function(ev){
        list.age[i1] = in_age.value;
    });
    /*-------------*/
    input_save.addEventListener('click',  function(ev){
        if (!list.name[i1]|| !list.surname[i1] || !list.email[i1]) {
            alert('Fill your Name and Surname!');
            return;
        }
        /* check name surname email*/
        var res = list.name[i1].match(/[\dа-я"'=:{}/\.\!]/i);
        var res1 = list.surname[i1].match(/[\dа-я"'=:{}/\.\!]/i);
        if (res!=null || res1!=null) {
            alert('Please fill correct Name or Surname');
            return;
        }
        var res2 = list.email[i1];
        var res3 = res2.match(/[\w\d]*[.-_]?[\w\d]*@[a-z]+\.[a-z]+/gi);
        if (res3==null) {
            alert ('Fill correct email!');
            return;
        }
        /*check on input phone and age */
        if (typeof(list.phone[i1])=="undefined") {
            list.phone[i1]=0;
        } 
        else {
            var res4 = list.phone[i1].match(/\+\d{12}/gi);
            if (res4==null) {
                alert('Please fill correct Phone number!');
                return;
            }
        }
        /*--------------*/
        if (typeof(list.age[i1])=="undefined") {
            list.age[i1]=0;
        } 
        else {
            if (isNaN(+list.age[i1])) { 
                alert('Please input correct age!');
                return;
            }
            else {
                if ((+list.age[i1] < 16) || (+list.age[i1] > 90)){
                alert('Please input age from 16 till 90!');
                return;
                }
            }
        }       
        in_name.value='';
        in_surname.value='';
        in_email.value='';
        in_phone.value='';
        in_age.value='';

        createTable(block, list);
          i1++;
    });    
    /*-------*/   
    input_win.addEventListener('click', function(ev){
        var res_win = Math.floor(Math.random()*i1);
        console.log(i1, res_win);
        result.style.color = 'red';
        if (res_win!=0) {
            result.innerHTML='Winner is ' + list.name[res_win-1] + '&nbsp;' + list.surname[res_win-1];
        } else {
            result.innerHTML='Winner is ' + list.name[res_win] + '&nbsp;' + list.surname[res_win]; 
        }
    })

    function showMenu(target) {
        target.classList.add('show');
    }
    function createTable(target, list){
        if (!target || !list) {
            return;
        }
        table.classList.add('p-0', 'size');
        block.classList.add('p-0', 'size');
        var cell_name = document.createElement('DIV');
        cell_name.classList.add('block1', 'w_20', 'cell');
        cell_name.innerHTML=list.name[i1];
        showMenu(block);
        block.appendChild(cell_name);
    
        var cell_surname = document.createElement('DIV');
        cell_surname.classList.add('block1', 'w_25', 'cell');
        cell_surname.innerHTML=list.surname[i1];
        showMenu(block);
        block.appendChild(cell_surname);

        var cell_email = document.createElement('DIV');
        cell_email.classList.add('block1', 'w_25', 'cell');
        cell_email.innerHTML=list.email[i1];
        showMenu(block);
        block.appendChild(cell_email);

        var cell_phone = document.createElement('DIV');
        cell_phone.classList.add('block1', 'w_20', 'cell');

        cell_phone.innerHTML=list.phone[i1];
        showMenu(block);
        block.appendChild(cell_phone);

        var cell_age = document.createElement('DIV');
        cell_age.classList.add('block1', 'w_10', 'cell');
        cell_age.innerHTML=list.age[i1];
        showMenu(block);
        block.appendChild(cell_age);
    }
}