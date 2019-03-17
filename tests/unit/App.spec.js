import { mount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
	test('is a Vue instance', () => {
		const wrapper = mount(App);
		expect(wrapper.isVueInstance()).toBeTruthy();
	});

	test('renders props.items when passed', () => {
		const items = [{ id: 0, val: 'FizzBuzz' }, { id: 1, val: '1' }];
		const wrapper = mount(App);
		wrapper.setData({ items: items });
		expect(wrapper.vm.items).toBe(items);
	});

	test('renders the correct markup when the props are not set', () => {
		const wrapper = mount(App);

		expect(wrapper.find('input').html()).toBe(
			'<input placeholder="please add a number">'
		);
		expect(wrapper.find('p').html()).toBe('<p>FizzBuzz List of: </p>');
		expect(wrapper.find('ul').html()).toBe('<ul></ul>');
	});

	test('if input value is 0 then the items list will be <ul><li>FizzBuzz</li></ul>', () => {
		const items = [{ id: 0, val: 'FizzBuzz' }];
		const wrapper = mount(App);
		wrapper.setData({ value: '0' });

		expect(wrapper.vm.items.length).toBe(1);
		expect(wrapper.vm.items[0].id).toBe(items[0].id);
		expect(wrapper.vm.items[0].val).toBe(items[0].val);
		expect(wrapper.find('ul').html()).toBe('<ul><li>FizzBuzz</li></ul>');
	});

	test('if input value is 5 then the items list length will 6', () => {
		const items = [
			{ id: 0, val: 'FizzBuzz' },
			{ id: 1, val: 1 },
			{ id: 2, val: 2 },
			{ id: 3, val: 'Fizz' },
			{ id: 4, val: 4 },
			{ id: 5, val: 'Buzz' }
		];
		const wrapper = mount(App);
		wrapper.setData({ value: '5' });

		expect(wrapper.vm.items.length).toBe(6);
		expect(wrapper.vm.items[0].id).toBe(items[0].id);
		expect(wrapper.vm.items[0].val).toBe(items[0].val);
		expect(wrapper.vm.items[1].id).toBe(items[1].id);
		expect(wrapper.vm.items[1].val).toBe(items[1].val);
		expect(wrapper.vm.items[2].id).toBe(items[2].id);
		expect(wrapper.vm.items[2].val).toBe(items[2].val);
		expect(wrapper.vm.items[3].id).toBe(items[3].id);
		expect(wrapper.vm.items[3].val).toBe(items[3].val);
		expect(wrapper.vm.items[4].id).toBe(items[4].id);
		expect(wrapper.vm.items[4].val).toBe(items[4].val);
		expect(wrapper.vm.items[5].id).toBe(items[5].id);
		expect(wrapper.vm.items[5].val).toBe(items[5].val);
		expect(wrapper.find('ul').html()).toBe(
			'<ul><li>FizzBuzz</li><li>1</li><li>2</li><li>Fizz</li><li>4</li><li>Buzz</li></ul>'
		);
	});

	test('if input value is not a number then there will be a error', () => {
		const wrapper = mount(App);
		wrapper.setData({ value: 'aasdf' });

		expect(wrapper.vm.items.length).toBe(0);
		expect(wrapper.vm.error).toBe(
			'Error: Wrong Input value. The Input value must be a Number!'
		);
		expect(wrapper.find('p').text()).toBe(
			'Error: Wrong Input value. The Input value must be a Number!'
		);
	});

	test('if input value is empty then there will be a warning', () => {
		const wrapper = mount(App);
		wrapper.setData({ value: 'aasdf' });
		wrapper.setData({ value: '' });

		expect(wrapper.vm.items.length).toBe(0);
		expect(wrapper.vm.error).toBe(
			'Warning: Input Field is empty. Please add a Number!'
		);
		expect(wrapper.find('p').text()).toBe(
			'Warning: Input Field is empty. Please add a Number!'
		);
	});

	test('if input value (999999) is to big  then there will be a warning', () => {
		const wrapper = mount(App);
		wrapper.setData({ value: '999999' });

		expect(wrapper.vm.items.length).toBe(0);
		expect(wrapper.vm.error).toBe(
			'Warning: Number is to big. Please try a smaller Number!'
		);
		expect(wrapper.find('p').text()).toBe(
			'Warning: Number is to big. Please try a smaller Number!'
		);
	});

	test('if input value is a negative number then there will be a warning', () => {
		const wrapper = mount(App);
		wrapper.setData({ value: '-1' });

		expect(wrapper.vm.items.length).toBe(0);
		expect(wrapper.vm.error).toBe(
			'Warning: Number is negative. Please try a positive Number!'
		);
		expect(wrapper.find('p').text()).toBe(
			'Warning: Number is negative. Please try a positive Number!'
		);
	});
});
