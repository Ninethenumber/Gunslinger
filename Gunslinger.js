var iFileName = "Gunslinger.js";
RequiredSheetVersion(12.999);

ClassList["gunslinger"] = {
	regExpSearch : /gunslinger/i,
	name : "Gunslinger", 
		source : ["HB", 2],
		primaryAbility : "\n \u2022 Gunslinger: Dexterity and Intelligence;",
		prereqs : "\n \u2022 Gunslinger: Dexterity 13 and Intelligence 13;",
		subclasses : ["Gunslinger Trails", ["gunslinger-myth breaker", "gunslinger-virtuoso"]],
		improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
		die : 8,
		saves : ["Dex", "Int"],
		skills : ["\n\n" + toUni("Gunslinger") + ": Choose two from Arcana, Acrobatics, History, Insight, Investigation, Perception, Persuasion, Sleight of Hand."],
		toolProfs : {
		primary : [["Tinker's or Smiths Tools", 1]],
	},
	
		armor : [
			[true, true, false, true],
			[true, true, false, true]
		],
		
		weapons : [
			[true, false, ["crossbows", "firearms"]],
			[false, false, ["firearms"]]
		],
		
		equipment : "Gunslinger starting equipment:\n \u2022 Scale mail -or- leather armor;\n \u2022 A Pistol -or- A Sawn-Off Shotgun -or- A Rifle;\n \u2022 A dungeoneer's pack -or- an scholars's pack;\n \u2022 A simple weapon -or- A shield;\n\ \u2022 a personal effect and 30 pieces of ammunition.",
		attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		features : {
			"fighting style" : {
				name : "Fighting Style",
				source : ["HB", 3],
				minlevel : 2,
				description : "\n   " + "Choose a Fighting Style for the Gunslinger using the \"Choose Feature\" button above",
				choices : ["Archery", "Quick Shot", "Breacher", "Gun Duelist", "Shield Shooting", "Sniper"],
				"archery" : {
					name : "Archery Fighting Style",
					description : "\n   " + "+2 bonus to attack rolls I make with ranged weapons",
					calcChanges : {
						atkCalc : ["if (isRangedWeapon) {output.extraHit += 2; }; ", "My ranged weapons get a +2 bonus on the To Hit."]
					}
				},
				"quick shot" : {
					name : "Quick shot",
					description : "\n   " + "When you use the Attack action and attack with a one handed weapon, you can use a bonus action to attack with a firearm with the light property that you are holding.",
					
				},
				"breacher" : {
					name : "Breacher",
					description : "\n   " + "When you roll a 1 or 2 on a damage die for an attack you make with a firearm, you can reroll the die and must use the new roll. The firearm must have the scatter property for you to gain this benefit.",
				},
				"gun duelist" : {
					name : "Gun Duelist",
					description : "\n   " + "When wielding a firearm in one hand and no other weapons, you get a +2 bonus to your damage rolls with these weapons.",
				},
				"shield shooting" : {
					name : "Shield Shooting",
					description : "\n   " + "You can now wield a two-handed firearm with a shield, but must brace it against the shield as an action to fire it. It stays braced until you move more than 10ft",
					action : ["action", ""]
				},
				"sniper" : {
					name : "Sniper",
					description : "\n   " + "When you make an attack with a two-handed firearm against a target further than 30 feet away from you, you get a +2 bonus to damage roll for that attack. The firearm cannot have the scatter property in order to gain this benefit.",
					}
			},
		"gun stunts" : {
				name : "Gun Stunts",
				source : ["HB", 3],
				minlevel : 1,
				description : desc([
					"You can use any of the following Gun Stunts as a bonus action on your turn",
					"Analytical Shot: Add your intelligence modifier to your next damage roll that uses a firearm.",
					"Pistol Whip: You can use Dex for improvised weapon attacks using a firearm.On a hit you don't provoke opportunity attacks from that creature.",
					"Run 'n Gun: When you make an attack roll with a firearm, you can use a bonus action to move 10 feet in any direction.",
					"Slinger's Senses: While holding a gun, you can make a Wisdom(Perception) check as a bonus action."
				]),
				action : ["bonus action", ""]
		},
		
		"quickdraw" : {
				name : "Quickdraw",
				source: ["HB", 3],
				minlevel : 1,
				description: desc([
					"When you take the Attack Action and both of your hands are free you can draw one firearm."
					])
		},
		
		"upgrade" : {
				name : "Upgrade 2nd",
				source: ["HB", 3],
				minlevel : 2,
				description : "\n   " + "Choose an attachment for the Gunslinger using the \"Choose Feature\" button above",
				choices : ["Magnified Sight", "Advanced Sight", "Foregrip", "Bipod", "Bayonet", "Suppressor"],
				"magnified sight" : {
					name : "Magnified Sight",
					description : "\n   " + "The firearms normal and maximum range of the firearm increase by 10 feet.",
				},
				"advanced sight" : {
					name : "Advanced Sight",
					description : "\n   " + "+1 to damage rolls at creatures within 30 feet.",
				},
				"foregrip" : {
					name : "Foregrip",
					description : "\n   " + "Impose disadvantage on disarming strikes.",
				},
				"bipod" : {
					name : "Bipod",
					description : "\n   " + "You do not have disadvantage on attack rolls when prone.",
				},
				"bayonet" : {
					name : "Bayonet",
					description : "\n   " + "You become proficient with unarmed strikes dealt with this firearm.",
				},
				"suppressor" : {
					name : "Suppressor",
					description : "\n   " + "Your firearms are only audible out to 30 feet.",
				},
		},
		"subclassfeature3" : {
				name : "Gunslinger Trails",
				source : ["HB", 3],
				minlevel : 3,
				description : "\n   " + "Choose a Gunslinger Trail you strive to emulate and put it in the \"Class\" field" + "\n   " + "Choose either Myth Breaker or Virtuoso"
		},
		"lucky item" : {
				name : "Lucky Item",
				source : ["HB", 3],
				minlevel : 3,
				description : "\n   " + "Choose a Lucky Item for the Gunslinger using the \"Choose Feature\" button above",
				choices : ["Savy", "Eloquent", "Adroit"],
				"savy" : {
					name : "Savy",
					description : "\n   " + "Choose two skills you are proficient in. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen skills."
					},
				"eloquent": {
					name : "Eloquent",
					description : "\n  " + "You learn two languages of your choosing.",
					languageProfs : [2]
				},
				"adroit" : {
					name : "Adroit",
					description : "\n " + "You learn a tool proficiency of your choosing, or double your proficiency bonus for one tool proficiency.",
					toolProfs : [["Artisan's tools", 1]]
				},
			},	
			
		"extra attack" : {
				name: "Extra Attack",
				source : ["HB", 4],
				minlevel : 5,
				description : "\n " + "When you take the Attack action on your turn, you can forgo one of your attacks to reload your weapon."
			},
		"moment of focus" : {
				name : "Moment of Focus",
				source : ["HB", 4],
				minlevel : 6,
				description : "\n " + "You can now take the Dodge action as a bonus action.",
				usages : "Dexterity modifier per ",
				usagescalc : "event.value = tDoc.getField(\"Dex Mod\").value;",
				recovery : "short rest",
				action : ["bonus action", ""]
			},
		"evasion" : {
				name : "Evasion",
				source : ["HB", 4],
				minlevel : 7,
				description : "\n   " + "My Dexterity saves vs. areas of effect negate damage on success and halve it on failure",
				savetxt : { text : ["Dex save vs. area effects: fail \u2015 half dmg, success \u2015 no dmg"] }
			},
		
		"upgrade10" : {
				name : "Upgrade 10th",
				source: ["HB", 3],
				minlevel : 10,
				description : "\n   " + "Choose an attachment for the Gunslinger using the \"Choose Feature\" button above",
				choices : ["Light Frame", "Expanded Chamber", "Wide Choke", "Heavy Frame", "Pistol Grip", "Heavy Barrel"],
				"light frame" : {
					name : "Light Frame",
					description : "\n   " + "The firearms “heavy” property is removed, in addition the weight is of the firearm is also reduced.",
				},
				"expanded chamber" : {
					name : "Expanded Chamber",
					description : "\n   " + "The firearms reload score doubles.",
				},
				"wide choke" : {
					name : "Wide Choke",
					description : "\n   " + "The range for your firearm's Scatter damage roll is now 10 feet around the original target.",
				},
				"heavy frame" : {
					name : "Heavy Frame",
					description : "\n   " + "The weight of the firearm increase, in addition that firearm now deals 1d6 damage when used as an improvised weapon."
				},
				"pistol grip" : {
					name : "Pistol Grip",
					description : "\n   " + "+1 to attack rolls."
				},
				"heavy barrel" : {
					name : "Heavy Barrel",
					description : "\n   " + "Increases the normal range of the gun by 20 feet and the maximum range by 30 feet."
				},
		},
		"shootout sense" : {
				name : "Shootout Sense",
				source : ["HB", 4],
				minlevel : 11,
				description : "\n " + "You gain advantage on initiative checks. Additionally, you can't be surprised while you are conscious.",
			},
		"overwatch" : {
			name : "Overwatch",
			source : ["HB", 4],
			minlevel : 14,
			abilitySave : 2,
			abilitySaveAlt: 4,
			description: desc([
				"Once before the start of your next turn while you are holding a firearm, when a creature moves, makes an attack or casts a spell while within your firearm's range you can use your reaction to make an attack against them with your firearm. When you do so you can also use one Gun Stunt.",
				"If the attack is triggered by the target's movement, it must make a Dexterity saving throw. On a failed save, its speed is reduced to 0 until the start of your next turn.",
				"If the attack is triggered by the target making a weapon attack, it must make a Constitution saving throw. On a failed save they have disadvantage on attack rolls until the start of your next turn.",
				"If the attack is triggered by the target's casting of a spell the creature(s) targeted gain adv on the saving throw to resist the spells effect, if applicable the targeted creatures also gain the effects of *evasion*. If the spell requires a spell attack roll it would be made with disadvantage."
			]),
			action : ["action", ""],
			},
		"final stand" : {
			name : "Final Stand",
			source : ["HB", 4],
			minlevel : 15,
			description : "\n " + "When your hitpoints are reduced to 0 you can attack an enemy before you fall unconsious(one attack), you make this attack roll with disadvantage, if the attack hits you gain hitpoints equal to your gunslinger level.",
			recovery : "short rest"
		},
		"reflex mastery" : {
				name : "Reflex Mastery",
				source : ["HB", 4],
				minlevel : 18,
				description : desc([
					"You can gain the following abilities",
					"You can take the Disengage action as a bonus action.",
					"Once per short rest, if you are hit by a ranged attack, you can reduce the damage of that attack to 0.",
					"Once per short rest, you can use two Gun Stunts as a bonus action."
				])
		},
		"gunslinger supreme" : {
			name : "Superhuman Reflexes",
			source : ["HB", 4],
			minlevel : 20,
			description : "\n " + "You add your proficiency bonus to your firearm's damage rolls, except when making an attack that does not apply your ability score modifier."
			}			
		}
	}			
				
				
