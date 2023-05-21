import React from 'react';

function Submit({children, ...props}) {
    return(
        <button {...props} className='BtnSubmit'>
            {children}
        </button>
    )
}
export default Submit;