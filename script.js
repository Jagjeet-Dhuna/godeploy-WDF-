document.getElementById('downloadLink').onclick = function() {
    var vCardData = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        'N:Dhuna;Jagjeet',
        'FN:Jagjeet Dhuna',
        'NICKNAME:Jag',
        'EMAIL;TYPE=INTERNET:dhunajagjeet@gmail.com',
        'TEL;TYPE=cell:+447481802305',
        'URL:jagjeetdhuna.com',
        'END:VCARD'
    ].join('\n');

    var blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    var url = URL.createObjectURL(blob);
    this.href = url;
}
