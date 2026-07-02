const http = require('http');

function postContact(contact) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(contact);
    const options = {
      hostname: '127.0.0.1',
      port: 5000,
      path: '/api/contact',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data),
      },
    };

    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => {
        try {
          const json = JSON.parse(body || '{}');
          resolve({ status: res.statusCode, body: json });
        } catch (e) {
          resolve({ status: res.statusCode, body: body });
        }
      });
    });

    req.on('error', (err) => reject(err));
    req.write(data);
    req.end();
  });
}

function getContacts() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: '127.0.0.1',
      port: 5000,
      path: '/api/contacts',
      method: 'GET',
    };
    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => {
        try {
          resolve(JSON.parse(body || '{}'));
        } catch (e) {
          resolve({ raw: body });
        }
      });
    });
    req.on('error', (err) => reject(err));
    req.end();
  });
}

(async () => {
  try {
    console.log('Posting test contact...');
    const post = await postContact({
      name: 'AutomatedUser',
      email: 'auto@local.test',
      subject: 'Automated Test',
      message: 'This message was posted by an automated test script.'
    });
    console.log('POST result:', post.status, JSON.stringify(post.body));

    console.log('Fetching contacts...');
    const contacts = await getContacts();
    if (contacts && contacts.contacts) {
      console.log('Total contacts returned:', contacts.contacts.length);
      // print the most recent contact
      if (contacts.contacts.length > 0) {
        console.log('Most recent contact:', contacts.contacts[0]);
      }
    } else {
      console.log('GET result:', contacts);
    }
  } catch (err) {
    console.error('Test script error:', err.message || err);
    process.exit(1);
  }
})();
