document.getElementById('open-button').addEventListener('click', checkCode);
document.getElementById('code-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkCode();
    }
});

const codes = {
    'تلميح': {
        message: 'تفضل الصورة',
        fileName: '1.png',
        type: 'file',
        fileType: 'الصورة'
    },
    'قبو': {
        message: 'تهانينا! الرمز صحيح. يمكنك تحميل الملف الآن.',
        fileName: 'after_8bo.pdf',
        type: 'file',
        fileType: 'PDF'
    },
    'KDXUA4BN': {
        message: 'تهانينا! الرمز صحيح. يمكنك تحميل الملف الآن.',
        fileName: 'after_code.pdf',
        type: 'file',
        fileType: 'PDF'
    },
    'ليلى': {
        message: '**تهانينا! لقد فزت في اللعبة!**',
        type: 'win'
    },
    'خائن': {
        message: 'تهانينا! الرمز صحيح. يمكنك تحميل الملف الآن.',
        fileName: 'after_5ayn.pdf',
        type: 'file',
        fileType: 'PDF'
    },
    '12': {
        message: 'تهانينا! الرمز صحيح. يمكنك تحميل الملف الآن.',
        fileName: 'last.pdf',
        type: 'file',
        fileType: 'PDF'
    },
    'انا محاصر': {
        message: 'تم العثور على الملف:',
        fileName: 'men-on-sun.pdf',
        type: 'file',
        fileType: 'PDF'
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
            const fileType = codeData.fileType;
            resultDisplay.innerHTML = `
                ${codeData.message}
                <br><br>
                <a href="${fileName}" download target="_blank" style="color: #ffcc00; text-decoration: underline;">
                    اضغط هنا لتحميل ملف ${fileType}
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