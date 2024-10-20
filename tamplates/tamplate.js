
const htmlTemplates = (salary_Data)=>{
    console.log("02",salary_Data);
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
            <h4>Employee ID : RO2317MC</h4>
            <h4>Emloyee Name : Prince Rajput</h4>
            <h4>D.O.B. : 20/07/1990</h4>
        </div>
        <div class="right_box">
            <h4>Designation : Assistant Professor</h4>
            <h4>Department : Information Technology</h4>
            <h4>D.O.J. : 11/12/2017</h4>
        </div>
    </div>
    <div class="table">
        <table>
            <tr>
                <th rowspan="2">Pay</th>
                <th rowspan="2">D.A. 50%</th>
                <th>Sum</th>
                <th rowspan="2">HRA</th>
                <th rowspan="2">Total</th>
                <th colspan="3">Deduction</th>
                <th rowspan="2">Payable</th>
            </tr>
            <tr>
                <th>N.P. + D.A.</th>
                <th>I.T.</th>
                <th>Elect. Charge</th>
                <th>NPS 10%</th>
            </tr>
            <tr>
                <td>75,200</td>
                <td>37,600</td>
                <td>112,800</td>
                <td>0</td>
                <td>112,800</td>
                <td>10,000</td>
                <td>1,153</td>
                <td>11,280</td>
                <td>90,367</td>
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