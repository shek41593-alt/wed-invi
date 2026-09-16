const https = require('https');

https.get('https://rushikesh-prajakta.invitationmedia.in/assets/index-12isoQEG.js', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        // Extract local resource paths in the js file
        const localMatches = [...data.matchAll(/"?\/assets\/([^"'\s]*\.(?:png|jpg|jpeg|webp|svg|gif|mp3))"?/g)].map(m => '/assets/' + m[1]);
        const httpMatches = [...data.matchAll(/"?(https:\/\/[^"'\s]*\.(?:png|jpg|jpeg|webp|svg|gif|mp3))"?/g)].map(m => m[1]);

        console.log('Local Assets:', [...new Set(localMatches)]);
        console.log('Remote Assets:', [...new Set(httpMatches)]);
    });
});