ClassSubList["gunslinger-myth breaker"] = { 
 
    regExpSearch : /^(?=.*myth)(?=.*breaker).*$/i,
    subname : "Myth Breaker", 
    source : ["HB", 5],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    features : {
"subclassfeature3" : {
				name : "Myth Breaker's Tactic",
				source : ["Hb", 5],
				minlevel : 3,
				description : "\n   " + "Choose Crowd Control, Legendary Buster, Leviathan Feller, Varmint Slayer or Show Slower with the \"Choose Feature\" button",
				choices : ["Crowd Control", "Legendary Buster", "Leviathan Feller", "Varmint Slayer", "Show Slower"],
				"crowd control" : {
					name : "Tactic: Crowd Control",
					description : "\n   " + "Once per turn, when you make a ranged attack with a firearm against a creature, you can make an additional attack against a creature that's within 5 feet of it"
				},
				"legendary buster" : {
					name : "Tactic: Legendary Buster",
					description : "\n   " + "When you hit a creature with a weapon attack made using a firearm, the next weapon attack made against that creature by a friendly creature deals an extra 1d8 damage"
				},
				"leviathan feller" : {
					name : "Tactic: Leviathan Feller",
					description : "\n   " + "When you hit a creature with a weapon attack made using a firearm, you can push them back 10 feet from you in a straight line. 1/turn"
				},
				"varmint slayer" : {
					name : "Tactic: Varmint Slayer",
					description : "\n   " + "ou have advantage on the first weapon attack you make on your turn against a creature that has moved further than 15 feet or taken the dodge or disengage action since your last turn."
				},
				"show slower" : {
					name : "Tactic: Show Slower",
					description : "\n   " + "If you hit a creature with a firearm attack that creature has to make a Str save, on a fail that creatures speed is halved. 1/turn",
					abilitySave : 2
				}
			},
			"subclassfeature9" : {
				name : "Monstrous Defense",
				source : ["HB", 5],
				minlevel : 9,
				description : "\n   " + " \"Choose Feature\" button to choose Critter Sense, Uncanny Dodge, Mob Runner, Mythical Guardian or Slayer's Discipline",
				choices : ["Critter Sense", "Uncanny Dodge", "Into the Fray", "Mythical Guardian", "Slayer's Discipline"],
				"critter sense" : {
					name : "Critter Sense",
					description : "\n   " + "You gain 15 feet of blindsight, and creatures cannot get advantage on attack rolls or benefit from being hidden or invisible while within 15 feet of you."
				},
				"uncanny dodge" : {
					name : "Uncanny Dodge",
					description : "\n   " + "When a creature damages you with an attack, you can use your reaction to halve that damage.",
					action : ["reaction", ""]
				},
				"into the fray" : {
					name : "Into the Fray",
					description : "\n   " + "When a hostile creature makes an attack roll against you while another hostile creature is within 5 feet of you, the creature makes the roll with disadvantage."
				},
				"mythical guardian" : {
					name : "Mythical Guardian",
					description : "\n   " + "You can use your action to end one effect on yourself that is causing you to be charmed or frightened.",
					action : ["action", ""]
				},
				"slayer's discipline" : {
					name : "Slayer's Discipline",
					description : "\n   " + "You gain proficiency with a type of saving throw of your choice."
				}
			},
			
			"subclassfeature13" : {
				name : "Strength In Knowledge",
				source : ["HB", 5],
				minlevel : 13,
				description : "\n  " + "ou have advantage on saving throws against being charmed, paralyzed or poisoned.",
				savetxt : {
							text : ["Adv. on saves vs. poison, charmed and paralysis"],
				}
			},
			"luckier item" : {
				name : "Luckier Item",
				source : ["HB", 3],
				minlevel : 13,
				description : "\n   " + "Choose another trait from the Lucky Items using the \"Choose Feature\" button above",
				choices : ["Savy", "Eloquent", "Adroit", "Erudite"],
				"savy" : {
					name : "Savy",
					description : "\n   " + "Choose two skills you are proficient in. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen skills."
					},
				"eloquent": {
					name : "Eloquent",
					description : "\n  " + "You learn two languages of your choosing.",
					languageProfs : [2]
				},
				"adroit" : {
					name : "Adroit",
					description : "\n " + "You learn a tool proficiency of your choosing, or double your proficiency bonus for one tool proficiency.",
					toolProfs : [["Artisan's tools", 1]]
				},
				"erudite" : {
					name : "Erudite",
					description : "\n " + "You get the hunter's mark spell, and can cast it once per long rest",
					usages : 1,
					recovery : "long rest",
					action : ["bonus action", ""],
						spellcastingBonus : {
						spells : ["hunter's mark"],
						selection : ["hunter's mark"],
						oncelr : true
					}
				},	
			},	
		"subclassfeature17" : {
				name : "Legendary Overwatch",
				source : ["HB", 5],
				minlevel : 17,
				description :desc([
				"If the creature is moving, it is stunned until the end of your next turn.",
				"If the creature is making an attack, it automatically automatically misses and cannot make any more attacks until the end of your next turn.",
				"If the creature casts a spell or uses an ability that forces multiple creatures to make a saving throw to resist its damage, it deals no damage to creatures that succeed the saving throw, and half damage to creatures that fail."
			]),
				usages : 1,
				recovery : "short rest"
		}
	}
}

