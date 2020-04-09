
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

import kbdIcon from '../icons/kbd.svg';

const KBD = 'kbd';

/**
 * The keyboard shortcut UI feature. It brings a proper button.
 *
 * @extends module:core/plugin~Plugin
 */
export default class KbdUI extends Plugin {
	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;
		const t = editor.t;

		editor.ui.componentFactory.add( KBD, locale => {
			const command = editor.commands.get( KBD );
			const view = new ButtonView( locale );

			view.set( {
				label: t( 'Keyboard shortcut' ),
				icon: kbdIcon,
				keystroke: 'CTRL+ALT+K',
				tooltip: true,
				isToggleable: true
			} );

			view.bind( 'isOn', 'isEnabled' ).to( command, 'value', 'isEnabled' );

			// Execute command.
			this.listenTo( view, 'execute', () => {
				editor.execute( KBD );
				editor.editing.view.focus();
			} );

			return view;
		} );
	}
}
