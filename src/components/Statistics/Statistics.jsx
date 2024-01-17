const Statistics =({good, netural, bad, total, positive})=>{
  return(
    <>
    <p>Good : {good}</p>
    <p>Neutral: {netural}</p>
    <p>Bad : {bad}</p>
    <p>Total : {total}</p>
    <p>Positive  : {positive} %</p>
    </>
  )
}
export default Statistics