ClassSubList["gunslinger-virtuoso"] = {

		regExpSearch : /^(?=.*(virtuoso))(?=.*gunslinger).*$/i,
		subname : "Virtuoso",
		source : ["HB", 5],
		abilitySave : 1,
		attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		features : {
			"subclassfeature3" : {
				name : "The Art of Lead",
				source : ["HB", 5],
				minlevel : 3,
				description : "\n   " + "I gain a number of superiority dice that I can use to fuel special Tricks" + "\n   " + "I regain all superiority dice after a short rest",
				additional : ["", "", "d8", "d8", "d8", "d8", "d8", "d8", "d10", "d10", "d10", "d10", "d10", "d10", "d10", "d10", "d12", "d12", "d12", "d12"],
				usages : [0, 0, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6],
				recovery : "short rest"
			},
			"subclassfeature3.1" : {
				name : "Tricks",
				source : ["HB", 6],
				minlevel : 3,
				description : "\n   " + "Use the \"Choose Features\" button above to add a Trick to the third page" + "\n   " + "I can use a Trick by expending a superiority die (only one Trick per attack)",
				additional : ["", "", "3 known", "3 known", "3 known", "3 known", "3 known", "3 known", "5 known", "5 known", "5 known", "5 known", "7 known", "7 known", "7 known", "7 known", "9 known", "9 known", "9 known", "9 known"],
				extraname : "Trick",
				extrachoices : ["Sarge's Order", "Break Cover", "Concussive Attack", "Disarming Attack", "Disorienting Attack", "Dodge Roll", "Intercept", "Piercing Attack", "Precision Attack", "Explosive Jump", "Slinger's Luck", "Tactical Retreat", "Trip Attack", "Warning Attack"],
				"sarge's order" : {
					name : "Sarge's Order",
					source : ["HB", 6],
					description : "\n   " + "I forgo one attack of my Attack action to use a bonus action to direct an ally I see/hear" + "\n   " + "The ally can use a reaction to make an attack, adding the superiority die to damage",
					action : ["bonus action", " (with Attack action)"]
				},
				"break cover" : {
					name : "Break Cover",
					source : ["HB", 6],
					description : "\n   " + "Use after hitting a creature; I add the superiority die to my attack's damage" + "\n   " + "Ignore 1/2 or 3/4 cover till the end of your next turn."
				},
				"concussive attack" : {
					name : "Concussive Attack",
					source : ["HB", 6],
					description : "\n   " + "Use when you attack a creature in half or 3/4s cover; I add the superiority die to my attack's damage" + "\n   " + "Target has dis on their next attack roll till the start of my next turn",
				},
				"disarming attack" : {
					name : "Disarming Attack",
					source : ["HB", 6],
					description : "\n   " + "Use after hitting a creature; I add the superiority die to my attack's damage" + "\n   " + "Target makes a Strength save or drops a held object of my choice to its feet"
				},
				"disorienting attack" : {
					name : "Disorienting Attack",
					source : ["HB", 6],
					description : "\n   " + "Use after hitting a creature; I add the superiority die to my attack's damage" + "\n   " + "Next attack has adv before the start of my next turn."
				},
				"dodge roll" : {
					name : "Dodge Roll",
					source : ["HB", 6],
					description : "\n   " + "Use when hit; Reduce the damage of the attack by the number rolled on the superiority die" + "\n " + "Can then move 10ft without provoking opportunity attacks.",					
					action : ["reaction", ""]
				},
				"intercept" : {
					name : "Intercept",
					source : ["HB", 6],
					description : "\n   " + "Use when an enemy you can see makes a ranges weapon attack; roll an attack if the attack roll is more than that of the other attack the targeted attack misses.",
					action : ["reaction", ""]
				},
				"piercing attack" : {
					name : "Piercing Attack",
					source : ["HB", 6],
					description : "\n   " + "Use after hitting a creature; Extra target takes the superiority dice roll as damage."+ "\n " + "If a target is in a straight tragetory through the creature you shot you can hit them also."
				},
				"precision attack" : {
					name : "Precision Attack",
					source : ["HB", 6],
					description : "\n   " + "I add the superiority die to my attack roll, either before or after rolling"
				},
				"explosive jump" : {
					name : "Explosive Jump",
					source : ["HB", 6],
					description : "\n   " + "Use when you jump; add the number rolled on your superiority die + your Dex mod to the jump's distance (feet)"
				},
				"slinger's luck" : {
					name : "Slinger's Luck",
					source : ["HB", 6],
					description : "\n   " + "I can expend a superiority die to avoid a misfire."
				},
				"tactical retreat" : {
					name : "Tactical Retreat",
					source : ["HB", 6],
					description : "\n   " + "Use when moving; I add the superiority die to my AC until I stop moving"
				},
				"trip attack" : {
					name : "Trip Attack",
					source : ["HB", 6],
					description : "\n   " + "Use after hitting a creature; I add the superiority die to the attack's damage" + "\n   " + "If target is Large or smaller, it must make a Strength save or be knocked prone"
				},
				"warning attack" : {
					name : "Warning Attack",
					source : ["HB", 6],
					description : "\n   " + "When you miss expend a superiority die, the intended target makes a Wis save, on a fail they're frightened till the end of your next turn."
				}
			},
				"subclassfeature9" : {
				name : "Presence of mind",
				source : ["HB", 5],
				minlevel : 9,
				description : "\n " + "You can use one Gun Stunt without using a bonus action." + "\n " + "You gain proficincy in Wisdom saving throws.",
				usages : 1,
				recovery : "short rest",
				saves : ["Wis"]
				},
				"subclassfeature13" : {
				name : "Skilled & Witty",
				source : ["HB", 6],
				minlevel : 13,
				description : "\n " + "You gain proficiency with two skills, tools, or languages of your choice." + "\n " + "Alternatively, you can choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with Tinkers or Smith's tools and gain expertise in those." + "\n " + "You gain advantage on Pursuasion & Intimidation checks when trying to defuse a fight."
				},
				"luckier item" : {
				name : "Luckier Item",
				source : ["HB", 3],
				minlevel : 13,
				description : "\n   " + "Choose another trait from the Lucky Items using the \"Choose Feature\" button above",
				choices : ["Savy", "Eloquent", "Adroit","Sly"],
				"savy" : {
					name : "Savy",
					description : "\n   " + "Choose two skills you are proficient in. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen skills."
					},
				"eloquent": {
					name : "Eloquent",
					description : "\n  " + "You learn two languages of your choosing.",
					languageProfs : [2]
				},
				"adroit" : {
					name : "Adroit",
					description : "\n " + "You learn a tool proficiency of your choosing, or double your proficiency bonus for one tool proficiency.",
					toolProfs : [["Artisan's tools", 1]]
				},
				"sly" : {
					name : "Sly",
					description : "\n " + "You gain one Battlemaster Maneuver and treat it as a Virtuoso Trick."
				},
			},
				"subclassfeature17" : {
				name : "Trick Prodigy",
				source : ["HB", 6],
				minlevel : 17,
				description : "\n " + "When you roll initiative and have no superiority dice remaining, you regain 1 superiority die."
				}
			
	}
}

