// @flow

type Question = {
  id: string,
  text: string,
  active: boolean
}

export type Questions = {
  questions: Array<Question>
}