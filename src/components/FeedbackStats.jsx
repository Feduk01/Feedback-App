import PropTypes from 'prop-types'
function FeedbackStats({feedback}){

    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating 
    }, 0) / feedback.length
    return(
        <div className="feedback-stats">
            <h4>Revies: {feedback.length}</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired,
}
export default FeedbackStats