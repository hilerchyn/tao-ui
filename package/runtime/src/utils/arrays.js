export withoutNulls(arr) {
  return arr.filter((item) => {
    return item != null
  })
}
