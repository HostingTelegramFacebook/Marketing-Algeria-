// انتظار تحميل الصفحة بالكامل
document.addEventListener('DOMContentLoaded', function() {
    
    // تحديد العناصر
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    // إذا كان الزر موجوداً
    if (burger && navLinks) {
        
        // عند النقر على الزر
        burger.addEventListener('click', function(e) {
            e.stopPropagation(); // منع انتشار الحدث
            navLinks.classList.toggle('active');
            
            // تغيير الأيقونة بين bars و times
            const icon = burger.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // إغلاق القائمة عند النقر على أي رابط داخلها
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                const icon = burger.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
        
        // إغلاق القائمة عند النقر خارجها (للجوال)
        document.addEventListener('click', function(event) {
            if (!burger.contains(event.target) && !navLinks.contains(event.target)) {
                navLinks.classList.remove('active');
                const icon = burger.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }
    
    // نموذج الاتصال (إذا كان موجوداً)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // منع الإرسال الافتراضي
            
            // جمع البيانات
            const name = this.querySelector('input[name="name"]').value;
            const email = this.querySelector('input[name="email"]').value;
            const message = this.querySelector('textarea[name="message"]').value;
            
            // عرض رسالة تأكيد (يمكن استبدالها بإرسال حقيقي)
            alert(`شكراً ${name}، تم استلام رسالتك. سنتواصل معك قريباً على البريد ${email}.`);
            
            // مسح الحقول
            this.reset();
            
            // هنا يمكنك إضافة كود حقيقي للإرسال إلى خدمة مثل Formspree
            /*
            fetch('https://formspree.io/f/your-endpoint', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message })
            })
            .then(response => response.json())
            .then(data => alert('تم الإرسال بنجاح!'))
            .catch(error => alert('حدث خطأ، حاول مرة أخرى.'));
            */
        });
    }
    
});
