import{describe, expect, it} from 'vitest';
import {mount} from '@vue/test-utils'
import Home from './Home.vue';

// crear una suite
// argumento 1: descripcion de la suite | argumento 2: callback
describe('Home',() => {

    // crear un test. Mismos argumentos que describe
    it('renders the component correctly', () => {

        // poner el componente que se va a montar en una variable 
        const wrapper = mount(Home);

        // comprobar que el h1 existe con lo que viene escrito
        // expect comprobará si el test funciona o no 
        expect(wrapper.find("h2").text()).toBe('Welcome to the Home Page');
    });

});