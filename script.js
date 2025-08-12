document.getElementById('open-button').addEventListener('click', checkCode);
document.getElementById('code-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkCode();
    }
});

const codes = {
    '1234': 'أهلاً بك يا قائد الفريق الأول! نتشرف بوجودك.',
    '4321': 'مرحباً يا بطل الفريق الثاني! نتمنى لكم التوفيق.',
    '9876': 'تم فتح الخزنة: الرمز صحيح، هذه رسالة خاصة لك.',
    '6543': 'تم كشف سر عظيم: السر هو الإصرار على النجاح.',
    '1111': 'رسالة سرية: اليوم هو بداية جديدة لتحقيق الأحلام.',
    '2222': 'النتيجة السادسة: لا تستسلم أبداً، فالنجاح قريب.',
    '3333': 'رسالة خاصة جداً: هذا هو مكافأة لك على جهدك.',
    '4444': 'اكتشاف جديد: استكشف العالم من حولك بعين جديدة.',
    'y41': 'تهانينا! لقد فزت في اللعبة!',
    'شمسو كلب': 'صادق بس ماعلينا',
};

function getCurrentFormattedTime() {
    // إنشاء كائن Date للوقت الحالي
    const now = new Date();
    
    // استخدام toLocaleTimeString لضبط التنسيق والتوقيت
    // (ت ع م+03:00) يتوافق مع 'Asia/Riyadh' على سبيل المثال
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit', // تمت إضافة الثواني
        hour12: false,
        timeZone: 'Asia/Riyadh' // ت ع م+03:00
    };
    
    return now.toLocaleTimeString('ar-SA', options);
}

function checkCode() {
    const inputCode = document.getElementById('code-input').value;
    const resultDisplay = document.getElementById('result-display');

    if (inputCode === 'y41') {
        const formattedTime = getCurrentFormattedTime();
        // إذا كان الرمز هو 'y41'، تظهر رسالة التهنئة مع الوقت المنسق
        resultDisplay.innerHTML = `**تهانينا! لقد فزت في اللعبة!**<br><br>الوقت الحالي هو: ${formattedTime}`;
        resultDisplay.style.color = '#e0d5be';
        resultDisplay.style.backgroundColor = '#4a3c30';
    } else if (codes[inputCode]) {
        // إذا كان الرمز صحيحاً (غير y41)
        resultDisplay.textContent = codes[inputCode];
        resultDisplay.style.color = '#e0d5be';
        resultDisplay.style.backgroundColor = '#4a3c30';
    } else {
        // إذا كان الرمز خاطئاً
        resultDisplay.textContent = 'الرمز خاطئ. حاول مرة أخرى.';
        resultDisplay.style.color = '#e0d5be';
        resultDisplay.style.backgroundColor = '#3b2f27';
    }
    document.getElementById('code-input').value = ''; // مسح خانة الإدخال
}