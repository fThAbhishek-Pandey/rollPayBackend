
const htmlTemplates = (salary_Data)=>{
    console.log("02",salary_Data);
    const {
        employee_id, pay, DA,DA_rupee, npda, HRA,dec_depart, ele_ch, nps_per, nps_rupee,total,payment,
        email,month, design, name,  depart,  doj, dob}= salary_Data;
    return `

    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .employe_box{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 20px;
        }
        .table{
            display: flex;
            justify-content: space-evenly;
            margin-top: 8vh;
        }
        h1{
            text-align: center;
        }
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            
        }
        th{
            text-align: center;
            font-size: 1.2em;
            margin: 2% 4%;
        }
        td{
            text-align: center;
            font-size: 1.1em;
            margin: 20%;
        }
        .faculty_sign{
            display: flex;
            justify-content: end;
            text-align: center;
            margin-top: 10vh;
        }
        .signature{
            width: 40%;
           line-height: 0px;
        }
    </style>
</head>
<body>
    <h1>Salary Slip for the month of August - 2024</h1>
    <div class="employe_box">
        <div class="left_box">
            <h4>Employee ID : ${employee_id}</h4>
            <h4>Emloyee Name : ${name}</h4>
            <h4>D.O.B. : ${dob}</h4>
        </div>
        <div class="right_box">
            <h4>Designation :${design}</h4>
            <h4>Department : ${depart}</h4>
            <h4>D.O.J. : ${doj}</h4>
        </div>
    </div>
    <div class="table">
        <table>
            <tr>
                <th rowspan="2">Basic Pay</th>
                <th rowspan="2">D.A. ${DA}</th>
                <th>Sum</th>
                <th rowspan="2">HRA</th>
                <th rowspan="2">Total</th>
                <th colspan="3">Deduction</th>
                <th rowspan="2">Payable</th>
            </tr>
            <tr>
                <th>N.P. + D.A.</th>
                <th>${ depart}</th>
                <th>Elect. Charge</th>
                <th>NPS ${nps_per}</th>
            </tr>
            <tr>
                <td>${pay}</td>
                <td>${DA_rupee}</td>
                <td>${npda}</td>
                <td>${HRA}</td>
                <td>${total}</td>
                <td>${dec_depart}</td>
                <td>${ele_ch}</td>
                <td>${nps_rupee}</td>
                <td>${payment}</td>
            </tr>
        </table>
    </div>
    <div class="faculty_sign">
        <div class="signature">
            <h5>Registrar</h5>
            <h6>Rajkiya Engineering College Ambedkar Nagar</h6>
        </div>
    </div>
</body>
</html>
    `
}
export default htmlTemplates