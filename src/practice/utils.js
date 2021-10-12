function checkConsecutive(arr) {
  let result = []
  let i = 0
  result[i] =[arr[0]]
  arr.reduce((previous, current) => {
    current === previous ? result[i].push(current) : result[++i] = [current]
    return current
  })
  if (result.length < 2) return
  for (const [key, value] of Object.entries(result)) {      
    const temp = value.filter(x => x !== null)
    if(temp.length > 4) { 
      console.log(`恭喜 ${temp[0]} 獲勝`)
      return
    }
  }
  
}
// 二維陣列，檢查是否有5連