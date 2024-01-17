import styles from "./Section.module.css"
const Section=({title, children})=>{
  return(
    <div className={styles.block}>
<h1>{title}</h1>
<div className={styles.center}>{children}</div>
    </div>
  )
}
export default Section