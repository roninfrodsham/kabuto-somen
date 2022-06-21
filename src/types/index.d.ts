type HelmetVariantsProps = {
  helmetVariants : {
    hidden : {
      opacity: number
    },
    visible: {
      opacity: number,
      transition: {
        duration?: number,
        type?: string,
        ease?: string,
        when?: string
        delay?: number,
        repeat?: number,
        times?: Array<number>
      }
    }
  }
}

export { HelmetVariantsProps }