function forEach<T>(items: T[], callback: (param: T) => void) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index])
  }
}

export { forEach }
