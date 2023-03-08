interface TodoItem {
  uuid: string
  name: string
  isChecked: boolean
}
import React, { useState } from 'react'

export default function useTodoItem() {
  const [todoList, setTodoList] = useState<TodoItem[]>([])

  const addTodoItem = (data: TodoItem) => {
    setTodoList([...todoList, data])
  }
  const toggleTodoChecked = (uuid: string) => {
    setTodoList(
      todoList.map(item => {
        if (item.uuid === uuid) {
          item.isChecked = !item.isChecked
        }
        return item
      })
    )
  }

  const deleteTodo = (uuid: string) => {
    setTodoList(todoList.filter(item => item.uuid !== uuid))
  }

  return { todoList, addTodoItem, toggleTodoChecked, deleteTodo }
}
