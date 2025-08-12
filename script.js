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
    // يمكنك إضافة المزيد من الرموز والنتائج هنا
};

function checkCode() {
    const inputCode = document.getElementById('code-input').value;
    const resultDisplay = document.getElementById('result-display');

    if (codes[inputCode]) {
        resultDisplay.textContent = codes[inputCode];
        resultDisplay.style.color = '#fff';
        resultDisplay.style.backgroundColor = '#681212';
    } else {
        resultDisplay.textContent = 'الرمز خاطئ. حاول مرة أخرى.';
        resultDisplay.style.color = '#fff';
        resultDisplay.style.backgroundColor = '#26102e';
    }
    document.getElementById('code-input').value = ''; // مسح خانة الإدخال
}