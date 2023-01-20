import '../create-account/CreateAcc.css';
import { useState } from "react";

import CreateAccFunc from './CreateAcc';
import CreateAccData from './CreateAccData';
function CreateAccApp() {

    const CreateAccArea = CreateAccData.map((product) => {
        return (
            <CreateAccFunc
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
        <div className='Create-account-area'>
            {CreateAccArea}
        </div>
    )
}

export default CreateAccApp