WeaponsList["lightpistol"] = { 

	regExpSearch : /^light(?=.*pistol).*$/i, 
	
	name : "Light Pistol", 
	
	source : ["HB", 0], 
	
	list : "ranged", 
	
	ability : 2, 
	
	type : "Firearms", // Required; the type of the weapon. Alternatives are "Cantrip", "Martial", "Natural" (= always proficient), "Other", "Spell", or "Improvised Weapons" // Alternatively, you can define a type yourself. If this type matches a word in the 'Other Weapon Proficiencies' field, the character will be considered proficient with the weapon
	
	damage : [1, 6, "piercing"], 
	
	range : "Ranged, 40/120 ft", 
	
	description : "Ammunition, Light, Reload 8, Misfire",
	
	abilitytodamage : true, 
	
	weight : 2, 
	
	ammo : "bullet", // Optional; the type of ammunition the weapon uses. If the weapon uses no ammunition, remove this line. The options are: "arrow", "bolt", "bullet", "dagger", "dart", "flask", "axe", "javelin", "hammer", "needle", "spear", "trident", and "vial" [note the use of only lower case!]  Any ammunition you add yourself can of course be added here as well
	
	}

UpdateDropdown("weapon");


WeaponsList["scattergun"] = { 

	regExpSearch : /^(?=.*scattergun).*$/i, 
	
	name : "Scattergun", 
	
	source : ["HB", 0], 
	
	list : "ranged", 
	
	ability : 2, 
	
	type : "Firearms", // Required; the type of the weapon. Alternatives are "Cantrip", "Martial", "Natural" (= always proficient), "Other", "Spell", or "Improvised Weapons" // Alternatively, you can define a type yourself. If this type matches a word in the 'Other Weapon Proficiencies' field, the character will be considered proficient with the weapon
	
	damage : [2, 4, "bludgeoning"], 
	
	range : "Ranged, 20/40 ft", 
	
	description : "Ammunition, Reload 4, Scatter(1d4), Misfire",
	
	abilitytodamage : true,
	
	weight : 4,
	
	ammo : "bullet", // Optional; the type of ammunition the weapon uses. If the weapon uses no ammunition, remove this line. The options are: "arrow", "bolt", "bullet", "dagger", "dart", "flask", "axe", "javelin", "hammer", "needle", "spear", "trident", and "vial" [note the use of only lower case!]  Any ammunition you add yourself can of course be added here as well
	
	}

