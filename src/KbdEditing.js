
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import AttributeCommand from '@ckeditor/ckeditor5-basic-styles/src/attributecommand';

const KBD = 'kbd';

/**
 * The keyboard shortcut (`kbd`) editing feature.
 *
 * It registers the `'kbd'` command, associated keystroke and introduces the
 * `kbd` attribute in the model which renders to the view as a `<kbd>` element.
 *
 * @extends module:core/plugin~Plugin
 */
export default class KbdEditing extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'KbdEditing';
	}

	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;

		// Allow kbd attribute on text nodes.
		editor.model.schema.extend( '$text', { allowAttributes: KBD } );
		editor.model.schema.setAttributeProperties( KBD, {
			isFormatting: true,
			copyOnEnter: true
		} );

		editor.conversion.attributeToElement( {
			model: KBD,
			view: KBD
		} );

		editor.commands.add( KBD, new AttributeCommand( editor, KBD ) );
		editor.keystrokes.set( 'ALT+SHIFT+K', KBD );
	}
}
