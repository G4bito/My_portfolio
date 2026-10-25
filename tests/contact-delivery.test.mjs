import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sendContactMessage } from '../lib/contact-delivery.ts';

const form = () => { const data = new FormData(); data.set('name','Test visitor'); data.set('email','visitor@gmail.com'); data.set('message','A project question'); return data; };

test('submits all fields without a CAPTCHA redirect', async () => {
  let request;
  await sendContactMessage(form(), async (url, options) => {
    request = { url, options };
    return Response.json({ success: 'true' });
  });
  assert.ok(request.url.startsWith('https://formsubmit.co/ajax/'));
  assert.equal(request.options.method, 'POST');
  assert.equal(request.options.body.get('email'), 'visitor@gmail.com');
  assert.equal(request.options.body.get('_captcha'), 'false');
});

test('accepts boolean success responses', async () => {
  await sendContactMessage(form(), async () => Response.json({ success: true }));
});

test('does not report success for an unactivated form or provider rejection', async () => {
  await assert.rejects(sendContactMessage(form(), async () => Response.json({ success: 'false', message: 'Activate form' })));
});

test('does not report success for HTTP or malformed responses', async () => {
  await assert.rejects(sendContactMessage(form(), async () => Response.json({ success: true }, { status: 500 })));
  await assert.rejects(sendContactMessage(form(), async () => Response.json({ message: 'unexpected' })));
});

test('preserves network failures instead of falsely reporting delivery', async () => {
  await assert.rejects(sendContactMessage(form(), async () => { throw new Error('offline'); }));
});

test('does not claim delivery when the provider asks for activation', async () => {
  await assert.rejects(sendContactMessage(form(), async () => Response.json({ success: true, message: 'This form needs activation' })));
});

test('rejects malformed and non-Gmail emails before contacting the provider', async () => {
  for (const email of ['', 'visitor@yahoo.com', 'visitor@gmail', 'visitor@@gmail.com', '.visitor@gmail.com', 'visitor..name@gmail.com', 'visitor @gmail.com', 'visitor@gmail.com.evil.com']) {
    const data = form(); data.set('email', email);
    let called = false;
    await assert.rejects(sendContactMessage(data, async () => { called = true; return Response.json({ success: true }); }));
    assert.equal(called, false, email);
  }
});

test('accepts dotted, uppercase, and tagged Gmail addresses', async () => {
  for (const email of ['visitor.name@gmail.com', 'Visitor@GMAIL.COM', 'visitor+project@gmail.com']) {
    const data=form(); data.set('email',email);
    await sendContactMessage(data, async () => Response.json({ success: true }));
  }
});
