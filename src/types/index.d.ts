type MaskVariantsProps = {
  maskVariants : {
    hidden : {
      opacity: number,
      y: number,
    },
    visible: {
      opacity: number,
      y: number,
      transition?: {
        duration?: number,
        type?: string,
        stiffness?: number,
        damping?: number,
        ease?: string,
        when?: string
        delay?: number,
        repeat?: number,
        times?: Array<number>
      },
      default?: {
        duration?: number,
      }
    }
  }
}

export { MaskVariantsProps }