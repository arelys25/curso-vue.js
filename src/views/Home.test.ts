import{describe, expect, it, vi} from 'vitest';
import {mount} from '@vue/test-utils'
import Home from './Home.vue';
import { useUserStore } from '../stores/userStore';

// crear una suite
// argumento 1: descripcion de la suite | argumento 2: callback
describe('Home',() => {

    // crear una store para simular pinia
    vi.mock('../stores/userStore.ts', () => ({
        useUserStore: () => ({
            // simular todos los elementos que retorna useUserStore con datos randoms
            user: 'ASDASD',
            getUser: () => {} // se pone vacia para simular que se hace algo 
        })
    }));
    
    // crear un test. Mismos argumentos que describe
    it('renders the component correctly', () => {

        // poner el componente que se va a montar en una variable 
        const wrapper = mount(Home);

        // comprobar que el h1 existe con lo que viene escrito
        // expect comprobará si el test funciona o no 
        expect(wrapper.find("h2").text()).toBe('Welcome to the Home Page');
    });

    // crear otro test 
    it('Increments counter when button is clicked',async () => {
        // poner el componente que se va a montar en una variable 
        const wrapper = mount(Home);

        //test que verifica que, donde estén los elementos que tiene el id counter, contenga counter: 1 de entrada
        expect(wrapper.find('#counter').text()).toContain('Counter: 1');

        // buscar el elemento y verificar que se haga click  
        await wrapper.find('#counter_btn').trigger('click')
        // verificar que se actualice el valor al hacer click
        expect(wrapper.find('#counter').text()).toContain('Counter: 2');


    });

});