import React from 'react'
import res from '../../assets/res.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            {/* setting a path: */}
            <a href={res} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-prim'>Contact</a>
        </div>
    )
}

export default CTA
