import { mount } from '@vue/test-utils';
import FizzBuzzList from '@/components/FizzBuzzList.vue';

describe('FizzBuzzList.vue', () => {
	test('is a Vue instance', () => {
		const wrapper = mount(FizzBuzzList);

		expect(wrapper.isVueInstance()).toBeTruthy();
	});

	test('renders the correct markup when the props are not set', () => {
		const wrapper = mount(FizzBuzzList);

		expect(wrapper.html()).toBe('<ul></ul>');
	});

	test('renders the correct markup when the props are set', () => {
		const items = [
			{ id: 0, val: 'FizzBuzz' },
			{ id: 1, val: 1 },
			{ id: 2, val: 2 }
		];
		const wrapper = mount(FizzBuzzList, {
			propsData: { items: items, error: false }
		});
		expect(wrapper.html()).toBe(
			'<ul><li>FizzBuzz</li><li>1</li><li>2</li></ul>'
		);
	});

	test('renders 1 list items when passed in the items props with the length 1', () => {
		const items = [{ id: 0, val: 'FizzBuzz' }];
		const wrapper = mount(FizzBuzzList, {
			propsData: {
				items: items
			}
		});

		expect(wrapper.html()).toBe('<ul><li>FizzBuzz</li></ul>');
	});

	test('renders 4 list items when passed in the items props with the length 4', () => {
		const items = [
			{ id: 0, val: 'FizzBuzz' },
			{ id: 1, val: '1' },
			{ id: 2, val: '2' },
			{ id: 3, val: 'Fizz' }
		];
		const wrapper = mount(FizzBuzzList, {
			propsData: {
				items: items
			}
		});

		expect(wrapper.html()).toBe(
			'<ul><li>FizzBuzz</li><li>1</li><li>2</li><li>Fizz</li></ul>'
		);
	});

	test('renders 6 list items when passed in the items props with the length 6', () => {
		const items = [
			{ id: 0, val: 'FizzBuzz' },
			{ id: 1, val: '1' },
			{ id: 2, val: '2' },
			{ id: 3, val: 'Fizz' },
			{ id: 4, val: '4' },
			{ id: 5, val: 'Buzz' }
		];
		const wrapper = mount(FizzBuzzList, {
			propsData: {
				items: items
			}
		});

		expect(wrapper.html()).toBe(
			'<ul><li>FizzBuzz</li><li>1</li><li>2</li><li>Fizz</li><li>4</li><li>Buzz</li></ul>'
		);
	});

	test('renders no list when passed in a error message', () => {
		const items = [];
		const error = 'ERROR: error message';
		const wrapper = mount(FizzBuzzList, {
			propsData: {
				items: items,
				error: error
			}
		});

		expect(wrapper.isEmpty()).toBe(true);
	});
});