UpdateDropdown("weapon");


WeaponsList["lightrifle"] = { 

	regExpSearch : /^light(?=.*rifle).*$/i, 
	
	name : "Light Rifle", 
	
	source : ["HB", 0], 
	
	list : "ranged", 
	
	ability : 2, 
	
	type : "Firearms", // Required; the type of the weapon. Alternatives are "Cantrip", "Martial", "Natural" (= always proficient), "Other", "Spell", or "Improvised Weapons" // Alternatively, you can define a type yourself. If this type matches a word in the 'Other Weapon Proficiencies' field, the character will be considered proficient with the weapon
	
	damage : [1, 10, "piercing"], 
	
	range : "Ranged, 60/200 ft", 
	
	description : "Ammunition, Two-Handed, Reload 6, Misfire",
	
	abilitytodamage : true,
	
	weight : 6,
	
	ammo : "bullet", // Optional; the type of ammunition the weapon uses. If the weapon uses no ammunition, remove this line. The options are: "arrow", "bolt", "bullet", "dagger", "dart", "flask", "axe", "javelin", "hammer", "needle", "spear", "trident", and "vial" [note the use of only lower case!]  Any ammunition you add yourself can of course be added here as well
	
	}

UpdateDropdown("weapon");

WeaponsList["rifle"] = { 

	regExpSearch : /^(?=.*rifle).*$/i, 
	
	name : "Rifle", 
	
	source : ["HB", 0], 
	
	list : "ranged", 
	
	ability : 2, 
	
	type : "Firearms", // Required; the type of the weapon. Alternatives are "Cantrip", "Martial", "Natural" (= always proficient), "Other", "Spell", or "Improvised Weapons" // Alternatively, you can define a type yourself. If this type matches a word in the 'Other Weapon Proficiencies' field, the character will be considered proficient with the weapon
	
	damage : [1, 12, "piercing"], 
	
	range : "Ranged, 90/300 ft", 
	
	description : "Ammunition, Two-Handed, Reload 4, Misfire",
	
	abilitytodamage : true,
	
	weight : 10,
	
	ammo : "bullet", // Optional; the type of ammunition the weapon uses. If the weapon uses no ammunition, remove this line. The options are: "arrow", "bolt", "bullet", "dagger", "dart", "flask", "axe", "javelin", "hammer", "needle", "spear", "trident", and "vial" [note the use of only lower case!]  Any ammunition you add yourself can of course be added here as well
	
	}

