// import App from './App.svelte';
import TestExtension from './Components/TestExtension.svelte'

const app = new TestExtension({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default TestExtension;