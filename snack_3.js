var browser_status = {
  tab : ['Facebook', 'GitHub', 'Gmail', 'Instagram', 'Twitter', 'Keep', 'Boolean'],
  active_tab : 1,
};

// console.log(browser_status);

var social = ['Facebook', 'Instagram', 'Twitter'];

var tabs = browser_status.tab;
// console.log(tabs);


for (var i = 0; i < tabs.length; i++) {
  if (social.includes(tabs[i])) {
    // console.log(tabs[i]);
    tabs.splice(i,1, '');
    if (browser_status.active_tab = i + 1) {
      browser_status.active_tab = i + 2;
    }
    else if (browser_status.active_tab > tabs.length) {
      browser_status.active_tab = tabs.length;
    }
  }
}
console.log(browser_status);
