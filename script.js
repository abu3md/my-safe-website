document.getElementById('open-button').addEventListener('click', checkCode);
document.getElementById('code-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkCode();
    }
});

const codes = {
    'تلميح': 'تفضل الصورة',
    'قبو': 'تهانينا! الرمز صحيح. يمكنك تحميل الملف الآن.',
    'KDXUA4BN': 'تهانينا! الرمز صحيح. يمكنك تحميل الملف الآن.',
    'ليلى': 'تهانينا! لقد فزت في اللعبة!',
    'خاين': 'تهانينا! الرمز صحيح. يمكنك تحميل الملف الآن.',
    '12': 'تهانينا! الرمز صحيح. يمكنك تحميل الملف الآن.',

};

function getCurrentFormattedTime() {
    const now = new Date();
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'Asia/Riyadh'
    };
    return now.toLocaleTimeString('ar-SA', options);
}

function checkCode() {
    const inputCode = document.getElementById('code-input').value;
    const resultDisplay = document.getElementById('result-display');

    if (inputCode === 'ليلى') {
        const formattedTime = getCurrentFormattedTime();
        resultDisplay.innerHTML = `**تهانينا! لقد فزت في اللعبة!**<br><br>الوقت الحالي هو: ${formattedTime}`;
        resultDisplay.style.color = '#e0d5be';
        resultDisplay.style.backgroundColor = '#4a3c30';
    } else if (inputCode === 'انا محاصر') {
        const fileName = 'men-on-sun.pdf';
        resultDisplay.innerHTML = `
            ${codes[inputCode]}
            <br><br>
            <a href="${fileName}" download target="_blank" style="color: #e0d5be; text-decoration: underline;">
                اضغط هنا لتحميل ملف PDF
            </a>
        `;
        resultDisplay.style.color = '#e0d5be';
    } else if (inputCode === 'قبو') {
        const fileName = 'nots.pdf';
        resultDisplay.innerHTML = `
            ${codes[inputCode]}
            <br><br>
            <a href="${fileName}" download target="_blank" style="color: #e0d5be; text-decoration: underline;">
                اضغط هنا لتحميل ملف PDF
            </a>
        `;
    } else if (inputCode === 'KDXUA4BN') {
        const fileName = 'nots.pdf';
        resultDisplay.innerHTML = `
            ${codes[inputCode]}
            <br><br>
            <a href="${fileName}" download target="_blank" style="color: #e0d5be; text-decoration: underline;">
                اضغط هنا لتحميل ملف PDF
            </a>
        `;
    } else if (inputCode === 'خائن') {
        const fileName = 'nots.pdf';
        resultDisplay.innerHTML = `
            ${codes[inputCode]}
            <br><br>
            <a href="${fileName}" download target="_blank" style="color: #e0d5be; text-decoration: underline;">
                اضغط هنا لتحميل ملف PDF
            </a>
        `;
    } else if (inputCode === '12') {
        const fileName = 'nots.pdf';
        resultDisplay.innerHTML = `
            ${codes[inputCode]}
            <br><br>
            <a href="${fileName}" download target="_blank" style="color: #e0d5be; text-decoration: underline;">
                اضغط هنا لتحميل ملف PDF
            </a>
        `;
    } else if (inputCode === 'تلميح') {
        const fileName = '1.png';
        resultDisplay.innerHTML = `
            ${codes[inputCode]}
            <br><br>
            <a href="${fileName}" download target="_blank" style="color: #e0d5be; text-decoration: underline;">
                اضغط هنا لتحميل ملف الصورة
            </a>
        `;
        resultDisplay.style.color = '#e0d5be';
        resultDisplay.style.backgroundColor = '#4a3c30';
    } else if (codes[inputCode]) {
        resultDisplay.textContent = codes[inputCode];
        resultDisplay.style.color = '#e0d5be';
        resultDisplay.style.backgroundColor = '#4a3c30';
    } else {
        resultDisplay.textContent = 'الرمز خاطئ. حاول مرة أخرى.';
        resultDisplay.style.color = '#e0d5be';
        resultDisplay.style.backgroundColor = '#3b2f27';
    }
    document.getElementById('code-input').value = '';
}