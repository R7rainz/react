import { Provider } from 'react-redux'
import { store } from './app/store'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Todo App</h1>
            <AddTodo />
            <Todos />
          </div>
        </div>
      </div>
    </Provider>
  )
}

export default App



