//This code done by Mohammad Balsaniya

const btn = document.getElementById('btn');

btn.addEventListener('click', ()=> {
    const heading = document.getElementById('heading');
    const header = document.getElementById('header');
    const table1 = document.getElementById("table1");
    if(table1.style.display === 'flex'){
    table1.style.display = 'none';
}else{
    table1.style.display = 'flex';
    btn.textContent = 'Change to English';
    heading.textContent = 'Shayari';
    header.style.backgroundColor = "#49beb7";
    }


    const table2 = document.getElementById("table2");
    if(table2.style.display === 'none'){
    table2.style.display = 'flex';
    heading.textContent = 'Poetry';
    btn.textContent = 'Change to Hindi';
    header.style.backgroundColor = "#fe7187";
}else{
    table2.style.display = 'none';
    
    }


})