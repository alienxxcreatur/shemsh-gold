import fs from 'node:fs';
import path from 'node:path';

const stageRoot = path.resolve(import.meta.dirname, '..');
const main = fs.readFileSync(path.join(stageRoot, 'artifacts', 'multi-metal-waves-1-and-3-wireframe.html'), 'utf8');
const auth = fs.readFileSync(path.join(stageRoot, 'artifacts', 'wave-1-auth-kyc-wireframe.html'), 'utf8');
const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };

const scripts = source => [...source.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)]
  .map(match => match[1]).filter(Boolean).join('\n');

for (const [name, source] of [['main', main], ['auth', auth]]) {
  try { new Function(scripts(source)); }
  catch (error) { failures.push(`${name}: JavaScript parse failed: ${error.message}`); }
}

const contracts = {
  header: ['function setChrome(', 'headerRight.dataset.headerRole', "headerLeft.dataset.headerRole"],
  fixedAction: ['id="page-action-root"', 'function mountPageActions()', "actions.classList.add('page-action')"],
  sheet: ['role="dialog" aria-modal="true"', 'data-close-sheet aria-label="بستن"', "if(e.key==='Escape'&&state.sheet){closeOverlay();return}", 'trigger.focus()'],
  dialog: ['role="alertdialog"', 'data-confirm-trade-switch', 'data-cancel-switch'],
  state: ['function canonicalOperationSummary(', 'operation-state-page', 'role="status"', 'role="alert"'],
  form: ['aria-invalid=', 'aria-describedby=', 'role="alert"', 'disabled'],
  operationDetail: ['function operationDetailDocument(', 'function receiptViewModel(a,model=null)', 'receipt-detail-list']
};

for (const [family, markers] of Object.entries(contracts)) {
  for (const marker of markers) assert(main.includes(marker), `${family} contract missing: ${marker}`);
}

for (const operation of [
  'buy', 'sell', 'trade-attempt', 'deposit', 'withdraw', 'physical', 'target', 'alert',
  'installment', 'installment-pay', 'gift-send', 'gift-receive', 'gift-claim-attempt'
]) {
  assert(main.includes(`a.op==='${operation}'`), `Operation schema missing: ${operation}`);
}

for (const fieldContract of [
  'id="money-amount-help" class="field-help negative" role="alert"',
  'id="gift-claim-help" class="gift-inline-alert" role="alert"',
  'id="new-password-help" class="field-help negative" role="alert"',
  'id="confirm-password-help" class="field-help negative" role="alert"'
]) {
  assert(main.includes(fieldContract), `Field error contract missing: ${fieldContract}`);
}

for (const semanticContract of [
  "label=settled?'مبلغ پرداخت‌شده':'مبلغ قسط'",
  "label='مقدار هدیه'",
  "label='مبلغ تلاش معامله'",
  "title='اطلاعات تلاش معامله'",
  "title='اطلاعات کد هدیه'"
]) {
  assert(main.includes(semanticContract), `Type-aware operation detail missing: ${semanticContract}`);
}

assert(auth.includes('role="alert"'), 'Auth/KYC form errors are not announced');
assert(auth.includes('data-sheet-action="close"'), 'Auth/KYC sheet has no close contract');

const report = {
  pageFamilies: Object.keys(contracts).length,
  operationSchemas: 13,
  fieldErrorContracts: 4,
  failures
};

console.log(JSON.stringify(report, null, 2));
if (failures.length) process.exitCode = 1;
