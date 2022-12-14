import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare module 'react' {
  interface HTMLAttributes<T> extends AttributifyAttributes { }
}

declare module '@vue/runtime-dom' {
  interface HTMLAttributes extends AttributifyAttributes {}
}