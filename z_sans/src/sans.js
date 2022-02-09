"use strict";

class sans
{
	
	static onLoadMod() 
	{
		// Constants
		const db = `user/mods/Z_GuestGear_DigitalFlora/db/`;
		const config = require("../config/config.json");
		
		// add retextures 	       (db,	"original item id",			"new item id",		"bundle path");
		// Headwear //
		JustNUCore.AddItemRetexture(db, "60a7ad2a2198820d95707a2e", "sans_weldingmask", "sans/Headwear/weldingmask.bundle");
		
		// add clothing
		// add tops
		JustNUCore.AddTop(db, "sans_top", "sans/Tops/hoodie.bundle", "assets/content/hands/hands_tshirt_bear_black/hands_tshirt_bear_black.skin.bundle", "5d1f5b3f86f7744bcd1345a2");
		
		if (config.AddToBots) {
			// add items to bots
			// Armor Vests //
			DatabaseServer.tables.bots.types["bosstagilla"].inventory.equipment.FaceCover.push(
				"sans_weldingmask"
			);
		}
		
		// Modify quests
		if (config.EnableQuestChanges) {
			const armoredGear = [
				[
					"sans_weldingmask"
				]
			];
			
			// Swift One
			if (DatabaseServer.tables.templates.quests["60e729cf5698ee7b05057439"]) {
				const SwiftOne = DatabaseServer.tables.templates.quests["60e729cf5698ee7b05057439"].conditions.AvailableForFinish[0]._props.counter.conditions[1]._props.equipmentExclusive;
				
				DatabaseServer.tables.templates.quests["60e729cf5698ee7b05057439"].conditions.AvailableForFinish[0]._props.counter.conditions[1]._props.equipmentExclusive = [
					...JsonUtil.clone(SwiftOne),
					...armoredGear
				];
			};
		}
	}
}

module.exports = sans;