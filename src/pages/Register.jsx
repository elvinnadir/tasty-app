import React, { useRef } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import CommonSection from '../components/UI/commonSection/CommonSection'
import { Link } from 'react-router-dom'


const Register = () => {
  const signupNameRef = useRef()
  const signupPassRef = useRef()
  const signupEmailRef = useRef()

  const submitHandler = (e) => {
    e.preventDefault()
  }
  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />

      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input type="text"
                    placeholder='Full Name'
                    required 
                    ref={signupNameRef}
                  />
                </div>
                <div className="form__group">
                  <input type="email"
                    placeholder='Email'
                    required 
                    ref={signupEmailRef}
                  />
                </div>
                <div className="form__group">
                  <input type="password"
                    placeholder='Password'
                    required 
                    ref={signupPassRef}
                  />
                </div>
                <button type='submit' className="addTOCart__btn">Sign up</button>
              </form>
              <Link to='/login'>Do you have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default Register;