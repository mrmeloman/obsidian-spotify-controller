import { Plugin } from 'obsidian'

export default class ExamplePlugin extends Plugin {
	async onload() {
	  this.addRibbonIcon('snowflake', 'Play "Let It Snow!', () => {
		console.log('OOOOOOOOOOOOOOOOOOOOOOOOOH THE WEATHER OUTSIDE IS FRIGHTFUL');
	  });
	}
  }