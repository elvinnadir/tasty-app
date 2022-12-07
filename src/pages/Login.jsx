import React, { useRef } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import CommonSection from '../components/UI/commonSection/CommonSection'
import { Link } from 'react-router-dom'


const Login = () => {
    const LoginNameRef = useRef()
    const LoginPassRef = useRef()

    const submitHandler = (e) => {
        e.preventDefault()
    }
    return (
        <Helmet title="Login">
            <CommonSection title="Login" />

            <section>
                <Container>
                    <Row>
                        <Col lg='6' md='6' sm='12' className='m-auto text-center'>
                            <form action="" className="form mb-5">
                                <div className="form__group">
                                    <input type="email"
                                        placeholder='Email'
                                        required ref={LoginNameRef}
                                        onSubmit={submitHandler}
                                    />
                                </div>
                                <div className="form__group">
                                    <input type="password"
                                        placeholder='Password'
                                        required ref={LoginPassRef}
                                        onSubmit={submitHandler}
                                    />
                                </div>
                                <button type='submit' className="addTOCart__btn">Login</button>
                            </form>
                            <Link to='/register'>Dont have an account? Create account</Link>
                        </Col>
                    </Row>
                </Container>
            </section>

        </Helmet>
    )
}

export default Login;