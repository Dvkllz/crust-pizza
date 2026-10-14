const dishes = {
 'chicken-parm': ['Chicken Parm', 'Chicken, rich tomato sauce, and golden melted cheese.'],
 'chicken-alfredo': ['Chicken Alfredo', 'Creamy alfredo, tender chicken, and our signature cheese blend.'],
 spaghetti: ['Spaghetti & Meatballs', 'A classic comfort dish, made for sharing.'],
 'mac-cheese': ['Baked Mac & Cheese', 'Perfectly baked, wonderfully cheesy comfort in every bite.']
};
const menuMarkup = Object.values(dishes).map(([title, description]) => `<article class="dialog-item"><h3>${title}</h3><p>${description}</p></article>`).join('');
const configurationNote = '<p class="note">This is a design recreation. Live restaurant details and services have not been connected.</p>';
const panels = {
 menu: ['Our menu', menuMarkup + '<p class="note">Illustrative menu based on the supplied design. Prices, availability, and allergen information are not provided.</p>'],
 order: ['Something delicious starts here', menuMarkup + '<p class="note">Online ordering is not connected in this demo. No order will be placed and no payment is collected.</p>'],
 about: ['Made from scratch. Made to share.', '<p>Home of the Chicago-style thin crust pizza. A place for fresh pizza, family time, and gathering around the table.</p>'],
 service: ['Pizza & service', '<p>Freshly made pizza and a welcoming place to share it. Explore the menu and find your next favorite.</p>'],
 kids: ['Family pizza night', '<p>“Kids eat free Tuesdays” is part of the supplied design. Offer terms and participating locations have not been provided.</p>' + configurationNote],
 franchise: ['Own a Crust Pizza Co.', '<p>Franchise inquiries need an official contact destination. No contact form is connected to this visual recreation.</p>'],
 locations: ['Find your Crust', '<p>The restaurant photo is reproduced from the reference. Addresses, opening hours, and a locations directory have not been provided.</p>'],
 contact: ['Get in touch', '<p>A contact phone number and email address have not been provided for this recreation.</p>'],
 social: ['Let’s connect', '<p>The social profile in the reference is a placeholder. Connect the official profiles before using this site for a real restaurant.</p>'],
 catering: ['Pizza for your next gathering', '<p>Catering information and an inquiry destination have not been provided.</p>' + configurationNote],
 careers: ['Join the team', '<p>Open positions and an application destination have not been provided.</p>' + configurationNote],
 community: ['Let’s work together', '<p>Good food brings people together. Community partnership inquiries can be enabled once an official contact is provided.</p>'],
 privacy: ['Privacy', '<p>This static demo has no forms, analytics, accounts, or payments and does not store visitor information in the browser. Google Fonts is requested to display the typography; the hosting and font providers may process routine request metadata.</p>'],
 terms: ['About this recreation', '<p>This site recreates the user-supplied visual reference. It is a demonstration, not an operational restaurant storefront. Images, promotional text, and branding come from the reference; menu descriptions are illustrative.</p>']
};
const dialog = document.querySelector('#details');
let opener;
function openPanel(title, content, trigger) {
 opener = trigger;
 document.querySelector('#dialog-title').textContent = title;
 document.querySelector('#dialog-content').innerHTML = content;
 dialog.showModal();
 document.body.classList.add('modal-open');
}
document.addEventListener('click', event => {
 const trigger = event.target.closest('[data-panel], [data-dish]');
 if (!trigger) return;
 if (trigger.dataset.dish) {
   const [title, description] = dishes[trigger.dataset.dish];
   openPanel(title, `<p>${description}</p><p class="note">Illustrative menu item. Check ingredients, allergens, prices, and availability with the restaurant before ordering.</p>`, trigger);
 } else {
   const [title, content] = panels[trigger.dataset.panel];
   openPanel(title, content, trigger);
 }
});
document.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); opener?.focus(); });
const toggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('#mobile-nav');
toggle.addEventListener('click', () => { const expanded = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(expanded)); toggle.setAttribute('aria-label', expanded ? 'Close navigation' : 'Open navigation'); nav.hidden = !expanded; });
nav.addEventListener('click', event => { if (event.target.closest('a,button')) { nav.hidden = true; toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Open navigation'); } });
