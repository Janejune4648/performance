
function calculateDenAlt(PAlt, Temp) {
    const temp = parseFloat(Temp);
    const altitude = parseFloat(PAlt);
    const data = Density;
    let result = "ไม่พบข้อมูล"; // ค่าเริ่มต้นเป็น "ไม่พบข้อมูล"

    // ค้นหาข้อมูลในตาราง
    for (let i = 0; i < data.length - 1; i++) { // ลูปจากแถวแรกถึงแถวก่อนหลัง
        const row1 = data[i];
        const row2 = data[i + 1];

        if (row1.altitude <= altitude && altitude <= row2.altitude) {
        const index1 = findindex(temp, -30, -20, -10, 0, 10,15,20,30,40,50,60)
        const index2 = index1 + 1
        console.log("index1", index1);
        console.log("index2", index2);

        if (index1 >= 0 && index1 < row1.distances.length && index2 >= 0 && index2 < row2.distances.length) {
            const distance1 = row1.distances[index1];
            const distance2 = row2.distances[index1];
            const altitude1 = row1.altitude;
            const altitude2 = row2.altitude;

            console.log("distance1index1", distance1);
            console.log("distance2index1", distance2);
            console.log("altitude1index1", altitude1);
            console.log("altitude2index1", altitude2);
            console.log("altitudeindex1", altitude);

            // คำนวณค่า takeoff distance โดยใช้ linear interpolation
            var result1 = interpolate(distance1, distance2, altitude1, altitude2, altitude);
            
            console.log("result1", result1);
            
        }

        if (index1 >= 0 && index1 < row1.distances.length && index2 >= 0 && index2 < row2.distances.length) {
            const distance1 = row1.distances[index2];
            const distance2 = row2.distances[index2];
            const altitude1 = row1.altitude;
            const altitude2 = row2.altitude;

            console.log("distance1index2", distance1);
            console.log("distance2index2", distance2);
            console.log("altitude1index2", altitude1);
            console.log("altitude2index2", altitude2);
            console.log("altitudeindex2", altitude);

            // คำนวณค่า takeoff distance โดยใช้ linear interpolation
            var result2 = interpolate(distance1, distance2, altitude1, altitude2, altitude);
            
            console.log("result2", result2);
            
        }
        var temp1=indexTovalue(index1,  -30, -20, -10, 0, 10,15,20,30,40,50,60)
        var temp2=indexTovalue(index2,  -30, -20, -10, 0, 10,15,20,30,40,50,60)
        
        var result3 = (interpolate(result1, result2, temp1, temp2, temp)*10).toFixed(0);
        //  result3 = result1 + result2;
        console.log("temp1", temp1);
        console.log("temp2", temp2);
        console.log("result1", result1);
        console.log("result2", result2);
        console.log("result3", result3);
        document.getElementById('DA').value = result3

        break;
        }
    }

     return result3
}


