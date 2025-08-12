document.getElementById('open-button').addEventListener('click', checkCode);
document.getElementById('code-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkCode();
    }
});

const codes = {
    'ASXPWE': '.... . .-.. .--.',
    'help': 'هناك طريقة بترتيب التواريخ و الأوراق المبعذرة لايجاد ارقام و تحويل الأرقام الى احرف مثلا 3=ت 12=س',
    'وقود يحترق': 'اطلب المنظم التلميح التالي',
    'y41': 'تهانينا! لقد فزت في اللعبة!',
    'انا محاصر': 'تهانينا! الرمز صحيح. يمكنك تحميل الملف الآن.',
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
    const timeInSeconds = getCurrentFormattedTime(); // يمكن استخدامها في أي من الرموز إذا أردت

    if (inputCode === 'y41') {
        const formattedTime = getCurrentFormattedTime();
        resultDisplay.innerHTML = `**تهانينا! لقد فزت في اللعبة!**<br><br>الوقت الحالي هو: ${formattedTime}`;
        resultDisplay.style.color = '#e0d5be';
        resultDisplay.style.backgroundColor = '#4a3c30';
    } else if (inputCode === 'انا محاصر') {
        // إذا كان الرمز '123'، يظهر رابط تحميل ملف PDF
        const fileName = "C:\Users\samer\Downloads\فعالية الشفرة\men-on-sun.pdf"; // استبدل هذا باسم ملفك
        resultDisplay.innerHTML = `
            ${codes[inputCode]}
            <br><br>
            <a href="${fileName}" download style="color: #e0d5be; text-decoration: underline;">
                اضغط هنا لتحميل ملف PDF
            </a>
        `;
        resultDisplay.style.color = '#e0d5be';
        resultDisplay.style.backgroundColor = '#4a3c30';
    } else if (codes[inputCode]) {
        // إذا كان الرمز صحيحاً (غير y41 أو 123)
        resultDisplay.textContent = codes[inputCode];
        resultDisplay.style.color = '#e0d5be';
        resultDisplay.style.backgroundColor = '#4a3c30';
    } else {
        // إذا كان الرمز خاطئاً
        resultDisplay.textContent = 'الرمز خاطئ. حاول مرة أخرى.';
        resultDisplay.style.color = '#e0d5be';
        resultDisplay.style.backgroundColor = '#3b2f27';
    }
    document.getElementById('code-input').value = '';
}