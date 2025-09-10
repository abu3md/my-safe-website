document.getElementById('open-button').addEventListener('click', checkCode);
document.getElementById('code-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkCode();
    }
});

const codes = {
    '28': {
        message: 'تهانينا! الرمز صحيح. يمكنك تحميل الملف الآن.',
        fileName: 'q7.png',
        type: 'image'
    },
    '5,891': {
        message: 'تهانينا! الرمز صحيح. يمكنك تحميل الملف الآن.',
        fileName: 'q8.png',
        type: 'file'
    },
    '2004': {
        message: 'تهانينا! الرمز صحيح. يمكنك تحميل الملف الآن.',
        fileName: 'q9.png',
        type: 'file'
    },
    'RUN AWAY': {
        message: '**تهانينا! لقد فزت في اللعبة!**',
        type: 'win'
    },
    'MATH': {
        message: 'تهانينا! الرمز صحيح. يمكنك تحميل الملف الآن.',
        fileName: 'q10.png',
        type: 'file'
    },
    'تلميح': {
        message: 'تهانينا! الرمز صحيح. يمكنك تحميل الملف الآن.',
        fileName: 'q6.png',
        type: 'file'
    },
    'انا محاصر': {
        message: 'تهانينا! الرمز صحيح. يمكنك تحميل الملف الآن.',
        fileName: 'men-on-sun.pdf',
        type: 'file'
    }
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

    const codeData = codes[inputCode];

    if (codeData) {
        if (codeData.type === 'win') {
            const formattedTime = getCurrentFormattedTime();
            resultDisplay.innerHTML = `${codeData.message}<br><br>الوقت الحالي هو: ${formattedTime}`;
        } else {
            const fileName = codeData.fileName;
            resultDisplay.innerHTML = `
                ${codeData.message}
                <br><br>
                <a href="${fileName}" download target="_blank" style="color: #ffcc00; text-decoration: underline;">
                    اضغط هنا لتحميل الملف
                </a>
            `;
        }
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
