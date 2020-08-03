import React from 'react';
import PropTypes from 'prop-types'

function Movie({title, src}) { //app.js 에서 프롭스로 가져온다 객체로 구조분해해서
    return(
        <>
         <div className="Box">
             <h1>{title}</h1>
             <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${src}`} alt="img"/>
         </div>
        </>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
}
// yarn add prop-types

export default Movie;