
            const pattern = document.getElementById('regex-pattern');
            const flags = document.getElementById('regex-flags');
            const text = document.getElementById('regex-text');
            const results = document.getElementById('regex-results');

            function runRegex() {
                if (!pattern.value) {
                    results.innerText = text.value;
                    return;
                }
                try {
                    const re = new RegExp(pattern.value, flags.value || '');
                    const sourceText = text.value;
                    let highlighted = sourceText.replace(re, (match) => `<span class="match-hl">${match}</span>`);
                    results.innerHTML = highlighted.replace(/\n/g, '<br>');
                } catch (e) {
                    results.innerHTML = `<span style="color: #ff3366;">Invalid Regex: ${e.message}</span>`;
                }
            }
            [pattern, flags, text].forEach(el => el.addEventListener('input', runRegex));
            text.value = "Hello World! This is a simple Regex Tester showing matches.";
            runRegex();
        