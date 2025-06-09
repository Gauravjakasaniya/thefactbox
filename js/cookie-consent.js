// Cookie Consent Banner
document.addEventListener('DOMContentLoaded', function() {
    // Check if user has already consented
    if (!localStorage.getItem('cookieConsent')) {
        const cookieBanner = document.createElement('div');
        cookieBanner.className = 'cookie-banner';
        cookieBanner.innerHTML = `
            <div class="cookie-content">
                <p>We use cookies and similar technologies to help personalize content, tailor and measure ads, and provide a better experience. By clicking 'Accept', you agree to this use of cookies. You can learn more about our cookie policy in our <a href="privacy-policy.html">Privacy Policy</a>.</p>
                <div class="cookie-buttons">
                    <button class="accept-cookies">Accept</button>
                    <button class="customize-cookies">Customize</button>
                </div>
            </div>
        `;

        document.body.appendChild(cookieBanner);

        // Add event listeners
        document.querySelector('.accept-cookies').addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'accepted');
            cookieBanner.remove();
            // Enable AdSense
            enableAdSense();
        });

        document.querySelector('.customize-cookies').addEventListener('click', function() {
            // Show cookie preferences modal
            showCookiePreferences();
        });
    } else {
        // If already consented, enable AdSense
        enableAdSense();
    }
});

function enableAdSense() {
    // Load AdSense script
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2760665302139848';
    script.async = true;
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);

    // Initialize AdSense ads
    (adsbygoogle = window.adsbygoogle || []).push({});
    (adsbygoogle = window.adsbygoogle || []).push({});
}

function showCookiePreferences() {
    const modal = document.createElement('div');
    modal.className = 'cookie-preferences-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>Cookie Preferences</h2>
            <div class="cookie-options">
                <div class="cookie-option">
                    <input type="checkbox" id="necessary" checked disabled>
                    <label for="necessary">Necessary Cookies (Required)</label>
                </div>
                <div class="cookie-option">
                    <input type="checkbox" id="analytics">
                    <label for="analytics">Analytics Cookies</label>
                </div>
                <div class="cookie-option">
                    <input type="checkbox" id="advertising">
                    <label for="advertising">Advertising Cookies</label>
                </div>
            </div>
            <div class="modal-buttons">
                <button class="save-preferences">Save Preferences</button>
                <button class="accept-all">Accept All</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Add event listeners
    document.querySelector('.save-preferences').addEventListener('click', function() {
        const preferences = {
            analytics: document.getElementById('analytics').checked,
            advertising: document.getElementById('advertising').checked
        };
        localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
        modal.remove();
        if (preferences.advertising) {
            enableAdSense();
        }
    });

    document.querySelector('.accept-all').addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'accepted');
        modal.remove();
        enableAdSense();
    });
} 