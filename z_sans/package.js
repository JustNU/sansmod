class Mod
{
    constructor()
    {
		Logger.info("Loading: sans.");
		
		ModLoader.onLoad["sans"] = require("./src/sans.js").onLoadMod;
    }
}

module.exports.Mod = new Mod();