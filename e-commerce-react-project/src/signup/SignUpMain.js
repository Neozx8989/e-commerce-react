import '../signup/SingUp.css';
import { useState } from "react";

import SignInData from '../signup/SignIn';
import SignUpFunc from '../signup/sign-up';

function SignUpJs() {

    const SignUpAreaZone = SignInData.map((product) => {
        return (
            <SignUpFunc
                name={product.name}
                firstname={product.firstname}
                email={product.email}
                password={product.password}
                passtitle={product.passtitle}
                button={product.button}
                ask={product.ask}
                login={product.login}
            />
        )
    })

    return (
        <div className='sign-up-area'>
            {SignUpAreaZone}
        </div>
    )
}

export default SignUpJs