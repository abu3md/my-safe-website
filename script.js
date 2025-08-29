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
    'خائن': 'تهانينا! الرمز صحيح. يمكنك تحميل الملف الآن.',
    '12': 'تهانينا! الرمز صحيح. يمكنك تحميل الملف الآن.',
    'انا محاصر': 'تم العثور على الملف:'

};

// متغيرات نظام الكولداون
let lastWrongAttemptTime = 0;
const COOLDOWN_DURATION = 90; // 90 ثانية (دقيقة ونصف)

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
    const currentTime = Date.now();
    const elapsedTime = Math.floor((currentTime - lastWrongAttemptTime) / 1000);
    const resultDisplay = document.getElementById('result-display');
    const inputCode = document.getElementById('code-input').value;

    // التحقق من الكولداون
    if (elapsedTime < COOLDOWN_DURATION && lastWrongAttemptTime !== 0) {
        const remainingTime = COOLDOWN_DURATION - elapsedTime;
        resultDisplay.textContent = `الرمز خاطئ. يرجى الانتظار ${remainingTime} ثانية قبل المحاولة مجدداً.`;
        resultDisplay.style.color = '#ffcc00';
        resultDisplay.style.backgroundColor = 'rgba(26, 26, 26, 0.9)';
        document.getElementById('code-input').value = '';
        return; // منع أي إجراءات أخرى
    }

    if (inputCode === 'ليلى') {
        const formattedTime = getCurrentFormattedTime();
        resultDisplay.innerHTML = `**تهانينا! لقد فزت في اللعبة!**<br><br>الوقت الحالي هو: ${formattedTime}`;
        resultDisplay.style.color = '#f0f0f0';
        resultDisplay.style.backgroundColor = 'rgba(26, 26, 26, 0.9)';
    } else if (inputCode === 'انا محاصر') {
        const fileName = 'men-on-sun.pdf';
        resultDisplay.innerHTML = `
            ${codes[inputCode]}
            <br><br>
            <a href="${fileName}" download target="_blank" style="color: #ffcc00; text-decoration: underline;">
                اضغط هنا لتحميل ملف PDF
            </a>
        `;
        resultDisplay.style.color = '#f0f0f0';
        resultDisplay.style.backgroundColor = 'rgba(26, 26, 26, 0.9)';
    } else if (inputCode === 'قبو') {
        const fileName = 'after_8bo.pdf';
        resultDisplay.innerHTML = `
            ${codes[inputCode]}
            <br><br>
            <a href="${fileName}" download target="_blank" style="color: #ffcc00; text-decoration: underline;">
                اضغط هنا لتحميل ملف PDF
            </a>
        `;
        resultDisplay.style.color = '#f0f0f0';
        resultDisplay.style.backgroundColor = 'rgba(26, 26, 26, 0.9)';
    } else if (inputCode === 'KDXUA4BN') {
        const fileName = 'after_code.pdf';
        resultDisplay.innerHTML = `
            ${codes[inputCode]}
            <br><br>
            <a href="${fileName}" download target="_blank" style="color: #ffcc00; text-decoration: underline;">
                اضغط هنا لتحميل ملف PDF
            </a>
        `;
        resultDisplay.style.color = '#f0f0f0';
        resultDisplay.style.backgroundColor = 'rgba(26, 26, 26, 0.9)';
    } else if (inputCode === 'خائن') {
        const fileName = 'after_5ayn.pdf';
        resultDisplay.innerHTML = `
            ${codes[inputCode]}
            <br><br>
            <a href="${fileName}" download target="_blank" style="color: #ffcc00; text-decoration: underline;">
                اضغط هنا لتحميل ملف PDF
            </a>
        `;
        resultDisplay.style.color = '#f0f0f0';
        resultDisplay.style.backgroundColor = 'rgba(26, 26, 26, 0.9)';
    } else if (inputCode === '12') {
        const fileName = 'last.pdf';
        resultDisplay.innerHTML = `
            ${codes[inputCode]}
            <br><br>
            <a href="${fileName}" download target="_blank" style="color: #ffcc00; text-decoration: underline;">
                اضغط هنا لتحميل ملف PDF
            </a>
        `;
        resultDisplay.style.color = '#f0f0f0';
        resultDisplay.style.backgroundColor = 'rgba(26, 26, 26, 0.9)';
    } else if (inputCode === 'تلميح') {
        const fileName = '1.png';
        resultDisplay.innerHTML = `
            ${codes[inputCode]}
            <br><br>
            <a href="${fileName}" download target="_blank" style="color: #ffcc00; text-decoration: underline;">
                اضغط هنا لتحميل ملف الصورة
            </a>
        `;
        resultDisplay.style.color = '#f0f0f0';
        resultDisplay.style.backgroundColor = 'rgba(26, 26, 26, 0.9)';
    } else if (codes[inputCode]) {
        resultDisplay.textContent = codes[inputCode];
        resultDisplay.style.color = '#f0f0f0';
        resultDisplay.style.backgroundColor = 'rgba(26, 26, 26, 0.9)';
    } else {
        // إذا كان الرمز خاطئ، يتم ضبط وقت المحاولة الأخيرة وبدء الكولداون
        lastWrongAttemptTime = currentTime;
        resultDisplay.textContent = `الرمز خاطئ. يرجى الانتظار ${COOLDOWN_DURATION} ثانية.`;
        resultDisplay.style.color = '#cc0000'; // لون أحمر للتحذير
        resultDisplay.style.backgroundColor = 'rgba(26, 26, 26, 0.9)';
    }
    document.getElementById('code-input').value = '';
}