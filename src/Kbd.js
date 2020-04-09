
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import KbdEditing from './KbdEditing';
import KbdUI from './KbdUI';

/**
 * The keyboard shortcut feature.
 *
 * Provides a way to semantically mark keyboard shortcuts/hotkeys in the content.
 *
 * This is a "glue" plugin which loads the `KbdEditing` and `KbdUI` plugins.
 *
 * @extends module:core/plugin~Plugin
 */
export default class Kbd extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ KbdEditing, KbdUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'Kbd';
	}
}
