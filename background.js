chrome.browserAction.onClicked.addListener((tab) => {
	chrome.tabs.executeScript(tab.id, {
	  code: `Array.from(document.querySelectorAll('audio, source')).map(element => element.src).filter(src => src.endsWith('.m4a'))`
	}, (results) => {
	  for (let url of results[0]) {
		chrome.downloads.download({url: url});
	  }
	});
  });
  