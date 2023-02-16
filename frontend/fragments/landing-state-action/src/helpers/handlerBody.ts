import { getPayload } from './handlerPayload'

export const body = (window) => {
  try {
    throw getPayload(window)
  } catch (err) {
    return err.message;
  }
  
  return 'I must return a string'
}
