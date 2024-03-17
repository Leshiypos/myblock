import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';
import './style.scss'; //Подключаем Sass файл для компиляции

registerBlockType('wpdev/myblock', {
	edit: Edit,
	save: Save,
});
