fetch('https://raw.githack.com/ethanaobrien/emulatorjs/main/data/version.json').then(response => {
	if (response.ok) {
		response.text().then(body => {
			var version = JSON.parse(body);
			var usingVersion = '0.4.25';
			if (usingVersion != version.current_version) {
				console.log('Using emulatorjs version ' + usingVersion + ' but the newest version is ' + version.current_version + '\n\nopen https://github.com/ethanaobrien/emulatorjs to update');
			};
		});
	};
});

var emulatorjs = document.createElement('script')
var scriptTag = document.getElementsByTagName('script')[0]
emulatorjs.async = true
emulatorjs.src = EJS_pathtodata + 'emulator.js?v=' + '0.4.25'
scriptTag.parentNode.insertBefore(emulatorjs, scriptTag)
emulatorjs.onload = function() {
    var config = {};
    config.gameUrl = EJS_gameUrl
    
    'undefined' != typeof EJS_biosUrl && (config.biosUrl = EJS_biosUrl)
    'undefined' != typeof EJS_gameID && (config.gameId = EJS_gameID)
    'undefined' != typeof EJS_gameParentUrl && (config.gameParentUrl = EJS_gameParentUrl)
    'undefined' != typeof EJS_gamePatchUrl && (config.gamePatchUrl = EJS_gamePatchUrl)
    'undefined' != typeof EJS_AdUrl && (config.adUrl = EJS_AdUrl)
    'undefined' != typeof EJS_core && (config.system = EJS_core)
    'undefined' != typeof EJS_loadStateURL && (config.loadStateOnStart = EJS_loadStateURL)
    config.onsavestate = null
    config.onloadstate = null
    'undefined' != typeof EJS_onSaveState && (config.onsavestate = EJS_onSaveState)
    'undefined' != typeof EJS_onLoadState && (config.onloadstate = EJS_onLoadState)
    'undefined' != typeof EJS_lightgun && (config.lightgun = EJS_lightgun)
    'undefined' != typeof EJS_gameName && (config.gameName = EJS_gameName)
    'undefined' != typeof EJS_pathtodata && (config.dataPath = EJS_pathtodata)
    'undefined' != typeof EJS_mouse && (config.mouse = EJS_mouse)
    'undefined' != typeof EJS_multitap && (config.multitap = EJS_multitap)
    'undefined' != typeof EJS_playerName && (config.playerName = EJS_playerName)
    'undefined' != typeof EJS_cheats && (config.cheats = EJS_cheats)
    'undefined' != typeof EJS_color && (config.color = EJS_color)
    window.EJS_emulator = new EJS(EJS_player, config)
    'undefined' != typeof EJS_onGameStart && EJS_emulator.on('start-game', EJS_onGameStart);
};

