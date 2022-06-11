function getAdd() {
        let input1 = parseInt(document.getElementById('val1').value);
        let input2 = parseInt(document.getElementById('val2').value);
        let result = input1 + input2;
        let p = document.getElementById('result');
        p.innerText = result;
        
        if ((result % 2) === 1) {
            p.style.background = 'red';
            p.style.color = "white";
        } else if ((result % 2) === 0) {
            p.style.background = 'blue';
            p.style.color = "white";
        }
    }
    
    