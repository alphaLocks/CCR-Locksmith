const fs = require('fs');
const services = [
  { file: 'safe-vault.html', title: 'Safe & Vault Services (Opening, Repair, Installation)' },
  { file: 'home-security-consultation.html', title: 'Home Security Consultation' },
  { file: 'keyless-entry.html', title: 'Keyless Entry & Keypad Lock Installation' },
  { file: 'smart-home-security.html', title: 'Advanced & Smart Home Security' },
  { file: 'master-key-system.html', title: 'Master Key System' },
  { file: 'key-system-services.html', title: 'Key & System Services' },
  { file: 'mailbox-lock.html', title: 'Mailbox Lock Replacement' },
  { file: 'window-lock.html', title: 'Window Lock Installation & Repair' },
  { file: 'sliding-door-lock.html', title: 'Sliding Door & Patio Door Locks' },
  { file: 'high-security-lock.html', title: 'High-Security Lock Installation' },
  { file: 'deadbolt-installation.html', title: 'Deadbolt Installation' },
  { file: 'lock-installation.html', title: 'Lock Installation' },
  { file: 'rekeying.html', title: 'Rekeying Service' },
  { file: 'lock-repair.html', title: 'Lock Repair / Replacement' },
  { file: 'broken-key-extraction.html', title: 'Broken Key Extraction' },
  { file: 'house-lockout.html', title: 'House Lockout Service' }
];

const template = (title) => `<!DOCTYPE html>
<html>
<head>
    <title>${title} | CCR Locksmith</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="assets/css/main.css" />
</head>
<body>
    <div id="page-wrapper">
        <section class="wrapper">
            <div class="container">
                <header>
                    <h2>${title}</h2>
                </header>
                <p>
                    Information about ${title}. Contact us for more details or emergency service.
                </p>
            </div>
        </section>
    </div>
</body>
</html>
`;

services.forEach(service => {
  fs.writeFileSync(service.file, template(service.title));
  console.log(`Created: ${service.file}`);
});