import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss'; //Подключаем Sass файл для компиляции

export default function Edit() {
	const BlockProps = useBlockProps();
	return <h1 {...BlockProps}>Edit 4</h1>;
}
