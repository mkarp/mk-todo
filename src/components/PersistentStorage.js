import EventEmitter from "events"
import { generateCalender } from "../utils/helpers"

class PersistentStorage extends EventEmitter {

  read() {
    const data = JSON.parse(localStorage.getItem("data")) || 
      { 
        showCompleted: false,
        todos: generateCalender() 
      }
    return data
  }

  write(data) {
    localStorage.setItem("data", JSON.stringify(data))
    this.emit('dataChanged')
  }
}

export default PersistentStorage