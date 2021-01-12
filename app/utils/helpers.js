export function formateDate (timestamp) {
    return new Date(timestamp * 1000)
      .toLocaleDateString("en-US", {
        hour: 'numeric' ,
        minute: 'numeric'
      })
}