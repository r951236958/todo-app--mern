import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faGoogle,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

import Button from './Button'
import FormGroup from './FormGroup'
import InputGroup from './InputGroup'
import CheckboxGroup from './CheckboxGroup'

function SimpleLogin() {
  return (
    <div className="w-5/6 px-6 py-6 mx-auto my-12 rounded-sm shadow sm:w-2/3 md:w-1/2">
      <form className="w-full mx-auto text-center">
        <div className="">
          <h2 className="text-3xl font-bold text-gray-800">Welcome back</h2>
          <p className="mt-3 text-gray-800">
            New to Gust?{' '}
            <a href="/" className="text-blue-400">
              Sign up
            </a>
          </p>
        </div>
        <div className="mt-12">
          <FormGroup>
            <InputGroup
              type="email"
              name="email"
              placeholder="Your email address"
            />
          </FormGroup>
          <FormGroup>
            <InputGroup
              type="password"
              name="password"
              placeholder="Your password"
            />
          </FormGroup>
          <FormGroup>
            <Button text="Log In" submit full />
          </FormGroup>
          <div className="text-right">
            <a href="/" className="text-blue-400">
              Forgot your password?
            </a>
          </div>
          <div className="mt-4">
            <p className="text-left text-gray-800">Or login with</p>
            <div className="grid grid-cols-3 gap-6 mt-2 text-2xl text-black">
              <a
                href="/"
                className="flex items-center justify-center block py-3 border border-gray-600 rounded-sm hover:border-blue-400 hover:text-blue-400"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="/"
                className="flex items-center justify-center block py-3 border border-gray-600 rounded-sm hover:border-blue-400 hover:text-blue-400"
              >
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a
                href="/"
                className="flex items-center justify-center block py-3 border border-gray-600 rounded-sm hover:border-blue-400 hover:text-blue-400"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
          <div className="mt-6 border-t border-b border-gray-300">
            <FormGroup>
              <CheckboxGroup
                label="Remember this device"
                name="rememberMe"
                defaultChecked
              />
            </FormGroup>
          </div>
          <p className="mt-6 text-sm text-left">
            By continuing you accept our{' '}
            <a href="/" className="text-blue-400">
              Terms of Use
            </a>{' '}
            and{' '}
            <a href="/" className="text-blue-400">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </form>
    </div>
  )
}

export default SimpleLogin
