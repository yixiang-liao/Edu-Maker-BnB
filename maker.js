function checkInputs() {
    const input1 = document.getElementById('input1');
    const select = document.getElementById('select');
    
    if (input1.value.trim() === '' || select.selectedIndex === 0) {
        alert("預約失敗");
        console.log('預約失敗');
    } else {   
        alert("預約成功");
        console.log('預約成功');
    }
}
function heartjump() {
    const heart1 = document.getElementById("heart1");
    const heart2 = document.getElementById("heart2");
    const heart3 = document.getElementById("heart3");

    const computedStyle1 = window.getComputedStyle(heart1); 
    const computedStyle2 = window.getComputedStyle(heart2);
    const computedStyle3 = window.getComputedStyle(heart3);

    if (computedStyle1.color === "red" || computedStyle1.color === "rgb(255, 0, 0)") {
        heart1.style.color = "black"; // 如果文字顏色是紅色，則切換為黑色
    } else {
        heart1.style.color = "red"; // 如果文字顏色不是紅色，則設置為紅色
    }

    if (computedStyle2.color === "red" || computedStyle2.color === "rgb(255, 0, 0)") {
        heart2.style.color = "black"; // 如果文字顏色是紅色，則切換為黑色
    } else {
        heart2.style.color = "red"; // 如果文字顏色不是紅色，則設置為紅色
    }

    if (computedStyle3.color === "red" || computedStyle3.color === "rgb(255, 0, 0)") {
        heart3.style.color = "black"; // 如果文字顏色是紅色，則切換為黑色
    } else {
        heart3.style.color = "red"; // 如果文字顏色不是紅色，則設置為紅色
    }
}




