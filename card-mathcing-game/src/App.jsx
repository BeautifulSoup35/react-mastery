import { Global } from '@emotion/react'
import { useState } from 'react'
import { reset } from './styles/reset'
import MainLayout from './MainLayout/MainLayout'
import MainRoutes from './routes/MainRoutes'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Global styles={reset} />
			<MainLayout>
				<MainRoutes/>
			</MainLayout>

		</>
	)
}

export default App
