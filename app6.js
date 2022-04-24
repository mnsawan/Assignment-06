const student = [
    ['Kashem','6','12','Six','Male','Rampura','6000','B'],
    ['Hashem','9','8','Two','Male','Badda','2000','A'],
    ['Jashim','18','15','Nine','Male','Uttora','9000','A'],
    ['Josna','11','13','Seven','Female','Gulshan','7000','A-'],
    ['Arif','21','29','Twelve','Male','Azimpur','12000','B'],
    ['Belal','6','12','Six','Male','Banani','6000','C'],
    ['Eyasin','19','10','Four','Male','Rampura','4000','A+'],
    ['Jisan','2','12','Five','Male','Motijheel','5000','A-'],
    ['Sumit','17','12','Six','Male','Uttora','6000','A-'],
    ['Sokina','1','14','Eight','Female','Azimpur','8000','B'],
    ['Akter','8','13','Seven','Male','Banasree','7000','A+'],
    ['Chondon','5','15','Nine','Male','Rampura','9000','A+'],
    ['Rafiq','28','27','Eleven','Male','Gulshan','11000','A'],
    ['Joinal','6','11','Five','Male','Motijheel','5000','A+'],
    ['Ayesha','32','16','Nine','Female','Banasree','9000','B'],
    ['Habiba','3','9','Four','Female','Badda','4000','A'],
    ['Samir','16','29','Twelve','Male','Banani','12000','C'],
    ['Albee','9','14','Eight','Male','Rampura','8000','D'],
    ['Munim','12','8','Two','Male','Gulshan','2000','A+'],
    ['Bristi','19','13','Six','Female','Rampura','6000','D'],
    ['Bappi','5','14','Eight','Male','Motijheel','8000','A-'],
    ['Borsha','11','15','Nine','Female','Badda','9000','A'],
    ['Pushpa','20','11','Five','Female','Banasree','5000','A'],
    ['Lokman','14','28','Twelve','Male','Banani','12000','B'],
    ['Faisal','8','8','Three','Male','Rampura','3000','C'],
    ['Mukta','1','26','Eleven','Female','Uttora','11000','B'],
    ['Noman','24','10','Four','Male','Gulshan','4000','A'],
    ['Tariq','2','13','Seven','Male','Banani','7000','C'],
    ['Rafan','4','8','Three','Male','Azimpur','3000','A+'],
];

    // let total_amount = 0;

    // student.sort().map( (item, index) => {

    // total_amount += Number(item[6])

    // console.log(`Name: ${item[0]}, Roll: ${item[1]}, Age: ${item[2]}, Class: ${item[3]}, Gender: ${item[4]}, Loc: ${item[5]}, Fees: ${item[6]}, Result: ${item[7]},`)
    
    // });


//====================================================================================
                    //Assignment-01
                    //Total Admnission fees
//====================================================================================

//     console.log(`
    
//     --------------------------------------------------------------------
//     Total Amount :     ${total_amount} Taka

// `);

//===================================================================================
                    //Assignment-02
                    //Total Admnission fees
//===================================================================================

// student.sort().map( (item, index) => {

//     if(item[4] === 'Female')
//     console.log(`Name: ${item[0]}, Roll: ${item[1]}, Class: ${item[3]}, Gender: ${item[4]}, Loc: ${item[5]}, Fees: ${item[6]}, Result: ${item[7]},`)
    
//     });

//==================================================================================
                    //Assignment-03
                    //Find class wise student result
//==================================================================================

// student.sort().map( (item, index) => {

//     if(item[3] === 'Six')
//     console.log(`Name: ${item[0]}, Roll: ${item[1]}, Age: ${item[2]}, Class: ${item[3]}, Gender: ${item[4]}, Loc: ${item[5]}, Fees: ${item[6]}, Result: ${item[7]},`)
    
//     });


//==================================================================================
                    //Assignment-04
                    //Location wise student result
//==================================================================================


// student.sort().map( (item, index) => {

//     if(item[5] === 'Rampura')
//     console.log(`Name: ${item[0]}, Roll: ${item[1]}, Age: ${item[2]}, Class: ${item[3]}, Gender: ${item[4]}, Loc: ${item[5]}, Fees: ${item[6]}, Result: ${item[7]},`)
    
//     });

//==================================================================================
                    //Assignment-05
                    //find student between 10 - 25 age
//==================================================================================


student.sort().map( (item, index) => {

    if(item[2] >= 10 && item[2] <= 25)
    console.log(`Name: ${item[0]}, Roll: ${item[1]}, Age: ${item[2]}, Class: ${item[3]}, Gender: ${item[4]}, Loc: ${item[5]}, Fees: ${item[6]}, Result: ${item[7]},`)
    
    });