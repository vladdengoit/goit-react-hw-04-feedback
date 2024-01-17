import styles from "../Section/Section.module.css"
const FeedbackOptions=({props, changeFeedback})=>{
  const elements = props.map((el)=> (<button type="submit" key={el} onClick={()=>changeFeedback(el)} className={styles.center}>{el}</button>))
  return elements
}
export default FeedbackOptions