UpdateDropdown("weapon");

WeaponsList["heavyrifle"] = { 

	regExpSearch : /^heavy(?=.*rifle).*$/i, 
	
	name : "Heavy Rifle", 
	
	source : ["HB", 0], 
	
	list : "ranged", 
	
	ability : 2, 
	
	type : "Firearms", // Required; the type of the weapon. Alternatives are "Cantrip", "Martial", "Natural" (= always proficient), "Other", "Spell", or "Improvised Weapons" // Alternatively, you can define a type yourself. If this type matches a word in the 'Other Weapon Proficiencies' field, the character will be considered proficient with the weapon
	
	damage : [3, 8, "piercing"], 
	
	range : "Ranged, 200/600 ft", 
	
	description : "Ammunition, Two-Handed, Loading, Heavy, Misfire",
	
	abilitytodamage : true,
	
	weight : 18,
	
	ammo : "bullet", // Optional; the type of ammunition the weapon uses. If the weapon uses no ammunition, remove this line. The options are: "arrow", "bolt", "bullet", "dagger", "dart", "flask", "axe", "javelin", "hammer", "needle", "spear", "trident", and "vial" [note the use of only lower case!]  Any ammunition you add yourself can of course be added here as well
	
	}

UpdateDropdown("weapon");

WeaponsList["pistol"] = { 

	regExpSearch : /^(?=.*pistol).*$/i, 
	
	name : "Pistol", 
	
	source : ["HB", 0], 
	
	list : "ranged", 
	
	ability : 2, 
	
	type : "Firearms", // Required; the type of the weapon. Alternatives are "Cantrip", "Martial", "Natural" (= always proficient), "Other", "Spell", or "Improvised Weapons" // Alternatively, you can define a type yourself. If this type matches a word in the 'Other Weapon Proficiencies' field, the character will be considered proficient with the weapon
	
	damage : [1, 8, "piercing"], 
	
	range : "Ranged, 40/140 ft", 
	
	description : "Ammunition, Reload 8, Misfire",
	
	abilitytodamage : true,
	
	weight : 3,
	
	ammo : "bullet",
	
	}

UpdateDropdown("weapon");


WeaponsList["shotgun"] = { 

	regExpSearch : /^(?=.*shotgun).*$/i, 
	
	name : "Shotgun", 
	
	source : ["HB", 0], 
	
	list : "ranged", 
	
	ability : 2, 
	
	type : "Firearms", // Required; the type of the weapon. Alternatives are "Cantrip", "Martial", "Natural" (= always proficient), "Other", "Spell", or "Improvised Weapons" // Alternatively, you can define a type yourself. If this type matches a word in the 'Other Weapon Proficiencies' field, the character will be considered proficient with the weapon
	
	damage : [1, 12, "bludgeoning"], 
	
	range : "Ranged, 30/60 ft", 
	
	description : "Ammunition, Two-Handed, Reload 6, Scatter(1d6), Misfire",
	
	abilitytodamage : true,
	
	weight : 7,
	
	ammo : "bullet", 
	
	}

UpdateDropdown("weapon");		