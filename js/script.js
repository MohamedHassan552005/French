// تسجيل حساب جديد
function registerUser(event) {
    event.preventDefault();

    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;

    // التحقق مما إذا كان اسم المستخدم موجودًا بالفعل
    if (localStorage.getItem(username)) {
        document.getElementById('signupMessage').innerText = 'هذا الاسم مستخدم بالفعل!';
        document.getElementById('signupMessage').style.color = 'red';
    } else {
        // تخزين البيانات في localStorage
        localStorage.setItem(username, password);
        document.getElementById('signupMessage').innerText = 'تم إنشاء الحساب بنجاح! يمكنك تسجيل الدخول الآن.';
        document.getElementById('signupMessage').style.color = 'green';
    }
}

// تسجيل الدخول
function loginUser(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // التحقق من البيانات المخزنة
    const storedPassword = localStorage.getItem(username);

    if (storedPassword === password) {
        // تخزين اسم المستخدم الحالي
        localStorage.setItem("currentUser", username);
        document.getElementById('loginMessage').innerText = 'تم تسجيل الدخول بنجاح!';
        document.getElementById('loginMessage').style.color = 'green';

        // الانتقال إلى صفحة الكورسات
        setTimeout(() => {
            window.location.href = 'courses.html';
        }, 1000);
    } else {
        document.getElementById('loginMessage').innerText = 'اسم المستخدم أو كلمة المرور غير صحيحة!';
        document.getElementById('loginMessage').style.color = 'red';
    }
}
