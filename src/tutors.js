import React from 'react';
import Tutor from './tutor';

const Tutors = ({tutors})=>{
    return <section>
        {tutors.map((tutor)=>{
            return <Tutor key={tutor.id} {...tutor} />
        })}
    </section>
}

export default Tutors