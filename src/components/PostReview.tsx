import React from 'react';

const PostReview: React.FC = () => {
    return (
        <>
        <div className='input-field col s6'>
            <h6>
                Что ты думаешь о чипке?
            </h6>
            <input id="post_text" type='text' className='validate'/>
            <a className="waves-effect waves-light btn">Отправить</a>
        </div>
        </>
    )
}

export default PostReview