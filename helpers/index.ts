export const removeSlashOrDash = (text: any) => {
  if (typeof text === 'string') {
    let splitter = '/'
    let needToBeSplitted = false
    if (text.includes('/')) {
      splitter = '/'
      needToBeSplitted = true
    }
    if (text.includes('-')) {
      splitter = '-'
      needToBeSplitted = true
    }
    if (!needToBeSplitted) return text
    return text.split(splitter)[0]
  }
  return text
}
