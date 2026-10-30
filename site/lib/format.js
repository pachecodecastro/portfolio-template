// Pure logic lives in site/lib so it can be tested without a browser.

export function formatEuro(amount, locale = 'pt-PT') {
  if (!Number.isFinite(amount)) {
    throw new TypeError('amount must be a finite number');
  }
  return new Intl.NumberFormat(locale, { style: 'currency', currency: 'EUR' }).format(amount);
}
