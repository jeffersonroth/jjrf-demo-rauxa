import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import sinon from 'sinon'
import Functional from '@/components/Functional.vue'
import mrdoob from '@/assets/mrdoob.json'

var chai = require("chai")
var sinonChai = require("sinon-chai")
const localVue = createLocalVue()

chai.use(sinonChai)
localVue.use(Vuex)

describe('Functional.vue', () => {
  let wrapper
  let store
  let subject

  beforeEach(() => {
    let givenuser = "mrdoob"
    store = new Vuex.Store({
      state: {}
    })
    //wrapper = shallowMount(Functional, { store, localVue })
    //wrapper = shallowMount(Functional, { propsData: mrdoob.data })
    wrapper = shallowMount(Functional, {
      propsData: { givenuser }
    })
    subject = wrapper.vm
    sinon.spy(subject, 'search')
    sinon.spy(subject, 'loadmore')
  })
  
  describe('when the search button is', () => {
    
    it('triggered', (done) => {
      wrapper.find('.search').trigger('click')
      subject.$nextTick(() => {
        expect(subject.search.calledOnce).to.be.true;
        expect(subject.loadmore.calledOnce).to.be.false;
        expect(subject.username).to.be.empty;
        done();
      })
    })
  })

})