import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
import UserSearchForm from '@/components/VUserSearchForm'
import ElementUI from 'element-ui';

const localVue = createLocalVue()
localVue.use(ElementUI)

describe('VUSerSearchForm', () => {
    const build = () => {
        const options = { localVue }
        const wrapper = shallowMount(UserSearchForm, options)
        const wrapperMounted = mount(UserSearchForm, options)
    
        return {
          wrapper,
          wrapperMounted,
          input: () => wrapper.find('.search-form__input'),
          inputMounted: () => wrapperMounted.find('input'),
          button: () => wrapperMounted.find('button'),
        }
    }

    it('renders the component', () => {
        const { wrapper } = build()
        expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders child components', () => {
        const { input, button } = build()
        
        expect(input().exists()).toBe(true)
        expect(button().exists()).toBe(true)
    })

    it('calls "submitted" even when submitting form', () => {
        const expectedUser = 'haertelR'
        const { wrapperMounted, button, inputMounted } = build()

        inputMounted().element.value = expectedUser

        inputMounted().trigger('input')
        button().trigger('click')
        button().trigger('submit')

        expect(wrapperMounted.emitted().submitted[0]).toEqual([expectedUser])
    })
})