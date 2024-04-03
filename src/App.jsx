import { useState } from 'react'
import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem'
import feedbackData from './components/data/feedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
function App() {
  const [feedback, setFeedback] = useState(feedbackData)

const deleteFeedback = (id) => {
  if(window.confirm('Are you sure you want to delete this?')){
    //feedback.filter(item => item.id === id) отфильтровала бы список из объектов так чтобы там остались лишь объекты с данным id

    //а данный способ отфлиртует список без выбанного id
    setFeedback(feedback.filter(item => item.id !== id))
  }
}

  return (
    <>
    <Header/>
    <div className="container">
      <FeedbackForm />
      <FeedbackStats feedback={feedback} />
    <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>

    </div>
    </>
  )
}

export default App
