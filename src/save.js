import { useBlockProps } from '@wordpress/block-editor';

export default function Save() {
	const BlockProps = useBlockProps.save();
	return <h1 {...BlockProps}>Save 1</h1>;
}
