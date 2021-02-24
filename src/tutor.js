import React from 'react';

const Tutor = ({id, name, bio, pic}) =>{
    const [ifReadMore, setIfReadMore] = React.useState(false)
    const [readMore, setReadMore] = React.useState(false)
    if(bio.length >= 200){
        setIfReadMore(true)
    }
    return <article className="single-tutor">
        <div className="image_container">
            <img src={pic} alt={name} />
        </div>
        <footer>
            <div>
                <h4>Hi I'm {name}</h4>
                {ifReadMore && <p>{readMore ? bio: `${bio.substring(0,200)}...`}
                    <button onClick={()=>setReadMore(!readMore)}>
                    {readMore ? 'show less': 'read more'}
                    </button>
                </p>}
                {!ifReadMore && <p>
                    {bio}
                </p>}

                <button className="btn">
                    Let's Talk
                </button>
            </div> 
        </footer>
    </article>
}

export default Tutor