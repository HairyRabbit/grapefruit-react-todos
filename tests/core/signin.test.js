import signin, { actions, types } from 'core/signin'


/// ACTION


/// Form validator

describe('test form valida', () => {
    
    test('should valid failed when mobile field was blank.', (done) => {
	expect(actions.fieldMobileChange('')).toBe({
	    type: types.FieldMobile_Valid_Failed,
	    payload: {
		msg: 'The mobile number was requied',
		value: ''
	    }
	})
    })

    test('should valid failed when mobile field not number.', (done) => {
	expect(actions.fieldMobileChange('foo')).toBe({
	    type: types.FieldMobile_Valid_Failed,
	    payload: {
		msg: 'The mobile number was invalid',
		value: 'foo'
	    }
	})
    })

    test('should valid failed when mobile field number length not 11.', (done) => {
	expect(actions.fieldMobileChange('42')).toBe({
	    type: types.FieldMobile_Valid_Failed,
	    payload: {
		msg: 'The mobile number was invalid',
		value: '42'
	    }
	})
    })

    test('should valid mobile success.', (done) => {
	expect(actions.fieldMobileChange('11122223333')).toBe({
	    type: types.FieldMobile_Valid_Success,
	    payload: {
		msg: null,
		value: '11122223333'
	    }
	})
    })


    test('should valid faild when password was blank', (done) => {
	expect(actions.fieldPasswordChange('')).toBe({
	    type: types.FieldPassword_Valid_Failed,
	    payload: {
		msg: 'Passwword was required',
		value: ''
	    }
	})
    })

    test('should valid password success.', (done) => {
	expect(actions.fieldMobileChange('foo')).toBe({
	    type: types.FieldPassword_Valid_Success,
	    payload: {
		msg: null,
		value: 'foo'
	    }
	})
    })
})


describe('test form submit', (done) => {
    test('should submit form', (done) => {
	expect(actions.formSubmit()).toBe({
	    type: types.Form_Submit
	})
    })

    test('should send request', (done) => {
	expect(actions.signinRequest({
	    mobile: '11122223333',
	    password: 'foo'
	})).toBe({
	    type: types.Signin_Request,
	    payload: {
		mobile: '11122223333',
		password: 'foo'
	    }
	})
    })

    test('shoud receive from server failed', (done) => {
	expect(actions.signinFailed()).toBe({
	    type: types.Signin_Failed,
	    payload: {
		error: true,
		code: '42',
		msg: 'foo',
		value: null
	    }
	})
    })

    test('shoud receive from server success', (done) => {
	expect(actions.signinSuccess()).toBe({
	    type: types.Signin_Success,
	    payload: {
		error: false,
		code: null,
		msg: null,
		value: {
		    token: 'foo'
		}
	    }
	})
    })

    test('shoud store token to LocalStroage', (done) => {
	expect(actions.signinStored()).toBe({
	    type: types.Token_Set
	})
    })
})
