const tg = window.Telegram.WebApp;
tg.expand();

// ১. ম্যাচ জয়েন ও ডিপোজিট নোটিফিকেশন
document.getElementById('joinForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('playerName').value;
    const uid = document.getElementById('playerUID').value;
    const amount = document.getElementById('depositAmount').value;
    const digits = document.getElementById('lastDigits').value;
    
    // ⚠️ এই দুটি জিনিস আপনার নিজেরটা বসিয়ে দিন
    const botToken = 8883371880:AAF7zE0Tru3j9XZ_5YA3XnYmLdcHtkyHtVo
    const adminId = "YOUR_ADMIN_ID"8797013945
    
    const message = `💵 *নতুন ডিপোজিট ও জয়েন রিকোয়েস্ট!*\n\n👤 নাম: ${name}\n🎮 UID: ${uid}\n💰 টাকার পরিমাণ: ${amount} টাকা\n📱 বিকাশ লাস্ট ৪ ডিজিট: ${digits}\n\nবিল্লাল ভাই, বিকাশ চেক করে ম্যাচ কনফর্ম করুন!`;
    
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${adminId}&text=${encodeURIComponent(message)}&parse_mode=Markdown`;
    
    fetch(url).then(response => {
        if(response.ok) {
            alert('আপনার রিকোয়েস্ট বিল্লাল ভাইয়ের কাছে পাঠানো হয়েছে! ১৫ মিনিটে চেক করে কনফর্ম করা হবে।');
            tg.close();
        } else {
            alert('কোনো সমস্যা হয়েছে, আবার চেষ্টা করুন।');
        }
    });
});

// ২. ঈদের সালামি দাবি নোটিফিকেশন
function sendEidClaim() {
    const uid = document.getElementById('eidUID').value;
    const count = document.getElementById('matchCount').value;
    const bikash = document.getElementById('eidBikash').value;
    
    // ⚠️ এই দুটি জিনিস আপনার নিজেরটা বসিয়ে দিন
    const botToken = "YOUR_BOT_TOKEN"; 
    const adminId = "YOUR_ADMIN_ID"; 
    
    if(!uid || !count || !bikash) {
        alert('দয়া করে সব তথ্য পূরণ করুন!');
        return;
    }
    
    const message = `🎁 *ঈদের সালামি দাবি রিকোয়েস্ট!*\n\n🎮 প্লেয়ার UID: ${uid}\n🕹️ ১০০ টাকার ম্যাচ খেলেছে: ${count} টি\n📱 সালামি নেওয়ার বিকাশ: ${bikash}\n\nবিল্লাল ভাই, চেক করে সত্য হলে তাকে ৫০ টাকা সালামি বোনাস পাঠিয়ে দিন!`;
    
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${adminId}&text=${encodeURIComponent(message)}&parse_mode=Markdown`;
    
    fetch(url).then(response => {
        if(response.ok) {
            alert('আপনার ঈদের সালামি রিকোয়েস্ট বিল্লাল ভাইয়ের কাছে পাঠানো হয়েছে!');
            document.getElementById("eidForm").style.display = "none";
        }
    });
}
